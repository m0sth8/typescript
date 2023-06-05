/* eslint-disable */
import type { CallContext, CallOptions } from "nice-grpc-common";
import _m0 from "protobufjs/minimal";
import { Details, ListDetails, RequestContext } from "../../object/v2alpha/object";
import { BrandingSettings } from "./branding_settings";
import { DomainSettings } from "./domain_settings";
import { LegalAndSupportSettings } from "./legal_settings";
import { LockoutSettings } from "./lockout_settings";
import { IdentityProvider, LoginSettings } from "./login_settings";
import { PasswordComplexitySettings } from "./password_settings";

export const protobufPackage = "zitadel.settings.v2alpha";

export interface GetLoginSettingsRequest {
  ctx: RequestContext | undefined;
}

export interface GetLoginSettingsResponse {
  details: Details | undefined;
  settings: LoginSettings | undefined;
}

export interface GetPasswordComplexitySettingsRequest {
  ctx: RequestContext | undefined;
}

export interface GetPasswordComplexitySettingsResponse {
  details: Details | undefined;
  settings: PasswordComplexitySettings | undefined;
}

export interface GetBrandingSettingsRequest {
  ctx: RequestContext | undefined;
}

export interface GetBrandingSettingsResponse {
  details: Details | undefined;
  settings: BrandingSettings | undefined;
}

export interface GetDomainSettingsRequest {
  ctx: RequestContext | undefined;
}

export interface GetDomainSettingsResponse {
  details: Details | undefined;
  settings: DomainSettings | undefined;
}

export interface GetLegalAndSupportSettingsRequest {
  ctx: RequestContext | undefined;
}

export interface GetLegalAndSupportSettingsResponse {
  details: Details | undefined;
  settings: LegalAndSupportSettings | undefined;
}

export interface GetLockoutSettingsRequest {
  ctx: RequestContext | undefined;
}

export interface GetLockoutSettingsResponse {
  details: Details | undefined;
  settings: LockoutSettings | undefined;
}

export interface GetActiveIdentityProvidersRequest {
  ctx: RequestContext | undefined;
}

export interface GetActiveIdentityProvidersResponse {
  details: ListDetails | undefined;
  identityProviders: IdentityProvider[];
}

export interface GetGeneralSettingsRequest {
}

export interface GetGeneralSettingsResponse {
  defaultOrgId: string;
  defaultLanguage: string;
  supportedLanguages: string[];
}

function createBaseGetLoginSettingsRequest(): GetLoginSettingsRequest {
  return { ctx: undefined };
}

export const GetLoginSettingsRequest = {
  encode(message: GetLoginSettingsRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.ctx !== undefined) {
      RequestContext.encode(message.ctx, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): GetLoginSettingsRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGetLoginSettingsRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 10) {
            break;
          }

          message.ctx = RequestContext.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): GetLoginSettingsRequest {
    return { ctx: isSet(object.ctx) ? RequestContext.fromJSON(object.ctx) : undefined };
  },

  toJSON(message: GetLoginSettingsRequest): unknown {
    const obj: any = {};
    message.ctx !== undefined && (obj.ctx = message.ctx ? RequestContext.toJSON(message.ctx) : undefined);
    return obj;
  },

  create(base?: DeepPartial<GetLoginSettingsRequest>): GetLoginSettingsRequest {
    return GetLoginSettingsRequest.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<GetLoginSettingsRequest>): GetLoginSettingsRequest {
    const message = createBaseGetLoginSettingsRequest();
    message.ctx = (object.ctx !== undefined && object.ctx !== null)
      ? RequestContext.fromPartial(object.ctx)
      : undefined;
    return message;
  },
};

function createBaseGetLoginSettingsResponse(): GetLoginSettingsResponse {
  return { details: undefined, settings: undefined };
}

export const GetLoginSettingsResponse = {
  encode(message: GetLoginSettingsResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.details !== undefined) {
      Details.encode(message.details, writer.uint32(10).fork()).ldelim();
    }
    if (message.settings !== undefined) {
      LoginSettings.encode(message.settings, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): GetLoginSettingsResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGetLoginSettingsResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 10) {
            break;
          }

          message.details = Details.decode(reader, reader.uint32());
          continue;
        case 2:
          if (tag != 18) {
            break;
          }

          message.settings = LoginSettings.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): GetLoginSettingsResponse {
    return {
      details: isSet(object.details) ? Details.fromJSON(object.details) : undefined,
      settings: isSet(object.settings) ? LoginSettings.fromJSON(object.settings) : undefined,
    };
  },

  toJSON(message: GetLoginSettingsResponse): unknown {
    const obj: any = {};
    message.details !== undefined && (obj.details = message.details ? Details.toJSON(message.details) : undefined);
    message.settings !== undefined &&
      (obj.settings = message.settings ? LoginSettings.toJSON(message.settings) : undefined);
    return obj;
  },

  create(base?: DeepPartial<GetLoginSettingsResponse>): GetLoginSettingsResponse {
    return GetLoginSettingsResponse.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<GetLoginSettingsResponse>): GetLoginSettingsResponse {
    const message = createBaseGetLoginSettingsResponse();
    message.details = (object.details !== undefined && object.details !== null)
      ? Details.fromPartial(object.details)
      : undefined;
    message.settings = (object.settings !== undefined && object.settings !== null)
      ? LoginSettings.fromPartial(object.settings)
      : undefined;
    return message;
  },
};

function createBaseGetPasswordComplexitySettingsRequest(): GetPasswordComplexitySettingsRequest {
  return { ctx: undefined };
}

