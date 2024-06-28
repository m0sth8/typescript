// @generated by protoc-gen-es v1.10.0
// @generated from file zitadel/action/v3alpha/query.proto (package zitadel.action.v3alpha, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import { proto3 } from "@bufbuild/protobuf";
import { Condition } from "./execution_pb.js";
import { TextQueryMethod } from "../../object/v2beta/object_pb.js";

/**
 * @generated from enum zitadel.action.v3alpha.ExecutionType
 */
export const ExecutionType = /*@__PURE__*/ proto3.makeEnum(
  "zitadel.action.v3alpha.ExecutionType",
  [
    {no: 0, name: "EXECUTION_TYPE_UNSPECIFIED", localName: "UNSPECIFIED"},
    {no: 1, name: "EXECUTION_TYPE_REQUEST", localName: "REQUEST"},
    {no: 2, name: "EXECUTION_TYPE_RESPONSE", localName: "RESPONSE"},
    {no: 3, name: "EXECUTION_TYPE_EVENT", localName: "EVENT"},
    {no: 4, name: "EXECUTION_TYPE_FUNCTION", localName: "FUNCTION"},
  ],
);

/**
 * @generated from enum zitadel.action.v3alpha.TargetFieldName
 */
export const TargetFieldName = /*@__PURE__*/ proto3.makeEnum(
  "zitadel.action.v3alpha.TargetFieldName",
  [
    {no: 0, name: "FIELD_NAME_UNSPECIFIED"},
    {no: 1, name: "FIELD_NAME_ID"},
    {no: 2, name: "FIELD_NAME_CREATION_DATE"},
    {no: 3, name: "FIELD_NAME_CHANGE_DATE"},
    {no: 4, name: "FIELD_NAME_NAME"},
    {no: 5, name: "FIELD_NAME_TARGET_TYPE"},
    {no: 6, name: "FIELD_NAME_URL"},
    {no: 7, name: "FIELD_NAME_TIMEOUT"},
    {no: 8, name: "FIELD_NAME_ASYNC"},
    {no: 9, name: "FIELD_NAME_INTERRUPT_ON_ERROR"},
  ],
);

/**
 * @generated from message zitadel.action.v3alpha.SearchQuery
 */
export const SearchQuery = /*@__PURE__*/ proto3.makeMessageType(
  "zitadel.action.v3alpha.SearchQuery",
  () => [
    { no: 1, name: "in_conditions_query", kind: "message", T: InConditionsQuery, oneof: "query" },
    { no: 2, name: "execution_type_query", kind: "message", T: ExecutionTypeQuery, oneof: "query" },
    { no: 3, name: "target_query", kind: "message", T: TargetQuery, oneof: "query" },
    { no: 4, name: "include_query", kind: "message", T: IncludeQuery, oneof: "query" },
  ],
);

/**
 * @generated from message zitadel.action.v3alpha.InConditionsQuery
 */
export const InConditionsQuery = /*@__PURE__*/ proto3.makeMessageType(
  "zitadel.action.v3alpha.InConditionsQuery",
  () => [
    { no: 1, name: "conditions", kind: "message", T: Condition, repeated: true },
  ],
);

/**
 * @generated from message zitadel.action.v3alpha.ExecutionTypeQuery
 */
export const ExecutionTypeQuery = /*@__PURE__*/ proto3.makeMessageType(
  "zitadel.action.v3alpha.ExecutionTypeQuery",
  () => [
    { no: 1, name: "execution_type", kind: "enum", T: proto3.getEnumType(ExecutionType) },
  ],
);

/**
 * @generated from message zitadel.action.v3alpha.TargetQuery
 */
export const TargetQuery = /*@__PURE__*/ proto3.makeMessageType(
  "zitadel.action.v3alpha.TargetQuery",
  () => [
    { no: 1, name: "target_id", kind: "scalar", T: 9 /* ScalarType.STRING */ },
  ],
);

/**
 * @generated from message zitadel.action.v3alpha.IncludeQuery
 */
export const IncludeQuery = /*@__PURE__*/ proto3.makeMessageType(
  "zitadel.action.v3alpha.IncludeQuery",
  () => [
    { no: 1, name: "include", kind: "message", T: Condition },
  ],
);

/**
 * @generated from message zitadel.action.v3alpha.TargetSearchQuery
 */
export const TargetSearchQuery = /*@__PURE__*/ proto3.makeMessageType(
  "zitadel.action.v3alpha.TargetSearchQuery",
  () => [
    { no: 1, name: "target_name_query", kind: "message", T: TargetNameQuery, oneof: "query" },
    { no: 2, name: "in_target_ids_query", kind: "message", T: InTargetIDsQuery, oneof: "query" },
  ],
);

/**
 * @generated from message zitadel.action.v3alpha.TargetNameQuery
 */
export const TargetNameQuery = /*@__PURE__*/ proto3.makeMessageType(
  "zitadel.action.v3alpha.TargetNameQuery",
  () => [
    { no: 1, name: "target_name", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "method", kind: "enum", T: proto3.getEnumType(TextQueryMethod) },
  ],
);

/**
 * @generated from message zitadel.action.v3alpha.InTargetIDsQuery
 */
export const InTargetIDsQuery = /*@__PURE__*/ proto3.makeMessageType(
  "zitadel.action.v3alpha.InTargetIDsQuery",
  () => [
    { no: 1, name: "target_ids", kind: "scalar", T: 9 /* ScalarType.STRING */, repeated: true },
  ],
);

