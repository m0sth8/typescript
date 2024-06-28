// @generated by protoc-gen-es v1.10.0 with parameter "target=ts"
// @generated from file zitadel/options.proto (package zitadel.v1, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import type { BinaryReadOptions, FieldList, JsonReadOptions, JsonValue, PartialMessage, PlainMessage } from "@bufbuild/protobuf";
import { Message, MethodOptions, proto3 } from "@bufbuild/protobuf";

/**
 * @generated from message zitadel.v1.AuthOption
 */
export class AuthOption extends Message<AuthOption> {
  /**
   * @generated from field: string permission = 1;
   */
  permission = "";

  /**
   * @generated from field: string check_field_name = 2;
   */
  checkFieldName = "";

  constructor(data?: PartialMessage<AuthOption>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "zitadel.v1.AuthOption";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "permission", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "check_field_name", kind: "scalar", T: 9 /* ScalarType.STRING */ },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): AuthOption {
    return new AuthOption().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): AuthOption {
    return new AuthOption().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): AuthOption {
    return new AuthOption().fromJsonString(jsonString, options);
  }

  static equals(a: AuthOption | PlainMessage<AuthOption> | undefined, b: AuthOption | PlainMessage<AuthOption> | undefined): boolean {
    return proto3.util.equals(AuthOption, a, b);
  }
}

/**
 * @generated from extension: zitadel.v1.AuthOption auth_option = 50000;
 */
export const auth_option = proto3.makeExtension<MethodOptions, AuthOption>(
  "zitadel.v1.auth_option", 
  MethodOptions, 
  () => ({ no: 50000, kind: "message", T: AuthOption }),
);

