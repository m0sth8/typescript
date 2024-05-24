// @generated by protoc-gen-es v1.9.0
// @generated from file zitadel/action/v3alpha/action_service.proto (package zitadel.action.v3alpha, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import type { BinaryReadOptions, Duration, FieldList, JsonReadOptions, JsonValue, PartialMessage, PlainMessage } from "@bufbuild/protobuf";
import { Message, proto3 } from "@bufbuild/protobuf";
import type { SetRESTAsync, SetRESTCall, SetRESTWebhook, Target } from "./target_pb.js";
import type { Details, ListDetails, ListQuery } from "../../object/v2beta/object_pb.js";
import type { SearchQuery, TargetFieldName, TargetSearchQuery } from "./query_pb.js";
import type { Condition, Execution, ExecutionTargetType } from "./execution_pb.js";

/**
 * @generated from message zitadel.action.v3alpha.CreateTargetRequest
 */
export declare class CreateTargetRequest extends Message<CreateTargetRequest> {
  /**
   * Unique name of the target.
   *
   * @generated from field: string name = 1;
   */
  name: string;

  /**
   * Defines the target type and how the response of the target is treated.
   *
   * @generated from oneof zitadel.action.v3alpha.CreateTargetRequest.target_type
   */
  targetType: {
    /**
     * @generated from field: zitadel.action.v3alpha.SetRESTWebhook rest_webhook = 2;
     */
    value: SetRESTWebhook;
    case: "restWebhook";
  } | {
    /**
     * @generated from field: zitadel.action.v3alpha.SetRESTCall rest_call = 3;
     */
    value: SetRESTCall;
    case: "restCall";
  } | {
    /**
     * @generated from field: zitadel.action.v3alpha.SetRESTAsync rest_async = 4;
     */
    value: SetRESTAsync;
    case: "restAsync";
  } | { case: undefined; value?: undefined };

  /**
   * Timeout defines the duration until ZITADEL cancels the execution.
   *
   * @generated from field: google.protobuf.Duration timeout = 5;
   */
  timeout?: Duration;

  /**
   * @generated from field: string endpoint = 6;
   */
  endpoint: string;

  constructor(data?: PartialMessage<CreateTargetRequest>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "zitadel.action.v3alpha.CreateTargetRequest";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): CreateTargetRequest;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): CreateTargetRequest;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): CreateTargetRequest;

  static equals(a: CreateTargetRequest | PlainMessage<CreateTargetRequest> | undefined, b: CreateTargetRequest | PlainMessage<CreateTargetRequest> | undefined): boolean;
}

/**
 * @generated from message zitadel.action.v3alpha.CreateTargetResponse
 */
export declare class CreateTargetResponse extends Message<CreateTargetResponse> {
  /**
   * ID is the read-only unique identifier of the target.
   *
   * @generated from field: string id = 1;
   */
  id: string;

  /**
   * Details provide some base information (such as the last change date) of the target.
   *
   * @generated from field: zitadel.object.v2beta.Details details = 2;
   */
  details?: Details;

  constructor(data?: PartialMessage<CreateTargetResponse>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "zitadel.action.v3alpha.CreateTargetResponse";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): CreateTargetResponse;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): CreateTargetResponse;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): CreateTargetResponse;

  static equals(a: CreateTargetResponse | PlainMessage<CreateTargetResponse> | undefined, b: CreateTargetResponse | PlainMessage<CreateTargetResponse> | undefined): boolean;
}

/**
 * @generated from message zitadel.action.v3alpha.UpdateTargetRequest
 */
export declare class UpdateTargetRequest extends Message<UpdateTargetRequest> {
  /**
   * unique identifier of the target.
   *
   * @generated from field: string target_id = 1;
   */
  targetId: string;

  /**
   * Optionally change the unique name of the target.
   *
   * @generated from field: optional string name = 2;
   */
  name?: string;

  /**
   * Optionally change the target type and how the response of the target is treated,
   * or its target URL.
   *
   * @generated from oneof zitadel.action.v3alpha.UpdateTargetRequest.target_type
   */
  targetType: {
    /**
     * @generated from field: zitadel.action.v3alpha.SetRESTWebhook rest_webhook = 3;
     */
    value: SetRESTWebhook;
    case: "restWebhook";
  } | {
    /**
     * @generated from field: zitadel.action.v3alpha.SetRESTCall rest_call = 4;
     */
    value: SetRESTCall;
    case: "restCall";
  } | {
    /**
     * @generated from field: zitadel.action.v3alpha.SetRESTAsync rest_async = 5;
     */
    value: SetRESTAsync;
    case: "restAsync";
  } | { case: undefined; value?: undefined };

