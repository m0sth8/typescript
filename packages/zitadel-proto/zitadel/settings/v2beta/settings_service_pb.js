// @generated by protoc-gen-es v1.10.0
// @generated from file zitadel/settings/v2beta/settings_service.proto (package zitadel.settings.v2beta, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import { proto3 } from "@bufbuild/protobuf";
import { Details, ListDetails, RequestContext } from "../../object/v2beta/object_pb.js";
import { IdentityProvider, LoginSettings } from "./login_settings_pb.js";
import { PasswordComplexitySettings, PasswordExpirySettings } from "./password_settings_pb.js";
import { BrandingSettings } from "./branding_settings_pb.js";
import { DomainSettings } from "./domain_settings_pb.js";
import { LegalAndSupportSettings } from "./legal_settings_pb.js";
import { LockoutSettings } from "./lockout_settings_pb.js";
import { EmbeddedIframeSettings, SecuritySettings } from "./security_settings_pb.js";

/**
 * @generated from message zitadel.settings.v2beta.GetLoginSettingsRequest
 */
export const GetLoginSettingsRequest = /*@__PURE__*/ proto3.makeMessageType(
  "zitadel.settings.v2beta.GetLoginSettingsRequest",
  () => [
    { no: 1, name: "ctx", kind: "message", T: RequestContext },
  ],
);

/**
 * @generated from message zitadel.settings.v2beta.GetLoginSettingsResponse
 */
export const GetLoginSettingsResponse = /*@__PURE__*/ proto3.makeMessageType(
  "zitadel.settings.v2beta.GetLoginSettingsResponse",
  () => [
    { no: 1, name: "details", kind: "message", T: Details },
    { no: 2, name: "settings", kind: "message", T: LoginSettings },
  ],
);

/**
 * @generated from message zitadel.settings.v2beta.GetPasswordComplexitySettingsRequest
 */
export const GetPasswordComplexitySettingsRequest = /*@__PURE__*/ proto3.makeMessageType(
  "zitadel.settings.v2beta.GetPasswordComplexitySettingsRequest",
  () => [
    { no: 1, name: "ctx", kind: "message", T: RequestContext },
  ],
);

/**
 * @generated from message zitadel.settings.v2beta.GetPasswordComplexitySettingsResponse
 */
export const GetPasswordComplexitySettingsResponse = /*@__PURE__*/ proto3.makeMessageType(
  "zitadel.settings.v2beta.GetPasswordComplexitySettingsResponse",
  () => [
    { no: 1, name: "details", kind: "message", T: Details },
    { no: 2, name: "settings", kind: "message", T: PasswordComplexitySettings },
  ],
);

/**
 * @generated from message zitadel.settings.v2beta.GetPasswordExpirySettingsRequest
 */
export const GetPasswordExpirySettingsRequest = /*@__PURE__*/ proto3.makeMessageType(
  "zitadel.settings.v2beta.GetPasswordExpirySettingsRequest",
  () => [
    { no: 1, name: "ctx", kind: "message", T: RequestContext },
  ],
);

/**
 * @generated from message zitadel.settings.v2beta.GetPasswordExpirySettingsResponse
 */
export const GetPasswordExpirySettingsResponse = /*@__PURE__*/ proto3.makeMessageType(
  "zitadel.settings.v2beta.GetPasswordExpirySettingsResponse",
  () => [
    { no: 1, name: "details", kind: "message", T: Details },
    { no: 2, name: "settings", kind: "message", T: PasswordExpirySettings },
  ],
);

/**
 * @generated from message zitadel.settings.v2beta.GetBrandingSettingsRequest
 */
export const GetBrandingSettingsRequest = /*@__PURE__*/ proto3.makeMessageType(
  "zitadel.settings.v2beta.GetBrandingSettingsRequest",
  () => [
    { no: 1, name: "ctx", kind: "message", T: RequestContext },
  ],
);

/**
 * @generated from message zitadel.settings.v2beta.GetBrandingSettingsResponse
 */
export const GetBrandingSettingsResponse = /*@__PURE__*/ proto3.makeMessageType(
  "zitadel.settings.v2beta.GetBrandingSettingsResponse",
  () => [
    { no: 1, name: "details", kind: "message", T: Details },
    { no: 2, name: "settings", kind: "message", T: BrandingSettings },
  ],
);

/**
 * @generated from message zitadel.settings.v2beta.GetDomainSettingsRequest
 */
export const GetDomainSettingsRequest = /*@__PURE__*/ proto3.makeMessageType(
  "zitadel.settings.v2beta.GetDomainSettingsRequest",
  () => [
    { no: 1, name: "ctx", kind: "message", T: RequestContext },
  ],
);

/**
 * @generated from message zitadel.settings.v2beta.GetDomainSettingsResponse
 */
export const GetDomainSettingsResponse = /*@__PURE__*/ proto3.makeMessageType(
  "zitadel.settings.v2beta.GetDomainSettingsResponse",
  () => [
    { no: 1, name: "details", kind: "message", T: Details },
    { no: 2, name: "settings", kind: "message", T: DomainSettings },
  ],
);

