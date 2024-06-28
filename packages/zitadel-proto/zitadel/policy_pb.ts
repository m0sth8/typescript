// @generated by protoc-gen-es v1.10.0 with parameter "target=ts"
// @generated from file zitadel/policy.proto (package zitadel.policy.v1, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import type { BinaryReadOptions, FieldList, JsonReadOptions, JsonValue, PartialMessage, PlainMessage } from "@bufbuild/protobuf";
import { Duration, Message, proto3, protoInt64 } from "@bufbuild/protobuf";
import { ObjectDetails } from "./object_pb.js";
import { IDPLoginPolicyLink } from "./idp_pb.js";

/**
 * @generated from enum zitadel.policy.v1.ThemeMode
 */
export enum ThemeMode {
  /**
   * @generated from enum value: THEME_MODE_UNSPECIFIED = 0;
   */
  UNSPECIFIED = 0,

  /**
   * @generated from enum value: THEME_MODE_AUTO = 1;
   */
  AUTO = 1,

  /**
   * @generated from enum value: THEME_MODE_DARK = 2;
   */
  DARK = 2,

  /**
   * @generated from enum value: THEME_MODE_LIGHT = 3;
   */
  LIGHT = 3,
}
// Retrieve enum metadata with: proto3.getEnumType(ThemeMode)
proto3.util.setEnumType(ThemeMode, "zitadel.policy.v1.ThemeMode", [
  { no: 0, name: "THEME_MODE_UNSPECIFIED" },
  { no: 1, name: "THEME_MODE_AUTO" },
  { no: 2, name: "THEME_MODE_DARK" },
  { no: 3, name: "THEME_MODE_LIGHT" },
]);

/**
 * @generated from enum zitadel.policy.v1.SecondFactorType
 */
export enum SecondFactorType {
  /**
   * @generated from enum value: SECOND_FACTOR_TYPE_UNSPECIFIED = 0;
   */
  UNSPECIFIED = 0,

  /**
   * SECOND_FACTOR_TYPE_OTP is the type for TOTP
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
proto3.util.setEnumType(SecondFactorType, "zitadel.policy.v1.SecondFactorType", [
  { no: 0, name: "SECOND_FACTOR_TYPE_UNSPECIFIED" },
  { no: 1, name: "SECOND_FACTOR_TYPE_OTP" },
  { no: 2, name: "SECOND_FACTOR_TYPE_U2F" },
  { no: 3, name: "SECOND_FACTOR_TYPE_OTP_EMAIL" },
  { no: 4, name: "SECOND_FACTOR_TYPE_OTP_SMS" },
]);

/**
 * @generated from enum zitadel.policy.v1.MultiFactorType
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
proto3.util.setEnumType(MultiFactorType, "zitadel.policy.v1.MultiFactorType", [
  { no: 0, name: "MULTI_FACTOR_TYPE_UNSPECIFIED" },
  { no: 1, name: "MULTI_FACTOR_TYPE_U2F_WITH_VERIFICATION" },
]);

/**
 * @generated from enum zitadel.policy.v1.PasswordlessType
 */
export enum PasswordlessType {
  /**
   * @generated from enum value: PASSWORDLESS_TYPE_NOT_ALLOWED = 0;
   */
  NOT_ALLOWED = 0,

  /**
   * PLANNED: PASSWORDLESS_TYPE_WITH_CERT
   *
   * @generated from enum value: PASSWORDLESS_TYPE_ALLOWED = 1;
   */
  ALLOWED = 1,
}
// Retrieve enum metadata with: proto3.getEnumType(PasswordlessType)
proto3.util.setEnumType(PasswordlessType, "zitadel.policy.v1.PasswordlessType", [
  { no: 0, name: "PASSWORDLESS_TYPE_NOT_ALLOWED" },
  { no: 1, name: "PASSWORDLESS_TYPE_ALLOWED" },
]);

/**
 * deprecated: please use DomainPolicy instead
 *
 * @generated from message zitadel.policy.v1.OrgIAMPolicy
 */
export class OrgIAMPolicy extends Message<OrgIAMPolicy> {
  /**
   * @generated from field: zitadel.v1.ObjectDetails details = 1;
   */
  details?: ObjectDetails;

  /**
   * @generated from field: bool user_login_must_be_domain = 2;
   */
  userLoginMustBeDomain = false;

  /**
   * @generated from field: bool is_default = 3;
   */
  isDefault = false;

