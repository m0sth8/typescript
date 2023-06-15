import {
  createPasskeyRegistrationLink,
  getSession,
  registerPasskey,
  server,
} from "#/lib/zitadel";
import { getSessionCookieById } from "#/utils/cookies";
import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  const body = await request.json();
  if (body) {
    const { sessionId } = body;

    const sessionCookie = await getSessionCookieById(sessionId);

    const session = await getSession(
      server,
      sessionCookie.id,
      sessionCookie.token
    );

    const userId = session?.session?.factors?.user?.id;

    if (userId) {
      return createPasskeyRegistrationLink(userId)
        .then((resp) => {
          const code = resp.code;
          console.log("code", code);
          return registerPasskey(userId, code).then((resp) => {
            return NextResponse.json(resp);
          });
        })
        .catch((error) => {
          console.log("error on creating passkey registration link");
          return NextResponse.json(error, { status: 500 });
        });
    } else {
      return NextResponse.json(
        { details: "could not get session" },
        { status: 500 }
      );
    }
  } else {
    return NextResponse.json({}, { status: 400 });
  }
}
