// @generated by protoc-gen-es v1.10.0 with parameter "target=ts"
// @generated from file zitadel/auth_n_key.proto (package zitadel.authn.v1, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import type { BinaryReadOptions, FieldList, JsonReadOptions, JsonValue, PartialMessage, PlainMessage } from "@bufbuild/protobuf";
import { Message, proto3, Timestamp } from "@bufbuild/protobuf";
import { ObjectDetails } from "./object_pb.js";

/**
 * @generated from enum zitadel.authn.v1.KeyType
 */
export enum KeyType {
  /**
   * @generated from enum value: KEY_TYPE_UNSPECIFIED = 0;
   */
  UNSPECIFIED = 0,

  /**
   * @generated from enum value: KEY_TYPE_JSON = 1;
   */
  JSON = 1,
}
// Retrieve enum metadata with: proto3.getEnumType(KeyType)
proto3.util.setEnumType(KeyType, "zitadel.authn.v1.KeyType", [
  { no: 0, name: "KEY_TYPE_UNSPECIFIED" },
  { no: 1, name: "KEY_TYPE_JSON" },
]);

/**
 * @generated from message zitadel.authn.v1.Key
 */
export class Key extends Message<Key> {
  /**
   * @generated from field: string id = 1;
   */
  id = "";

  /**
   * @generated from field: zitadel.v1.ObjectDetails details = 2;
   */
  details?: ObjectDetails;

  /**
   * @generated from field: zitadel.authn.v1.KeyType type = 3;
   */
  type = KeyType.UNSPECIFIED;

  /**
   * @generated from field: google.protobuf.Timestamp expiration_date = 4;
   */
  expirationDate?: Timestamp;

  constructor(data?: PartialMessage<Key>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "zitadel.authn.v1.Key";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "id", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "details", kind: "message", T: ObjectDetails },
    { no: 3, name: "type", kind: "enum", T: proto3.getEnumType(KeyType) },
    { no: 4, name: "expiration_date", kind: "message", T: Timestamp },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): Key {
    return new Key().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): Key {
    return new Key().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): Key {
    return new Key().fromJsonString(jsonString, options);
  }

  static equals(a: Key | PlainMessage<Key> | undefined, b: Key | PlainMessage<Key> | undefined): boolean {
    return proto3.util.equals(Key, a, b);
  }
}