export const GetPasswordComplexitySettingsRequest = {
  encode(message: GetPasswordComplexitySettingsRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.ctx !== undefined) {
      RequestContext.encode(message.ctx, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): GetPasswordComplexitySettingsRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGetPasswordComplexitySettingsRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 10) {
            break;
          }

          message.ctx = RequestContext.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): GetPasswordComplexitySettingsRequest {
    return { ctx: isSet(object.ctx) ? RequestContext.fromJSON(object.ctx) : undefined };
  },

  toJSON(message: GetPasswordComplexitySettingsRequest): unknown {
    const obj: any = {};
    message.ctx !== undefined && (obj.ctx = message.ctx ? RequestContext.toJSON(message.ctx) : undefined);
    return obj;
  },

  create(base?: DeepPartial<GetPasswordComplexitySettingsRequest>): GetPasswordComplexitySettingsRequest {
    return GetPasswordComplexitySettingsRequest.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<GetPasswordComplexitySettingsRequest>): GetPasswordComplexitySettingsRequest {
    const message = createBaseGetPasswordComplexitySettingsRequest();
    message.ctx = (object.ctx !== undefined && object.ctx !== null)
      ? RequestContext.fromPartial(object.ctx)
      : undefined;
    return message;
  },
};

function createBaseGetPasswordComplexitySettingsResponse(): GetPasswordComplexitySettingsResponse {
  return { details: undefined, settings: undefined };
}

export const GetPasswordComplexitySettingsResponse = {
  encode(message: GetPasswordComplexitySettingsResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.details !== undefined) {
      Details.encode(message.details, writer.uint32(10).fork()).ldelim();
    }
    if (message.settings !== undefined) {
      PasswordComplexitySettings.encode(message.settings, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): GetPasswordComplexitySettingsResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGetPasswordComplexitySettingsResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 10) {
            break;
          }

          message.details = Details.decode(reader, reader.uint32());
          continue;
        case 2:
          if (tag != 18) {
            break;
          }

          message.settings = PasswordComplexitySettings.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): GetPasswordComplexitySettingsResponse {
    return {
      details: isSet(object.details) ? Details.fromJSON(object.details) : undefined,
      settings: isSet(object.settings) ? PasswordComplexitySettings.fromJSON(object.settings) : undefined,
    };
  },

  toJSON(message: GetPasswordComplexitySettingsResponse): unknown {
    const obj: any = {};
    message.details !== undefined && (obj.details = message.details ? Details.toJSON(message.details) : undefined);
    message.settings !== undefined &&
      (obj.settings = message.settings ? PasswordComplexitySettings.toJSON(message.settings) : undefined);
    return obj;
  },

  create(base?: DeepPartial<GetPasswordComplexitySettingsResponse>): GetPasswordComplexitySettingsResponse {
    return GetPasswordComplexitySettingsResponse.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<GetPasswordComplexitySettingsResponse>): GetPasswordComplexitySettingsResponse {
    const message = createBaseGetPasswordComplexitySettingsResponse();
    message.details = (object.details !== undefined && object.details !== null)
      ? Details.fromPartial(object.details)
      : undefined;
    message.settings = (object.settings !== undefined && object.settings !== null)
      ? PasswordComplexitySettings.fromPartial(object.settings)
      : undefined;
    return message;
  },
};

function createBaseGetBrandingSettingsRequest(): GetBrandingSettingsRequest {
  return { ctx: undefined };
}

export const GetBrandingSettingsRequest = {
  encode(message: GetBrandingSettingsRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.ctx !== undefined) {
      RequestContext.encode(message.ctx, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): GetBrandingSettingsRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGetBrandingSettingsRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 10) {
            break;
          }

          message.ctx = RequestContext.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): GetBrandingSettingsRequest {
    return { ctx: isSet(object.ctx) ? RequestContext.fromJSON(object.ctx) : undefined };
  },

  toJSON(message: GetBrandingSettingsRequest): unknown {
    const obj: any = {};
    message.ctx !== undefined && (obj.ctx = message.ctx ? RequestContext.toJSON(message.ctx) : undefined);
    return obj;
  },

  create(base?: DeepPartial<GetBrandingSettingsRequest>): GetBrandingSettingsRequest {
    return GetBrandingSettingsRequest.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<GetBrandingSettingsRequest>): GetBrandingSettingsRequest {
    const message = createBaseGetBrandingSettingsRequest();
    message.ctx = (object.ctx !== undefined && object.ctx !== null)
      ? RequestContext.fromPartial(object.ctx)
      : undefined;
    return message;
  },
};

function createBaseGetBrandingSettingsResponse(): GetBrandingSettingsResponse {
  return { details: undefined, settings: undefined };
}

export const GetBrandingSettingsResponse = {
  encode(message: GetBrandingSettingsResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.details !== undefined) {
      Details.encode(message.details, writer.uint32(10).fork()).ldelim();
    }
    if (message.settings !== undefined) {
      BrandingSettings.encode(message.settings, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): GetBrandingSettingsResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGetBrandingSettingsResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 10) {
            break;
          }

          message.details = Details.decode(reader, reader.uint32());
          continue;
        case 2:
          if (tag != 18) {
            break;
          }

          message.settings = BrandingSettings.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): GetBrandingSettingsResponse {
    return {
      details: isSet(object.details) ? Details.fromJSON(object.details) : undefined,
      settings: isSet(object.settings) ? BrandingSettings.fromJSON(object.settings) : undefined,
    };
  },

  toJSON(message: GetBrandingSettingsResponse): unknown {
    const obj: any = {};
    message.details !== undefined && (obj.details = message.details ? Details.toJSON(message.details) : undefined);
    message.settings !== undefined &&
      (obj.settings = message.settings ? BrandingSettings.toJSON(message.settings) : undefined);
    return obj;
  },

  create(base?: DeepPartial<GetBrandingSettingsResponse>): GetBrandingSettingsResponse {
    return GetBrandingSettingsResponse.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<GetBrandingSettingsResponse>): GetBrandingSettingsResponse {
    const message = createBaseGetBrandingSettingsResponse();
    message.details = (object.details !== undefined && object.details !== null)
      ? Details.fromPartial(object.details)
      : undefined;
    message.settings = (object.settings !== undefined && object.settings !== null)
      ? BrandingSettings.fromPartial(object.settings)
      : undefined;
    return message;
  },
};

function createBaseGetDomainSettingsRequest(): GetDomainSettingsRequest {
  return { ctx: undefined };
}