  /**
   * Optionally change the timeout, which defines the duration until ZITADEL cancels the execution.
   *
   * @generated from field: optional google.protobuf.Duration timeout = 6;
   */
  timeout?: Duration;

  /**
   * @generated from field: optional string endpoint = 7;
   */
  endpoint?: string;

  constructor(data?: PartialMessage<UpdateTargetRequest>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "zitadel.action.v3alpha.UpdateTargetRequest";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): UpdateTargetRequest;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): UpdateTargetRequest;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): UpdateTargetRequest;

  static equals(a: UpdateTargetRequest | PlainMessage<UpdateTargetRequest> | undefined, b: UpdateTargetRequest | PlainMessage<UpdateTargetRequest> | undefined): boolean;
}

/**
 * @generated from message zitadel.action.v3alpha.UpdateTargetResponse
 */
export declare class UpdateTargetResponse extends Message<UpdateTargetResponse> {
  /**
   * Details provide some base information (such as the last change date) of the target.
   *
   * @generated from field: zitadel.object.v2beta.Details details = 1;
   */
  details?: Details;

  constructor(data?: PartialMessage<UpdateTargetResponse>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "zitadel.action.v3alpha.UpdateTargetResponse";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): UpdateTargetResponse;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): UpdateTargetResponse;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): UpdateTargetResponse;

  static equals(a: UpdateTargetResponse | PlainMessage<UpdateTargetResponse> | undefined, b: UpdateTargetResponse | PlainMessage<UpdateTargetResponse> | undefined): boolean;
}

/**
 * @generated from message zitadel.action.v3alpha.DeleteTargetRequest
 */
export declare class DeleteTargetRequest extends Message<DeleteTargetRequest> {
  /**
   * unique identifier of the target.
   *
   * @generated from field: string target_id = 1;
   */
  targetId: string;

  constructor(data?: PartialMessage<DeleteTargetRequest>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "zitadel.action.v3alpha.DeleteTargetRequest";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): DeleteTargetRequest;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): DeleteTargetRequest;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): DeleteTargetRequest;

  static equals(a: DeleteTargetRequest | PlainMessage<DeleteTargetRequest> | undefined, b: DeleteTargetRequest | PlainMessage<DeleteTargetRequest> | undefined): boolean;
}

/**
 * @generated from message zitadel.action.v3alpha.DeleteTargetResponse
 */
export declare class DeleteTargetResponse extends Message<DeleteTargetResponse> {
  /**
   * Details provide some base information (such as the last change date) of the target.
   *
   * @generated from field: zitadel.object.v2beta.Details details = 1;
   */
  details?: Details;

  constructor(data?: PartialMessage<DeleteTargetResponse>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "zitadel.action.v3alpha.DeleteTargetResponse";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): DeleteTargetResponse;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): DeleteTargetResponse;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): DeleteTargetResponse;

  static equals(a: DeleteTargetResponse | PlainMessage<DeleteTargetResponse> | undefined, b: DeleteTargetResponse | PlainMessage<DeleteTargetResponse> | undefined): boolean;
}

/**
 * @generated from message zitadel.action.v3alpha.ListTargetsRequest
 */
export declare class ListTargetsRequest extends Message<ListTargetsRequest> {
  /**
   * list limitations and ordering.
   *
   * @generated from field: zitadel.object.v2beta.ListQuery query = 1;
   */
  query?: ListQuery;

  /**
   * the field the result is sorted.
   *
   * @generated from field: zitadel.action.v3alpha.TargetFieldName sorting_column = 2;
   */
  sortingColumn: TargetFieldName;

  /**
   * Define the criteria to query for.
   *
   * @generated from field: repeated zitadel.action.v3alpha.TargetSearchQuery queries = 3;
   */
  queries: TargetSearchQuery[];

