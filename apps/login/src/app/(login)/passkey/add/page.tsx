import { getBrandingSettings, sessionService } from "@/lib/zitadel";
import Alert, { AlertType } from "@/ui/Alert";
import DynamicTheme from "@/ui/DynamicTheme";
import RegisterPasskey from "@/ui/RegisterPasskey";
import UserAvatar from "@/ui/UserAvatar";
import { loadMostRecentSession } from "@zitadel/next";
import { headers } from "next/headers";

export default async function Page({
  searchParams,
}: {
  searchParams: Record<string | number | symbol, string | undefined>;
}) {
  const host = headers().get("host");
  if (!host) {
    throw new Error("No host header found!");
  }

  const { loginName, promptPasswordless, organization, authRequestId } =
    searchParams;

  const session = await loadMostRecentSession(sessionService, {
    loginName,
    organization,
  });

  const title = !!promptPasswordless
    ? "Authenticate with a passkey"
    : "Use your passkey to confirm it's really you";
  const description = !!promptPasswordless
    ? "When set up, you will be able to authenticate without a password."
    : "Your device will ask for your fingerprint, face, or screen lock";

  const branding = await getBrandingSettings(host, organization);

  return (
    <DynamicTheme branding={branding}>
      <div className="flex flex-col items-center space-y-4">
        <h1>{title}</h1>

        {session && (
          <UserAvatar
            loginName={loginName ?? session.factors?.user?.loginName}
            displayName={session.factors?.user?.displayName}
            showDropdown
            searchParams={searchParams}
          ></UserAvatar>
        )}
        <p className="ztdl-p mb-6 block">{description}</p>

        <Alert type={AlertType.INFO}>
          <span>
            A passkey is an authentication method on a device like your
            fingerprint, Apple FaceID or similar.
            <a
              className="text-primary-light-500 dark:text-primary-dark-500 hover:text-primary-light-300 hover:dark:text-primary-dark-300"
              target="_blank"
              href="https://zitadel.com/docs/guides/manage/user/reg-create-user#with-passwordless"
            >
              Passwordless Authentication
            </a>
          </span>
        </Alert>

        {!session && (
          <div className="py-4">
            <Alert>
              Could not get the context of the user. Make sure to enter the
              username first or provide a loginName as searchParam.
            </Alert>
          </div>
        )}

        {session?.id && (
          <RegisterPasskey
            sessionId={session.id}
            isPrompt={!!promptPasswordless}
            organization={organization}
            authRequestId={authRequestId}
          />
        )}
      </div>
    </DynamicTheme>
  );
}
