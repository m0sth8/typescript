// @generated by protoc-gen-es v1.10.0
// @generated from file zitadel/object/v2beta/object.proto (package zitadel.object.v2beta, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import type { BinaryReadOptions, FieldList, JsonReadOptions, JsonValue, PartialMessage, PlainMessage, Timestamp } from "@bufbuild/protobuf";
import { Message, proto3 } from "@bufbuild/protobuf";

/**
 * @generated from enum zitadel.object.v2beta.TextQueryMethod
 */
export declare enum TextQueryMethod {
  /**
   * @generated from enum value: TEXT_QUERY_METHOD_EQUALS = 0;
   */
  EQUALS = 0,

  /**
   * @generated from enum value: TEXT_QUERY_METHOD_EQUALS_IGNORE_CASE = 1;
   */
  EQUALS_IGNORE_CASE = 1,

  /**
   * @generated from enum value: TEXT_QUERY_METHOD_STARTS_WITH = 2;
   */
  STARTS_WITH = 2,

  /**
   * @generated from enum value: TEXT_QUERY_METHOD_STARTS_WITH_IGNORE_CASE = 3;
   */
  STARTS_WITH_IGNORE_CASE = 3,

  /**
   * @generated from enum value: TEXT_QUERY_METHOD_CONTAINS = 4;
   */
  CONTAINS = 4,

  /**
   * @generated from enum value: TEXT_QUERY_METHOD_CONTAINS_IGNORE_CASE = 5;
   */
  CONTAINS_IGNORE_CASE = 5,

  /**
   * @generated from enum value: TEXT_QUERY_METHOD_ENDS_WITH = 6;
   */
  ENDS_WITH = 6,

  /**
   * @generated from enum value: TEXT_QUERY_METHOD_ENDS_WITH_IGNORE_CASE = 7;
   */
  ENDS_WITH_IGNORE_CASE = 7,
}

/**
 * @generated from enum zitadel.object.v2beta.ListQueryMethod
 */
export declare enum ListQueryMethod {
  /**
   * @generated from enum value: LIST_QUERY_METHOD_IN = 0;
   */
  IN = 0,
}

/**
 * @generated from enum zitadel.object.v2beta.TimestampQueryMethod
 */
export declare enum TimestampQueryMethod {
  /**
   * @generated from enum value: TIMESTAMP_QUERY_METHOD_EQUALS = 0;
   */
  EQUALS = 0,

  /**
   * @generated from enum value: TIMESTAMP_QUERY_METHOD_GREATER = 1;
   */
  GREATER = 1,

  /**
   * @generated from enum value: TIMESTAMP_QUERY_METHOD_GREATER_OR_EQUALS = 2;
   */
  GREATER_OR_EQUALS = 2,

  /**
   * @generated from enum value: TIMESTAMP_QUERY_METHOD_LESS = 3;
   */
  LESS = 3,

  /**
   * @generated from enum value: TIMESTAMP_QUERY_METHOD_LESS_OR_EQUALS = 4;
   */
  LESS_OR_EQUALS = 4,
}

/**
 * Deprecated: use Organization
 *
 * @generated from message zitadel.object.v2beta.Organisation
 */
export declare class Organisation extends Message<Organisation> {
  /**
   * @generated from oneof zitadel.object.v2beta.Organisation.org
   */
  org: {
    /**
     * @generated from field: string org_id = 1;
     */
    value: string;
    case: "orgId";
  } | {
    /**
     * @generated from field: string org_domain = 2;
     */
    value: string;
    case: "orgDomain";
  } | { case: undefined; value?: undefined };

  constructor(data?: PartialMessage<Organisation>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "zitadel.object.v2beta.Organisation";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): Organisation;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): Organisation;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): Organisation;

  static equals(a: Organisation | PlainMessage<Organisation> | undefined, b: Organisation | PlainMessage<Organisation> | undefined): boolean;
}

/**
 * @generated from message zitadel.object.v2beta.Organization
 */