export const GetDomainSettingsRequest = {
  encode(message: GetDomainSettingsRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.ctx !== undefined) {
      RequestContext.encode(message.ctx, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): GetDomainSettingsRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGetDomainSettingsRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 10) {
            break;
          }

          message.ctx = RequestContext.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): GetDomainSettingsRequest {
    return { ctx: isSet(object.ctx) ? RequestContext.fromJSON(object.ctx) : undefined };
  },

  toJSON(message: GetDomainSettingsRequest): unknown {
    const obj: any = {};
    message.ctx !== undefined && (obj.ctx = message.ctx ? RequestContext.toJSON(message.ctx) : undefined);
    return obj;
  },

  create(base?: DeepPartial<GetDomainSettingsRequest>): GetDomainSettingsRequest {
    return GetDomainSettingsRequest.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<GetDomainSettingsRequest>): GetDomainSettingsRequest {
    const message = createBaseGetDomainSettingsRequest();
    message.ctx = (object.ctx !== undefined && object.ctx !== null)
      ? RequestContext.fromPartial(object.ctx)
      : undefined;
    return message;
  },
};

function createBaseGetDomainSettingsResponse(): GetDomainSettingsResponse {
  return { details: undefined, settings: undefined };
}

export const GetDomainSettingsResponse = {
  encode(message: GetDomainSettingsResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.details !== undefined) {
      Details.encode(message.details, writer.uint32(10).fork()).ldelim();
    }
    if (message.settings !== undefined) {
      DomainSettings.encode(message.settings, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): GetDomainSettingsResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGetDomainSettingsResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 10) {
            break;
          }

          message.details = Details.decode(reader, reader.uint32());
          continue;
        case 2:
          if (tag != 18) {
            break;
          }

          message.settings = DomainSettings.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): GetDomainSettingsResponse {
    return {
      details: isSet(object.details) ? Details.fromJSON(object.details) : undefined,
      settings: isSet(object.settings) ? DomainSettings.fromJSON(object.settings) : undefined,
    };
  },

  toJSON(message: GetDomainSettingsResponse): unknown {
    const obj: any = {};
    message.details !== undefined && (obj.details = message.details ? Details.toJSON(message.details) : undefined);
    message.settings !== undefined &&
      (obj.settings = message.settings ? DomainSettings.toJSON(message.settings) : undefined);
    return obj;
  },

  create(base?: DeepPartial<GetDomainSettingsResponse>): GetDomainSettingsResponse {
    return GetDomainSettingsResponse.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<GetDomainSettingsResponse>): GetDomainSettingsResponse {
    const message = createBaseGetDomainSettingsResponse();
    message.details = (object.details !== undefined && object.details !== null)
      ? Details.fromPartial(object.details)
      : undefined;
    message.settings = (object.settings !== undefined && object.settings !== null)
      ? DomainSettings.fromPartial(object.settings)
      : undefined;
    return message;
  },
};

function createBaseGetLegalAndSupportSettingsRequest(): GetLegalAndSupportSettingsRequest {
  return { ctx: undefined };
}

export const GetLegalAndSupportSettingsRequest = {
  encode(message: GetLegalAndSupportSettingsRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.ctx !== undefined) {
      RequestContext.encode(message.ctx, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): GetLegalAndSupportSettingsRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGetLegalAndSupportSettingsRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 10) {
            break;
          }

          message.ctx = RequestContext.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): GetLegalAndSupportSettingsRequest {
    return { ctx: isSet(object.ctx) ? RequestContext.fromJSON(object.ctx) : undefined };
  },

  toJSON(message: GetLegalAndSupportSettingsRequest): unknown {
    const obj: any = {};
    message.ctx !== undefined && (obj.ctx = message.ctx ? RequestContext.toJSON(message.ctx) : undefined);
    return obj;
  },

  create(base?: DeepPartial<GetLegalAndSupportSettingsRequest>): GetLegalAndSupportSettingsRequest {
    return GetLegalAndSupportSettingsRequest.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<GetLegalAndSupportSettingsRequest>): GetLegalAndSupportSettingsRequest {
    const message = createBaseGetLegalAndSupportSettingsRequest();
    message.ctx = (object.ctx !== undefined && object.ctx !== null)
      ? RequestContext.fromPartial(object.ctx)
      : undefined;
    return message;
  },
};

function createBaseGetLegalAndSupportSettingsResponse(): GetLegalAndSupportSettingsResponse {
  return { details: undefined, settings: undefined };
}

export const GetLegalAndSupportSettingsResponse = {
  encode(message: GetLegalAndSupportSettingsResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.details !== undefined) {
      Details.encode(message.details, writer.uint32(10).fork()).ldelim();
    }
    if (message.settings !== undefined) {
      LegalAndSupportSettings.encode(message.settings, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): GetLegalAndSupportSettingsResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGetLegalAndSupportSettingsResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 10) {
            break;
          }

          message.details = Details.decode(reader, reader.uint32());
          continue;
        case 2:
          if (tag != 18) {
            break;
          }

          message.settings = LegalAndSupportSettings.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): GetLegalAndSupportSettingsResponse {
    return {
      details: isSet(object.details) ? Details.fromJSON(object.details) : undefined,
      settings: isSet(object.settings) ? LegalAndSupportSettings.fromJSON(object.settings) : undefined,
    };
  },

  toJSON(message: GetLegalAndSupportSettingsResponse): unknown {
    const obj: any = {};
    message.details !== undefined && (obj.details = message.details ? Details.toJSON(message.details) : undefined);
    message.settings !== undefined &&
      (obj.settings = message.settings ? LegalAndSupportSettings.toJSON(message.settings) : undefined);
    return obj;
  },

  create(base?: DeepPartial<GetLegalAndSupportSettingsResponse>): GetLegalAndSupportSettingsResponse {
    return GetLegalAndSupportSettingsResponse.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<GetLegalAndSupportSettingsResponse>): GetLegalAndSupportSettingsResponse {
    const message = createBaseGetLegalAndSupportSettingsResponse();
    message.details = (object.details !== undefined && object.details !== null)
      ? Details.fromPartial(object.details)
      : undefined;
    message.settings = (object.settings !== undefined && object.settings !== null)
      ? LegalAndSupportSettings.fromPartial(object.settings)
      : undefined;
    return message;
  },
};

