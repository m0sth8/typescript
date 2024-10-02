"use client";

import { registerPasskeyLink, verifyPasskey } from "@/lib/server/passkeys";
import { coerceToArrayBuffer, coerceToBase64Url } from "@/utils/base64";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { useForm } from "react-hook-form";
import Alert from "./Alert";
import BackButton from "./BackButton";
import { Button, ButtonVariants } from "./Button";
import { Spinner } from "./Spinner";

type Inputs = {};

type Props = {
  sessionId: string;
  isPrompt: boolean;
  authRequestId?: string;
  organization?: string;
};

export default function RegisterPasskey({
  sessionId,
  isPrompt,
  organization,
  authRequestId,
}: Props) {
  const { handleSubmit, formState } = useForm<Inputs>({
    mode: "onBlur",
  });

  const [error, setError] = useState<string>("");

  const [loading, setLoading] = useState<boolean>(false);

  const router = useRouter();

  async function submitVerify(
    passkeyId: string,
    passkeyName: string,
    publicKeyCredential: any,
    sessionId: string,
  ) {
    setLoading(true);
    const response = await verifyPasskey({
      passkeyId,
      passkeyName,
      publicKeyCredential,
      sessionId,
    }).catch(() => {
      setError("Could not verify Passkey");
    });

    setLoading(false);
    return response;
  }

  async function submitRegisterAndContinue(): Promise<boolean | void> {
    setLoading(true);
    const resp = await registerPasskeyLink({
      sessionId,
    }).catch(() => {
      setError("Could not register passkey");
    });
    setLoading(false);

    if (!resp) {
      setError("An error on registering passkey");
      return;
    }

    const passkeyId = resp.passkeyId;
    const options: CredentialCreationOptions =
      (resp.publicKeyCredentialCreationOptions as CredentialCreationOptions) ??
      {};

    if (!options.publicKey) {
      setError("An error on registering passkey");
      return;
    }
    options.publicKey.challenge = coerceToArrayBuffer(
      options.publicKey.challenge,
      "challenge",
    );
    options.publicKey.user.id = coerceToArrayBuffer(
      options.publicKey.user.id,
      "userid",
    );
    if (options.publicKey.excludeCredentials) {
      options.publicKey.excludeCredentials.map((cred: any) => {
        cred.id = coerceToArrayBuffer(
          cred.id as string,
          "excludeCredentials.id",
        );
        return cred;
      });
    }

    const credentials = await navigator.credentials.create(options);

    if (
      !credentials ||
      !(credentials as any).response?.attestationObject ||
      !(credentials as any).response?.clientDataJSON ||
      !(credentials as any).rawId
    ) {
      setError("An error on registering passkey");
      return;
    }

    const attestationObject = (credentials as any).response.attestationObject;
    const clientDataJSON = (credentials as any).response.clientDataJSON;
    const rawId = (credentials as any).rawId;

    const data = {
      id: credentials.id,
      rawId: coerceToBase64Url(rawId, "rawId"),
      type: credentials.type,
      response: {
        attestationObject: coerceToBase64Url(
          attestationObject,
          "attestationObject",
        ),
        clientDataJSON: coerceToBase64Url(clientDataJSON, "clientDataJSON"),
      },
    };

    const verificationResponse = await submitVerify(
      passkeyId,
      "",
      data,
      sessionId,
    );

    if (!verificationResponse) {
      setError("Could not verify Passkey!");
      return;
    }

    continueAndLogin();
  }

  function continueAndLogin() {
    const params = new URLSearchParams();

    if (organization) {
      params.set("organization", organization);
    }

    if (authRequestId) {
      params.set("authRequestId", authRequestId);
    }

    params.set("sessionId", sessionId);

    router.push("/passkey?" + params);
  }

  return (
    <form className="w-full">
      {error && (
        <div className="py-4">
          <Alert>{error}</Alert>
        </div>
      )}

      <div className="mt-8 flex w-full flex-row items-center">
        {isPrompt ? (
          <Button
            type="button"
            variant={ButtonVariants.Secondary}
            onClick={() => {
              continueAndLogin();
            }}
          >
            skip
          </Button>
        ) : (
          <BackButton />
        )}

        <span className="flex-grow"></span>
        <Button
          type="submit"
          className="self-end"
          variant={ButtonVariants.Primary}
          disabled={loading || !formState.isValid}
          onClick={handleSubmit(submitRegisterAndContinue)}
        >
          {loading && <Spinner className="h-5 w-5 mr-2" />}
          continue
        </Button>
      </div>
    </form>
  );
}