  constructor(data?: PartialMessage<OrgIAMPolicy>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "zitadel.policy.v1.OrgIAMPolicy";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "details", kind: "message", T: ObjectDetails },
    { no: 2, name: "user_login_must_be_domain", kind: "scalar", T: 8 /* ScalarType.BOOL */ },
    { no: 3, name: "is_default", kind: "scalar", T: 8 /* ScalarType.BOOL */ },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): OrgIAMPolicy {
    return new OrgIAMPolicy().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): OrgIAMPolicy {
    return new OrgIAMPolicy().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): OrgIAMPolicy {
    return new OrgIAMPolicy().fromJsonString(jsonString, options);
  }

  static equals(a: OrgIAMPolicy | PlainMessage<OrgIAMPolicy> | undefined, b: OrgIAMPolicy | PlainMessage<OrgIAMPolicy> | undefined): boolean {
    return proto3.util.equals(OrgIAMPolicy, a, b);
  }
}

/**
 * @generated from message zitadel.policy.v1.DomainPolicy
 */
export class DomainPolicy extends Message<DomainPolicy> {
  /**
   * @generated from field: zitadel.v1.ObjectDetails details = 1;
   */
  details?: ObjectDetails;

  /**
   * @generated from field: bool user_login_must_be_domain = 2;
   */
  userLoginMustBeDomain = false;

  /**
   * @generated from field: bool is_default = 3;
   */
  isDefault = false;

  /**
   * @generated from field: bool validate_org_domains = 4;
   */
  validateOrgDomains = false;

  /**
   * @generated from field: bool smtp_sender_address_matches_instance_domain = 5;
   */
  smtpSenderAddressMatchesInstanceDomain = false;

  constructor(data?: PartialMessage<DomainPolicy>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "zitadel.policy.v1.DomainPolicy";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "details", kind: "message", T: ObjectDetails },
    { no: 2, name: "user_login_must_be_domain", kind: "scalar", T: 8 /* ScalarType.BOOL */ },
    { no: 3, name: "is_default", kind: "scalar", T: 8 /* ScalarType.BOOL */ },
    { no: 4, name: "validate_org_domains", kind: "scalar", T: 8 /* ScalarType.BOOL */ },
    { no: 5, name: "smtp_sender_address_matches_instance_domain", kind: "scalar", T: 8 /* ScalarType.BOOL */ },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): DomainPolicy {
    return new DomainPolicy().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): DomainPolicy {
    return new DomainPolicy().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): DomainPolicy {
    return new DomainPolicy().fromJsonString(jsonString, options);
  }

  static equals(a: DomainPolicy | PlainMessage<DomainPolicy> | undefined, b: DomainPolicy | PlainMessage<DomainPolicy> | undefined): boolean {
    return proto3.util.equals(DomainPolicy, a, b);
  }
}

/**
 * @generated from message zitadel.policy.v1.LabelPolicy
 */
export class LabelPolicy extends Message<LabelPolicy> {
  /**
   * @generated from field: zitadel.v1.ObjectDetails details = 1;
   */
  details?: ObjectDetails;

  /**
   * hex value for primary color
   *
   * @generated from field: string primary_color = 2;
   */
  primaryColor = "";

  /**
   * defines if the organization's admin changed the policy
   *
   * @generated from field: bool is_default = 4;
   */
  isDefault = false;

  /**
   * hides the org suffix on the login form if the scope \"urn:zitadel:iam:org:domain:primary:{domainname}\" is set
   *
   * @generated from field: bool hide_login_name_suffix = 5;
   */
  hideLoginNameSuffix = false;

  /**
   * hex value for secondary color
   *
   * @generated from field: string warn_color = 6;
   */
  warnColor = "";

  /**
   * hex value for background color
   *
   * @generated from field: string background_color = 7;
   */
  backgroundColor = "";

  /**
   * hex value for font color
   *
   * @generated from field: string font_color = 8;
   */
  fontColor = "";

  /**
   * hex value for primary color dark theme
   *
   * @generated from field: string primary_color_dark = 9;
   */
  primaryColorDark = "";

  /**
   * hex value for background color dark theme
   *
   * @generated from field: string background_color_dark = 10;
   */
  backgroundColorDark = "";

  /**
   * hex value for warning color dark theme
   *
   * @generated from field: string warn_color_dark = 11;
   */
  warnColorDark = "";

