// @generated by protoc-gen-es v1.10.0 with parameter "target=ts"
// @generated from file zitadel/settings/v2beta/lockout_settings.proto (package zitadel.settings.v2beta, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import type { BinaryReadOptions, FieldList, JsonReadOptions, JsonValue, PartialMessage, PlainMessage } from "@bufbuild/protobuf";
import { Message, proto3, protoInt64 } from "@bufbuild/protobuf";
import { ResourceOwnerType } from "./settings_pb.js";

/**
 * @generated from message zitadel.settings.v2beta.LockoutSettings
 */
export class LockoutSettings extends Message<LockoutSettings> {
  /**
   * @generated from field: uint64 max_password_attempts = 1;
   */
  maxPasswordAttempts = protoInt64.zero;

  /**
   * resource_owner_type returns if the settings is managed on the organization or on the instance
   *
   * @generated from field: zitadel.settings.v2beta.ResourceOwnerType resource_owner_type = 2;
   */
  resourceOwnerType = ResourceOwnerType.UNSPECIFIED;

  /**
   * @generated from field: uint64 max_otp_attempts = 3;
   */
  maxOtpAttempts = protoInt64.zero;

  constructor(data?: PartialMessage<LockoutSettings>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "zitadel.settings.v2beta.LockoutSettings";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "max_password_attempts", kind: "scalar", T: 4 /* ScalarType.UINT64 */ },
    { no: 2, name: "resource_owner_type", kind: "enum", T: proto3.getEnumType(ResourceOwnerType) },
    { no: 3, name: "max_otp_attempts", kind: "scalar", T: 4 /* ScalarType.UINT64 */ },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): LockoutSettings {
    return new LockoutSettings().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): LockoutSettings {
    return new LockoutSettings().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): LockoutSettings {
    return new LockoutSettings().fromJsonString(jsonString, options);
  }

  static equals(a: LockoutSettings | PlainMessage<LockoutSettings> | undefined, b: LockoutSettings | PlainMessage<LockoutSettings> | undefined): boolean {
    return proto3.util.equals(LockoutSettings, a, b);
  }
}