function createBaseGetLockoutSettingsRequest(): GetLockoutSettingsRequest {
  return { ctx: undefined };
}

export const GetLockoutSettingsRequest = {
  encode(message: GetLockoutSettingsRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.ctx !== undefined) {
      RequestContext.encode(message.ctx, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): GetLockoutSettingsRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGetLockoutSettingsRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 10) {
            break;
          }

          message.ctx = RequestContext.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): GetLockoutSettingsRequest {
    return { ctx: isSet(object.ctx) ? RequestContext.fromJSON(object.ctx) : undefined };
  },

  toJSON(message: GetLockoutSettingsRequest): unknown {
    const obj: any = {};
    message.ctx !== undefined && (obj.ctx = message.ctx ? RequestContext.toJSON(message.ctx) : undefined);
    return obj;
  },

  create(base?: DeepPartial<GetLockoutSettingsRequest>): GetLockoutSettingsRequest {
    return GetLockoutSettingsRequest.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<GetLockoutSettingsRequest>): GetLockoutSettingsRequest {
    const message = createBaseGetLockoutSettingsRequest();
    message.ctx = (object.ctx !== undefined && object.ctx !== null)
      ? RequestContext.fromPartial(object.ctx)
      : undefined;
    return message;
  },
};

function createBaseGetLockoutSettingsResponse(): GetLockoutSettingsResponse {
  return { details: undefined, settings: undefined };
}

export const GetLockoutSettingsResponse = {
  encode(message: GetLockoutSettingsResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.details !== undefined) {
      Details.encode(message.details, writer.uint32(10).fork()).ldelim();
    }
    if (message.settings !== undefined) {
      LockoutSettings.encode(message.settings, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): GetLockoutSettingsResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGetLockoutSettingsResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 10) {
            break;
          }

          message.details = Details.decode(reader, reader.uint32());
          continue;
        case 2:
          if (tag != 18) {
            break;
          }

          message.settings = LockoutSettings.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): GetLockoutSettingsResponse {
    return {
      details: isSet(object.details) ? Details.fromJSON(object.details) : undefined,
      settings: isSet(object.settings) ? LockoutSettings.fromJSON(object.settings) : undefined,
    };
  },

  toJSON(message: GetLockoutSettingsResponse): unknown {
    const obj: any = {};
    message.details !== undefined && (obj.details = message.details ? Details.toJSON(message.details) : undefined);
    message.settings !== undefined &&
      (obj.settings = message.settings ? LockoutSettings.toJSON(message.settings) : undefined);
    return obj;
  },

  create(base?: DeepPartial<GetLockoutSettingsResponse>): GetLockoutSettingsResponse {
    return GetLockoutSettingsResponse.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<GetLockoutSettingsResponse>): GetLockoutSettingsResponse {
    const message = createBaseGetLockoutSettingsResponse();
    message.details = (object.details !== undefined && object.details !== null)
      ? Details.fromPartial(object.details)
      : undefined;
    message.settings = (object.settings !== undefined && object.settings !== null)
      ? LockoutSettings.fromPartial(object.settings)
      : undefined;
    return message;
  },
};

function createBaseGetActiveIdentityProvidersRequest(): GetActiveIdentityProvidersRequest {
  return { ctx: undefined };
}

export const GetActiveIdentityProvidersRequest = {
  encode(message: GetActiveIdentityProvidersRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.ctx !== undefined) {
      RequestContext.encode(message.ctx, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): GetActiveIdentityProvidersRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGetActiveIdentityProvidersRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 10) {
            break;
          }

          message.ctx = RequestContext.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): GetActiveIdentityProvidersRequest {
    return { ctx: isSet(object.ctx) ? RequestContext.fromJSON(object.ctx) : undefined };
  },

  toJSON(message: GetActiveIdentityProvidersRequest): unknown {
    const obj: any = {};
    message.ctx !== undefined && (obj.ctx = message.ctx ? RequestContext.toJSON(message.ctx) : undefined);
    return obj;
  },

  create(base?: DeepPartial<GetActiveIdentityProvidersRequest>): GetActiveIdentityProvidersRequest {
    return GetActiveIdentityProvidersRequest.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<GetActiveIdentityProvidersRequest>): GetActiveIdentityProvidersRequest {
    const message = createBaseGetActiveIdentityProvidersRequest();
    message.ctx = (object.ctx !== undefined && object.ctx !== null)
      ? RequestContext.fromPartial(object.ctx)
      : undefined;
    return message;
  },
};

function createBaseGetActiveIdentityProvidersResponse(): GetActiveIdentityProvidersResponse {
  return { details: undefined, identityProviders: [] };
}

export const GetActiveIdentityProvidersResponse = {
  encode(message: GetActiveIdentityProvidersResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.details !== undefined) {
      ListDetails.encode(message.details, writer.uint32(10).fork()).ldelim();
    }
    for (const v of message.identityProviders) {
      IdentityProvider.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): GetActiveIdentityProvidersResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGetActiveIdentityProvidersResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 10) {
            break;
          }

          message.details = ListDetails.decode(reader, reader.uint32());
          continue;
        case 2:
          if (tag != 18) {
            break;
          }

          message.identityProviders.push(IdentityProvider.decode(reader, reader.uint32()));
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): GetActiveIdentityProvidersResponse {
    return {
      details: isSet(object.details) ? ListDetails.fromJSON(object.details) : undefined,
      identityProviders: Array.isArray(object?.identityProviders)
        ? object.identityProviders.map((e: any) => IdentityProvider.fromJSON(e))
        : [],
    };
  },

  toJSON(message: GetActiveIdentityProvidersResponse): unknown {
    const obj: any = {};
    message.details !== undefined && (obj.details = message.details ? ListDetails.toJSON(message.details) : undefined);
    if (message.identityProviders) {
      obj.identityProviders = message.identityProviders.map((e) => e ? IdentityProvider.toJSON(e) : undefined);
    } else {
      obj.identityProviders = [];
    }
    return obj;
  },

  create(base?: DeepPartial<GetActiveIdentityProvidersResponse>): GetActiveIdentityProvidersResponse {
    return GetActiveIdentityProvidersResponse.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<GetActiveIdentityProvidersResponse>): GetActiveIdentityProvidersResponse {
    const message = createBaseGetActiveIdentityProvidersResponse();
    message.details = (object.details !== undefined && object.details !== null)
      ? ListDetails.fromPartial(object.details)
      : undefined;
    message.identityProviders = object.identityProviders?.map((e) => IdentityProvider.fromPartial(e)) || [];
    return message;
  },
};

