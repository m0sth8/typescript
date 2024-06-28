// @generated by protoc-gen-es v1.10.0
// @generated from file zitadel/milestone/v1/milestone.proto (package zitadel.milestone.v1, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import type { BinaryReadOptions, FieldList, JsonReadOptions, JsonValue, PartialMessage, PlainMessage, Timestamp } from "@bufbuild/protobuf";
import { Message, proto3 } from "@bufbuild/protobuf";

/**
 * @generated from enum zitadel.milestone.v1.MilestoneType
 */
export declare enum MilestoneType {
  /**
   * @generated from enum value: MILESTONE_TYPE_UNSPECIFIED = 0;
   */
  UNSPECIFIED = 0,

  /**
   * @generated from enum value: MILESTONE_TYPE_INSTANCE_CREATED = 1;
   */
  INSTANCE_CREATED = 1,

  /**
   * @generated from enum value: MILESTONE_TYPE_AUTHENTICATION_SUCCEEDED_ON_INSTANCE = 2;
   */
  AUTHENTICATION_SUCCEEDED_ON_INSTANCE = 2,

  /**
   * @generated from enum value: MILESTONE_TYPE_PROJECT_CREATED = 3;
   */
  PROJECT_CREATED = 3,

  /**
   * @generated from enum value: MILESTONE_TYPE_APPLICATION_CREATED = 4;
   */
  APPLICATION_CREATED = 4,

  /**
   * @generated from enum value: MILESTONE_TYPE_AUTHENTICATION_SUCCEEDED_ON_APPLICATION = 5;
   */
  AUTHENTICATION_SUCCEEDED_ON_APPLICATION = 5,

  /**
   * @generated from enum value: MILESTONE_TYPE_INSTANCE_DELETED = 6;
   */
  INSTANCE_DELETED = 6,
}

/**
 * @generated from enum zitadel.milestone.v1.MilestoneFieldName
 */
export declare enum MilestoneFieldName {
  /**
   * @generated from enum value: MILESTONE_FIELD_NAME_UNSPECIFIED = 0;
   */
  UNSPECIFIED = 0,

  /**
   * @generated from enum value: MILESTONE_FIELD_NAME_TYPE = 1;
   */
  TYPE = 1,

  /**
   * @generated from enum value: MILESTONE_FIELD_NAME_REACHED_DATE = 2;
   */
  REACHED_DATE = 2,
}

/**
 * @generated from message zitadel.milestone.v1.Milestone
 */
export declare class Milestone extends Message<Milestone> {
  /**
   * @generated from field: zitadel.milestone.v1.MilestoneType type = 2;
   */
  type: MilestoneType;

  /**
   * @generated from field: google.protobuf.Timestamp reached_date = 3;
   */
  reachedDate?: Timestamp;

  constructor(data?: PartialMessage<Milestone>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "zitadel.milestone.v1.Milestone";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): Milestone;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): Milestone;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): Milestone;

  static equals(a: Milestone | PlainMessage<Milestone> | undefined, b: Milestone | PlainMessage<Milestone> | undefined): boolean;
}

/**
 * @generated from message zitadel.milestone.v1.MilestoneQuery
 */
export declare class MilestoneQuery extends Message<MilestoneQuery> {
  /**
   * @generated from oneof zitadel.milestone.v1.MilestoneQuery.query
   */
  query: {
    /**
     * @generated from field: zitadel.milestone.v1.IsReachedQuery is_reached_query = 1;
     */
    value: IsReachedQuery;
    case: "isReachedQuery";
  } | { case: undefined; value?: undefined };

  constructor(data?: PartialMessage<MilestoneQuery>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "zitadel.milestone.v1.MilestoneQuery";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): MilestoneQuery;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): MilestoneQuery;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): MilestoneQuery;

  static equals(a: MilestoneQuery | PlainMessage<MilestoneQuery> | undefined, b: MilestoneQuery | PlainMessage<MilestoneQuery> | undefined): boolean;
}

/**
 * @generated from message zitadel.milestone.v1.IsReachedQuery
 */
export declare class IsReachedQuery extends Message<IsReachedQuery> {
  /**
   * @generated from field: bool reached = 1;
   */
  reached: boolean;

  constructor(data?: PartialMessage<IsReachedQuery>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "zitadel.milestone.v1.IsReachedQuery";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): IsReachedQuery;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): IsReachedQuery;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): IsReachedQuery;

  static equals(a: IsReachedQuery | PlainMessage<IsReachedQuery> | undefined, b: IsReachedQuery | PlainMessage<IsReachedQuery> | undefined): boolean;
}

