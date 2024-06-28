// @generated by protoc-gen-es v1.10.0
// @generated from file zitadel/feature/v2beta/organization.proto (package zitadel.feature.v2beta, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import { proto3 } from "@bufbuild/protobuf";
import { Details } from "../../object/v2beta/object_pb.js";

/**
 * @generated from message zitadel.feature.v2beta.SetOrganizationFeaturesRequest
 */
export const SetOrganizationFeaturesRequest = /*@__PURE__*/ proto3.makeMessageType(
  "zitadel.feature.v2beta.SetOrganizationFeaturesRequest",
  () => [
    { no: 1, name: "organization_id", kind: "scalar", T: 9 /* ScalarType.STRING */ },
  ],
);

/**
 * @generated from message zitadel.feature.v2beta.SetOrganizationFeaturesResponse
 */
export const SetOrganizationFeaturesResponse = /*@__PURE__*/ proto3.makeMessageType(
  "zitadel.feature.v2beta.SetOrganizationFeaturesResponse",
  () => [
    { no: 1, name: "details", kind: "message", T: Details },
  ],
);

/**
 * @generated from message zitadel.feature.v2beta.ResetOrganizationFeaturesRequest
 */
export const ResetOrganizationFeaturesRequest = /*@__PURE__*/ proto3.makeMessageType(
  "zitadel.feature.v2beta.ResetOrganizationFeaturesRequest",
  () => [
    { no: 1, name: "organization_id", kind: "scalar", T: 9 /* ScalarType.STRING */ },
  ],
);

/**
 * @generated from message zitadel.feature.v2beta.ResetOrganizationFeaturesResponse
 */
export const ResetOrganizationFeaturesResponse = /*@__PURE__*/ proto3.makeMessageType(
  "zitadel.feature.v2beta.ResetOrganizationFeaturesResponse",
  () => [
    { no: 1, name: "details", kind: "message", T: Details },
  ],
);

/**
 * @generated from message zitadel.feature.v2beta.GetOrganizationFeaturesRequest
 */
export const GetOrganizationFeaturesRequest = /*@__PURE__*/ proto3.makeMessageType(
  "zitadel.feature.v2beta.GetOrganizationFeaturesRequest",
  () => [
    { no: 1, name: "organization_id", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "inheritance", kind: "scalar", T: 8 /* ScalarType.BOOL */ },
  ],
);

/**
 * @generated from message zitadel.feature.v2beta.GetOrganizationFeaturesResponse
 */
export const GetOrganizationFeaturesResponse = /*@__PURE__*/ proto3.makeMessageType(
  "zitadel.feature.v2beta.GetOrganizationFeaturesResponse",
  () => [
    { no: 1, name: "details", kind: "message", T: Details },
  ],
);