function createBaseGetGeneralSettingsRequest(): GetGeneralSettingsRequest {
  return {};
}

export const GetGeneralSettingsRequest = {
  encode(_: GetGeneralSettingsRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): GetGeneralSettingsRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGetGeneralSettingsRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(_: any): GetGeneralSettingsRequest {
    return {};
  },

  toJSON(_: GetGeneralSettingsRequest): unknown {
    const obj: any = {};
    return obj;
  },

  create(base?: DeepPartial<GetGeneralSettingsRequest>): GetGeneralSettingsRequest {
    return GetGeneralSettingsRequest.fromPartial(base ?? {});
  },

  fromPartial(_: DeepPartial<GetGeneralSettingsRequest>): GetGeneralSettingsRequest {
    const message = createBaseGetGeneralSettingsRequest();
    return message;
  },
};

function createBaseGetGeneralSettingsResponse(): GetGeneralSettingsResponse {
  return { defaultOrgId: "", defaultLanguage: "", supportedLanguages: [] };
}

export const GetGeneralSettingsResponse = {
  encode(message: GetGeneralSettingsResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.defaultOrgId !== "") {
      writer.uint32(10).string(message.defaultOrgId);
    }
    if (message.defaultLanguage !== "") {
      writer.uint32(18).string(message.defaultLanguage);
    }
    for (const v of message.supportedLanguages) {
      writer.uint32(26).string(v!);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): GetGeneralSettingsResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGetGeneralSettingsResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 10) {
            break;
          }

          message.defaultOrgId = reader.string();
          continue;
        case 2:
          if (tag != 18) {
            break;
          }

          message.defaultLanguage = reader.string();
          continue;
        case 3:
          if (tag != 26) {
            break;
          }

          message.supportedLanguages.push(reader.string());
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): GetGeneralSettingsResponse {
    return {
      defaultOrgId: isSet(object.defaultOrgId) ? String(object.defaultOrgId) : "",
      defaultLanguage: isSet(object.defaultLanguage) ? String(object.defaultLanguage) : "",
      supportedLanguages: Array.isArray(object?.supportedLanguages)
        ? object.supportedLanguages.map((e: any) => String(e))
        : [],
    };
  },

  toJSON(message: GetGeneralSettingsResponse): unknown {
    const obj: any = {};
    message.defaultOrgId !== undefined && (obj.defaultOrgId = message.defaultOrgId);
    message.defaultLanguage !== undefined && (obj.defaultLanguage = message.defaultLanguage);
    if (message.supportedLanguages) {
      obj.supportedLanguages = message.supportedLanguages.map((e) => e);
    } else {
      obj.supportedLanguages = [];
    }
    return obj;
  },

  create(base?: DeepPartial<GetGeneralSettingsResponse>): GetGeneralSettingsResponse {
    return GetGeneralSettingsResponse.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<GetGeneralSettingsResponse>): GetGeneralSettingsResponse {
    const message = createBaseGetGeneralSettingsResponse();
    message.defaultOrgId = object.defaultOrgId ?? "";
    message.defaultLanguage = object.defaultLanguage ?? "";
    message.supportedLanguages = object.supportedLanguages?.map((e) => e) || [];
    return message;
  },
};