  constructor(data?: PartialMessage<ListTargetsRequest>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "zitadel.action.v3alpha.ListTargetsRequest";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): ListTargetsRequest;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): ListTargetsRequest;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): ListTargetsRequest;

  static equals(a: ListTargetsRequest | PlainMessage<ListTargetsRequest> | undefined, b: ListTargetsRequest | PlainMessage<ListTargetsRequest> | undefined): boolean;
}

/**
 * @generated from message zitadel.action.v3alpha.ListTargetsResponse
 */
export declare class ListTargetsResponse extends Message<ListTargetsResponse> {
  /**
   * Details provides information about the returned result including total amount found.
   *
   * @generated from field: zitadel.object.v2beta.ListDetails details = 1;
   */
  details?: ListDetails;

  /**
   * States by which field the results are sorted.
   *
   * @generated from field: zitadel.action.v3alpha.TargetFieldName sorting_column = 2;
   */
  sortingColumn: TargetFieldName;

  /**
   * The result contains the user schemas, which matched the queries.
   *
   * @generated from field: repeated zitadel.action.v3alpha.Target result = 3;
   */
  result: Target[];

  constructor(data?: PartialMessage<ListTargetsResponse>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "zitadel.action.v3alpha.ListTargetsResponse";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): ListTargetsResponse;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): ListTargetsResponse;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): ListTargetsResponse;

  static equals(a: ListTargetsResponse | PlainMessage<ListTargetsResponse> | undefined, b: ListTargetsResponse | PlainMessage<ListTargetsResponse> | undefined): boolean;
}

/**
 * @generated from message zitadel.action.v3alpha.GetTargetByIDRequest
 */
export declare class GetTargetByIDRequest extends Message<GetTargetByIDRequest> {
  /**
   * unique identifier of the target.
   *
   * @generated from field: string target_id = 1;
   */
  targetId: string;

  constructor(data?: PartialMessage<GetTargetByIDRequest>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "zitadel.action.v3alpha.GetTargetByIDRequest";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): GetTargetByIDRequest;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): GetTargetByIDRequest;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): GetTargetByIDRequest;

  static equals(a: GetTargetByIDRequest | PlainMessage<GetTargetByIDRequest> | undefined, b: GetTargetByIDRequest | PlainMessage<GetTargetByIDRequest> | undefined): boolean;
}

/**
 * @generated from message zitadel.action.v3alpha.GetTargetByIDResponse
 */
export declare class GetTargetByIDResponse extends Message<GetTargetByIDResponse> {
  /**
   * @generated from field: zitadel.action.v3alpha.Target target = 1;
   */
  target?: Target;

  constructor(data?: PartialMessage<GetTargetByIDResponse>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "zitadel.action.v3alpha.GetTargetByIDResponse";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): GetTargetByIDResponse;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): GetTargetByIDResponse;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): GetTargetByIDResponse;

  static equals(a: GetTargetByIDResponse | PlainMessage<GetTargetByIDResponse> | undefined, b: GetTargetByIDResponse | PlainMessage<GetTargetByIDResponse> | undefined): boolean;
}

/**
 * @generated from message zitadel.action.v3alpha.SetExecutionRequest
 */
export declare class SetExecutionRequest extends Message<SetExecutionRequest> {
  /**
   * Defines the condition type and content of the condition for execution.
   *
   * @generated from field: zitadel.action.v3alpha.Condition condition = 1;
   */
  condition?: Condition;

  /**
   * Ordered list of targets/includes called during the execution.
   *
   * @generated from field: repeated zitadel.action.v3alpha.ExecutionTargetType targets = 2;
   */
  targets: ExecutionTargetType[];

  constructor(data?: PartialMessage<SetExecutionRequest>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "zitadel.action.v3alpha.SetExecutionRequest";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): SetExecutionRequest;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): SetExecutionRequest;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): SetExecutionRequest;

  static equals(a: SetExecutionRequest | PlainMessage<SetExecutionRequest> | undefined, b: SetExecutionRequest | PlainMessage<SetExecutionRequest> | undefined): boolean;
}

/**
 * @generated from message zitadel.action.v3alpha.SetExecutionResponse
 */
export declare class SetExecutionResponse extends Message<SetExecutionResponse> {
  /**
   * Details provide some base information (such as the last change date) of the execution.
   *
   * @generated from field: zitadel.object.v2beta.Details details = 2;
   */
  details?: Details;

