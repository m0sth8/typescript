// @generated by protoc-gen-es v1.10.0
// @generated from file zitadel/session/v2beta/session_service.proto (package zitadel.session.v2beta, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import type { BinaryReadOptions, Duration, FieldList, JsonReadOptions, JsonValue, PartialMessage, PlainMessage, Struct } from "@bufbuild/protobuf";
import { Message, proto3 } from "@bufbuild/protobuf";
import type { Details, ListDetails, ListQuery } from "../../object/v2beta/object_pb.js";
import type { SearchQuery, Session, SessionFieldName, UserAgent } from "./session_pb.js";
import type { Challenges, RequestChallenges } from "./challenge_pb.js";

/**
 * @generated from message zitadel.session.v2beta.ListSessionsRequest
 */
export declare class ListSessionsRequest extends Message<ListSessionsRequest> {
  /**
   * @generated from field: zitadel.object.v2beta.ListQuery query = 1;
   */
  query?: ListQuery;

  /**
   * @generated from field: repeated zitadel.session.v2beta.SearchQuery queries = 2;
   */
  queries: SearchQuery[];

  /**
   * @generated from field: zitadel.session.v2beta.SessionFieldName sorting_column = 3;
   */
  sortingColumn: SessionFieldName;

  constructor(data?: PartialMessage<ListSessionsRequest>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "zitadel.session.v2beta.ListSessionsRequest";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): ListSessionsRequest;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): ListSessionsRequest;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): ListSessionsRequest;

  static equals(a: ListSessionsRequest | PlainMessage<ListSessionsRequest> | undefined, b: ListSessionsRequest | PlainMessage<ListSessionsRequest> | undefined): boolean;
}

/**
 * @generated from message zitadel.session.v2beta.ListSessionsResponse
 */
export declare class ListSessionsResponse extends Message<ListSessionsResponse> {
  /**
   * @generated from field: zitadel.object.v2beta.ListDetails details = 1;
   */
  details?: ListDetails;

  /**
   * @generated from field: repeated zitadel.session.v2beta.Session sessions = 2;
   */
  sessions: Session[];

  constructor(data?: PartialMessage<ListSessionsResponse>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "zitadel.session.v2beta.ListSessionsResponse";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): ListSessionsResponse;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): ListSessionsResponse;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): ListSessionsResponse;

  static equals(a: ListSessionsResponse | PlainMessage<ListSessionsResponse> | undefined, b: ListSessionsResponse | PlainMessage<ListSessionsResponse> | undefined): boolean;
}

/**
 * @generated from message zitadel.session.v2beta.GetSessionRequest
 */
export declare class GetSessionRequest extends Message<GetSessionRequest> {
  /**
   * @generated from field: string session_id = 1;
   */
  sessionId: string;

  /**
   * @generated from field: optional string session_token = 2;
   */
  sessionToken?: string;

  constructor(data?: PartialMessage<GetSessionRequest>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "zitadel.session.v2beta.GetSessionRequest";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): GetSessionRequest;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): GetSessionRequest;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): GetSessionRequest;

  static equals(a: GetSessionRequest | PlainMessage<GetSessionRequest> | undefined, b: GetSessionRequest | PlainMessage<GetSessionRequest> | undefined): boolean;
}

/**
 * @generated from message zitadel.session.v2beta.GetSessionResponse
 */
export declare class GetSessionResponse extends Message<GetSessionResponse> {
  /**
   * @generated from field: zitadel.session.v2beta.Session session = 1;
   */
  session?: Session;

  constructor(data?: PartialMessage<GetSessionResponse>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "zitadel.session.v2beta.GetSessionResponse";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): GetSessionResponse;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): GetSessionResponse;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): GetSessionResponse;

  static equals(a: GetSessionResponse | PlainMessage<GetSessionResponse> | undefined, b: GetSessionResponse | PlainMessage<GetSessionResponse> | undefined): boolean;
}

/**
 * @generated from message zitadel.session.v2beta.CreateSessionRequest
 */
export declare class CreateSessionRequest extends Message<CreateSessionRequest> {
  /**
   * @generated from field: zitadel.session.v2beta.Checks checks = 1;
   */
  checks?: Checks;

  /**
   * @generated from field: map<string, bytes> metadata = 2;
   */
  metadata: { [key: string]: Uint8Array };

  /**
   * @generated from field: zitadel.session.v2beta.RequestChallenges challenges = 3;
   */
  challenges?: RequestChallenges;

  /**
   * @generated from field: zitadel.session.v2beta.UserAgent user_agent = 4;
   */
  userAgent?: UserAgent;

  /**
   * @generated from field: optional google.protobuf.Duration lifetime = 5;
   */
  lifetime?: Duration;

  constructor(data?: PartialMessage<CreateSessionRequest>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "zitadel.session.v2beta.CreateSessionRequest";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): CreateSessionRequest;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): CreateSessionRequest;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): CreateSessionRequest;

  static equals(a: CreateSessionRequest | PlainMessage<CreateSessionRequest> | undefined, b: CreateSessionRequest | PlainMessage<CreateSessionRequest> | undefined): boolean;
}