export type SettingsServiceDefinition = typeof SettingsServiceDefinition;
export const SettingsServiceDefinition = {
  name: "SettingsService",
  fullName: "zitadel.settings.v2alpha.SettingsService",
  methods: {
    /** Get basic information over the instance */
    getGeneralSettings: {
      name: "GetGeneralSettings",
      requestType: GetGeneralSettingsRequest,
      requestStream: false,
      responseType: GetGeneralSettingsResponse,
      responseStream: false,
      options: {
        _unknownFields: {
          8338: [
            Buffer.from([
              126,
              18,
              39,
              71,
              101,
              116,
              32,
              98,
              97,
              115,
              105,
              99,
              32,
              105,
              110,
              102,
              111,
              114,
              109,
              97,
              116,
              105,
              111,
              110,
              32,
              111,
              118,
              101,
              114,
              32,
              116,
              104,
              101,
              32,
              105,
              110,
              115,
              116,
              97,
              110,
              99,
              101,
              26,
              70,
              82,
              101,
              116,
              117,
              114,
              110,
              32,
              116,
              104,
              101,
              32,
              98,
              97,
              115,
              105,
              99,
              32,
              105,
              110,
              102,
              111,
              114,
              109,
              97,
              116,
              105,
              111,
              110,
              32,
              111,
              102,
              32,
              116,
              104,
              101,
              32,
              105,
              110,
              115,
              116,
              97,
              110,
              99,
              101,
              32,
              102,
              111,
              114,
              32,
              116,
              104,
              101,
              32,
              114,
              101,
              113,
              117,
              101,
              115,
              116,
              101,
              100,
              32,
              99,
              111,
              110,
              116,
              101,
              120,
              116,
              74,
              11,
              10,
              3,
              50,
              48,
              48,
              18,
              4,
              10,
              2,
              79,
              75,
            ]),
          ],
          400010: [Buffer.from([15, 10, 13, 10, 11, 112, 111, 108, 105, 99, 121, 46, 114, 101, 97, 100])],
          578365826: [
            Buffer.from([19, 18, 17, 47, 118, 50, 97, 108, 112, 104, 97, 47, 115, 101, 116, 116, 105, 110, 103, 115]),
          ],
        },
      },
    },
    /** Get the login settings */
    getLoginSettings: {
      name: "GetLoginSettings",
      requestType: GetLoginSettingsRequest,
      requestStream: false,
      responseType: GetLoginSettingsResponse,
      responseStream: false,
      options: {
        _unknownFields: {
          8338: [
            Buffer.from([
              84,
              18,
              22,
              71,
              101,
              116,
              32,
              116,
              104,
              101,
              32,
              108,
              111,
              103,
              105,
              110,
              32,
              115,
              101,
              116,
              116,
              105,
              110,
              103,
              115,
              26,
              45,
              82,
              101,
              116,
              117,
              114,
              110,
              32,
              116,
              104,
              101,
              32,
              115,
              101,
              116,
              116,
              105,
              110,
              103,
              115,
              32,
              102,
              111,
              114,
              32,
              116,
              104,
              101,
              32,
              114,
              101,
              113,
              117,
              101,
              115,
              116,
              101,
              100,
              32,
              99,
              111,
              110,
              116,
              101,
              120,
              116,
              74,
              11,
              10,
              3,
              50,
              48,
              48,
              18,
              4,
              10,
              2,
              79,
              75,
            ]),
          ],
          400010: [Buffer.from([15, 10, 13, 10, 11, 112, 111, 108, 105, 99, 121, 46, 114, 101, 97, 100])],
          578365826: [
            Buffer.from([
              25,
              18,
              23,
              47,
              118,
              50,
              97,
              108,
              112,
              104,
              97,
              47,
              115,
              101,
              116,
              116,
              105,
              110,
              103,
              115,
              47,
              108,
              111,
              103,
              105,
              110,
            ]),
          ],
        },
      },
    },
    /** Get the current active identity providers */
    getActiveIdentityProviders: {
      name: "GetActiveIdentityProviders",
      requestType: GetActiveIdentityProvidersRequest,
      requestStream: false,
      responseType: GetActiveIdentityProvidersResponse,
      responseStream: false,
      options: {
        _unknownFields: {
          8338: [
            Buffer.from([
              128,
              1,
              18,
              41,
              71,
              101,
              116,
              32,
              116,
              104,
              101,
              32,
              99,
              117,
              114,
              114,
              101,
              110,
              116,
              32,
              97,
              99,
              116,
              105,
              118,
              101,
              32,
              105,
              100,
              101,
              110,
              116,
              105,
              116,
              121,
              32,
              112,
              114,
              111,
              118,
              105,
              100,
              101,
              114,
              115,
              26,
              70,
              82,
              101,
              116,
              117,
              114,
              110,
              32,
              116,
              104,
              101,
              32,
              99,
              117,
              114,
              114,
              101,
              110,
              116,
              32,
              97,
              99,
              116,
              105,
              118,
              101,
              32,
              105,
              100,
              101,
              110,
              116,
              105,
              116,
              121,
              32,
              112,
              114,
              111,
              118,
              105,
              100,
              101,
              114,
              115,
              32,
              102,
              111,
              114,
              32,
              116,
              104,
              101,
              32,
              114,
              101,
              113,
              117,
              101,
              115,
              116,
              101,
              100,
              32,
              99,
              111,
              110,
              116,
              101,
              120,
              116,
              74,
              11,
              10,
              3,
              50,
              48,
              48,
              18,
              4,
              10,
              2,
              79,
              75,
            ]),
          ],
          400010: [Buffer.from([15, 10, 13, 10, 11, 112, 111, 108, 105, 99, 121, 46, 114, 101, 97, 100])],
          578365826: [
            Buffer.from([
              30,
              18,
              28,
              47,
              118,
              50,
              97,
              108,
              112,
              104,
              97,
              47,
              115,
              101,
              116,
              116,
              105,
              110,
              103,
              115,
              47,
              108,
              111,
              103,
              105,
              110,
              47,
              105,
              100,
              112,
              115,
            ]),
          ],
        },
      },
    },
    /** Get the password complexity settings */
    getPasswordComplexitySettings: {
      name: "GetPasswordComplexitySettings",
      requestType: GetPasswordComplexitySettingsRequest,
      requestStream: false,
      responseType: GetPasswordComplexitySettingsResponse,
      responseStream: false,
      options: {
        _unknownFields: {
          8338: [
            Buffer.from([
              118,
              18,
              36,
              71,
              101,
              116,
              32,
              116,
              104,
              101,
              32,
              112,
              97,
              115,
              115,
              119,
              111,
              114,
              100,
              32,
              99,
              111,
              109,
              112,
              108,
              101,
              120,
              105,
              116,
              121,
              32,
              115,
              101,
              116,
              116,
              105,
              110,
              103,
              115,
              26,
              65,
              82,
              101,
              116,
              117,
              114,
              110,
              32,
              116,
              104,
              101,
              32,
              112,
              97,
              115,
              115,
              119,
              111,
              114,
              100,
              32,
              99,
              111,
              109,
              112,
              108,
              101,
              120,
              105,
              116,
              121,
              32,
              115,
              101,
              116,
              116,
              105,
              110,
              103,
              115,
              32,
              102,
              111,
              114,
              32,
              116,
              104,
              101,
              32,
              114,
              101,
              113,
              117,
              101,
              115,
              116,
              101,
              100,
              32,
              99,
              111,
              110,
              116,
              101,
              120,
              116,
              74,
              11,
              10,
              3,
              50,
              48,
              48,
              18,
              4,
              10,
              2,
              79,
              75,
            ]),
          ],
          400010: [Buffer.from([15, 10, 13, 10, 11, 112, 111, 108, 105, 99, 121, 46, 114, 101, 97, 100])],
          578365826: [
            Buffer.from([
              39,
              18,
              37,
              47,
              118,
              50,
              97,
              108,
              112,
              104,
              97,
              47,
              115,
              101,
              116,
              116,
              105,
              110,
              103,
              115,
              47,
              112,
              97,
              115,
              115,
              119,
              111,
              114,
              100,
              47,
              99,
              111,
              109,
              112,
              108,
              101,
              120,
              105,
              116,
              121,
            ]),
          ],
        },
      },
    },
    /** Get the current active branding settings */
    getBrandingSettings: {
      name: "GetBrandingSettings",
      requestType: GetBrandingSettingsRequest,
      requestStream: false,
      responseType: GetBrandingSettingsResponse,
      responseStream: false,
      options: {
        _unknownFields: {
          8338: [
            Buffer.from([
              126,
              18,
              40,
              71,
              101,
              116,
              32,
              116,
              104,
              101,
              32,
              99,
              117,
              114,
              114,
              101,
              110,
              116,
              32,
              97,
              99,
              116,
              105,
              118,
              101,
              32,
              98,
              114,
              97,
              110,
              100,
              105,
              110,
              103,
              32,
              115,
              101,
              116,
              116,
              105,
              110,
              103,
              115,
              26,
              69,
              82,
              101,
              116,
              117,
              114,
              110,
              32,
              116,
              104,
              101,
              32,
              99,
              117,
              114,
              114,
              101,
              110,
              116,
              32,
              97,
              99,
              116,
              105,
              118,
              101,
              32,
              98,
              114,
              97,
              110,
              100,
              105,
              110,
              103,
              32,
              115,
              101,
              116,
              116,
              105,
              110,
              103,
              115,
              32,
              102,
              111,
              114,
              32,
              116,
              104,
              101,
              32,
              114,
              101,
              113,
              117,
              101,
              115,
              116,
              101,
              100,
              32,
              99,
              111,
              110,
              116,
              101,
              120,
              116,
              74,
              11,
              10,
              3,
              50,
              48,
              48,
              18,
              4,
              10,
              2,
              79,
              75,
            ]),
          ],
          400010: [Buffer.from([15, 10, 13, 10, 11, 112, 111, 108, 105, 99, 121, 46, 114, 101, 97, 100])],
          578365826: [
            Buffer.from([
              28,
              18,
              26,
              47,
              118,
              50,
              97,
              108,
              112,
              104,
              97,
              47,
              115,
              101,
              116,
              116,
              105,
              110,
              103,
              115,
              47,
              98,
              114,
              97,
              110,
              100,
              105,
              110,
              103,
            ]),
          ],
        },
      },
    },
    /** Get the domain settings */
    getDomainSettings: {
      name: "GetDomainSettings",
      requestType: GetDomainSettingsRequest,
      requestStream: false,
      responseType: GetDomainSettingsResponse,
      responseStream: false,
      options: {
        _unknownFields: {
          8338: [
            Buffer.from([
              92,
              18,
              23,
              71,
              101,
              116,
              32,
              116,
              104,
              101,
              32,
              100,
              111,
              109,
              97,
              105,
              110,
              32,
              115,
              101,
              116,
              116,
              105,
              110,
              103,
              115,
              26,
              52,
              82,
              101,
              116,
              117,
              114,
              110,
              32,
              116,
              104,
              101,
              32,
              100,
              111,
              109,
              97,
              105,
              110,
              32,
              115,
              101,
              116,
              116,
              105,
              110,
              103,
              115,
              32,
              102,
              111,
              114,
              32,
              116,
              104,
              101,
              32,
              114,
              101,
              113,
              117,
              101,
              115,
              116,
              101,
              100,
              32,
              99,
              111,
              110,
              116,
              101,
              120,
              116,
              74,
              11,
              10,
              3,
              50,
              48,
              48,
              18,
              4,
              10,
              2,
              79,
              75,
            ]),
          ],
          400010: [Buffer.from([15, 10, 13, 10, 11, 112, 111, 108, 105, 99, 121, 46, 114, 101, 97, 100])],
          578365826: [
            Buffer.from([
              26,
              18,
              24,
              47,
              118,
              50,
              97,
              108,
              112,
              104,
              97,
              47,
              115,
              101,
              116,
              116,
              105,
              110,
              103,
              115,
              47,
              100,
              111,
              109,
              97,
              105,
              110,
            ]),
          ],
        },
      },
    },
    /** Get the legal and support settings */
    getLegalAndSupportSettings: {
      name: "GetLegalAndSupportSettings",
      requestType: GetLegalAndSupportSettingsRequest,
      requestStream: false,
      responseType: GetLegalAndSupportSettingsResponse,
      responseStream: false,
      options: {
        _unknownFields: {
          8338: [
            Buffer.from([
              102,
              18,
              34,
              71,
              101,
              116,
              32,
              116,
              104,
              101,
              32,
              108,
              101,
              103,
              97,
              108,
              32,
              97,
              110,
              100,
              32,
              115,
              117,
              112,
              112,
              111,
              114,
              116,
              32,
              115,
              101,
              116,
              116,
              105,
              110,
              103,
              115,
              26,
              51,
              82,
              101,
              116,
              117,
              114,
              110,
              32,
              116,
              104,
              101,
              32,
              108,
              101,
              103,
              97,
              108,
              32,
              115,
              101,
              116,
              116,
              105,
              110,
              103,
              115,
              32,
              102,
              111,
              114,
              32,
              116,
              104,
              101,
              32,
              114,
              101,
              113,
              117,
              101,
              115,
              116,
              101,
              100,
              32,
              99,
              111,
              110,
              116,
              101,
              120,
              116,
              74,
              11,
              10,
              3,
              50,
              48,
              48,
              18,
              4,
              10,
              2,
              79,
              75,
            ]),
          ],
          400010: [Buffer.from([15, 10, 13, 10, 11, 112, 111, 108, 105, 99, 121, 46, 114, 101, 97, 100])],
          578365826: [
            Buffer.from([
              33,
              18,
              31,
              47,
              118,
              50,
              97,
              108,
              112,
              104,
              97,
              47,
              115,
              101,
              116,
              116,
              105,
              110,
              103,
              115,
              47,
              108,
              101,
              103,
              97,
              108,
              95,
              115,
              117,
              112,
              112,
              111,
              114,
              116,
            ]),
          ],
        },
      },
    },
    /** Get the lockout settings */
    getLockoutSettings: {
      name: "GetLockoutSettings",
      requestType: GetLockoutSettingsRequest,
      requestStream: false,
      responseType: GetLockoutSettingsResponse,
      responseStream: false,
      options: {
        _unknownFields: {
          8338: [
            Buffer.from([
              135,
              1,
              18,
              24,
              71,
              101,
              116,
              32,
              116,
              104,
              101,
              32,
              108,
              111,
              99,
              107,
              111,
              117,
              116,
              32,
              115,
              101,
              116,
              116,
              105,
              110,
              103,
              115,
              26,
              94,
              82,
              101,
              116,
              117,
              114,
              110,
              32,
              116,
              104,
              101,
              32,
              108,
              111,
              99,
              107,
              111,
              117,
              116,
              32,
              115,
              101,
              116,
              116,
              105,
              110,
              103,
              115,
              32,
              102,
              111,
              114,
              32,
              116,
              104,
              101,
              32,
              114,
              101,
              113,
              117,
              101,
              115,
              116,
              101,
              100,
              32,
              99,
              111,
              110,
              116,
              101,
              120,
              116,
              44,
              32,
              119,
              104,
              105,
              99,
              104,
              32,
              100,
              101,
              102,
              105,
              110,
              101,
              32,
              119,
              104,
              101,
              110,
              32,
              97,
              32,
              117,
              115,
              101,
              114,
              32,
              119,
              105,
              108,
              108,
              32,
              98,
              101,
              32,
              108,
              111,
              99,
              107,
              101,
              100,
              74,
              11,
              10,
              3,
              50,
              48,
              48,
              18,
              4,
              10,
              2,
              79,
              75,
            ]),
          ],
          400010: [Buffer.from([15, 10, 13, 10, 11, 112, 111, 108, 105, 99, 121, 46, 114, 101, 97, 100])],
          578365826: [
            Buffer.from([
              27,
              18,
              25,
              47,
              118,
              50,
              97,
              108,
              112,
              104,
              97,
              47,
              115,
              101,
              116,
              116,
              105,
              110,
              103,
              115,
              47,
              108,
              111,
              99,
              107,
              111,
              117,
              116,
            ]),
          ],
        },
      },
    },
  },
} as const;

