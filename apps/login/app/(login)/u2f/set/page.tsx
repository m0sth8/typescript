import {
  addOTPEmail,
  addOTPSMS,
  getBrandingSettings,
  getSession,
  registerTOTP,
  server,
} from "#/lib/zitadel";
import DynamicTheme from "#/ui/DynamicTheme";
import TOTPRegister from "#/ui/TOTPRegister";
import { getMostRecentCookieWithLoginname } from "#/utils/cookies";

export default async function Page({
  searchParams,
  params,
}: {
  searchParams: Record<string | number | symbol, string | undefined>;
  params: Record<string | number | symbol, string | undefined>;
}) {
  const { loginName, organization } = searchParams;

  const branding = await getBrandingSettings(server, organization);

  const totpResponse = await loadSession(loginName, organization).then();

  async function loadSession(loginName?: string, organization?: string) {
    const recent = await getMostRecentCookieWithLoginname(
      loginName,
      organization
    );

    return getSession(server, recent.id, recent.token).then((response) => {
      return { session: response?.session, token: recent.token };
    });
  }

  return (
    <DynamicTheme branding={branding}>
      <div className="flex flex-col items-center space-y-4">
        <h1>Register Device</h1>
        <p className="ztdl-p">
          Choose a device to register for 2-Factor Authentication.
        </p>

        <div>
          {/* {auth && <div>{auth.to}</div>} */}
          {totpResponse &&
            "uri" in totpResponse &&
            "secret" in totpResponse && (
              <TOTPRegister
                uri={totpResponse.uri as string}
                secret={totpResponse.secret as string}
              ></TOTPRegister>
            )}
        </div>
      </div>
    </DynamicTheme>
  );
}
