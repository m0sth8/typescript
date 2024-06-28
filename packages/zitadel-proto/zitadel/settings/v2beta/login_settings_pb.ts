// @generated by protoc-gen-es v1.10.0 with parameter "target=ts"
// @generated from file zitadel/settings/v2beta/login_settings.proto (package zitadel.settings.v2beta, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import type { BinaryReadOptions, FieldList, JsonReadOptions, JsonValue, PartialMessage, PlainMessage } from "@bufbuild/protobuf";
import { Duration, Message, proto3 } from "@bufbuild/protobuf";
import { ResourceOwnerType } from "./settings_pb.js";

/**
 * @generated from enum zitadel.settings.v2beta.SecondFactorType
 */
export enum SecondFactorType {
  /**
   * @generated from enum value: SECOND_FACTOR_TYPE_UNSPECIFIED = 0;
   */
  UNSPECIFIED = 0,

  /**
   * This is the type for TOTP
   *
   * @generated from enum value: SECOND_FACTOR_TYPE_OTP = 1;
   */
  OTP = 1,

  /**
   * @generated from enum value: SECOND_FACTOR_TYPE_U2F = 2;
   */
  U2F = 2,

  /**
   * @generated from enum value: SECOND_FACTOR_TYPE_OTP_EMAIL = 3;
   */
  OTP_EMAIL = 3,

  /**
   * @generated from enum value: SECOND_FACTOR_TYPE_OTP_SMS = 4;
   */
  OTP_SMS = 4,
}
// Retrieve enum metadata with: proto3.getEnumType(SecondFactorType)
proto3.util.setEnumType(SecondFactorType, "zitadel.settings.v2beta.SecondFactorType", [
  { no: 0, name: "SECOND_FACTOR_TYPE_UNSPECIFIED" },
  { no: 1, name: "SECOND_FACTOR_TYPE_OTP" },
  { no: 2, name: "SECOND_FACTOR_TYPE_U2F" },
  { no: 3, name: "SECOND_FACTOR_TYPE_OTP_EMAIL" },
  { no: 4, name: "SECOND_FACTOR_TYPE_OTP_SMS" },
]);

/**
 * @generated from enum zitadel.settings.v2beta.MultiFactorType
 */
export enum MultiFactorType {
  /**
   * @generated from enum value: MULTI_FACTOR_TYPE_UNSPECIFIED = 0;
   */
  UNSPECIFIED = 0,

  /**
   * @generated from enum value: MULTI_FACTOR_TYPE_U2F_WITH_VERIFICATION = 1;
   */
  U2F_WITH_VERIFICATION = 1,
}
// Retrieve enum metadata with: proto3.getEnumType(MultiFactorType)
proto3.util.setEnumType(MultiFactorType, "zitadel.settings.v2beta.MultiFactorType", [
  { no: 0, name: "MULTI_FACTOR_TYPE_UNSPECIFIED" },
  { no: 1, name: "MULTI_FACTOR_TYPE_U2F_WITH_VERIFICATION" },
]);

/**
 * @generated from enum zitadel.settings.v2beta.PasskeysType
 */
export enum PasskeysType {
  /**
   * @generated from enum value: PASSKEYS_TYPE_NOT_ALLOWED = 0;
   */
  NOT_ALLOWED = 0,

  /**
   * @generated from enum value: PASSKEYS_TYPE_ALLOWED = 1;
   */
  ALLOWED = 1,
}
// Retrieve enum metadata with: proto3.getEnumType(PasskeysType)
proto3.util.setEnumType(PasskeysType, "zitadel.settings.v2beta.PasskeysType", [
  { no: 0, name: "PASSKEYS_TYPE_NOT_ALLOWED" },
  { no: 1, name: "PASSKEYS_TYPE_ALLOWED" },
]);

/**
 * @generated from enum zitadel.settings.v2beta.IdentityProviderType
 */
export enum IdentityProviderType {
  /**
   * @generated from enum value: IDENTITY_PROVIDER_TYPE_UNSPECIFIED = 0;
   */
  UNSPECIFIED = 0,

  /**
   * @generated from enum value: IDENTITY_PROVIDER_TYPE_OIDC = 1;
   */
  OIDC = 1,

  /**
   * @generated from enum value: IDENTITY_PROVIDER_TYPE_JWT = 2;
   */
  JWT = 2,

  /**
   * @generated from enum value: IDENTITY_PROVIDER_TYPE_LDAP = 3;
   */
  LDAP = 3,

  /**
   * @generated from enum value: IDENTITY_PROVIDER_TYPE_OAUTH = 4;
   */
  OAUTH = 4,