export interface SettingsServiceImplementation<CallContextExt = {}> {
  /** Get basic information over the instance */
  getGeneralSettings(
    request: GetGeneralSettingsRequest,
    context: CallContext & CallContextExt,
  ): Promise<DeepPartial<GetGeneralSettingsResponse>>;
  /** Get the login settings */
  getLoginSettings(
    request: GetLoginSettingsRequest,
    context: CallContext & CallContextExt,
  ): Promise<DeepPartial<GetLoginSettingsResponse>>;
  /** Get the current active identity providers */
  getActiveIdentityProviders(
    request: GetActiveIdentityProvidersRequest,
    context: CallContext & CallContextExt,
  ): Promise<DeepPartial<GetActiveIdentityProvidersResponse>>;
  /** Get the password complexity settings */
  getPasswordComplexitySettings(
    request: GetPasswordComplexitySettingsRequest,
    context: CallContext & CallContextExt,
  ): Promise<DeepPartial<GetPasswordComplexitySettingsResponse>>;
  /** Get the current active branding settings */
  getBrandingSettings(
    request: GetBrandingSettingsRequest,
    context: CallContext & CallContextExt,
  ): Promise<DeepPartial<GetBrandingSettingsResponse>>;
  /** Get the domain settings */
  getDomainSettings(
    request: GetDomainSettingsRequest,
    context: CallContext & CallContextExt,
  ): Promise<DeepPartial<GetDomainSettingsResponse>>;
  /** Get the legal and support settings */
  getLegalAndSupportSettings(
    request: GetLegalAndSupportSettingsRequest,
    context: CallContext & CallContextExt,
  ): Promise<DeepPartial<GetLegalAndSupportSettingsResponse>>;
  /** Get the lockout settings */
  getLockoutSettings(
    request: GetLockoutSettingsRequest,
    context: CallContext & CallContextExt,
  ): Promise<DeepPartial<GetLockoutSettingsResponse>>;
}

