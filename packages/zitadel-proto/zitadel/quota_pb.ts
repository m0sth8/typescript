// @generated by protoc-gen-es v1.10.0 with parameter "target=ts"
// @generated from file zitadel/quota.proto (package zitadel.quota.v1, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import type { BinaryReadOptions, FieldList, JsonReadOptions, JsonValue, PartialMessage, PlainMessage } from "@bufbuild/protobuf";
import { Message, proto3 } from "@bufbuild/protobuf";

/**
 * @generated from enum zitadel.quota.v1.Unit
 */
export enum Unit {
  /**
   * @generated from enum value: UNIT_UNIMPLEMENTED = 0;
   */
  UNIMPLEMENTED = 0,

  /**
   * The sum of all requests to the ZITADEL API with an authorization header,
   * excluding the following exceptions
   * - Calls to the System API
   * - Calls that cause internal server errors
   * - Failed authorizations
   * - Requests after the quota already exceeded
   *
   * @generated from enum value: UNIT_REQUESTS_ALL_AUTHENTICATED = 1;
   */
  REQUESTS_ALL_AUTHENTICATED = 1,

  /**
   * The sum of all actions run durations in seconds
   *
   * @generated from enum value: UNIT_ACTIONS_ALL_RUN_SECONDS = 2;
   */
  ACTIONS_ALL_RUN_SECONDS = 2,
}
// Retrieve enum metadata with: proto3.getEnumType(Unit)
proto3.util.setEnumType(Unit, "zitadel.quota.v1.Unit", [
  { no: 0, name: "UNIT_UNIMPLEMENTED" },
  { no: 1, name: "UNIT_REQUESTS_ALL_AUTHENTICATED" },
  { no: 2, name: "UNIT_ACTIONS_ALL_RUN_SECONDS" },
]);

/**
 * @generated from message zitadel.quota.v1.Notification
 */
export class Notification extends Message<Notification> {
  /**
   * The percentage relative to the quotas amount on which the call_url should be called.
   *
   * @generated from field: uint32 percent = 1;
   */
  percent = 0;

  /**
   * If true, the call_url is called each time a factor of percentage is reached.
   *
   * @generated from field: bool repeat = 2;
   */
  repeat = false;

  /**
   * The URL, which is called with HTTP method POST and a JSON payload with the properties "unit", "id" (notification id), "callURL", "periodStart", "threshold" and "usage".
   *
   * @generated from field: string call_url = 3;
   */
  callUrl = "";

  constructor(data?: PartialMessage<Notification>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "zitadel.quota.v1.Notification";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "percent", kind: "scalar", T: 13 /* ScalarType.UINT32 */ },
    { no: 2, name: "repeat", kind: "scalar", T: 8 /* ScalarType.BOOL */ },
    { no: 3, name: "call_url", kind: "scalar", T: 9 /* ScalarType.STRING */ },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): Notification {
    return new Notification().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): Notification {
    return new Notification().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): Notification {
    return new Notification().fromJsonString(jsonString, options);
  }

  static equals(a: Notification | PlainMessage<Notification> | undefined, b: Notification | PlainMessage<Notification> | undefined): boolean {
    return proto3.util.equals(Notification, a, b);
  }
}

