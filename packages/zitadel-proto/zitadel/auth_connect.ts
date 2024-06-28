// @generated by protoc-gen-connect-es v1.4.0 with parameter "target=ts"
// @generated from file zitadel/auth.proto (package zitadel.auth.v1, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import { AddMyAuthFactorOTPEmailRequest, AddMyAuthFactorOTPEmailResponse, AddMyAuthFactorOTPRequest, AddMyAuthFactorOTPResponse, AddMyAuthFactorOTPSMSRequest, AddMyAuthFactorOTPSMSResponse, AddMyAuthFactorU2FRequest, AddMyAuthFactorU2FResponse, AddMyPasswordlessLinkRequest, AddMyPasswordlessLinkResponse, AddMyPasswordlessRequest, AddMyPasswordlessResponse, GetMyEmailRequest, GetMyEmailResponse, GetMyLabelPolicyRequest, GetMyLabelPolicyResponse, GetMyLoginPolicyRequest, GetMyLoginPolicyResponse, GetMyMetadataRequest, GetMyMetadataResponse, GetMyPasswordComplexityPolicyRequest, GetMyPasswordComplexityPolicyResponse, GetMyPhoneRequest, GetMyPhoneResponse, GetMyPrivacyPolicyRequest, GetMyPrivacyPolicyResponse, GetMyProfileRequest, GetMyProfileResponse, GetMyUserRequest, GetMyUserResponse, GetSupportedLanguagesRequest, GetSupportedLanguagesResponse, HealthzRequest, HealthzResponse, ListMyAuthFactorsRequest, ListMyAuthFactorsResponse, ListMyLinkedIDPsRequest, ListMyLinkedIDPsResponse, ListMyMembershipsRequest, ListMyMembershipsResponse, ListMyMetadataRequest, ListMyMetadataResponse, ListMyPasswordlessRequest, ListMyPasswordlessResponse, ListMyProjectOrgsRequest, ListMyProjectOrgsResponse, ListMyProjectPermissionsRequest, ListMyProjectPermissionsResponse, ListMyRefreshTokensRequest, ListMyRefreshTokensResponse, ListMyUserChangesRequest, ListMyUserChangesResponse, ListMyUserGrantsRequest, ListMyUserGrantsResponse, ListMyUserSessionsRequest, ListMyUserSessionsResponse, ListMyZitadelPermissionsRequest, ListMyZitadelPermissionsResponse, RemoveMyAuthFactorOTPEmailRequest, RemoveMyAuthFactorOTPEmailResponse, RemoveMyAuthFactorOTPRequest, RemoveMyAuthFactorOTPResponse, RemoveMyAuthFactorOTPSMSRequest, RemoveMyAuthFactorOTPSMSResponse, RemoveMyAuthFactorU2FRequest, RemoveMyAuthFactorU2FResponse, RemoveMyAvatarRequest, RemoveMyAvatarResponse, RemoveMyLinkedIDPRequest, RemoveMyLinkedIDPResponse, RemoveMyPasswordlessRequest, RemoveMyPasswordlessResponse, RemoveMyPhoneRequest, RemoveMyPhoneResponse, RemoveMyUserRequest, RemoveMyUserResponse, ResendMyEmailVerificationRequest, ResendMyEmailVerificationResponse, ResendMyPhoneVerificationRequest, ResendMyPhoneVerificationResponse, RevokeAllMyRefreshTokensRequest, RevokeAllMyRefreshTokensResponse, RevokeMyRefreshTokenRequest, RevokeMyRefreshTokenResponse, SendMyPasswordlessLinkRequest, SendMyPasswordlessLinkResponse, SetMyEmailRequest, SetMyEmailResponse, SetMyPhoneRequest, SetMyPhoneResponse, UpdateMyPasswordRequest, UpdateMyPasswordResponse, UpdateMyProfileRequest, UpdateMyProfileResponse, UpdateMyUserNameRequest, UpdateMyUserNameResponse, VerifyMyAuthFactorOTPRequest, VerifyMyAuthFactorOTPResponse, VerifyMyAuthFactorU2FRequest, VerifyMyAuthFactorU2FResponse, VerifyMyEmailRequest, VerifyMyEmailResponse, VerifyMyPasswordlessRequest, VerifyMyPasswordlessResponse, VerifyMyPhoneRequest, VerifyMyPhoneResponse } from "./auth_pb.js";
import { MethodKind } from "@bufbuild/protobuf";

