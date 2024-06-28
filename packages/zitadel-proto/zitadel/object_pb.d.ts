// @generated by protoc-gen-es v1.10.0
// @generated from file zitadel/object.proto (package zitadel.v1, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import type { BinaryReadOptions, FieldList, JsonReadOptions, JsonValue, PartialMessage, PlainMessage, Timestamp } from "@bufbuild/protobuf";
import { Message, proto3 } from "@bufbuild/protobuf";

/**
 * @generated from enum zitadel.v1.TextQueryMethod
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
 * @generated from enum zitadel.v1.ListQueryMethod
 */
export declare enum ListQueryMethod {
  /**
   * @generated from enum value: LIST_QUERY_METHOD_IN = 0;
   */
  IN = 0,
}

/**
 * @generated from enum zitadel.v1.TimestampQueryMethod
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
 * @generated from message zitadel.v1.ObjectDetails
 */
export declare class ObjectDetails extends Message<ObjectDetails> {
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
   * creation_date is the timestamp where the first operation on the object was made
   *
   * on read: the timestamp of the first event of the object
   *
   * on create: the timestamp of the event(s) added by the manipulation
   *
   * @generated from field: google.protobuf.Timestamp creation_date = 2;
   */
  creationDate?: Timestamp;

  /**
   * change_date is the timestamp when the object was changed
   *
   * on read: the timestamp of the last event reduced by the projection
   *
   * on manipulation: the
   *
   * @generated from field: google.protobuf.Timestamp change_date = 3;
   */
  changeDate?: Timestamp;

  /**
   * resource_owner is the organization an object belongs to
   *
   * @generated from field: string resource_owner = 4;
   */
  resourceOwner: string;

  constructor(data?: PartialMessage<ObjectDetails>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "zitadel.v1.ObjectDetails";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): ObjectDetails;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): ObjectDetails;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): ObjectDetails;

  static equals(a: ObjectDetails | PlainMessage<ObjectDetails> | undefined, b: ObjectDetails | PlainMessage<ObjectDetails> | undefined): boolean;
}

/**
 * @generated from message zitadel.v1.ListQuery
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
  static readonly typeName = "zitadel.v1.ListQuery";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): ListQuery;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): ListQuery;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): ListQuery;

  static equals(a: ListQuery | PlainMessage<ListQuery> | undefined, b: ListQuery | PlainMessage<ListQuery> | undefined): boolean;
}

/**
 * @generated from message zitadel.v1.ListDetails
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
   * @generated from field: google.protobuf.Timestamp view_timestamp = 3;
   */
  viewTimestamp?: Timestamp;

  constructor(data?: PartialMessage<ListDetails>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "zitadel.v1.ListDetails";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): ListDetails;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): ListDetails;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): ListDetails;

  static equals(a: ListDetails | PlainMessage<ListDetails> | undefined, b: ListDetails | PlainMessage<ListDetails> | undefined): boolean;
}