  constructor(data?: PartialMessage<SetExecutionResponse>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "zitadel.action.v3alpha.SetExecutionResponse";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): SetExecutionResponse;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): SetExecutionResponse;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): SetExecutionResponse;

  static equals(a: SetExecutionResponse | PlainMessage<SetExecutionResponse> | undefined, b: SetExecutionResponse | PlainMessage<SetExecutionResponse> | undefined): boolean;
}

/**
 * @generated from message zitadel.action.v3alpha.DeleteExecutionRequest
 */
export declare class DeleteExecutionRequest extends Message<DeleteExecutionRequest> {
  /**
   * Unique identifier of the execution.
   *
   * @generated from field: zitadel.action.v3alpha.Condition condition = 1;
   */
  condition?: Condition;

  constructor(data?: PartialMessage<DeleteExecutionRequest>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "zitadel.action.v3alpha.DeleteExecutionRequest";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): DeleteExecutionRequest;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): DeleteExecutionRequest;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): DeleteExecutionRequest;

  static equals(a: DeleteExecutionRequest | PlainMessage<DeleteExecutionRequest> | undefined, b: DeleteExecutionRequest | PlainMessage<DeleteExecutionRequest> | undefined): boolean;
}

/**
 * @generated from message zitadel.action.v3alpha.DeleteExecutionResponse
 */
export declare class DeleteExecutionResponse extends Message<DeleteExecutionResponse> {
  /**
   * Details provide some base information (such as the last change date) of the execution.
   *
   * @generated from field: zitadel.object.v2beta.Details details = 1;
   */
  details?: Details;

  constructor(data?: PartialMessage<DeleteExecutionResponse>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "zitadel.action.v3alpha.DeleteExecutionResponse";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): DeleteExecutionResponse;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): DeleteExecutionResponse;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): DeleteExecutionResponse;

  static equals(a: DeleteExecutionResponse | PlainMessage<DeleteExecutionResponse> | undefined, b: DeleteExecutionResponse | PlainMessage<DeleteExecutionResponse> | undefined): boolean;
}

/**
 * @generated from message zitadel.action.v3alpha.ListExecutionsRequest
 */
export declare class ListExecutionsRequest extends Message<ListExecutionsRequest> {
  /**
   * list limitations and ordering.
   *
   * @generated from field: zitadel.object.v2beta.ListQuery query = 1;
   */
  query?: ListQuery;

  /**
   * Define the criteria to query for.
   *
   * @generated from field: repeated zitadel.action.v3alpha.SearchQuery queries = 2;
   */
  queries: SearchQuery[];

  constructor(data?: PartialMessage<ListExecutionsRequest>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "zitadel.action.v3alpha.ListExecutionsRequest";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): ListExecutionsRequest;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): ListExecutionsRequest;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): ListExecutionsRequest;

  static equals(a: ListExecutionsRequest | PlainMessage<ListExecutionsRequest> | undefined, b: ListExecutionsRequest | PlainMessage<ListExecutionsRequest> | undefined): boolean;
}

/**
 * @generated from message zitadel.action.v3alpha.ListExecutionsResponse
 */
export declare class ListExecutionsResponse extends Message<ListExecutionsResponse> {
  /**
   * Details provides information about the returned result including total amount found.
   *
   * @generated from field: zitadel.object.v2beta.ListDetails details = 1;
   */
  details?: ListDetails;

  /**
   * The result contains the executions, which matched the queries.
   *
   * @generated from field: repeated zitadel.action.v3alpha.Execution result = 2;
   */
  result: Execution[];

  constructor(data?: PartialMessage<ListExecutionsResponse>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "zitadel.action.v3alpha.ListExecutionsResponse";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): ListExecutionsResponse;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): ListExecutionsResponse;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): ListExecutionsResponse;

  static equals(a: ListExecutionsResponse | PlainMessage<ListExecutionsResponse> | undefined, b: ListExecutionsResponse | PlainMessage<ListExecutionsResponse> | undefined): boolean;
}

/**
 * @generated from message zitadel.action.v3alpha.ListExecutionFunctionsRequest
 */