/**
 * @generated from service zitadel.auth.v1.AuthService
 */
export const AuthService = {
  typeName: "zitadel.auth.v1.AuthService",
  methods: {
    /**
     * @generated from rpc zitadel.auth.v1.AuthService.Healthz
     */
    healthz: {
      name: "Healthz",
      I: HealthzRequest,
      O: HealthzResponse,
      kind: MethodKind.Unary,
    },
    /**
     * @generated from rpc zitadel.auth.v1.AuthService.GetSupportedLanguages
     */
    getSupportedLanguages: {
      name: "GetSupportedLanguages",
      I: GetSupportedLanguagesRequest,
      O: GetSupportedLanguagesResponse,
      kind: MethodKind.Unary,
    },
    /**
     * @generated from rpc zitadel.auth.v1.AuthService.GetMyUser
     */
    getMyUser: {
      name: "GetMyUser",
      I: GetMyUserRequest,
      O: GetMyUserResponse,
      kind: MethodKind.Unary,
    },
    /**
     * @generated from rpc zitadel.auth.v1.AuthService.RemoveMyUser
     */
    removeMyUser: {
      name: "RemoveMyUser",
      I: RemoveMyUserRequest,
      O: RemoveMyUserResponse,
      kind: MethodKind.Unary,
    },
    /**
     * @generated from rpc zitadel.auth.v1.AuthService.ListMyUserChanges
     */
    listMyUserChanges: {
      name: "ListMyUserChanges",
      I: ListMyUserChangesRequest,
      O: ListMyUserChangesResponse,
      kind: MethodKind.Unary,
    },
    /**
     * @generated from rpc zitadel.auth.v1.AuthService.ListMyUserSessions
     */
    listMyUserSessions: {
      name: "ListMyUserSessions",
      I: ListMyUserSessionsRequest,
      O: ListMyUserSessionsResponse,
      kind: MethodKind.Unary,
    },
    /**
     * @generated from rpc zitadel.auth.v1.AuthService.ListMyMetadata
     */
    listMyMetadata: {
      name: "ListMyMetadata",
      I: ListMyMetadataRequest,
      O: ListMyMetadataResponse,
      kind: MethodKind.Unary,
    },
    /**
     * @generated from rpc zitadel.auth.v1.AuthService.GetMyMetadata
     */
    getMyMetadata: {
      name: "GetMyMetadata",
      I: GetMyMetadataRequest,
      O: GetMyMetadataResponse,
      kind: MethodKind.Unary,
    },
    /**
     * @generated from rpc zitadel.auth.v1.AuthService.ListMyRefreshTokens
     */
    listMyRefreshTokens: {
      name: "ListMyRefreshTokens",
      I: ListMyRefreshTokensRequest,
      O: ListMyRefreshTokensResponse,
      kind: MethodKind.Unary,
    },
    /**
     * @generated from rpc zitadel.auth.v1.AuthService.RevokeMyRefreshToken
     */
    revokeMyRefreshToken: {
      name: "RevokeMyRefreshToken",
      I: RevokeMyRefreshTokenRequest,
      O: RevokeMyRefreshTokenResponse,
      kind: MethodKind.Unary,
    },
    /**
     * @generated from rpc zitadel.auth.v1.AuthService.RevokeAllMyRefreshTokens
     */
    revokeAllMyRefreshTokens: {
      name: "RevokeAllMyRefreshTokens",
      I: RevokeAllMyRefreshTokensRequest,
      O: RevokeAllMyRefreshTokensResponse,
      kind: MethodKind.Unary,
    },
    /**
     * @generated from rpc zitadel.auth.v1.AuthService.UpdateMyUserName
     */
    updateMyUserName: {
      name: "UpdateMyUserName",
      I: UpdateMyUserNameRequest,
      O: UpdateMyUserNameResponse,
      kind: MethodKind.Unary,
    },
    /**
     * @generated from rpc zitadel.auth.v1.AuthService.GetMyPasswordComplexityPolicy
     */
    getMyPasswordComplexityPolicy: {
      name: "GetMyPasswordComplexityPolicy",
      I: GetMyPasswordComplexityPolicyRequest,
      O: GetMyPasswordComplexityPolicyResponse,
      kind: MethodKind.Unary,
    },
    /**
     * @generated from rpc zitadel.auth.v1.AuthService.UpdateMyPassword
     */
    updateMyPassword: {
      name: "UpdateMyPassword",
      I: UpdateMyPasswordRequest,
      O: UpdateMyPasswordResponse,
      kind: MethodKind.Unary,
    },
    /**
     * @generated from rpc zitadel.auth.v1.AuthService.GetMyProfile
     */
    getMyProfile: {
      name: "GetMyProfile",
      I: GetMyProfileRequest,
      O: GetMyProfileResponse,
      kind: MethodKind.Unary,
    },
    /**
     * @generated from rpc zitadel.auth.v1.AuthService.UpdateMyProfile
     */
    updateMyProfile: {
      name: "UpdateMyProfile",
      I: UpdateMyProfileRequest,
      O: UpdateMyProfileResponse,
      kind: MethodKind.Unary,
    },
    /**
     * @generated from rpc zitadel.auth.v1.AuthService.GetMyEmail
     */
    getMyEmail: {
      name: "GetMyEmail",
      I: GetMyEmailRequest,
      O: GetMyEmailResponse,
      kind: MethodKind.Unary,
    },
    /**
     * @generated from rpc zitadel.auth.v1.AuthService.SetMyEmail
     */
    setMyEmail: {
      name: "SetMyEmail",
      I: SetMyEmailRequest,
      O: SetMyEmailResponse,
      kind: MethodKind.Unary,
    },
    /**
     * @generated from rpc zitadel.auth.v1.AuthService.VerifyMyEmail
     */
    verifyMyEmail: {
      name: "VerifyMyEmail",
      I: VerifyMyEmailRequest,
      O: VerifyMyEmailResponse,
      kind: MethodKind.Unary,
    },
    /**
     * @generated from rpc zitadel.auth.v1.AuthService.ResendMyEmailVerification
     */
    resendMyEmailVerification: {
      name: "ResendMyEmailVerification",
      I: ResendMyEmailVerificationRequest,
      O: ResendMyEmailVerificationResponse,
      kind: MethodKind.Unary,
    },
    /**
     * @generated from rpc zitadel.auth.v1.AuthService.GetMyPhone
     */
    getMyPhone: {
      name: "GetMyPhone",
      I: GetMyPhoneRequest,
      O: GetMyPhoneResponse,
      kind: MethodKind.Unary,
    },
    /**
     * @generated from rpc zitadel.auth.v1.AuthService.SetMyPhone
     */
    setMyPhone: {
      name: "SetMyPhone",
      I: SetMyPhoneRequest,
      O: SetMyPhoneResponse,
      kind: MethodKind.Unary,
    },
    /**
     * @generated from rpc zitadel.auth.v1.AuthService.VerifyMyPhone
     */
    verifyMyPhone: {
      name: "VerifyMyPhone",
      I: VerifyMyPhoneRequest,
      O: VerifyMyPhoneResponse,
      kind: MethodKind.Unary,
    },
    /**
     * Resends an sms to the last given phone number, to verify it
     *
     * @generated from rpc zitadel.auth.v1.AuthService.ResendMyPhoneVerification
     */
    resendMyPhoneVerification: {
      name: "ResendMyPhoneVerification",
      I: ResendMyPhoneVerificationRequest,
      O: ResendMyPhoneVerificationResponse,
      kind: MethodKind.Unary,
    },
    /**
     * @generated from rpc zitadel.auth.v1.AuthService.RemoveMyPhone
     */
    removeMyPhone: {
      name: "RemoveMyPhone",
      I: RemoveMyPhoneRequest,
      O: RemoveMyPhoneResponse,
      kind: MethodKind.Unary,
    },
    /**
     * @generated from rpc zitadel.auth.v1.AuthService.RemoveMyAvatar
     */
    removeMyAvatar: {
      name: "RemoveMyAvatar",
      I: RemoveMyAvatarRequest,
      O: RemoveMyAvatarResponse,
      kind: MethodKind.Unary,
    },
    /**
     * @generated from rpc zitadel.auth.v1.AuthService.ListMyLinkedIDPs
     */
    listMyLinkedIDPs: {
      name: "ListMyLinkedIDPs",
      I: ListMyLinkedIDPsRequest,
      O: ListMyLinkedIDPsResponse,
      kind: MethodKind.Unary,
    },
    /**
     * @generated from rpc zitadel.auth.v1.AuthService.RemoveMyLinkedIDP
     */
    removeMyLinkedIDP: {
      name: "RemoveMyLinkedIDP",
      I: RemoveMyLinkedIDPRequest,
      O: RemoveMyLinkedIDPResponse,
      kind: MethodKind.Unary,
    },
    /**
     * @generated from rpc zitadel.auth.v1.AuthService.ListMyAuthFactors
     */
    listMyAuthFactors: {
      name: "ListMyAuthFactors",
      I: ListMyAuthFactorsRequest,
      O: ListMyAuthFactorsResponse,
      kind: MethodKind.Unary,
    },
    /**
     * @generated from rpc zitadel.auth.v1.AuthService.AddMyAuthFactorOTP
     */
    addMyAuthFactorOTP: {
      name: "AddMyAuthFactorOTP",
      I: AddMyAuthFactorOTPRequest,
      O: AddMyAuthFactorOTPResponse,
      kind: MethodKind.Unary,
    },
    /**
     * @generated from rpc zitadel.auth.v1.AuthService.VerifyMyAuthFactorOTP
     */
    verifyMyAuthFactorOTP: {
      name: "VerifyMyAuthFactorOTP",
      I: VerifyMyAuthFactorOTPRequest,
      O: VerifyMyAuthFactorOTPResponse,
      kind: MethodKind.Unary,
    },
    /**
     * @generated from rpc zitadel.auth.v1.AuthService.RemoveMyAuthFactorOTP
     */
    removeMyAuthFactorOTP: {
      name: "RemoveMyAuthFactorOTP",
      I: RemoveMyAuthFactorOTPRequest,
      O: RemoveMyAuthFactorOTPResponse,
      kind: MethodKind.Unary,
    },
    /**
     * @generated from rpc zitadel.auth.v1.AuthService.AddMyAuthFactorOTPSMS
     */
    addMyAuthFactorOTPSMS: {
      name: "AddMyAuthFactorOTPSMS",
      I: AddMyAuthFactorOTPSMSRequest,
      O: AddMyAuthFactorOTPSMSResponse,
      kind: MethodKind.Unary,
    },
    /**
     * @generated from rpc zitadel.auth.v1.AuthService.RemoveMyAuthFactorOTPSMS
     */
    removeMyAuthFactorOTPSMS: {
      name: "RemoveMyAuthFactorOTPSMS",
      I: RemoveMyAuthFactorOTPSMSRequest,
      O: RemoveMyAuthFactorOTPSMSResponse,
      kind: MethodKind.Unary,
    },
    /**
     * @generated from rpc zitadel.auth.v1.AuthService.AddMyAuthFactorOTPEmail
     */
    addMyAuthFactorOTPEmail: {
      name: "AddMyAuthFactorOTPEmail",
      I: AddMyAuthFactorOTPEmailRequest,
      O: AddMyAuthFactorOTPEmailResponse,
      kind: MethodKind.Unary,
    },
    /**
     * @generated from rpc zitadel.auth.v1.AuthService.RemoveMyAuthFactorOTPEmail
     */
    removeMyAuthFactorOTPEmail: {
      name: "RemoveMyAuthFactorOTPEmail",
      I: RemoveMyAuthFactorOTPEmailRequest,
      O: RemoveMyAuthFactorOTPEmailResponse,
      kind: MethodKind.Unary,
    },
    /**
     * @generated from rpc zitadel.auth.v1.AuthService.AddMyAuthFactorU2F
     */
    addMyAuthFactorU2F: {
      name: "AddMyAuthFactorU2F",
      I: AddMyAuthFactorU2FRequest,
      O: AddMyAuthFactorU2FResponse,
      kind: MethodKind.Unary,
    },
    /**
     * @generated from rpc zitadel.auth.v1.AuthService.VerifyMyAuthFactorU2F
     */
    verifyMyAuthFactorU2F: {
      name: "VerifyMyAuthFactorU2F",
      I: VerifyMyAuthFactorU2FRequest,
      O: VerifyMyAuthFactorU2FResponse,
      kind: MethodKind.Unary,
    },
    /**
     * @generated from rpc zitadel.auth.v1.AuthService.RemoveMyAuthFactorU2F
     */
    removeMyAuthFactorU2F: {
      name: "RemoveMyAuthFactorU2F",
      I: RemoveMyAuthFactorU2FRequest,
      O: RemoveMyAuthFactorU2FResponse,
      kind: MethodKind.Unary,
    },
    /**
     * @generated from rpc zitadel.auth.v1.AuthService.ListMyPasswordless
     */
    listMyPasswordless: {
      name: "ListMyPasswordless",
      I: ListMyPasswordlessRequest,
      O: ListMyPasswordlessResponse,
      kind: MethodKind.Unary,
    },
    /**
     * @generated from rpc zitadel.auth.v1.AuthService.AddMyPasswordless
     */
    addMyPasswordless: {
      name: "AddMyPasswordless",
      I: AddMyPasswordlessRequest,
      O: AddMyPasswordlessResponse,
      kind: MethodKind.Unary,
    },
    /**
     * @generated from rpc zitadel.auth.v1.AuthService.AddMyPasswordlessLink
     */
    addMyPasswordlessLink: {
      name: "AddMyPasswordlessLink",
      I: AddMyPasswordlessLinkRequest,
      O: AddMyPasswordlessLinkResponse,
      kind: MethodKind.Unary,
    },
    /**
     * @generated from rpc zitadel.auth.v1.AuthService.SendMyPasswordlessLink
     */
    sendMyPasswordlessLink: {
      name: "SendMyPasswordlessLink",
      I: SendMyPasswordlessLinkRequest,
      O: SendMyPasswordlessLinkResponse,
      kind: MethodKind.Unary,
    },
    /**
     * @generated from rpc zitadel.auth.v1.AuthService.VerifyMyPasswordless
     */
    verifyMyPasswordless: {
      name: "VerifyMyPasswordless",
      I: VerifyMyPasswordlessRequest,
      O: VerifyMyPasswordlessResponse,
      kind: MethodKind.Unary,
    },
    /**
     * @generated from rpc zitadel.auth.v1.AuthService.RemoveMyPasswordless
     */
    removeMyPasswordless: {
      name: "RemoveMyPasswordless",
      I: RemoveMyPasswordlessRequest,
      O: RemoveMyPasswordlessResponse,
      kind: MethodKind.Unary,
    },
    /**
     * @generated from rpc zitadel.auth.v1.AuthService.ListMyUserGrants
     */
    listMyUserGrants: {
      name: "ListMyUserGrants",
      I: ListMyUserGrantsRequest,
      O: ListMyUserGrantsResponse,
      kind: MethodKind.Unary,
    },
    /**
     * @generated from rpc zitadel.auth.v1.AuthService.ListMyProjectOrgs
     */
    listMyProjectOrgs: {
      name: "ListMyProjectOrgs",
      I: ListMyProjectOrgsRequest,
      O: ListMyProjectOrgsResponse,
      kind: MethodKind.Unary,
    },
    /**
     * @generated from rpc zitadel.auth.v1.AuthService.ListMyZitadelPermissions
     */
    listMyZitadelPermissions: {
      name: "ListMyZitadelPermissions",
      I: ListMyZitadelPermissionsRequest,
      O: ListMyZitadelPermissionsResponse,
      kind: MethodKind.Unary,
    },
    /**
     * @generated from rpc zitadel.auth.v1.AuthService.ListMyProjectPermissions
     */
    listMyProjectPermissions: {
      name: "ListMyProjectPermissions",
      I: ListMyProjectPermissionsRequest,
      O: ListMyProjectPermissionsResponse,
      kind: MethodKind.Unary,
    },
    /**
     * @generated from rpc zitadel.auth.v1.AuthService.ListMyMemberships
     */
    listMyMemberships: {
      name: "ListMyMemberships",
      I: ListMyMembershipsRequest,
      O: ListMyMembershipsResponse,
      kind: MethodKind.Unary,
    },
    /**
     * @generated from rpc zitadel.auth.v1.AuthService.GetMyLabelPolicy
     */
    getMyLabelPolicy: {
      name: "GetMyLabelPolicy",
      I: GetMyLabelPolicyRequest,
      O: GetMyLabelPolicyResponse,
      kind: MethodKind.Unary,
    },
    /**
     * @generated from rpc zitadel.auth.v1.AuthService.GetMyPrivacyPolicy
     */
    getMyPrivacyPolicy: {
      name: "GetMyPrivacyPolicy",
      I: GetMyPrivacyPolicyRequest,
      O: GetMyPrivacyPolicyResponse,
      kind: MethodKind.Unary,
    },
    /**
     * @generated from rpc zitadel.auth.v1.AuthService.GetMyLoginPolicy
     */
    getMyLoginPolicy: {
      name: "GetMyLoginPolicy",
      I: GetMyLoginPolicyRequest,
      O: GetMyLoginPolicyResponse,
      kind: MethodKind.Unary,
    },
  }
} as const;