  /**
   * hex value for font color dark theme
   *
   * @generated from field: string font_color_dark = 12;
   */
  fontColorDark = "";

  /**
   * @generated from field: bool disable_watermark = 13;
   */
  disableWatermark = false;

  /**
   * @generated from field: string logo_url = 14;
   */
  logoUrl = "";

  /**
   * @generated from field: string icon_url = 15;
   */
  iconUrl = "";

  /**
   * @generated from field: string logo_url_dark = 16;
   */
  logoUrlDark = "";

  /**
   * @generated from field: string icon_url_dark = 17;
   */
  iconUrlDark = "";

  /**
   * @generated from field: string font_url = 18;
   */
  fontUrl = "";

  /**
   * @generated from field: zitadel.policy.v1.ThemeMode theme_mode = 19;
   */
  themeMode = ThemeMode.UNSPECIFIED;

  constructor(data?: PartialMessage<LabelPolicy>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "zitadel.policy.v1.LabelPolicy";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "details", kind: "message", T: ObjectDetails },
    { no: 2, name: "primary_color", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 4, name: "is_default", kind: "scalar", T: 8 /* ScalarType.BOOL */ },
    { no: 5, name: "hide_login_name_suffix", kind: "scalar", T: 8 /* ScalarType.BOOL */ },
    { no: 6, name: "warn_color", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 7, name: "background_color", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 8, name: "font_color", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 9, name: "primary_color_dark", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 10, name: "background_color_dark", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 11, name: "warn_color_dark", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 12, name: "font_color_dark", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 13, name: "disable_watermark", kind: "scalar", T: 8 /* ScalarType.BOOL */ },
    { no: 14, name: "logo_url", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 15, name: "icon_url", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 16, name: "logo_url_dark", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 17, name: "icon_url_dark", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 18, name: "font_url", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 19, name: "theme_mode", kind: "enum", T: proto3.getEnumType(ThemeMode) },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): LabelPolicy {
    return new LabelPolicy().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): LabelPolicy {
    return new LabelPolicy().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): LabelPolicy {
    return new LabelPolicy().fromJsonString(jsonString, options);
  }

  static equals(a: LabelPolicy | PlainMessage<LabelPolicy> | undefined, b: LabelPolicy | PlainMessage<LabelPolicy> | undefined): boolean {
    return proto3.util.equals(LabelPolicy, a, b);
  }
}

/**
 * @generated from message zitadel.policy.v1.LoginPolicy
 */
export class LoginPolicy extends Message<LoginPolicy> {
  /**
   * @generated from field: zitadel.v1.ObjectDetails details = 1;
   */
  details?: ObjectDetails;

  /**
   * @generated from field: bool allow_username_password = 2;
   */
  allowUsernamePassword = false;

  /**
   * @generated from field: bool allow_register = 3;
   */
  allowRegister = false;

  /**
   * @generated from field: bool allow_external_idp = 4;
   */
  allowExternalIdp = false;

  /**
   * @generated from field: bool force_mfa = 5;
   */
  forceMfa = false;

  /**
   * @generated from field: zitadel.policy.v1.PasswordlessType passwordless_type = 6;
   */
  passwordlessType = PasswordlessType.NOT_ALLOWED;

  /**
   * @generated from field: bool is_default = 7;
   */
  isDefault = false;

  /**
   * @generated from field: bool hide_password_reset = 8;
   */
  hidePasswordReset = false;

  /**
   * @generated from field: bool ignore_unknown_usernames = 9;
   */
  ignoreUnknownUsernames = false;

  /**
   * @generated from field: string default_redirect_uri = 10;
   */
  defaultRedirectUri = "";

  /**
   * @generated from field: google.protobuf.Duration password_check_lifetime = 11;
   */
  passwordCheckLifetime?: Duration;

  /**
   * @generated from field: google.protobuf.Duration external_login_check_lifetime = 12;
   */
  externalLoginCheckLifetime?: Duration;

  /**
   * @generated from field: google.protobuf.Duration mfa_init_skip_lifetime = 13;
   */
  mfaInitSkipLifetime?: Duration;

  /**
   * @generated from field: google.protobuf.Duration second_factor_check_lifetime = 14;
   */
  secondFactorCheckLifetime?: Duration;

  /**
   * @generated from field: google.protobuf.Duration multi_factor_check_lifetime = 15;
   */
  multiFactorCheckLifetime?: Duration;