export declare class ListExecutionFunctionsRequest extends Message<ListExecutionFunctionsRequest> {
  constructor(data?: PartialMessage<ListExecutionFunctionsRequest>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "zitadel.action.v3alpha.ListExecutionFunctionsRequest";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): ListExecutionFunctionsRequest;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): ListExecutionFunctionsRequest;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): ListExecutionFunctionsRequest;

  static equals(a: ListExecutionFunctionsRequest | PlainMessage<ListExecutionFunctionsRequest> | undefined, b: ListExecutionFunctionsRequest | PlainMessage<ListExecutionFunctionsRequest> | undefined): boolean;
}

/**
 * @generated from message zitadel.action.v3alpha.ListExecutionFunctionsResponse
 */
export declare class ListExecutionFunctionsResponse extends Message<ListExecutionFunctionsResponse> {
  /**
   * All available methods
   *
   * @generated from field: repeated string functions = 1;
   */
  functions: string[];

  constructor(data?: PartialMessage<ListExecutionFunctionsResponse>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "zitadel.action.v3alpha.ListExecutionFunctionsResponse";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): ListExecutionFunctionsResponse;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): ListExecutionFunctionsResponse;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): ListExecutionFunctionsResponse;

  static equals(a: ListExecutionFunctionsResponse | PlainMessage<ListExecutionFunctionsResponse> | undefined, b: ListExecutionFunctionsResponse | PlainMessage<ListExecutionFunctionsResponse> | undefined): boolean;
}

/**
 * @generated from message zitadel.action.v3alpha.ListExecutionMethodsRequest
 */
export declare class ListExecutionMethodsRequest extends Message<ListExecutionMethodsRequest> {
  constructor(data?: PartialMessage<ListExecutionMethodsRequest>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "zitadel.action.v3alpha.ListExecutionMethodsRequest";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): ListExecutionMethodsRequest;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): ListExecutionMethodsRequest;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): ListExecutionMethodsRequest;

  static equals(a: ListExecutionMethodsRequest | PlainMessage<ListExecutionMethodsRequest> | undefined, b: ListExecutionMethodsRequest | PlainMessage<ListExecutionMethodsRequest> | undefined): boolean;
}

/**
 * @generated from message zitadel.action.v3alpha.ListExecutionMethodsResponse
 */
export declare class ListExecutionMethodsResponse extends Message<ListExecutionMethodsResponse> {
  /**
   * All available methods
   *
   * @generated from field: repeated string methods = 1;
   */
  methods: string[];

  constructor(data?: PartialMessage<ListExecutionMethodsResponse>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "zitadel.action.v3alpha.ListExecutionMethodsResponse";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): ListExecutionMethodsResponse;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): ListExecutionMethodsResponse;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): ListExecutionMethodsResponse;

  static equals(a: ListExecutionMethodsResponse | PlainMessage<ListExecutionMethodsResponse> | undefined, b: ListExecutionMethodsResponse | PlainMessage<ListExecutionMethodsResponse> | undefined): boolean;
}

/**
 * @generated from message zitadel.action.v3alpha.ListExecutionServicesRequest
 */
export declare class ListExecutionServicesRequest extends Message<ListExecutionServicesRequest> {
  constructor(data?: PartialMessage<ListExecutionServicesRequest>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "zitadel.action.v3alpha.ListExecutionServicesRequest";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): ListExecutionServicesRequest;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): ListExecutionServicesRequest;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): ListExecutionServicesRequest;

  static equals(a: ListExecutionServicesRequest | PlainMessage<ListExecutionServicesRequest> | undefined, b: ListExecutionServicesRequest | PlainMessage<ListExecutionServicesRequest> | undefined): boolean;
}

/**
 * @generated from message zitadel.action.v3alpha.ListExecutionServicesResponse
 */
export declare class ListExecutionServicesResponse extends Message<ListExecutionServicesResponse> {
  /**
   * All available methods
   *
   * @generated from field: repeated string services = 1;
   */
  services: string[];

  constructor(data?: PartialMessage<ListExecutionServicesResponse>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "zitadel.action.v3alpha.ListExecutionServicesResponse";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): ListExecutionServicesResponse;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): ListExecutionServicesResponse;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): ListExecutionServicesResponse;

  static equals(a: ListExecutionServicesResponse | PlainMessage<ListExecutionServicesResponse> | undefined, b: ListExecutionServicesResponse | PlainMessage<ListExecutionServicesResponse> | undefined): boolean;
}
