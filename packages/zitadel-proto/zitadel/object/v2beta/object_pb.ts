// @generated by protoc-gen-es v1.10.0 with parameter "target=ts"
// @generated from file zitadel/object/v2beta/object.proto (package zitadel.object.v2beta, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import type { BinaryReadOptions, FieldList, JsonReadOptions, JsonValue, PartialMessage, PlainMessage } from "@bufbuild/protobuf";
import { Message, proto3, protoInt64, Timestamp } from "@bufbuild/protobuf";

/**
 * @generated from enum zitadel.object.v2beta.TextQueryMethod
 */
export enum TextQueryMethod {
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
// Retrieve enum metadata with: proto3.getEnumType(TextQueryMethod)
proto3.util.setEnumType(TextQueryMethod, "zitadel.object.v2beta.TextQueryMethod", [
  { no: 0, name: "TEXT_QUERY_METHOD_EQUALS" },
  { no: 1, name: "TEXT_QUERY_METHOD_EQUALS_IGNORE_CASE" },
  { no: 2, name: "TEXT_QUERY_METHOD_STARTS_WITH" },
  { no: 3, name: "TEXT_QUERY_METHOD_STARTS_WITH_IGNORE_CASE" },
  { no: 4, name: "TEXT_QUERY_METHOD_CONTAINS" },
  { no: 5, name: "TEXT_QUERY_METHOD_CONTAINS_IGNORE_CASE" },
  { no: 6, name: "TEXT_QUERY_METHOD_ENDS_WITH" },
  { no: 7, name: "TEXT_QUERY_METHOD_ENDS_WITH_IGNORE_CASE" },
]);

/**
 * @generated from enum zitadel.object.v2beta.ListQueryMethod
 */
export enum ListQueryMethod {
  /**
   * @generated from enum value: LIST_QUERY_METHOD_IN = 0;
   */
  IN = 0,
}
// Retrieve enum metadata with: proto3.getEnumType(ListQueryMethod)
proto3.util.setEnumType(ListQueryMethod, "zitadel.object.v2beta.ListQueryMethod", [
  { no: 0, name: "LIST_QUERY_METHOD_IN" },
]);

/**
 * @generated from enum zitadel.object.v2beta.TimestampQueryMethod
 */
export enum TimestampQueryMethod {
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
// Retrieve enum metadata with: proto3.getEnumType(TimestampQueryMethod)
proto3.util.setEnumType(TimestampQueryMethod, "zitadel.object.v2beta.TimestampQueryMethod", [
  { no: 0, name: "TIMESTAMP_QUERY_METHOD_EQUALS" },
  { no: 1, name: "TIMESTAMP_QUERY_METHOD_GREATER" },
  { no: 2, name: "TIMESTAMP_QUERY_METHOD_GREATER_OR_EQUALS" },
  { no: 3, name: "TIMESTAMP_QUERY_METHOD_LESS" },
  { no: 4, name: "TIMESTAMP_QUERY_METHOD_LESS_OR_EQUALS" },
]);

/**
 * Deprecated: use Organization
 *
 * @generated from message zitadel.object.v2beta.Organisation
 */
export class Organisation extends Message<Organisation> {
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
  } | { case: undefined; value?: undefined } = { case: undefined };

  constructor(data?: PartialMessage<Organisation>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "zitadel.object.v2beta.Organisation";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "org_id", kind: "scalar", T: 9 /* ScalarType.STRING */, oneof: "org" },
    { no: 2, name: "org_domain", kind: "scalar", T: 9 /* ScalarType.STRING */, oneof: "org" },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): Organisation {
    return new Organisation().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): Organisation {
    return new Organisation().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): Organisation {
    return new Organisation().fromJsonString(jsonString, options);
  }

  static equals(a: Organisation | PlainMessage<Organisation> | undefined, b: Organisation | PlainMessage<Organisation> | undefined): boolean {
    return proto3.util.equals(Organisation, a, b);
  }
}

/**
 * @generated from message zitadel.object.v2beta.Organization
 */
export class Organization extends Message<Organization> {
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
  } | { case: undefined; value?: undefined } = { case: undefined };

  constructor(data?: PartialMessage<Organization>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "zitadel.object.v2beta.Organization";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "org_id", kind: "scalar", T: 9 /* ScalarType.STRING */, oneof: "org" },
    { no: 2, name: "org_domain", kind: "scalar", T: 9 /* ScalarType.STRING */, oneof: "org" },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): Organization {
    return new Organization().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): Organization {
    return new Organization().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): Organization {
    return new Organization().fromJsonString(jsonString, options);
  }

  static equals(a: Organization | PlainMessage<Organization> | undefined, b: Organization | PlainMessage<Organization> | undefined): boolean {
    return proto3.util.equals(Organization, a, b);
  }
}