/**
 * @generated from message zitadel.session.v2beta.CreateSessionResponse
 */
export declare class CreateSessionResponse extends Message<CreateSessionResponse> {
  /**
   * @generated from field: zitadel.object.v2beta.Details details = 1;
   */
  details?: Details;

  /**
   * @generated from field: string session_id = 2;
   */
  sessionId: string;

  /**
   * @generated from field: string session_token = 3;
   */
  sessionToken: string;

  /**
   * @generated from field: zitadel.session.v2beta.Challenges challenges = 4;
   */
  challenges?: Challenges;

  constructor(data?: PartialMessage<CreateSessionResponse>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "zitadel.session.v2beta.CreateSessionResponse";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): CreateSessionResponse;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): CreateSessionResponse;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): CreateSessionResponse;

  static equals(a: CreateSessionResponse | PlainMessage<CreateSessionResponse> | undefined, b: CreateSessionResponse | PlainMessage<CreateSessionResponse> | undefined): boolean;
}

/**
 * @generated from message zitadel.session.v2beta.SetSessionRequest
 */
export declare class SetSessionRequest extends Message<SetSessionRequest> {
  /**
   * @generated from field: string session_id = 1;
   */
  sessionId: string;

  /**
   * @generated from field: string session_token = 2;
   */
  sessionToken: string;

  /**
   * @generated from field: zitadel.session.v2beta.Checks checks = 3;
   */
  checks?: Checks;

  /**
   * @generated from field: map<string, bytes> metadata = 4;
   */
  metadata: { [key: string]: Uint8Array };

  /**
   * @generated from field: zitadel.session.v2beta.RequestChallenges challenges = 5;
   */
  challenges?: RequestChallenges;

  /**
   * @generated from field: optional google.protobuf.Duration lifetime = 6;
   */
  lifetime?: Duration;

  constructor(data?: PartialMessage<SetSessionRequest>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "zitadel.session.v2beta.SetSessionRequest";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): SetSessionRequest;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): SetSessionRequest;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): SetSessionRequest;

  static equals(a: SetSessionRequest | PlainMessage<SetSessionRequest> | undefined, b: SetSessionRequest | PlainMessage<SetSessionRequest> | undefined): boolean;
}

/**
 * @generated from message zitadel.session.v2beta.SetSessionResponse
 */
export declare class SetSessionResponse extends Message<SetSessionResponse> {
  /**
   * @generated from field: zitadel.object.v2beta.Details details = 1;
   */
  details?: Details;

  /**
   * @generated from field: string session_token = 2;
   */
  sessionToken: string;

  /**
   * @generated from field: zitadel.session.v2beta.Challenges challenges = 3;
   */
  challenges?: Challenges;

  constructor(data?: PartialMessage<SetSessionResponse>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "zitadel.session.v2beta.SetSessionResponse";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): SetSessionResponse;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): SetSessionResponse;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): SetSessionResponse;

  static equals(a: SetSessionResponse | PlainMessage<SetSessionResponse> | undefined, b: SetSessionResponse | PlainMessage<SetSessionResponse> | undefined): boolean;
}

/**
 * @generated from message zitadel.session.v2beta.DeleteSessionRequest
 */
export declare class DeleteSessionRequest extends Message<DeleteSessionRequest> {
  /**
   * @generated from field: string session_id = 1;
   */
  sessionId: string;

  /**
   * @generated from field: optional string session_token = 2;
   */
  sessionToken?: string;

  constructor(data?: PartialMessage<DeleteSessionRequest>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "zitadel.session.v2beta.DeleteSessionRequest";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): DeleteSessionRequest;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): DeleteSessionRequest;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): DeleteSessionRequest;

  static equals(a: DeleteSessionRequest | PlainMessage<DeleteSessionRequest> | undefined, b: DeleteSessionRequest | PlainMessage<DeleteSessionRequest> | undefined): boolean;
}

/**
 * @generated from message zitadel.session.v2beta.DeleteSessionResponse
 */
export declare class DeleteSessionResponse extends Message<DeleteSessionResponse> {
  /**
   * @generated from field: zitadel.object.v2beta.Details details = 1;
   */
  details?: Details;

  constructor(data?: PartialMessage<DeleteSessionResponse>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "zitadel.session.v2beta.DeleteSessionResponse";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): DeleteSessionResponse;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): DeleteSessionResponse;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): DeleteSessionResponse;

  static equals(a: DeleteSessionResponse | PlainMessage<DeleteSessionResponse> | undefined, b: DeleteSessionResponse | PlainMessage<DeleteSessionResponse> | undefined): boolean;
}

/**
 * @generated from message zitadel.session.v2beta.Checks
 */
export declare class Checks extends Message<Checks> {
  /**
   * @generated from field: optional zitadel.session.v2beta.CheckUser user = 1;
   */
  user?: CheckUser;

  /**
   * @generated from field: optional zitadel.session.v2beta.CheckPassword password = 2;
   */
  password?: CheckPassword;

