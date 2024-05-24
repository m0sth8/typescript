// @generated by protoc-gen-es v1.9.0
// @generated from file zitadel/app.proto (package zitadel.app.v1, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import type { BinaryReadOptions, Duration, FieldList, JsonReadOptions, JsonValue, PartialMessage, PlainMessage } from "@bufbuild/protobuf";
import { Message, proto3 } from "@bufbuild/protobuf";
import type { ObjectDetails, TextQueryMethod } from "./object_pb.js";
import type { LocalizedMessage } from "./message_pb.js";

/**
 * @generated from enum zitadel.app.v1.AppState
 */
export declare enum AppState {
  /**
   * @generated from enum value: APP_STATE_UNSPECIFIED = 0;
   */
  UNSPECIFIED = 0,

  /**
   * @generated from enum value: APP_STATE_ACTIVE = 1;
   */
  ACTIVE = 1,

  /**
   * @generated from enum value: APP_STATE_INACTIVE = 2;
   */
  INACTIVE = 2,
}

/**
 * @generated from enum zitadel.app.v1.OIDCResponseType
 */
export declare enum OIDCResponseType {
  /**
   * @generated from enum value: OIDC_RESPONSE_TYPE_CODE = 0;
   */
  OIDC_RESPONSE_TYPE_CODE = 0,

  /**
   * @generated from enum value: OIDC_RESPONSE_TYPE_ID_TOKEN = 1;
   */
  OIDC_RESPONSE_TYPE_ID_TOKEN = 1,

  /**
   * @generated from enum value: OIDC_RESPONSE_TYPE_ID_TOKEN_TOKEN = 2;
   */
  OIDC_RESPONSE_TYPE_ID_TOKEN_TOKEN = 2,
}

/**
 * @generated from enum zitadel.app.v1.OIDCGrantType
 */
export declare enum OIDCGrantType {
  /**
   * @generated from enum value: OIDC_GRANT_TYPE_AUTHORIZATION_CODE = 0;
   */
  OIDC_GRANT_TYPE_AUTHORIZATION_CODE = 0,

  /**
   * @generated from enum value: OIDC_GRANT_TYPE_IMPLICIT = 1;
   */
  OIDC_GRANT_TYPE_IMPLICIT = 1,

  /**
   * @generated from enum value: OIDC_GRANT_TYPE_REFRESH_TOKEN = 2;
   */
  OIDC_GRANT_TYPE_REFRESH_TOKEN = 2,

  /**
   * @generated from enum value: OIDC_GRANT_TYPE_DEVICE_CODE = 3;
   */
  OIDC_GRANT_TYPE_DEVICE_CODE = 3,

  /**
   * @generated from enum value: OIDC_GRANT_TYPE_TOKEN_EXCHANGE = 4;
   */
  OIDC_GRANT_TYPE_TOKEN_EXCHANGE = 4,
}

/**
 * @generated from enum zitadel.app.v1.OIDCAppType
 */
export declare enum OIDCAppType {
  /**
   * @generated from enum value: OIDC_APP_TYPE_WEB = 0;
   */
  OIDC_APP_TYPE_WEB = 0,

  /**
   * @generated from enum value: OIDC_APP_TYPE_USER_AGENT = 1;
   */
  OIDC_APP_TYPE_USER_AGENT = 1,

  /**
   * @generated from enum value: OIDC_APP_TYPE_NATIVE = 2;
   */
  OIDC_APP_TYPE_NATIVE = 2,
}

/**
 * @generated from enum zitadel.app.v1.OIDCAuthMethodType
 */
export declare enum OIDCAuthMethodType {
  /**
   * @generated from enum value: OIDC_AUTH_METHOD_TYPE_BASIC = 0;
   */
  OIDC_AUTH_METHOD_TYPE_BASIC = 0,

  /**
   * @generated from enum value: OIDC_AUTH_METHOD_TYPE_POST = 1;
   */
  OIDC_AUTH_METHOD_TYPE_POST = 1,

  /**
   * @generated from enum value: OIDC_AUTH_METHOD_TYPE_NONE = 2;
   */
  OIDC_AUTH_METHOD_TYPE_NONE = 2,

  /**
   * @generated from enum value: OIDC_AUTH_METHOD_TYPE_PRIVATE_KEY_JWT = 3;
   */
  OIDC_AUTH_METHOD_TYPE_PRIVATE_KEY_JWT = 3,
}