export interface SettingsServiceClient<CallOptionsExt = {}> {
  /** Get basic information over the instance */
  getGeneralSettings(
    request: DeepPartial<GetGeneralSettingsRequest>,
    options?: CallOptions & CallOptionsExt,
  ): Promise<GetGeneralSettingsResponse>;
  /** Get the login settings */
  getLoginSettings(
    request: DeepPartial<GetLoginSettingsRequest>,
    options?: CallOptions & CallOptionsExt,
  ): Promise<GetLoginSettingsResponse>;
  /** Get the current active identity providers */
  getActiveIdentityProviders(
    request: DeepPartial<GetActiveIdentityProvidersRequest>,
    options?: CallOptions & CallOptionsExt,
  ): Promise<GetActiveIdentityProvidersResponse>;
  /** Get the password complexity settings */
  getPasswordComplexitySettings(
    request: DeepPartial<GetPasswordComplexitySettingsRequest>,
    options?: CallOptions & CallOptionsExt,
  ): Promise<GetPasswordComplexitySettingsResponse>;
  /** Get the current active branding settings */
  getBrandingSettings(
    request: DeepPartial<GetBrandingSettingsRequest>,
    options?: CallOptions & CallOptionsExt,
  ): Promise<GetBrandingSettingsResponse>;
  /** Get the domain settings */
  getDomainSettings(
    request: DeepPartial<GetDomainSettingsRequest>,
    options?: CallOptions & CallOptionsExt,
  ): Promise<GetDomainSettingsResponse>;
  /** Get the legal and support settings */
  getLegalAndSupportSettings(
    request: DeepPartial<GetLegalAndSupportSettingsRequest>,
    options?: CallOptions & CallOptionsExt,
  ): Promise<GetLegalAndSupportSettingsResponse>;
  /** Get the lockout settings */
  getLockoutSettings(
    request: DeepPartial<GetLockoutSettingsRequest>,
    options?: CallOptions & CallOptionsExt,
  ): Promise<GetLockoutSettingsResponse>;
}

type Builtin = Date | Function | Uint8Array | string | number | boolean | undefined;

export type DeepPartial<T> = T extends Builtin ? T
  : T extends Array<infer U> ? Array<DeepPartial<U>> : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>>
  : T extends {} ? { [K in keyof T]?: DeepPartial<T[K]> }
  : Partial<T>;

function isSet(value: any): boolean {
  return value !== null && value !== undefined;
}