export declare class Organization extends Message<Organization> {
  /**
   * @generated from oneof zitadel.object.v2beta.Organization.org
   */
  org: {
    /**
     * @generated from field: string org_id = 1;
     */
    value: string;
    case: "orgId";
  } | {
    /**
     * @generated from field: string org_domain = 2;
     */
    value: string;
    case: "orgDomain";
  } | { case: undefined; value?: undefined };

  constructor(data?: PartialMessage<Organization>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "zitadel.object.v2beta.Organization";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): Organization;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): Organization;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): Organization;

  static equals(a: Organization | PlainMessage<Organization> | undefined, b: Organization | PlainMessage<Organization> | undefined): boolean;
}

/**
 * @generated from message zitadel.object.v2beta.RequestContext
 */
export declare class RequestContext extends Message<RequestContext> {
  /**
   * @generated from oneof zitadel.object.v2beta.RequestContext.resource_owner
   */
  resourceOwner: {
    /**
     * @generated from field: string org_id = 1;
     */
    value: string;
    case: "orgId";
  } | {
    /**
     * @generated from field: bool instance = 2;
     */
    value: boolean;
    case: "instance";
  } | { case: undefined; value?: undefined };

  constructor(data?: PartialMessage<RequestContext>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "zitadel.object.v2beta.RequestContext";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): RequestContext;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): RequestContext;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): RequestContext;

  static equals(a: RequestContext | PlainMessage<RequestContext> | undefined, b: RequestContext | PlainMessage<RequestContext> | undefined): boolean;
}

/**
 * @generated from message zitadel.object.v2beta.ListQuery
 */
export declare class ListQuery extends Message<ListQuery> {
  /**
   * @generated from field: uint64 offset = 1;
   */
  offset: bigint;

  /**
   * @generated from field: uint32 limit = 2;
   */
  limit: number;

  /**
   * @generated from field: bool asc = 3;
   */
  asc: boolean;

  constructor(data?: PartialMessage<ListQuery>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "zitadel.object.v2beta.ListQuery";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): ListQuery;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): ListQuery;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): ListQuery;

  static equals(a: ListQuery | PlainMessage<ListQuery> | undefined, b: ListQuery | PlainMessage<ListQuery> | undefined): boolean;
}

/**
 * @generated from message zitadel.object.v2beta.Details
 */
export declare class Details extends Message<Details> {
  /**
   * sequence represents the order of events. It's always counting
   *
   * on read: the sequence of the last event reduced by the projection
   *
   * on manipulation: the timestamp of the event(s) added by the manipulation
   *
   * @generated from field: uint64 sequence = 1;
   */
  sequence: bigint;

  /**
   * change_date is the timestamp when the object was changed
   *
   * on read: the timestamp of the last event reduced by the projection
   *
   * on manipulation: the timestamp of the event(s) added by the manipulation
   *
   * @generated from field: google.protobuf.Timestamp change_date = 2;
   */
  changeDate?: Timestamp;

  /**
   * resource_owner is the organization or instance_id an object belongs to
   *
   * @generated from field: string resource_owner = 3;
   */
  resourceOwner: string;

  constructor(data?: PartialMessage<Details>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "zitadel.object.v2beta.Details";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): Details;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): Details;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): Details;

  static equals(a: Details | PlainMessage<Details> | undefined, b: Details | PlainMessage<Details> | undefined): boolean;
}

/**
 * @generated from message zitadel.object.v2beta.ListDetails
 */
export declare class ListDetails extends Message<ListDetails> {
  /**
   * @generated from field: uint64 total_result = 1;
   */
  totalResult: bigint;

  /**
   * @generated from field: uint64 processed_sequence = 2;
   */
  processedSequence: bigint;

  /**
   * @generated from field: google.protobuf.Timestamp timestamp = 3;
   */
  timestamp?: Timestamp;

  constructor(data?: PartialMessage<ListDetails>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "zitadel.object.v2beta.ListDetails";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): ListDetails;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): ListDetails;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): ListDetails;

  static equals(a: ListDetails | PlainMessage<ListDetails> | undefined, b: ListDetails | PlainMessage<ListDetails> | undefined): boolean;
}