  /**
   * @generated from enum value: IDENTITY_PROVIDER_TYPE_AZURE_AD = 5;
   */
  AZURE_AD = 5,

  /**
   * @generated from enum value: IDENTITY_PROVIDER_TYPE_GITHUB = 6;
   */
  GITHUB = 6,

  /**
   * @generated from enum value: IDENTITY_PROVIDER_TYPE_GITHUB_ES = 7;
   */
  GITHUB_ES = 7,

  /**
   * @generated from enum value: IDENTITY_PROVIDER_TYPE_GITLAB = 8;
   */
  GITLAB = 8,

  /**
   * @generated from enum value: IDENTITY_PROVIDER_TYPE_GITLAB_SELF_HOSTED = 9;
   */
  GITLAB_SELF_HOSTED = 9,

  /**
   * @generated from enum value: IDENTITY_PROVIDER_TYPE_GOOGLE = 10;
   */
  GOOGLE = 10,
}
// Retrieve enum metadata with: proto3.getEnumType(IdentityProviderType)
proto3.util.setEnumType(IdentityProviderType, "zitadel.settings.v2beta.IdentityProviderType", [
  { no: 0, name: "IDENTITY_PROVIDER_TYPE_UNSPECIFIED" },
  { no: 1, name: "IDENTITY_PROVIDER_TYPE_OIDC" },
  { no: 2, name: "IDENTITY_PROVIDER_TYPE_JWT" },
  { no: 3, name: "IDENTITY_PROVIDER_TYPE_LDAP" },
  { no: 4, name: "IDENTITY_PROVIDER_TYPE_OAUTH" },
  { no: 5, name: "IDENTITY_PROVIDER_TYPE_AZURE_AD" },
  { no: 6, name: "IDENTITY_PROVIDER_TYPE_GITHUB" },
  { no: 7, name: "IDENTITY_PROVIDER_TYPE_GITHUB_ES" },
  { no: 8, name: "IDENTITY_PROVIDER_TYPE_GITLAB" },
  { no: 9, name: "IDENTITY_PROVIDER_TYPE_GITLAB_SELF_HOSTED" },
  { no: 10, name: "IDENTITY_PROVIDER_TYPE_GOOGLE" },
]);

/**
 * @generated from message zitadel.settings.v2beta.LoginSettings
 */
export class LoginSettings extends Message<LoginSettings> {
  /**
   * @generated from field: bool allow_username_password = 1;
   */
  allowUsernamePassword = false;

  /**
   * @generated from field: bool allow_register = 2;
   */
  allowRegister = false;

  /**
   * @generated from field: bool allow_external_idp = 3;
   */
  allowExternalIdp = false;

  /**
   * @generated from field: bool force_mfa = 4;
   */
  forceMfa = false;

  /**
   * @generated from field: zitadel.settings.v2beta.PasskeysType passkeys_type = 5;
   */
  passkeysType = PasskeysType.NOT_ALLOWED;

  /**
   * @generated from field: bool hide_password_reset = 6;
   */
  hidePasswordReset = false;

  /**
   * @generated from field: bool ignore_unknown_usernames = 7;
   */
  ignoreUnknownUsernames = false;

  /**
   * @generated from field: string default_redirect_uri = 8;
   */
  defaultRedirectUri = "";

  /**
   * @generated from field: google.protobuf.Duration password_check_lifetime = 9;
   */
  passwordCheckLifetime?: Duration;

  /**
   * @generated from field: google.protobuf.Duration external_login_check_lifetime = 10;
   */
  externalLoginCheckLifetime?: Duration;

  /**
   * @generated from field: google.protobuf.Duration mfa_init_skip_lifetime = 11;
   */
  mfaInitSkipLifetime?: Duration;

  /**
   * @generated from field: google.protobuf.Duration second_factor_check_lifetime = 12;
   */
  secondFactorCheckLifetime?: Duration;

  /**
   * @generated from field: google.protobuf.Duration multi_factor_check_lifetime = 13;
   */
  multiFactorCheckLifetime?: Duration;

  /**
   * @generated from field: repeated zitadel.settings.v2beta.SecondFactorType second_factors = 14;
   */
  secondFactors: SecondFactorType[] = [];

  /**
   * @generated from field: repeated zitadel.settings.v2beta.MultiFactorType multi_factors = 15;
   */
  multiFactors: MultiFactorType[] = [];

  /**
   * If set to true, the suffix (@domain.com) of an unknown username input on the login screen will be matched against the org domains and will redirect to the registration of that organization on success.
   *
   * @generated from field: bool allow_domain_discovery = 16;
   */
  allowDomainDiscovery = false;