/**
 * @generated from enum zitadel.app.v1.OIDCVersion
 */
export declare enum OIDCVersion {
  /**
   * @generated from enum value: OIDC_VERSION_1_0 = 0;
   */
  OIDC_VERSION_1_0 = 0,
}

/**
 * @generated from enum zitadel.app.v1.OIDCTokenType
 */
export declare enum OIDCTokenType {
  /**
   * @generated from enum value: OIDC_TOKEN_TYPE_BEARER = 0;
   */
  OIDC_TOKEN_TYPE_BEARER = 0,

  /**
   * @generated from enum value: OIDC_TOKEN_TYPE_JWT = 1;
   */
  OIDC_TOKEN_TYPE_JWT = 1,
}

/**
 * @generated from enum zitadel.app.v1.APIAuthMethodType
 */
export declare enum APIAuthMethodType {
  /**
   * @generated from enum value: API_AUTH_METHOD_TYPE_BASIC = 0;
   */
  API_AUTH_METHOD_TYPE_BASIC = 0,

  /**
   * @generated from enum value: API_AUTH_METHOD_TYPE_PRIVATE_KEY_JWT = 1;
   */
  API_AUTH_METHOD_TYPE_PRIVATE_KEY_JWT = 1,
}

/**
 * @generated from message zitadel.app.v1.App
 */
export declare class App extends Message<App> {
  /**
   * @generated from field: string id = 1;
   */
  id: string;

  /**
   * @generated from field: zitadel.v1.ObjectDetails details = 2;
   */
  details?: ObjectDetails;

  /**
   * @generated from field: zitadel.app.v1.AppState state = 3;
   */
  state: AppState;

  /**
   * @generated from field: string name = 4;
   */
  name: string;

  /**
   * @generated from oneof zitadel.app.v1.App.config
   */
  config: {
    /**
     * @generated from field: zitadel.app.v1.OIDCConfig oidc_config = 5;
     */
    value: OIDCConfig;
    case: "oidcConfig";
  } | {
    /**
     * @generated from field: zitadel.app.v1.APIConfig api_config = 6;
     */
    value: APIConfig;
    case: "apiConfig";
  } | {
    /**
     * @generated from field: zitadel.app.v1.SAMLConfig saml_config = 7;
     */
    value: SAMLConfig;
    case: "samlConfig";
  } | { case: undefined; value?: undefined };

  constructor(data?: PartialMessage<App>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "zitadel.app.v1.App";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): App;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): App;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): App;

  static equals(a: App | PlainMessage<App> | undefined, b: App | PlainMessage<App> | undefined): boolean;
}

/**
 * @generated from message zitadel.app.v1.AppQuery
 */
export declare class AppQuery extends Message<AppQuery> {
  /**
   * @generated from oneof zitadel.app.v1.AppQuery.query
   */
  query: {
    /**
     * @generated from field: zitadel.app.v1.AppNameQuery name_query = 1;
     */
    value: AppNameQuery;
    case: "nameQuery";
  } | { case: undefined; value?: undefined };

  constructor(data?: PartialMessage<AppQuery>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "zitadel.app.v1.AppQuery";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): AppQuery;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): AppQuery;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): AppQuery;

  static equals(a: AppQuery | PlainMessage<AppQuery> | undefined, b: AppQuery | PlainMessage<AppQuery> | undefined): boolean;
}

/**
 * @generated from message zitadel.app.v1.AppNameQuery
 */
export declare class AppNameQuery extends Message<AppNameQuery> {
  /**
   * @generated from field: string name = 1;
   */
  name: string;

  /**
   * @generated from field: zitadel.v1.TextQueryMethod method = 2;
   */
  method: TextQueryMethod;

  constructor(data?: PartialMessage<AppNameQuery>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "zitadel.app.v1.AppNameQuery";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): AppNameQuery;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): AppNameQuery;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): AppNameQuery;

  static equals(a: AppNameQuery | PlainMessage<AppNameQuery> | undefined, b: AppNameQuery | PlainMessage<AppNameQuery> | undefined): boolean;
}

/**
 * @generated from message zitadel.app.v1.OIDCConfig
 */
export declare class OIDCConfig extends Message<OIDCConfig> {
  /**
   * @generated from field: repeated string redirect_uris = 1;
   */
  redirectUris: string[];

