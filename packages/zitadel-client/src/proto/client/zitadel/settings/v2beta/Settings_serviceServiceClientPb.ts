/**
 * @fileoverview gRPC-Web generated client stub for zitadel.settings.v2beta
 * @enhanceable
 * @public
 */

// Code generated by protoc-gen-grpc-web. DO NOT EDIT.
// versions:
// 	protoc-gen-grpc-web v1.5.0
// 	protoc              v0.0.0
// source: zitadel/settings/v2beta/settings_service.proto


/* eslint-disable */
// @ts-nocheck


import * as grpcWeb from 'grpc-web';

import * as zitadel_settings_v2beta_settings_service_pb from '../../../zitadel/settings/v2beta/settings_service_pb'; // proto import: "zitadel/settings/v2beta/settings_service.proto"


export class SettingsServiceClient {
  client_: grpcWeb.AbstractClientBase;
  hostname_: string;
  credentials_: null | { [index: string]: string; };
  options_: null | { [index: string]: any; };

  constructor (hostname: string,
               credentials?: null | { [index: string]: string; },
               options?: null | { [index: string]: any; }) {
    if (!options) options = {};
    if (!credentials) credentials = {};
    options['format'] = 'binary';

    this.client_ = new grpcWeb.GrpcWebClientBase(options);
    this.hostname_ = hostname.replace(/\/+$/, '');
    this.credentials_ = credentials;
    this.options_ = options;
  }

  methodDescriptorGetGeneralSettings = new grpcWeb.MethodDescriptor(
    '/zitadel.settings.v2beta.SettingsService/GetGeneralSettings',
    grpcWeb.MethodType.UNARY,
    zitadel_settings_v2beta_settings_service_pb.GetGeneralSettingsRequest,
    zitadel_settings_v2beta_settings_service_pb.GetGeneralSettingsResponse,
    (request: zitadel_settings_v2beta_settings_service_pb.GetGeneralSettingsRequest) => {
      return request.serializeBinary();
    },
    zitadel_settings_v2beta_settings_service_pb.GetGeneralSettingsResponse.deserializeBinary
  );

  getGeneralSettings(
    request: zitadel_settings_v2beta_settings_service_pb.GetGeneralSettingsRequest,
    metadata?: grpcWeb.Metadata | null): Promise<zitadel_settings_v2beta_settings_service_pb.GetGeneralSettingsResponse>;