  /**
   * @generated from field: repeated zitadel.policy.v1.SecondFactorType second_factors = 16;
   */
  secondFactors: SecondFactorType[] = [];

  /**
   * @generated from field: repeated zitadel.policy.v1.MultiFactorType multi_factors = 17;
   */
  multiFactors: MultiFactorType[] = [];

  /**
   * @generated from field: repeated zitadel.idp.v1.IDPLoginPolicyLink idps = 18;
   */
  idps: IDPLoginPolicyLink[] = [];

  /**
   * If set to true, the suffix (@domain.com) of an unknown username input on the login screen will be matched against the org domains and will redirect to the registration of that organization on success.
   *
   * @generated from field: bool allow_domain_discovery = 19;
   */
  allowDomainDiscovery = false;

  /**
   * @generated from field: bool disable_login_with_email = 20;
   */
  disableLoginWithEmail = false;

  /**
   * @generated from field: bool disable_login_with_phone = 21;
   */
  disableLoginWithPhone = false;

  /**
   * @generated from field: bool force_mfa_local_only = 22;
   */
  forceMfaLocalOnly = false;

  constructor(data?: PartialMessage<LoginPolicy>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "zitadel.policy.v1.LoginPolicy";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "details", kind: "message", T: ObjectDetails },
    { no: 2, name: "allow_username_password", kind: "scalar", T: 8 /* ScalarType.BOOL */ },
    { no: 3, name: "allow_register", kind: "scalar", T: 8 /* ScalarType.BOOL */ },
    { no: 4, name: "allow_external_idp", kind: "scalar", T: 8 /* ScalarType.BOOL */ },
    { no: 5, name: "force_mfa", kind: "scalar", T: 8 /* ScalarType.BOOL */ },
    { no: 6, name: "passwordless_type", kind: "enum", T: proto3.getEnumType(PasswordlessType) },
    { no: 7, name: "is_default", kind: "scalar", T: 8 /* ScalarType.BOOL */ },
    { no: 8, name: "hide_password_reset", kind: "scalar", T: 8 /* ScalarType.BOOL */ },
    { no: 9, name: "ignore_unknown_usernames", kind: "scalar", T: 8 /* ScalarType.BOOL */ },
    { no: 10, name: "default_redirect_uri", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 11, name: "password_check_lifetime", kind: "message", T: Duration },
    { no: 12, name: "external_login_check_lifetime", kind: "message", T: Duration },
    { no: 13, name: "mfa_init_skip_lifetime", kind: "message", T: Duration },
    { no: 14, name: "second_factor_check_lifetime", kind: "message", T: Duration },
    { no: 15, name: "multi_factor_check_lifetime", kind: "message", T: Duration },
    { no: 16, name: "second_factors", kind: "enum", T: proto3.getEnumType(SecondFactorType), repeated: true },
    { no: 17, name: "multi_factors", kind: "enum", T: proto3.getEnumType(MultiFactorType), repeated: true },
    { no: 18, name: "idps", kind: "message", T: IDPLoginPolicyLink, repeated: true },
    { no: 19, name: "allow_domain_discovery", kind: "scalar", T: 8 /* ScalarType.BOOL */ },
    { no: 20, name: "disable_login_with_email", kind: "scalar", T: 8 /* ScalarType.BOOL */ },
    { no: 21, name: "disable_login_with_phone", kind: "scalar", T: 8 /* ScalarType.BOOL */ },
    { no: 22, name: "force_mfa_local_only", kind: "scalar", T: 8 /* ScalarType.BOOL */ },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): LoginPolicy {
    return new LoginPolicy().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): LoginPolicy {
    return new LoginPolicy().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): LoginPolicy {
    return new LoginPolicy().fromJsonString(jsonString, options);
  }

  static equals(a: LoginPolicy | PlainMessage<LoginPolicy> | undefined, b: LoginPolicy | PlainMessage<LoginPolicy> | undefined): boolean {
    return proto3.util.equals(LoginPolicy, a, b);
  }
}

/**
 * @generated from message zitadel.policy.v1.PasswordComplexityPolicy
 */
export class PasswordComplexityPolicy extends Message<PasswordComplexityPolicy> {
  /**
   * @generated from field: zitadel.v1.ObjectDetails details = 1;
   */
  details?: ObjectDetails;

  /**
   * @generated from field: uint64 min_length = 2;
   */
  minLength = protoInt64.zero;

  /**
   * @generated from field: bool has_uppercase = 3;
   */
  hasUppercase = false;