  /**
   * @generated from field: repeated zitadel.app.v1.OIDCResponseType response_types = 2;
   */
  responseTypes: OIDCResponseType[];

  /**
   * @generated from field: repeated zitadel.app.v1.OIDCGrantType grant_types = 3;
   */
  grantTypes: OIDCGrantType[];

  /**
   * @generated from field: zitadel.app.v1.OIDCAppType app_type = 4;
   */
  appType: OIDCAppType;

  /**
   * @generated from field: string client_id = 5;
   */
  clientId: string;

  /**
   * @generated from field: zitadel.app.v1.OIDCAuthMethodType auth_method_type = 7;
   */
  authMethodType: OIDCAuthMethodType;

  /**
   * @generated from field: repeated string post_logout_redirect_uris = 8;
   */
  postLogoutRedirectUris: string[];

  /**
   * @generated from field: zitadel.app.v1.OIDCVersion version = 9;
   */
  version: OIDCVersion;

  /**
   * @generated from field: bool none_compliant = 10;
   */
  noneCompliant: boolean;

  /**
   * @generated from field: repeated zitadel.v1.LocalizedMessage compliance_problems = 11;
   */
  complianceProblems: LocalizedMessage[];

  /**
   * @generated from field: bool dev_mode = 12;
   */
  devMode: boolean;

  /**
   * @generated from field: zitadel.app.v1.OIDCTokenType access_token_type = 13;
   */
  accessTokenType: OIDCTokenType;

  /**
   * @generated from field: bool access_token_role_assertion = 14;
   */
  accessTokenRoleAssertion: boolean;

  /**
   * @generated from field: bool id_token_role_assertion = 15;
   */
  idTokenRoleAssertion: boolean;

  /**
   * @generated from field: bool id_token_userinfo_assertion = 16;
   */
  idTokenUserinfoAssertion: boolean;

  /**
   * @generated from field: google.protobuf.Duration clock_skew = 17;
   */
  clockSkew?: Duration;

  /**
   * @generated from field: repeated string additional_origins = 18;
   */
  additionalOrigins: string[];

  /**
   * @generated from field: repeated string allowed_origins = 19;
   */
  allowedOrigins: string[];

  /**
   * @generated from field: bool skip_native_app_success_page = 20;
   */
  skipNativeAppSuccessPage: boolean;

  constructor(data?: PartialMessage<OIDCConfig>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "zitadel.app.v1.OIDCConfig";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): OIDCConfig;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): OIDCConfig;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): OIDCConfig;

  static equals(a: OIDCConfig | PlainMessage<OIDCConfig> | undefined, b: OIDCConfig | PlainMessage<OIDCConfig> | undefined): boolean;
}

/**
 * @generated from message zitadel.app.v1.SAMLConfig
 */
export declare class SAMLConfig extends Message<SAMLConfig> {
  /**
   * @generated from oneof zitadel.app.v1.SAMLConfig.metadata
   */
  metadata: {
    /**
     * @generated from field: bytes metadata_xml = 1;
     */
    value: Uint8Array;
    case: "metadataXml";
  } | {
    /**
     * @generated from field: string metadata_url = 2;
     */
    value: string;
    case: "metadataUrl";
  } | { case: undefined; value?: undefined };

  constructor(data?: PartialMessage<SAMLConfig>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "zitadel.app.v1.SAMLConfig";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): SAMLConfig;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): SAMLConfig;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): SAMLConfig;

  static equals(a: SAMLConfig | PlainMessage<SAMLConfig> | undefined, b: SAMLConfig | PlainMessage<SAMLConfig> | undefined): boolean;
}

/**
 * @generated from message zitadel.app.v1.APIConfig
 */
export declare class APIConfig extends Message<APIConfig> {
  /**
   * @generated from field: string client_id = 1;
   */
  clientId: string;

  /**
   * @generated from field: zitadel.app.v1.APIAuthMethodType auth_method_type = 3;
   */
  authMethodType: APIAuthMethodType;

  constructor(data?: PartialMessage<APIConfig>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "zitadel.app.v1.APIConfig";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): APIConfig;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): APIConfig;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): APIConfig;

  static equals(a: APIConfig | PlainMessage<APIConfig> | undefined, b: APIConfig | PlainMessage<APIConfig> | undefined): boolean;
}