/**
 * @generated from message zitadel.object.v2beta.RequestContext
 */
export class RequestContext extends Message<RequestContext> {
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
  } | { case: undefined; value?: undefined } = { case: undefined };

  constructor(data?: PartialMessage<RequestContext>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "zitadel.object.v2beta.RequestContext";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "org_id", kind: "scalar", T: 9 /* ScalarType.STRING */, oneof: "resource_owner" },
    { no: 2, name: "instance", kind: "scalar", T: 8 /* ScalarType.BOOL */, oneof: "resource_owner" },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): RequestContext {
    return new RequestContext().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): RequestContext {
    return new RequestContext().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): RequestContext {
    return new RequestContext().fromJsonString(jsonString, options);
  }

  static equals(a: RequestContext | PlainMessage<RequestContext> | undefined, b: RequestContext | PlainMessage<RequestContext> | undefined): boolean {
    return proto3.util.equals(RequestContext, a, b);
  }
}

/**
 * @generated from message zitadel.object.v2beta.ListQuery
 */
export class ListQuery extends Message<ListQuery> {
  /**
   * @generated from field: uint64 offset = 1;
   */
  offset = protoInt64.zero;

  /**
   * @generated from field: uint32 limit = 2;
   */
  limit = 0;

  /**
   * @generated from field: bool asc = 3;
   */
  asc = false;

  constructor(data?: PartialMessage<ListQuery>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "zitadel.object.v2beta.ListQuery";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "offset", kind: "scalar", T: 4 /* ScalarType.UINT64 */ },
    { no: 2, name: "limit", kind: "scalar", T: 13 /* ScalarType.UINT32 */ },
    { no: 3, name: "asc", kind: "scalar", T: 8 /* ScalarType.BOOL */ },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): ListQuery {
    return new ListQuery().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): ListQuery {
    return new ListQuery().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): ListQuery {
    return new ListQuery().fromJsonString(jsonString, options);
  }

  static equals(a: ListQuery | PlainMessage<ListQuery> | undefined, b: ListQuery | PlainMessage<ListQuery> | undefined): boolean {
    return proto3.util.equals(ListQuery, a, b);
  }
}

/**
 * @generated from message zitadel.object.v2beta.Details
 */
export class Details extends Message<Details> {
  /**
   * sequence represents the order of events. It's always counting
   *
   * on read: the sequence of the last event reduced by the projection
   *
   * on manipulation: the timestamp of the event(s) added by the manipulation
   *
   * @generated from field: uint64 sequence = 1;
   */
  sequence = protoInt64.zero;

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
  resourceOwner = "";

  constructor(data?: PartialMessage<Details>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "zitadel.object.v2beta.Details";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "sequence", kind: "scalar", T: 4 /* ScalarType.UINT64 */ },
    { no: 2, name: "change_date", kind: "message", T: Timestamp },
    { no: 3, name: "resource_owner", kind: "scalar", T: 9 /* ScalarType.STRING */ },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): Details {
    return new Details().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): Details {
    return new Details().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): Details {
    return new Details().fromJsonString(jsonString, options);
  }

  static equals(a: Details | PlainMessage<Details> | undefined, b: Details | PlainMessage<Details> | undefined): boolean {
    return proto3.util.equals(Details, a, b);
  }
}

/**
 * @generated from message zitadel.object.v2beta.ListDetails
 */
export class ListDetails extends Message<ListDetails> {
  /**
   * @generated from field: uint64 total_result = 1;
   */
  totalResult = protoInt64.zero;

  /**
   * @generated from field: uint64 processed_sequence = 2;
   */
  processedSequence = protoInt64.zero;

  /**
   * @generated from field: google.protobuf.Timestamp timestamp = 3;
   */
  timestamp?: Timestamp;

  constructor(data?: PartialMessage<ListDetails>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "zitadel.object.v2beta.ListDetails";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "total_result", kind: "scalar", T: 4 /* ScalarType.UINT64 */ },
    { no: 2, name: "processed_sequence", kind: "scalar", T: 4 /* ScalarType.UINT64 */ },
    { no: 3, name: "timestamp", kind: "message", T: Timestamp },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): ListDetails {
    return new ListDetails().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): ListDetails {
    return new ListDetails().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): ListDetails {
    return new ListDetails().fromJsonString(jsonString, options);
  }

  static equals(a: ListDetails | PlainMessage<ListDetails> | undefined, b: ListDetails | PlainMessage<ListDetails> | undefined): boolean {
    return proto3.util.equals(ListDetails, a, b);
  }
}