  /**
   * @generated from field: bool has_lowercase = 4;
   */
  hasLowercase = false;

  /**
   * @generated from field: bool has_number = 5;
   */
  hasNumber = false;

  /**
   * @generated from field: bool has_symbol = 6;
   */
  hasSymbol = false;

  /**
   * @generated from field: bool is_default = 7;
   */
  isDefault = false;

  constructor(data?: PartialMessage<PasswordComplexityPolicy>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "zitadel.policy.v1.PasswordComplexityPolicy";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "details", kind: "message", T: ObjectDetails },
    { no: 2, name: "min_length", kind: "scalar", T: 4 /* ScalarType.UINT64 */ },
    { no: 3, name: "has_uppercase", kind: "scalar", T: 8 /* ScalarType.BOOL */ },
    { no: 4, name: "has_lowercase", kind: "scalar", T: 8 /* ScalarType.BOOL */ },
    { no: 5, name: "has_number", kind: "scalar", T: 8 /* ScalarType.BOOL */ },
    { no: 6, name: "has_symbol", kind: "scalar", T: 8 /* ScalarType.BOOL */ },
    { no: 7, name: "is_default", kind: "scalar", T: 8 /* ScalarType.BOOL */ },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): PasswordComplexityPolicy {
    return new PasswordComplexityPolicy().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): PasswordComplexityPolicy {
    return new PasswordComplexityPolicy().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): PasswordComplexityPolicy {
    return new PasswordComplexityPolicy().fromJsonString(jsonString, options);
  }

  static equals(a: PasswordComplexityPolicy | PlainMessage<PasswordComplexityPolicy> | undefined, b: PasswordComplexityPolicy | PlainMessage<PasswordComplexityPolicy> | undefined): boolean {
    return proto3.util.equals(PasswordComplexityPolicy, a, b);
  }
}

/**
 * @generated from message zitadel.policy.v1.PasswordAgePolicy
 */
export class PasswordAgePolicy extends Message<PasswordAgePolicy> {
  /**
   * @generated from field: zitadel.v1.ObjectDetails details = 1;
   */
  details?: ObjectDetails;

  /**
   * Amount of days after which a password will expire. The user will be forced to change the password on the following authentication.
   *
   * @generated from field: uint64 max_age_days = 2;
   */
  maxAgeDays = protoInt64.zero;

  /**
   * Amount of days after which the user should be notified of the upcoming expiry. ZITADEL will not notify the user.
   *
   * @generated from field: uint64 expire_warn_days = 3;
   */
  expireWarnDays = protoInt64.zero;

  /**
   * If true, the returned values represent the instance settings, e.g. by an organization without custom settings.
   *
   * @generated from field: bool is_default = 4;
   */
  isDefault = false;

  constructor(data?: PartialMessage<PasswordAgePolicy>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "zitadel.policy.v1.PasswordAgePolicy";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "details", kind: "message", T: ObjectDetails },
    { no: 2, name: "max_age_days", kind: "scalar", T: 4 /* ScalarType.UINT64 */ },
    { no: 3, name: "expire_warn_days", kind: "scalar", T: 4 /* ScalarType.UINT64 */ },
    { no: 4, name: "is_default", kind: "scalar", T: 8 /* ScalarType.BOOL */ },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): PasswordAgePolicy {
    return new PasswordAgePolicy().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): PasswordAgePolicy {
    return new PasswordAgePolicy().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): PasswordAgePolicy {
    return new PasswordAgePolicy().fromJsonString(jsonString, options);
  }

  static equals(a: PasswordAgePolicy | PlainMessage<PasswordAgePolicy> | undefined, b: PasswordAgePolicy | PlainMessage<PasswordAgePolicy> | undefined): boolean {
    return proto3.util.equals(PasswordAgePolicy, a, b);
  }
}

/**
 * @generated from message zitadel.policy.v1.LockoutPolicy
 */
export class LockoutPolicy extends Message<LockoutPolicy> {
  /**
   * @generated from field: zitadel.v1.ObjectDetails details = 1;
   */
  details?: ObjectDetails;

  /**
   * @generated from field: uint64 max_password_attempts = 2;
   */
  maxPasswordAttempts = protoInt64.zero;

  /**
   * @generated from field: uint64 max_otp_attempts = 3;
   */
  maxOtpAttempts = protoInt64.zero;

  /**
   * @generated from field: bool is_default = 4;
   */
  isDefault = false;