  getGeneralSettings(
    request: zitadel_settings_v2beta_settings_service_pb.GetGeneralSettingsRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: zitadel_settings_v2beta_settings_service_pb.GetGeneralSettingsResponse) => void): grpcWeb.ClientReadableStream<zitadel_settings_v2beta_settings_service_pb.GetGeneralSettingsResponse>;

  getGeneralSettings(
    request: zitadel_settings_v2beta_settings_service_pb.GetGeneralSettingsRequest,
    metadata?: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: zitadel_settings_v2beta_settings_service_pb.GetGeneralSettingsResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/zitadel.settings.v2beta.SettingsService/GetGeneralSettings',
        request,
        metadata || {},
        this.methodDescriptorGetGeneralSettings,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/zitadel.settings.v2beta.SettingsService/GetGeneralSettings',
    request,
    metadata || {},
    this.methodDescriptorGetGeneralSettings);
  }

  methodDescriptorGetLoginSettings = new grpcWeb.MethodDescriptor(
    '/zitadel.settings.v2beta.SettingsService/GetLoginSettings',
    grpcWeb.MethodType.UNARY,
    zitadel_settings_v2beta_settings_service_pb.GetLoginSettingsRequest,
    zitadel_settings_v2beta_settings_service_pb.GetLoginSettingsResponse,
    (request: zitadel_settings_v2beta_settings_service_pb.GetLoginSettingsRequest) => {
      return request.serializeBinary();
    },
    zitadel_settings_v2beta_settings_service_pb.GetLoginSettingsResponse.deserializeBinary
  );

  getLoginSettings(
    request: zitadel_settings_v2beta_settings_service_pb.GetLoginSettingsRequest,
    metadata?: grpcWeb.Metadata | null): Promise<zitadel_settings_v2beta_settings_service_pb.GetLoginSettingsResponse>;

  getLoginSettings(
    request: zitadel_settings_v2beta_settings_service_pb.GetLoginSettingsRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: zitadel_settings_v2beta_settings_service_pb.GetLoginSettingsResponse) => void): grpcWeb.ClientReadableStream<zitadel_settings_v2beta_settings_service_pb.GetLoginSettingsResponse>;

  getLoginSettings(
    request: zitadel_settings_v2beta_settings_service_pb.GetLoginSettingsRequest,
    metadata?: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: zitadel_settings_v2beta_settings_service_pb.GetLoginSettingsResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/zitadel.settings.v2beta.SettingsService/GetLoginSettings',
        request,
        metadata || {},
        this.methodDescriptorGetLoginSettings,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/zitadel.settings.v2beta.SettingsService/GetLoginSettings',
    request,
    metadata || {},
    this.methodDescriptorGetLoginSettings);
  }

  methodDescriptorGetActiveIdentityProviders = new grpcWeb.MethodDescriptor(
    '/zitadel.settings.v2beta.SettingsService/GetActiveIdentityProviders',
    grpcWeb.MethodType.UNARY,
    zitadel_settings_v2beta_settings_service_pb.GetActiveIdentityProvidersRequest,
    zitadel_settings_v2beta_settings_service_pb.GetActiveIdentityProvidersResponse,
    (request: zitadel_settings_v2beta_settings_service_pb.GetActiveIdentityProvidersRequest) => {
      return request.serializeBinary();
    },
    zitadel_settings_v2beta_settings_service_pb.GetActiveIdentityProvidersResponse.deserializeBinary
  );

  getActiveIdentityProviders(
    request: zitadel_settings_v2beta_settings_service_pb.GetActiveIdentityProvidersRequest,
    metadata?: grpcWeb.Metadata | null): Promise<zitadel_settings_v2beta_settings_service_pb.GetActiveIdentityProvidersResponse>;

  getActiveIdentityProviders(
    request: zitadel_settings_v2beta_settings_service_pb.GetActiveIdentityProvidersRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: zitadel_settings_v2beta_settings_service_pb.GetActiveIdentityProvidersResponse) => void): grpcWeb.ClientReadableStream<zitadel_settings_v2beta_settings_service_pb.GetActiveIdentityProvidersResponse>;

  getActiveIdentityProviders(
    request: zitadel_settings_v2beta_settings_service_pb.GetActiveIdentityProvidersRequest,
    metadata?: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: zitadel_settings_v2beta_settings_service_pb.GetActiveIdentityProvidersResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/zitadel.settings.v2beta.SettingsService/GetActiveIdentityProviders',
        request,
        metadata || {},
        this.methodDescriptorGetActiveIdentityProviders,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/zitadel.settings.v2beta.SettingsService/GetActiveIdentityProviders',
    request,
    metadata || {},
    this.methodDescriptorGetActiveIdentityProviders);
  }

  methodDescriptorGetPasswordComplexitySettings = new grpcWeb.MethodDescriptor(
    '/zitadel.settings.v2beta.SettingsService/GetPasswordComplexitySettings',
    grpcWeb.MethodType.UNARY,
    zitadel_settings_v2beta_settings_service_pb.GetPasswordComplexitySettingsRequest,
    zitadel_settings_v2beta_settings_service_pb.GetPasswordComplexitySettingsResponse,
    (request: zitadel_settings_v2beta_settings_service_pb.GetPasswordComplexitySettingsRequest) => {
      return request.serializeBinary();
    },
    zitadel_settings_v2beta_settings_service_pb.GetPasswordComplexitySettingsResponse.deserializeBinary
  );

  getPasswordComplexitySettings(
    request: zitadel_settings_v2beta_settings_service_pb.GetPasswordComplexitySettingsRequest,
    metadata?: grpcWeb.Metadata | null): Promise<zitadel_settings_v2beta_settings_service_pb.GetPasswordComplexitySettingsResponse>;

  getPasswordComplexitySettings(
    request: zitadel_settings_v2beta_settings_service_pb.GetPasswordComplexitySettingsRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: zitadel_settings_v2beta_settings_service_pb.GetPasswordComplexitySettingsResponse) => void): grpcWeb.ClientReadableStream<zitadel_settings_v2beta_settings_service_pb.GetPasswordComplexitySettingsResponse>;

  getPasswordComplexitySettings(
    request: zitadel_settings_v2beta_settings_service_pb.GetPasswordComplexitySettingsRequest,
    metadata?: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: zitadel_settings_v2beta_settings_service_pb.GetPasswordComplexitySettingsResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/zitadel.settings.v2beta.SettingsService/GetPasswordComplexitySettings',
        request,
        metadata || {},
        this.methodDescriptorGetPasswordComplexitySettings,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/zitadel.settings.v2beta.SettingsService/GetPasswordComplexitySettings',
    request,
    metadata || {},
    this.methodDescriptorGetPasswordComplexitySettings);
  }

  methodDescriptorGetPasswordExpirySettings = new grpcWeb.MethodDescriptor(
    '/zitadel.settings.v2beta.SettingsService/GetPasswordExpirySettings',
    grpcWeb.MethodType.UNARY,
    zitadel_settings_v2beta_settings_service_pb.GetPasswordExpirySettingsRequest,
    zitadel_settings_v2beta_settings_service_pb.GetPasswordExpirySettingsResponse,
    (request: zitadel_settings_v2beta_settings_service_pb.GetPasswordExpirySettingsRequest) => {
      return request.serializeBinary();
    },
    zitadel_settings_v2beta_settings_service_pb.GetPasswordExpirySettingsResponse.deserializeBinary
  );

  getPasswordExpirySettings(
    request: zitadel_settings_v2beta_settings_service_pb.GetPasswordExpirySettingsRequest,
    metadata?: grpcWeb.Metadata | null): Promise<zitadel_settings_v2beta_settings_service_pb.GetPasswordExpirySettingsResponse>;

  getPasswordExpirySettings(
    request: zitadel_settings_v2beta_settings_service_pb.GetPasswordExpirySettingsRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: zitadel_settings_v2beta_settings_service_pb.GetPasswordExpirySettingsResponse) => void): grpcWeb.ClientReadableStream<zitadel_settings_v2beta_settings_service_pb.GetPasswordExpirySettingsResponse>;

  getPasswordExpirySettings(
    request: zitadel_settings_v2beta_settings_service_pb.GetPasswordExpirySettingsRequest,
    metadata?: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: zitadel_settings_v2beta_settings_service_pb.GetPasswordExpirySettingsResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/zitadel.settings.v2beta.SettingsService/GetPasswordExpirySettings',
        request,
        metadata || {},
        this.methodDescriptorGetPasswordExpirySettings,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/zitadel.settings.v2beta.SettingsService/GetPasswordExpirySettings',
    request,
    metadata || {},
    this.methodDescriptorGetPasswordExpirySettings);
  }

  methodDescriptorGetBrandingSettings = new grpcWeb.MethodDescriptor(
    '/zitadel.settings.v2beta.SettingsService/GetBrandingSettings',
    grpcWeb.MethodType.UNARY,
    zitadel_settings_v2beta_settings_service_pb.GetBrandingSettingsRequest,
    zitadel_settings_v2beta_settings_service_pb.GetBrandingSettingsResponse,
    (request: zitadel_settings_v2beta_settings_service_pb.GetBrandingSettingsRequest) => {
      return request.serializeBinary();
    },
    zitadel_settings_v2beta_settings_service_pb.GetBrandingSettingsResponse.deserializeBinary
  );

  getBrandingSettings(
    request: zitadel_settings_v2beta_settings_service_pb.GetBrandingSettingsRequest,
    metadata?: grpcWeb.Metadata | null): Promise<zitadel_settings_v2beta_settings_service_pb.GetBrandingSettingsResponse>;

  getBrandingSettings(
    request: zitadel_settings_v2beta_settings_service_pb.GetBrandingSettingsRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: zitadel_settings_v2beta_settings_service_pb.GetBrandingSettingsResponse) => void): grpcWeb.ClientReadableStream<zitadel_settings_v2beta_settings_service_pb.GetBrandingSettingsResponse>;

  getBrandingSettings(
    request: zitadel_settings_v2beta_settings_service_pb.GetBrandingSettingsRequest,
    metadata?: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: zitadel_settings_v2beta_settings_service_pb.GetBrandingSettingsResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/zitadel.settings.v2beta.SettingsService/GetBrandingSettings',
        request,
        metadata || {},
        this.methodDescriptorGetBrandingSettings,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/zitadel.settings.v2beta.SettingsService/GetBrandingSettings',
    request,
    metadata || {},
    this.methodDescriptorGetBrandingSettings);
  }

  methodDescriptorGetDomainSettings = new grpcWeb.MethodDescriptor(
    '/zitadel.settings.v2beta.SettingsService/GetDomainSettings',
    grpcWeb.MethodType.UNARY,
    zitadel_settings_v2beta_settings_service_pb.GetDomainSettingsRequest,
    zitadel_settings_v2beta_settings_service_pb.GetDomainSettingsResponse,
    (request: zitadel_settings_v2beta_settings_service_pb.GetDomainSettingsRequest) => {
      return request.serializeBinary();
    },
    zitadel_settings_v2beta_settings_service_pb.GetDomainSettingsResponse.deserializeBinary
  );

  getDomainSettings(
    request: zitadel_settings_v2beta_settings_service_pb.GetDomainSettingsRequest,
    metadata?: grpcWeb.Metadata | null): Promise<zitadel_settings_v2beta_settings_service_pb.GetDomainSettingsResponse>;

  getDomainSettings(
    request: zitadel_settings_v2beta_settings_service_pb.GetDomainSettingsRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: zitadel_settings_v2beta_settings_service_pb.GetDomainSettingsResponse) => void): grpcWeb.ClientReadableStream<zitadel_settings_v2beta_settings_service_pb.GetDomainSettingsResponse>;

  getDomainSettings(
    request: zitadel_settings_v2beta_settings_service_pb.GetDomainSettingsRequest,
    metadata?: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: zitadel_settings_v2beta_settings_service_pb.GetDomainSettingsResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/zitadel.settings.v2beta.SettingsService/GetDomainSettings',
        request,
        metadata || {},
        this.methodDescriptorGetDomainSettings,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/zitadel.settings.v2beta.SettingsService/GetDomainSettings',
    request,
    metadata || {},
    this.methodDescriptorGetDomainSettings);
  }

  methodDescriptorGetLegalAndSupportSettings = new grpcWeb.MethodDescriptor(
    '/zitadel.settings.v2beta.SettingsService/GetLegalAndSupportSettings',
    grpcWeb.MethodType.UNARY,
    zitadel_settings_v2beta_settings_service_pb.GetLegalAndSupportSettingsRequest,
    zitadel_settings_v2beta_settings_service_pb.GetLegalAndSupportSettingsResponse,
    (request: zitadel_settings_v2beta_settings_service_pb.GetLegalAndSupportSettingsRequest) => {
      return request.serializeBinary();
    },
    zitadel_settings_v2beta_settings_service_pb.GetLegalAndSupportSettingsResponse.deserializeBinary
  );

  getLegalAndSupportSettings(
    request: zitadel_settings_v2beta_settings_service_pb.GetLegalAndSupportSettingsRequest,
    metadata?: grpcWeb.Metadata | null): Promise<zitadel_settings_v2beta_settings_service_pb.GetLegalAndSupportSettingsResponse>;

  getLegalAndSupportSettings(
    request: zitadel_settings_v2beta_settings_service_pb.GetLegalAndSupportSettingsRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: zitadel_settings_v2beta_settings_service_pb.GetLegalAndSupportSettingsResponse) => void): grpcWeb.ClientReadableStream<zitadel_settings_v2beta_settings_service_pb.GetLegalAndSupportSettingsResponse>;

  getLegalAndSupportSettings(
    request: zitadel_settings_v2beta_settings_service_pb.GetLegalAndSupportSettingsRequest,
    metadata?: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: zitadel_settings_v2beta_settings_service_pb.GetLegalAndSupportSettingsResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/zitadel.settings.v2beta.SettingsService/GetLegalAndSupportSettings',
        request,
        metadata || {},
        this.methodDescriptorGetLegalAndSupportSettings,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/zitadel.settings.v2beta.SettingsService/GetLegalAndSupportSettings',
    request,
    metadata || {},
    this.methodDescriptorGetLegalAndSupportSettings);
  }

  methodDescriptorGetLockoutSettings = new grpcWeb.MethodDescriptor(
    '/zitadel.settings.v2beta.SettingsService/GetLockoutSettings',
    grpcWeb.MethodType.UNARY,
    zitadel_settings_v2beta_settings_service_pb.GetLockoutSettingsRequest,
    zitadel_settings_v2beta_settings_service_pb.GetLockoutSettingsResponse,
    (request: zitadel_settings_v2beta_settings_service_pb.GetLockoutSettingsRequest) => {
      return request.serializeBinary();
    },
    zitadel_settings_v2beta_settings_service_pb.GetLockoutSettingsResponse.deserializeBinary
  );

  getLockoutSettings(
    request: zitadel_settings_v2beta_settings_service_pb.GetLockoutSettingsRequest,
    metadata?: grpcWeb.Metadata | null): Promise<zitadel_settings_v2beta_settings_service_pb.GetLockoutSettingsResponse>;

  getLockoutSettings(
    request: zitadel_settings_v2beta_settings_service_pb.GetLockoutSettingsRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: zitadel_settings_v2beta_settings_service_pb.GetLockoutSettingsResponse) => void): grpcWeb.ClientReadableStream<zitadel_settings_v2beta_settings_service_pb.GetLockoutSettingsResponse>;

  getLockoutSettings(
    request: zitadel_settings_v2beta_settings_service_pb.GetLockoutSettingsRequest,
    metadata?: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: zitadel_settings_v2beta_settings_service_pb.GetLockoutSettingsResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/zitadel.settings.v2beta.SettingsService/GetLockoutSettings',
        request,
        metadata || {},
        this.methodDescriptorGetLockoutSettings,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/zitadel.settings.v2beta.SettingsService/GetLockoutSettings',
    request,
    metadata || {},
    this.methodDescriptorGetLockoutSettings);
  }

  methodDescriptorGetSecuritySettings = new grpcWeb.MethodDescriptor(
    '/zitadel.settings.v2beta.SettingsService/GetSecuritySettings',
    grpcWeb.MethodType.UNARY,
    zitadel_settings_v2beta_settings_service_pb.GetSecuritySettingsRequest,
    zitadel_settings_v2beta_settings_service_pb.GetSecuritySettingsResponse,
    (request: zitadel_settings_v2beta_settings_service_pb.GetSecuritySettingsRequest) => {
      return request.serializeBinary();
    },
    zitadel_settings_v2beta_settings_service_pb.GetSecuritySettingsResponse.deserializeBinary
  );

  getSecuritySettings(
    request: zitadel_settings_v2beta_settings_service_pb.GetSecuritySettingsRequest,
    metadata?: grpcWeb.Metadata | null): Promise<zitadel_settings_v2beta_settings_service_pb.GetSecuritySettingsResponse>;

  getSecuritySettings(
    request: zitadel_settings_v2beta_settings_service_pb.GetSecuritySettingsRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: zitadel_settings_v2beta_settings_service_pb.GetSecuritySettingsResponse) => void): grpcWeb.ClientReadableStream<zitadel_settings_v2beta_settings_service_pb.GetSecuritySettingsResponse>;

  getSecuritySettings(
    request: zitadel_settings_v2beta_settings_service_pb.GetSecuritySettingsRequest,
    metadata?: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: zitadel_settings_v2beta_settings_service_pb.GetSecuritySettingsResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/zitadel.settings.v2beta.SettingsService/GetSecuritySettings',
        request,
        metadata || {},
        this.methodDescriptorGetSecuritySettings,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/zitadel.settings.v2beta.SettingsService/GetSecuritySettings',
    request,
    metadata || {},
    this.methodDescriptorGetSecuritySettings);
  }

  methodDescriptorSetSecuritySettings = new grpcWeb.MethodDescriptor(
    '/zitadel.settings.v2beta.SettingsService/SetSecuritySettings',
    grpcWeb.MethodType.UNARY,
    zitadel_settings_v2beta_settings_service_pb.SetSecuritySettingsRequest,
    zitadel_settings_v2beta_settings_service_pb.SetSecuritySettingsResponse,
    (request: zitadel_settings_v2beta_settings_service_pb.SetSecuritySettingsRequest) => {
      return request.serializeBinary();
    },
    zitadel_settings_v2beta_settings_service_pb.SetSecuritySettingsResponse.deserializeBinary
  );

  setSecuritySettings(
    request: zitadel_settings_v2beta_settings_service_pb.SetSecuritySettingsRequest,
    metadata?: grpcWeb.Metadata | null): Promise<zitadel_settings_v2beta_settings_service_pb.SetSecuritySettingsResponse>;

  setSecuritySettings(
    request: zitadel_settings_v2beta_settings_service_pb.SetSecuritySettingsRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: zitadel_settings_v2beta_settings_service_pb.SetSecuritySettingsResponse) => void): grpcWeb.ClientReadableStream<zitadel_settings_v2beta_settings_service_pb.SetSecuritySettingsResponse>;

  setSecuritySettings(
    request: zitadel_settings_v2beta_settings_service_pb.SetSecuritySettingsRequest,
    metadata?: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: zitadel_settings_v2beta_settings_service_pb.SetSecuritySettingsResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/zitadel.settings.v2beta.SettingsService/SetSecuritySettings',
        request,
        metadata || {},
        this.methodDescriptorSetSecuritySettings,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/zitadel.settings.v2beta.SettingsService/SetSecuritySettings',
    request,
    metadata || {},
    this.methodDescriptorSetSecuritySettings);
  }

}

