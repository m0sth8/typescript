// @generated by protoc-gen-es v1.10.0
// @generated from file zitadel/protoc_gen_zitadel/v2/options.proto (package zitadel.protoc_gen_zitadel.v2, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import { MethodOptions, proto3 } from "@bufbuild/protobuf";

/**
 * @generated from message zitadel.protoc_gen_zitadel.v2.Options
 */
export const Options = /*@__PURE__*/ proto3.makeMessageType(
  "zitadel.protoc_gen_zitadel.v2.Options",
  () => [
    { no: 1, name: "auth_option", kind: "message", T: AuthOption },
    { no: 2, name: "http_response", kind: "message", T: CustomHTTPResponse },
  ],
);

/**
 * @generated from message zitadel.protoc_gen_zitadel.v2.AuthOption
 */
export const AuthOption = /*@__PURE__*/ proto3.makeMessageType(
  "zitadel.protoc_gen_zitadel.v2.AuthOption",
  () => [
    { no: 1, name: "permission", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 3, name: "org_field", kind: "scalar", T: 9 /* ScalarType.STRING */ },
  ],
);

/**
 * @generated from message zitadel.protoc_gen_zitadel.v2.CustomHTTPResponse
 */
export const CustomHTTPResponse = /*@__PURE__*/ proto3.makeMessageType(
  "zitadel.protoc_gen_zitadel.v2.CustomHTTPResponse",
  () => [
    { no: 1, name: "success_code", kind: "scalar", T: 5 /* ScalarType.INT32 */ },
  ],
);

/**
 * @generated from extension: zitadel.protoc_gen_zitadel.v2.Options options = 50001;
 */
export const options = proto3.makeExtension(
  "zitadel.protoc_gen_zitadel.v2.options", 
  MethodOptions, 
  () => ({ no: 50001, kind: "message", T: Options }),
);

