// @generated by protoc-gen-es v1.10.0
// @generated from file zitadel/settings/v2beta/lockout_settings.proto (package zitadel.settings.v2beta, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import { proto3 } from "@bufbuild/protobuf";
import { ResourceOwnerType } from "./settings_pb.js";

/**
 * @generated from message zitadel.settings.v2beta.LockoutSettings
 */
export const LockoutSettings = /*@__PURE__*/ proto3.makeMessageType(
  "zitadel.settings.v2beta.LockoutSettings",
  () => [
    { no: 1, name: "max_password_attempts", kind: "scalar", T: 4 /* ScalarType.UINT64 */ },
    { no: 2, name: "resource_owner_type", kind: "enum", T: proto3.getEnumType(ResourceOwnerType) },
    { no: 3, name: "max_otp_attempts", kind: "scalar", T: 4 /* ScalarType.UINT64 */ },
  ],
);

