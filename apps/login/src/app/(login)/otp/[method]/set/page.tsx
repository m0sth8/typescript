import { loadMostRecentSession } from "@/lib/session";
import {
  addOTPEmail,
  addOTPSMS,
  getBrandingSettings,
  registerTOTP,
} from "@/lib/zitadel";
import Alert from "@/ui/Alert";
import BackButton from "@/ui/BackButton";
import { Button, ButtonVariants } from "@/ui/Button";
import DynamicTheme from "@/ui/DynamicTheme";
import TOTPRegister from "@/ui/TOTPRegister";
import UserAvatar from "@/ui/UserAvatar";
import { RegisterTOTPResponse } from "@zitadel/proto/zitadel/user/v2/user_service_pb";
import Link from "next/link";
import { redirect } from "next/navigation";

export default async function Page({
  searchParams,
  params,
}: {
  searchParams: Record<string | number | symbol, string | undefined>;
  params: Record<string | number | symbol, string | undefined>;
}) {
  const { loginName, organization, sessionId, authRequestId, checkAfter } =
    searchParams;
  const { method } = params;

  const branding = await getBrandingSettings(organization);
  const session = await loadMostRecentSession({
    loginName,
    organization,
  });

  let totpResponse: RegisterTOTPResponse | undefined, error: Error | undefined;
  if (session && session.factors?.user?.id) {
    if (method === "time-based") {
      await registerTOTP(session.factors.user.id)
        .then((resp) => {
          if (resp) {
            totpResponse = resp;
          }
        })
        .catch((err) => {
          error = err;
        });
    } else if (method === "sms") {
      // does not work
      await addOTPSMS(session.factors.user.id).catch((error) => {
        error = new Error("Could not add OTP via SMS");
      });
    } else if (method === "email") {
      // works
      await addOTPEmail(session.factors.user.id).catch((error) => {
        error = new Error("Could not add OTP via Email");
      });
    } else {
      throw new Error("Invalid method");
    }
  } else {
    throw new Error("No session found");
  }

  const paramsToContinue = new URLSearchParams({});
  let urlToContinue = "/accounts";

  if (sessionId) {
    paramsToContinue.append("sessionId", sessionId);
  }
  if (loginName) {
    paramsToContinue.append("loginName", loginName);
  }
  if (organization) {
    paramsToContinue.append("organization", organization);
  }

  if (checkAfter) {
    if (authRequestId) {
      paramsToContinue.append("authRequestId", authRequestId);
    }
    urlToContinue = `/otp/${method}?` + paramsToContinue;
    // immediately check the OTP on the next page if sms or email was set up
    if (["email", "sms"].includes(method)) {
      return redirect(urlToContinue);
    }
  } else if (authRequestId && sessionId) {
    if (authRequestId) {
      paramsToContinue.append("authRequest", authRequestId);
    }
    urlToContinue = `/login?` + paramsToContinue;
  } else if (loginName) {
    if (authRequestId) {
      paramsToContinue.append("authRequestId", authRequestId);
    }
    urlToContinue = `/signedin?` + paramsToContinue;
  }

  return (
    <DynamicTheme branding={branding}>
      <div className="flex flex-col items-center space-y-4">
        <h1>Register 2-factor</h1>
        {!session && (
          <div className="py-4">
            <Alert>
              Could not get the context of the user. Make sure to enter the
              username first or provide a loginName as searchParam.
            </Alert>
          </div>
        )}

        {error && (
          <div className="py-4">
            <Alert>{error?.message}</Alert>
          </div>
        )}

        {session && (
          <UserAvatar
            loginName={loginName ?? session.factors?.user?.loginName}
            displayName={session.factors?.user?.displayName}
            showDropdown
            searchParams={searchParams}
          ></UserAvatar>
        )}

        {totpResponse && "uri" in totpResponse && "secret" in totpResponse ? (
          <>
            <p className="ztdl-p">
              Scan the QR Code or navigate to the URL manually.
            </p>
            <div>
              <TOTPRegister
                uri={totpResponse.uri as string}
                secret={totpResponse.secret as string}
                loginName={loginName}
                sessionId={sessionId}
                authRequestId={authRequestId}
                organization={organization}
                checkAfter={checkAfter === "true"}
              ></TOTPRegister>
            </div>{" "}
          </>
        ) : (
          <>
            <p className="ztdl-p">
              {method === "email"
                ? "Code via email was successfully added."
                : method === "sms"
                  ? "Code via SMS was successfully added."
                  : ""}
            </p>

            <div className="mt-8 flex w-full flex-row items-center">
              <BackButton />
              <span className="flex-grow"></span>

              <Link href={urlToContinue}>
                <Button
                  type="submit"
                  className="self-end"
                  variant={ButtonVariants.Primary}
                >
                  continue
                </Button>
              </Link>
            </div>
          </>
        )}
      </div>
    </DynamicTheme>
  );
}