  /**
   * @generated from field: bool disable_login_with_email = 17;
   */
  disableLoginWithEmail = false;

  /**
   * @generated from field: bool disable_login_with_phone = 18;
   */
  disableLoginWithPhone = false;

  /**
   * resource_owner_type returns if the settings is managed on the organization or on the instance
   *
   * @generated from field: zitadel.settings.v2beta.ResourceOwnerType resource_owner_type = 19;
   */
  resourceOwnerType = ResourceOwnerType.UNSPECIFIED;

  /**
   * @generated from field: bool force_mfa_local_only = 22;
   */
  forceMfaLocalOnly = false;

  constructor(data?: PartialMessage<LoginSettings>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "zitadel.settings.v2beta.LoginSettings";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "allow_username_password", kind: "scalar", T: 8 /* ScalarType.BOOL */ },
    { no: 2, name: "allow_register", kind: "scalar", T: 8 /* ScalarType.BOOL */ },
    { no: 3, name: "allow_external_idp", kind: "scalar", T: 8 /* ScalarType.BOOL */ },
    { no: 4, name: "force_mfa", kind: "scalar", T: 8 /* ScalarType.BOOL */ },
    { no: 5, name: "passkeys_type", kind: "enum", T: proto3.getEnumType(PasskeysType) },
    { no: 6, name: "hide_password_reset", kind: "scalar", T: 8 /* ScalarType.BOOL */ },
    { no: 7, name: "ignore_unknown_usernames", kind: "scalar", T: 8 /* ScalarType.BOOL */ },
    { no: 8, name: "default_redirect_uri", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 9, name: "password_check_lifetime", kind: "message", T: Duration },
    { no: 10, name: "external_login_check_lifetime", kind: "message", T: Duration },
    { no: 11, name: "mfa_init_skip_lifetime", kind: "message", T: Duration },
    { no: 12, name: "second_factor_check_lifetime", kind: "message", T: Duration },
    { no: 13, name: "multi_factor_check_lifetime", kind: "message", T: Duration },
    { no: 14, name: "second_factors", kind: "enum", T: proto3.getEnumType(SecondFactorType), repeated: true },
    { no: 15, name: "multi_factors", kind: "enum", T: proto3.getEnumType(MultiFactorType), repeated: true },
    { no: 16, name: "allow_domain_discovery", kind: "scalar", T: 8 /* ScalarType.BOOL */ },
    { no: 17, name: "disable_login_with_email", kind: "scalar", T: 8 /* ScalarType.BOOL */ },
    { no: 18, name: "disable_login_with_phone", kind: "scalar", T: 8 /* ScalarType.BOOL */ },
    { no: 19, name: "resource_owner_type", kind: "enum", T: proto3.getEnumType(ResourceOwnerType) },
    { no: 22, name: "force_mfa_local_only", kind: "scalar", T: 8 /* ScalarType.BOOL */ },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): LoginSettings {
    return new LoginSettings().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): LoginSettings {
    return new LoginSettings().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): LoginSettings {
    return new LoginSettings().fromJsonString(jsonString, options);
  }

  static equals(a: LoginSettings | PlainMessage<LoginSettings> | undefined, b: LoginSettings | PlainMessage<LoginSettings> | undefined): boolean {
    return proto3.util.equals(LoginSettings, a, b);
  }
}

/**
 * @generated from message zitadel.settings.v2beta.IdentityProvider
 */
export class IdentityProvider extends Message<IdentityProvider> {
  /**
   * @generated from field: string id = 1;
   */
  id = "";

  /**
   * @generated from field: string name = 2;
   */
  name = "";

  /**
   * @generated from field: zitadel.settings.v2beta.IdentityProviderType type = 3;
   */
  type = IdentityProviderType.UNSPECIFIED;

  constructor(data?: PartialMessage<IdentityProvider>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "zitadel.settings.v2beta.IdentityProvider";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "id", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "name", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 3, name: "type", kind: "enum", T: proto3.getEnumType(IdentityProviderType) },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): IdentityProvider {
    return new IdentityProvider().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): IdentityProvider {
    return new IdentityProvider().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): IdentityProvider {
    return new IdentityProvider().fromJsonString(jsonString, options);
  }

  static equals(a: IdentityProvider | PlainMessage<IdentityProvider> | undefined, b: IdentityProvider | PlainMessage<IdentityProvider> | undefined): boolean {
    return proto3.util.equals(IdentityProvider, a, b);
  }
}