/**
 * @generated from message zitadel.settings.v2beta.GetLegalAndSupportSettingsRequest
 */
export const GetLegalAndSupportSettingsRequest = /*@__PURE__*/ proto3.makeMessageType(
  "zitadel.settings.v2beta.GetLegalAndSupportSettingsRequest",
  () => [
    { no: 1, name: "ctx", kind: "message", T: RequestContext },
  ],
);

/**
 * @generated from message zitadel.settings.v2beta.GetLegalAndSupportSettingsResponse
 */
export const GetLegalAndSupportSettingsResponse = /*@__PURE__*/ proto3.makeMessageType(
  "zitadel.settings.v2beta.GetLegalAndSupportSettingsResponse",
  () => [
    { no: 1, name: "details", kind: "message", T: Details },
    { no: 2, name: "settings", kind: "message", T: LegalAndSupportSettings },
  ],
);

/**
 * @generated from message zitadel.settings.v2beta.GetLockoutSettingsRequest
 */
export const GetLockoutSettingsRequest = /*@__PURE__*/ proto3.makeMessageType(
  "zitadel.settings.v2beta.GetLockoutSettingsRequest",
  () => [
    { no: 1, name: "ctx", kind: "message", T: RequestContext },
  ],
);

/**
 * @generated from message zitadel.settings.v2beta.GetLockoutSettingsResponse
 */
export const GetLockoutSettingsResponse = /*@__PURE__*/ proto3.makeMessageType(
  "zitadel.settings.v2beta.GetLockoutSettingsResponse",
  () => [
    { no: 1, name: "details", kind: "message", T: Details },
    { no: 2, name: "settings", kind: "message", T: LockoutSettings },
  ],
);

/**
 * @generated from message zitadel.settings.v2beta.GetActiveIdentityProvidersRequest
 */
export const GetActiveIdentityProvidersRequest = /*@__PURE__*/ proto3.makeMessageType(
  "zitadel.settings.v2beta.GetActiveIdentityProvidersRequest",
  () => [
    { no: 1, name: "ctx", kind: "message", T: RequestContext },
  ],
);

/**
 * @generated from message zitadel.settings.v2beta.GetActiveIdentityProvidersResponse
 */
export const GetActiveIdentityProvidersResponse = /*@__PURE__*/ proto3.makeMessageType(
  "zitadel.settings.v2beta.GetActiveIdentityProvidersResponse",
  () => [
    { no: 1, name: "details", kind: "message", T: ListDetails },
    { no: 2, name: "identity_providers", kind: "message", T: IdentityProvider, repeated: true },
  ],
);

/**
 * @generated from message zitadel.settings.v2beta.GetGeneralSettingsRequest
 */
export const GetGeneralSettingsRequest = /*@__PURE__*/ proto3.makeMessageType(
  "zitadel.settings.v2beta.GetGeneralSettingsRequest",
  [],
);

/**
 * @generated from message zitadel.settings.v2beta.GetGeneralSettingsResponse
 */
export const GetGeneralSettingsResponse = /*@__PURE__*/ proto3.makeMessageType(
  "zitadel.settings.v2beta.GetGeneralSettingsResponse",
  () => [
    { no: 1, name: "default_org_id", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "default_language", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 3, name: "supported_languages", kind: "scalar", T: 9 /* ScalarType.STRING */, repeated: true },
  ],
);

/**
 * This is an empty request
 *
 * @generated from message zitadel.settings.v2beta.GetSecuritySettingsRequest
 */
export const GetSecuritySettingsRequest = /*@__PURE__*/ proto3.makeMessageType(
  "zitadel.settings.v2beta.GetSecuritySettingsRequest",
  [],
);

/**
 * @generated from message zitadel.settings.v2beta.GetSecuritySettingsResponse
 */
export const GetSecuritySettingsResponse = /*@__PURE__*/ proto3.makeMessageType(
  "zitadel.settings.v2beta.GetSecuritySettingsResponse",
  () => [
    { no: 1, name: "details", kind: "message", T: Details },
    { no: 2, name: "settings", kind: "message", T: SecuritySettings },
  ],
);

/**
 * @generated from message zitadel.settings.v2beta.SetSecuritySettingsRequest
 */
export const SetSecuritySettingsRequest = /*@__PURE__*/ proto3.makeMessageType(
  "zitadel.settings.v2beta.SetSecuritySettingsRequest",
  () => [
    { no: 1, name: "embedded_iframe", kind: "message", T: EmbeddedIframeSettings },
    { no: 2, name: "enable_impersonation", kind: "scalar", T: 8 /* ScalarType.BOOL */ },
  ],
);

/**
 * @generated from message zitadel.settings.v2beta.SetSecuritySettingsResponse
 */
export const SetSecuritySettingsResponse = /*@__PURE__*/ proto3.makeMessageType(
  "zitadel.settings.v2beta.SetSecuritySettingsResponse",
  () => [
    { no: 1, name: "details", kind: "message", T: Details },
  ],
);

