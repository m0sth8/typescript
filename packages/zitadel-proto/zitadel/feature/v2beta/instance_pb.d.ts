// @generated by protoc-gen-es v1.9.0
// @generated from file zitadel/feature/v2beta/instance.proto (package zitadel.feature.v2beta, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import type { BinaryReadOptions, FieldList, JsonReadOptions, JsonValue, PartialMessage, PlainMessage } from "@bufbuild/protobuf";
import { Message, proto3 } from "@bufbuild/protobuf";
import type { Details } from "../../object/v2beta/object_pb.js";
import type { FeatureFlag } from "./feature_pb.js";

/**
 * @generated from message zitadel.feature.v2beta.SetInstanceFeaturesRequest
 */
export declare class SetInstanceFeaturesRequest extends Message<SetInstanceFeaturesRequest> {
  /**
   * @generated from field: optional bool login_default_org = 1;
   */
  loginDefaultOrg?: boolean;

  /**
   * @generated from field: optional bool oidc_trigger_introspection_projections = 2;
   */
  oidcTriggerIntrospectionProjections?: boolean;

  /**
   * @generated from field: optional bool oidc_legacy_introspection = 3;
   */
  oidcLegacyIntrospection?: boolean;

  /**
   * @generated from field: optional bool user_schema = 4;
   */
  userSchema?: boolean;

  /**
   * @generated from field: optional bool oidc_token_exchange = 5;
   */
  oidcTokenExchange?: boolean;

  /**
   * @generated from field: optional bool actions = 6;
   */
  actions?: boolean;

  constructor(data?: PartialMessage<SetInstanceFeaturesRequest>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "zitadel.feature.v2beta.SetInstanceFeaturesRequest";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): SetInstanceFeaturesRequest;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): SetInstanceFeaturesRequest;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): SetInstanceFeaturesRequest;

  static equals(a: SetInstanceFeaturesRequest | PlainMessage<SetInstanceFeaturesRequest> | undefined, b: SetInstanceFeaturesRequest | PlainMessage<SetInstanceFeaturesRequest> | undefined): boolean;
}

/**
 * @generated from message zitadel.feature.v2beta.SetInstanceFeaturesResponse
 */
export declare class SetInstanceFeaturesResponse extends Message<SetInstanceFeaturesResponse> {
  /**
   * @generated from field: zitadel.object.v2beta.Details details = 1;
   */
  details?: Details;

  constructor(data?: PartialMessage<SetInstanceFeaturesResponse>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "zitadel.feature.v2beta.SetInstanceFeaturesResponse";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): SetInstanceFeaturesResponse;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): SetInstanceFeaturesResponse;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): SetInstanceFeaturesResponse;

  static equals(a: SetInstanceFeaturesResponse | PlainMessage<SetInstanceFeaturesResponse> | undefined, b: SetInstanceFeaturesResponse | PlainMessage<SetInstanceFeaturesResponse> | undefined): boolean;
}

/**
 * @generated from message zitadel.feature.v2beta.ResetInstanceFeaturesRequest
 */
export declare class ResetInstanceFeaturesRequest extends Message<ResetInstanceFeaturesRequest> {
  constructor(data?: PartialMessage<ResetInstanceFeaturesRequest>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "zitadel.feature.v2beta.ResetInstanceFeaturesRequest";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): ResetInstanceFeaturesRequest;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): ResetInstanceFeaturesRequest;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): ResetInstanceFeaturesRequest;

  static equals(a: ResetInstanceFeaturesRequest | PlainMessage<ResetInstanceFeaturesRequest> | undefined, b: ResetInstanceFeaturesRequest | PlainMessage<ResetInstanceFeaturesRequest> | undefined): boolean;
}

/**
 * @generated from message zitadel.feature.v2beta.ResetInstanceFeaturesResponse
 */
export declare class ResetInstanceFeaturesResponse extends Message<ResetInstanceFeaturesResponse> {
  /**
   * @generated from field: zitadel.object.v2beta.Details details = 1;
   */
  details?: Details;

  constructor(data?: PartialMessage<ResetInstanceFeaturesResponse>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "zitadel.feature.v2beta.ResetInstanceFeaturesResponse";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): ResetInstanceFeaturesResponse;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): ResetInstanceFeaturesResponse;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): ResetInstanceFeaturesResponse;

  static equals(a: ResetInstanceFeaturesResponse | PlainMessage<ResetInstanceFeaturesResponse> | undefined, b: ResetInstanceFeaturesResponse | PlainMessage<ResetInstanceFeaturesResponse> | undefined): boolean;
}

/**
 * @generated from message zitadel.feature.v2beta.GetInstanceFeaturesRequest
 */
export declare class GetInstanceFeaturesRequest extends Message<GetInstanceFeaturesRequest> {
  /**
   * @generated from field: bool inheritance = 1;
   */
  inheritance: boolean;

  constructor(data?: PartialMessage<GetInstanceFeaturesRequest>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "zitadel.feature.v2beta.GetInstanceFeaturesRequest";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): GetInstanceFeaturesRequest;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): GetInstanceFeaturesRequest;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): GetInstanceFeaturesRequest;

  static equals(a: GetInstanceFeaturesRequest | PlainMessage<GetInstanceFeaturesRequest> | undefined, b: GetInstanceFeaturesRequest | PlainMessage<GetInstanceFeaturesRequest> | undefined): boolean;
}

/**
 * @generated from message zitadel.feature.v2beta.GetInstanceFeaturesResponse
 */
export declare class GetInstanceFeaturesResponse extends Message<GetInstanceFeaturesResponse> {
  /**
   * @generated from field: zitadel.object.v2beta.Details details = 1;
   */
  details?: Details;

  /**
   * @generated from field: zitadel.feature.v2beta.FeatureFlag login_default_org = 2;
   */
  loginDefaultOrg?: FeatureFlag;

  /**
   * @generated from field: zitadel.feature.v2beta.FeatureFlag oidc_trigger_introspection_projections = 3;
   */
  oidcTriggerIntrospectionProjections?: FeatureFlag;

  /**
   * @generated from field: zitadel.feature.v2beta.FeatureFlag oidc_legacy_introspection = 4;
   */
  oidcLegacyIntrospection?: FeatureFlag;

  /**
   * @generated from field: zitadel.feature.v2beta.FeatureFlag user_schema = 5;
   */
  userSchema?: FeatureFlag;

  /**
   * @generated from field: zitadel.feature.v2beta.FeatureFlag oidc_token_exchange = 6;
   */
  oidcTokenExchange?: FeatureFlag;

  /**
   * @generated from field: zitadel.feature.v2beta.FeatureFlag actions = 7;
   */
  actions?: FeatureFlag;

  constructor(data?: PartialMessage<GetInstanceFeaturesResponse>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "zitadel.feature.v2beta.GetInstanceFeaturesResponse";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): GetInstanceFeaturesResponse;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): GetInstanceFeaturesResponse;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): GetInstanceFeaturesResponse;

  static equals(a: GetInstanceFeaturesResponse | PlainMessage<GetInstanceFeaturesResponse> | undefined, b: GetInstanceFeaturesResponse | PlainMessage<GetInstanceFeaturesResponse> | undefined): boolean;
}