  constructor(data?: PartialMessage<LockoutPolicy>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "zitadel.policy.v1.LockoutPolicy";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "details", kind: "message", T: ObjectDetails },
    { no: 2, name: "max_password_attempts", kind: "scalar", T: 4 /* ScalarType.UINT64 */ },
    { no: 3, name: "max_otp_attempts", kind: "scalar", T: 4 /* ScalarType.UINT64 */ },
    { no: 4, name: "is_default", kind: "scalar", T: 8 /* ScalarType.BOOL */ },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): LockoutPolicy {
    return new LockoutPolicy().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): LockoutPolicy {
    return new LockoutPolicy().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): LockoutPolicy {
    return new LockoutPolicy().fromJsonString(jsonString, options);
  }

  static equals(a: LockoutPolicy | PlainMessage<LockoutPolicy> | undefined, b: LockoutPolicy | PlainMessage<LockoutPolicy> | undefined): boolean {
    return proto3.util.equals(LockoutPolicy, a, b);
  }
}

/**
 * @generated from message zitadel.policy.v1.PrivacyPolicy
 */
export class PrivacyPolicy extends Message<PrivacyPolicy> {
  /**
   * @generated from field: zitadel.v1.ObjectDetails details = 1;
   */
  details?: ObjectDetails;

  /**
   * @generated from field: string tos_link = 2;
   */
  tosLink = "";

  /**
   * @generated from field: string privacy_link = 3;
   */
  privacyLink = "";

  /**
   * @generated from field: bool is_default = 4;
   */
  isDefault = false;

  /**
   * @generated from field: string help_link = 5;
   */
  helpLink = "";

  /**
   * @generated from field: string support_email = 6;
   */
  supportEmail = "";

  /**
   * @generated from field: string docs_link = 7;
   */
  docsLink = "";

  /**
   * @generated from field: string custom_link = 8;
   */
  customLink = "";

  /**
   * @generated from field: string custom_link_text = 9;
   */
  customLinkText = "";

  constructor(data?: PartialMessage<PrivacyPolicy>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "zitadel.policy.v1.PrivacyPolicy";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "details", kind: "message", T: ObjectDetails },
    { no: 2, name: "tos_link", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 3, name: "privacy_link", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 4, name: "is_default", kind: "scalar", T: 8 /* ScalarType.BOOL */ },
    { no: 5, name: "help_link", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 6, name: "support_email", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 7, name: "docs_link", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 8, name: "custom_link", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 9, name: "custom_link_text", kind: "scalar", T: 9 /* ScalarType.STRING */ },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): PrivacyPolicy {
    return new PrivacyPolicy().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): PrivacyPolicy {
    return new PrivacyPolicy().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): PrivacyPolicy {
    return new PrivacyPolicy().fromJsonString(jsonString, options);
  }

  static equals(a: PrivacyPolicy | PlainMessage<PrivacyPolicy> | undefined, b: PrivacyPolicy | PlainMessage<PrivacyPolicy> | undefined): boolean {
    return proto3.util.equals(PrivacyPolicy, a, b);
  }
}

/**
 * @generated from message zitadel.policy.v1.NotificationPolicy
 */
export class NotificationPolicy extends Message<NotificationPolicy> {
  /**
   * @generated from field: zitadel.v1.ObjectDetails details = 1;
   */
  details?: ObjectDetails;

  /**
   * @generated from field: bool is_default = 2;
   */
  isDefault = false;

  /**
   * @generated from field: bool password_change = 3;
   */
  passwordChange = false;

  constructor(data?: PartialMessage<NotificationPolicy>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "zitadel.policy.v1.NotificationPolicy";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "details", kind: "message", T: ObjectDetails },
    { no: 2, name: "is_default", kind: "scalar", T: 8 /* ScalarType.BOOL */ },
    { no: 3, name: "password_change", kind: "scalar", T: 8 /* ScalarType.BOOL */ },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): NotificationPolicy {
    return new NotificationPolicy().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): NotificationPolicy {
    return new NotificationPolicy().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): NotificationPolicy {
    return new NotificationPolicy().fromJsonString(jsonString, options);
  }

  static equals(a: NotificationPolicy | PlainMessage<NotificationPolicy> | undefined, b: NotificationPolicy | PlainMessage<NotificationPolicy> | undefined): boolean {
    return proto3.util.equals(NotificationPolicy, a, b);
  }
}