  /**
   * @generated from field: optional zitadel.session.v2beta.CheckWebAuthN web_auth_n = 3;
   */
  webAuthN?: CheckWebAuthN;

  /**
   * @generated from field: optional zitadel.session.v2beta.CheckIDPIntent idp_intent = 4;
   */
  idpIntent?: CheckIDPIntent;

  /**
   * @generated from field: optional zitadel.session.v2beta.CheckTOTP totp = 5;
   */
  totp?: CheckTOTP;

  /**
   * @generated from field: optional zitadel.session.v2beta.CheckOTP otp_sms = 6;
   */
  otpSms?: CheckOTP;

  /**
   * @generated from field: optional zitadel.session.v2beta.CheckOTP otp_email = 7;
   */
  otpEmail?: CheckOTP;

  constructor(data?: PartialMessage<Checks>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "zitadel.session.v2beta.Checks";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): Checks;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): Checks;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): Checks;

  static equals(a: Checks | PlainMessage<Checks> | undefined, b: Checks | PlainMessage<Checks> | undefined): boolean;
}

/**
 * @generated from message zitadel.session.v2beta.CheckUser
 */
export declare class CheckUser extends Message<CheckUser> {
  /**
   * @generated from oneof zitadel.session.v2beta.CheckUser.search
   */
  search: {
    /**
     * @generated from field: string user_id = 1;
     */
    value: string;
    case: "userId";
  } | {
    /**
     * @generated from field: string login_name = 2;
     */
    value: string;
    case: "loginName";
  } | { case: undefined; value?: undefined };

  constructor(data?: PartialMessage<CheckUser>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "zitadel.session.v2beta.CheckUser";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): CheckUser;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): CheckUser;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): CheckUser;

  static equals(a: CheckUser | PlainMessage<CheckUser> | undefined, b: CheckUser | PlainMessage<CheckUser> | undefined): boolean;
}

/**
 * @generated from message zitadel.session.v2beta.CheckPassword
 */
export declare class CheckPassword extends Message<CheckPassword> {
  /**
   * @generated from field: string password = 1;
   */
  password: string;

  constructor(data?: PartialMessage<CheckPassword>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "zitadel.session.v2beta.CheckPassword";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): CheckPassword;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): CheckPassword;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): CheckPassword;

  static equals(a: CheckPassword | PlainMessage<CheckPassword> | undefined, b: CheckPassword | PlainMessage<CheckPassword> | undefined): boolean;
}

/**
 * @generated from message zitadel.session.v2beta.CheckWebAuthN
 */
export declare class CheckWebAuthN extends Message<CheckWebAuthN> {
  /**
   * @generated from field: google.protobuf.Struct credential_assertion_data = 1;
   */
  credentialAssertionData?: Struct;

  constructor(data?: PartialMessage<CheckWebAuthN>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "zitadel.session.v2beta.CheckWebAuthN";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): CheckWebAuthN;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): CheckWebAuthN;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): CheckWebAuthN;

  static equals(a: CheckWebAuthN | PlainMessage<CheckWebAuthN> | undefined, b: CheckWebAuthN | PlainMessage<CheckWebAuthN> | undefined): boolean;
}

/**
 * @generated from message zitadel.session.v2beta.CheckIDPIntent
 */
export declare class CheckIDPIntent extends Message<CheckIDPIntent> {
  /**
   * @generated from field: string idp_intent_id = 1;
   */
  idpIntentId: string;

  /**
   * @generated from field: string idp_intent_token = 2;
   */
  idpIntentToken: string;

  constructor(data?: PartialMessage<CheckIDPIntent>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "zitadel.session.v2beta.CheckIDPIntent";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): CheckIDPIntent;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): CheckIDPIntent;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): CheckIDPIntent;

  static equals(a: CheckIDPIntent | PlainMessage<CheckIDPIntent> | undefined, b: CheckIDPIntent | PlainMessage<CheckIDPIntent> | undefined): boolean;
}

/**
 * @generated from message zitadel.session.v2beta.CheckTOTP
 */
export declare class CheckTOTP extends Message<CheckTOTP> {
  /**
   * @generated from field: string code = 1;
   */
  code: string;

  constructor(data?: PartialMessage<CheckTOTP>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "zitadel.session.v2beta.CheckTOTP";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): CheckTOTP;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): CheckTOTP;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): CheckTOTP;

  static equals(a: CheckTOTP | PlainMessage<CheckTOTP> | undefined, b: CheckTOTP | PlainMessage<CheckTOTP> | undefined): boolean;
}

/**
 * @generated from message zitadel.session.v2beta.CheckOTP
 */
export declare class CheckOTP extends Message<CheckOTP> {
  /**
   * @generated from field: string code = 1;
   */
  code: string;

  constructor(data?: PartialMessage<CheckOTP>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "zitadel.session.v2beta.CheckOTP";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): CheckOTP;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): CheckOTP;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): CheckOTP;

  static equals(a: CheckOTP | PlainMessage<CheckOTP> | undefined, b: CheckOTP | PlainMessage<CheckOTP> | undefined): boolean;
}

