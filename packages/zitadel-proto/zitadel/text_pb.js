// @generated by protoc-gen-es v1.10.0
// @generated from file zitadel/text.proto (package zitadel.text.v1, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import { proto3 } from "@bufbuild/protobuf";
import { ObjectDetails } from "./object_pb.js";

/**
 * @generated from message zitadel.text.v1.MessageCustomText
 */
export const MessageCustomText = /*@__PURE__*/ proto3.makeMessageType(
  "zitadel.text.v1.MessageCustomText",
  () => [
    { no: 1, name: "details", kind: "message", T: ObjectDetails },
    { no: 2, name: "title", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 3, name: "pre_header", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 4, name: "subject", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 5, name: "greeting", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 6, name: "text", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 7, name: "button_text", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 8, name: "footer_text", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 9, name: "is_default", kind: "scalar", T: 8 /* ScalarType.BOOL */ },
  ],
);

/**
 * @generated from message zitadel.text.v1.LoginCustomText
 */
export const LoginCustomText = /*@__PURE__*/ proto3.makeMessageType(
  "zitadel.text.v1.LoginCustomText",
  () => [
    { no: 1, name: "details", kind: "message", T: ObjectDetails },
    { no: 2, name: "select_account_text", kind: "message", T: SelectAccountScreenText },
    { no: 3, name: "login_text", kind: "message", T: LoginScreenText },
    { no: 4, name: "password_text", kind: "message", T: PasswordScreenText },
    { no: 5, name: "username_change_text", kind: "message", T: UsernameChangeScreenText },
    { no: 6, name: "username_change_done_text", kind: "message", T: UsernameChangeDoneScreenText },
    { no: 7, name: "init_password_text", kind: "message", T: InitPasswordScreenText },
    { no: 8, name: "init_password_done_text", kind: "message", T: InitPasswordDoneScreenText },
    { no: 9, name: "email_verification_text", kind: "message", T: EmailVerificationScreenText },
    { no: 10, name: "email_verification_done_text", kind: "message", T: EmailVerificationDoneScreenText },
    { no: 11, name: "initialize_user_text", kind: "message", T: InitializeUserScreenText },
    { no: 12, name: "initialize_done_text", kind: "message", T: InitializeUserDoneScreenText },
    { no: 13, name: "init_mfa_prompt_text", kind: "message", T: InitMFAPromptScreenText },
    { no: 14, name: "init_mfa_otp_text", kind: "message", T: InitMFAOTPScreenText },
    { no: 15, name: "init_mfa_u2f_text", kind: "message", T: InitMFAU2FScreenText },
    { no: 16, name: "init_mfa_done_text", kind: "message", T: InitMFADoneScreenText },
    { no: 17, name: "mfa_providers_text", kind: "message", T: MFAProvidersText },
    { no: 18, name: "verify_mfa_otp_text", kind: "message", T: VerifyMFAOTPScreenText },
    { no: 19, name: "verify_mfa_u2f_text", kind: "message", T: VerifyMFAU2FScreenText },
    { no: 20, name: "passwordless_text", kind: "message", T: PasswordlessScreenText },
    { no: 21, name: "password_change_text", kind: "message", T: PasswordChangeScreenText },
    { no: 22, name: "password_change_done_text", kind: "message", T: PasswordChangeDoneScreenText },
    { no: 23, name: "password_reset_done_text", kind: "message", T: PasswordResetDoneScreenText },
    { no: 24, name: "registration_option_text", kind: "message", T: RegistrationOptionScreenText },
    { no: 25, name: "registration_user_text", kind: "message", T: RegistrationUserScreenText },
    { no: 26, name: "registration_org_text", kind: "message", T: RegistrationOrgScreenText },
    { no: 27, name: "linking_user_done_text", kind: "message", T: LinkingUserDoneScreenText },
    { no: 28, name: "external_user_not_found_text", kind: "message", T: ExternalUserNotFoundScreenText },
    { no: 29, name: "success_login_text", kind: "message", T: SuccessLoginScreenText },
    { no: 30, name: "logout_text", kind: "message", T: LogoutDoneScreenText },
    { no: 31, name: "footer_text", kind: "message", T: FooterText },
    { no: 32, name: "passwordless_prompt_text", kind: "message", T: PasswordlessPromptScreenText },
    { no: 33, name: "passwordless_registration_text", kind: "message", T: PasswordlessRegistrationScreenText },
    { no: 34, name: "passwordless_registration_done_text", kind: "message", T: PasswordlessRegistrationDoneScreenText },
    { no: 35, name: "external_registration_user_overview_text", kind: "message", T: ExternalRegistrationUserOverviewScreenText },
    { no: 36, name: "is_default", kind: "scalar", T: 8 /* ScalarType.BOOL */ },
    { no: 37, name: "linking_user_prompt_text", kind: "message", T: LinkingUserPromptScreenText },
  ],
);

/**
 * @generated from message zitadel.text.v1.SelectAccountScreenText
 */
export const SelectAccountScreenText = /*@__PURE__*/ proto3.makeMessageType(
  "zitadel.text.v1.SelectAccountScreenText",
  () => [
    { no: 1, name: "title", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "description", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 3, name: "title_linking_process", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 4, name: "description_linking_process", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 5, name: "other_user", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 6, name: "session_state_active", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 7, name: "session_state_inactive", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 8, name: "user_must_be_member_of_org", kind: "scalar", T: 9 /* ScalarType.STRING */ },
  ],
);

/**
 * @generated from message zitadel.text.v1.LoginScreenText
 */
export const LoginScreenText = /*@__PURE__*/ proto3.makeMessageType(
  "zitadel.text.v1.LoginScreenText",
  () => [
    { no: 1, name: "title", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "description", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 3, name: "title_linking_process", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 4, name: "description_linking_process", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 5, name: "user_must_be_member_of_org", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 6, name: "login_name_label", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 7, name: "register_button_text", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 8, name: "next_button_text", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 9, name: "external_user_description", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 10, name: "user_name_placeholder", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 11, name: "login_name_placeholder", kind: "scalar", T: 9 /* ScalarType.STRING */ },
  ],
);

/**
 * @generated from message zitadel.text.v1.PasswordScreenText
 */
export const PasswordScreenText = /*@__PURE__*/ proto3.makeMessageType(
  "zitadel.text.v1.PasswordScreenText",
  () => [
    { no: 1, name: "title", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "description", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 3, name: "password_label", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 4, name: "reset_link_text", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 5, name: "back_button_text", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 6, name: "next_button_text", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 7, name: "min_length", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 8, name: "has_uppercase", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 9, name: "has_lowercase", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 10, name: "has_number", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 11, name: "has_symbol", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 12, name: "confirmation", kind: "scalar", T: 9 /* ScalarType.STRING */ },
  ],
);

/**
 * @generated from message zitadel.text.v1.UsernameChangeScreenText
 */
export const UsernameChangeScreenText = /*@__PURE__*/ proto3.makeMessageType(
  "zitadel.text.v1.UsernameChangeScreenText",
  () => [
    { no: 1, name: "title", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "description", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 3, name: "username_label", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 4, name: "cancel_button_text", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 5, name: "next_button_text", kind: "scalar", T: 9 /* ScalarType.STRING */ },
  ],
);

/**
 * @generated from message zitadel.text.v1.UsernameChangeDoneScreenText
 */
export const UsernameChangeDoneScreenText = /*@__PURE__*/ proto3.makeMessageType(
  "zitadel.text.v1.UsernameChangeDoneScreenText",
  () => [
    { no: 1, name: "title", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "description", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 3, name: "next_button_text", kind: "scalar", T: 9 /* ScalarType.STRING */ },
  ],
);

/**
 * @generated from message zitadel.text.v1.InitPasswordScreenText
 */
export const InitPasswordScreenText = /*@__PURE__*/ proto3.makeMessageType(
  "zitadel.text.v1.InitPasswordScreenText",
  () => [
    { no: 1, name: "title", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "description", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 3, name: "code_label", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 4, name: "new_password_label", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 5, name: "new_password_confirm_label", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 6, name: "next_button_text", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 7, name: "resend_button_text", kind: "scalar", T: 9 /* ScalarType.STRING */ },
  ],
);

/**
 * @generated from message zitadel.text.v1.InitPasswordDoneScreenText
 */
export const InitPasswordDoneScreenText = /*@__PURE__*/ proto3.makeMessageType(
  "zitadel.text.v1.InitPasswordDoneScreenText",
  () => [
    { no: 1, name: "title", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "description", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 3, name: "next_button_text", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 4, name: "cancel_button_text", kind: "scalar", T: 9 /* ScalarType.STRING */ },
  ],
);

/**
 * @generated from message zitadel.text.v1.EmailVerificationScreenText
 */
export const EmailVerificationScreenText = /*@__PURE__*/ proto3.makeMessageType(
  "zitadel.text.v1.EmailVerificationScreenText",
  () => [
    { no: 1, name: "title", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "description", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 3, name: "code_label", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 4, name: "next_button_text", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 5, name: "resend_button_text", kind: "scalar", T: 9 /* ScalarType.STRING */ },
  ],
);

/**
 * @generated from message zitadel.text.v1.EmailVerificationDoneScreenText
 */
export const EmailVerificationDoneScreenText = /*@__PURE__*/ proto3.makeMessageType(
  "zitadel.text.v1.EmailVerificationDoneScreenText",
  () => [
    { no: 1, name: "title", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "description", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 3, name: "next_button_text", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 4, name: "cancel_button_text", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 5, name: "login_button_text", kind: "scalar", T: 9 /* ScalarType.STRING */ },
  ],
);

/**
 * @generated from message zitadel.text.v1.InitializeUserScreenText
 */
export const InitializeUserScreenText = /*@__PURE__*/ proto3.makeMessageType(
  "zitadel.text.v1.InitializeUserScreenText",
  () => [
    { no: 1, name: "title", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "description", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 3, name: "code_label", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 4, name: "new_password_label", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 5, name: "new_password_confirm_label", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 6, name: "resend_button_text", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 7, name: "next_button_text", kind: "scalar", T: 9 /* ScalarType.STRING */ },
  ],
);

/**
 * @generated from message zitadel.text.v1.InitializeUserDoneScreenText
 */
export const InitializeUserDoneScreenText = /*@__PURE__*/ proto3.makeMessageType(
  "zitadel.text.v1.InitializeUserDoneScreenText",
  () => [
    { no: 1, name: "title", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "description", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 3, name: "cancel_button_text", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 4, name: "next_button_text", kind: "scalar", T: 9 /* ScalarType.STRING */ },
  ],
);

/**
 * @generated from message zitadel.text.v1.InitMFAPromptScreenText
 */
export const InitMFAPromptScreenText = /*@__PURE__*/ proto3.makeMessageType(
  "zitadel.text.v1.InitMFAPromptScreenText",
  () => [
    { no: 1, name: "title", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "description", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 3, name: "otp_option", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 4, name: "u2f_option", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 5, name: "skip_button_text", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 6, name: "next_button_text", kind: "scalar", T: 9 /* ScalarType.STRING */ },
  ],
);

/**
 * @generated from message zitadel.text.v1.InitMFAOTPScreenText
 */
export const InitMFAOTPScreenText = /*@__PURE__*/ proto3.makeMessageType(
  "zitadel.text.v1.InitMFAOTPScreenText",
  () => [
    { no: 1, name: "title", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "description", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 3, name: "description_otp", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 4, name: "secret_label", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 5, name: "code_label", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 6, name: "next_button_text", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 7, name: "cancel_button_text", kind: "scalar", T: 9 /* ScalarType.STRING */ },
  ],
);

/**
 * @generated from message zitadel.text.v1.InitMFAU2FScreenText
 */
export const InitMFAU2FScreenText = /*@__PURE__*/ proto3.makeMessageType(
  "zitadel.text.v1.InitMFAU2FScreenText",
  () => [
    { no: 1, name: "title", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "description", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 3, name: "token_name_label", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 4, name: "not_supported", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 5, name: "register_token_button_text", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 6, name: "error_retry", kind: "scalar", T: 9 /* ScalarType.STRING */ },
  ],
);

/**
 * @generated from message zitadel.text.v1.InitMFADoneScreenText
 */
export const InitMFADoneScreenText = /*@__PURE__*/ proto3.makeMessageType(
  "zitadel.text.v1.InitMFADoneScreenText",
  () => [
    { no: 1, name: "title", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "description", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 3, name: "cancel_button_text", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 4, name: "next_button_text", kind: "scalar", T: 9 /* ScalarType.STRING */ },
  ],
);

/**
 * @generated from message zitadel.text.v1.MFAProvidersText
 */
export const MFAProvidersText = /*@__PURE__*/ proto3.makeMessageType(
  "zitadel.text.v1.MFAProvidersText",
  () => [
    { no: 1, name: "choose_other", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "otp", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 3, name: "u2f", kind: "scalar", T: 9 /* ScalarType.STRING */ },
  ],
);

/**
 * @generated from message zitadel.text.v1.VerifyMFAOTPScreenText
 */
export const VerifyMFAOTPScreenText = /*@__PURE__*/ proto3.makeMessageType(
  "zitadel.text.v1.VerifyMFAOTPScreenText",
  () => [
    { no: 1, name: "title", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "description", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 3, name: "code_label", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 4, name: "next_button_text", kind: "scalar", T: 9 /* ScalarType.STRING */ },
  ],
);

/**
 * @generated from message zitadel.text.v1.VerifyMFAU2FScreenText
 */
export const VerifyMFAU2FScreenText = /*@__PURE__*/ proto3.makeMessageType(
  "zitadel.text.v1.VerifyMFAU2FScreenText",
  () => [
    { no: 1, name: "title", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "description", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 3, name: "validate_token_text", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 4, name: "not_supported", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 5, name: "error_retry", kind: "scalar", T: 9 /* ScalarType.STRING */ },
  ],
);

/**
 * @generated from message zitadel.text.v1.PasswordlessScreenText
 */
export const PasswordlessScreenText = /*@__PURE__*/ proto3.makeMessageType(
  "zitadel.text.v1.PasswordlessScreenText",
  () => [
    { no: 1, name: "title", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "description", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 3, name: "login_with_pw_button_text", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 4, name: "validate_token_button_text", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 5, name: "not_supported", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 6, name: "error_retry", kind: "scalar", T: 9 /* ScalarType.STRING */ },
  ],
);

/**
 * @generated from message zitadel.text.v1.PasswordChangeScreenText
 */
export const PasswordChangeScreenText = /*@__PURE__*/ proto3.makeMessageType(
  "zitadel.text.v1.PasswordChangeScreenText",
  () => [
    { no: 1, name: "title", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "description", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 3, name: "old_password_label", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 4, name: "new_password_label", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 5, name: "new_password_confirm_label", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 6, name: "cancel_button_text", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 7, name: "next_button_text", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 8, name: "expired_description", kind: "scalar", T: 9 /* ScalarType.STRING */ },
  ],
);

/**
 * @generated from message zitadel.text.v1.PasswordChangeDoneScreenText
 */
export const PasswordChangeDoneScreenText = /*@__PURE__*/ proto3.makeMessageType(
  "zitadel.text.v1.PasswordChangeDoneScreenText",
  () => [
    { no: 1, name: "title", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "description", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 3, name: "next_button_text", kind: "scalar", T: 9 /* ScalarType.STRING */ },
  ],
);

/**
 * @generated from message zitadel.text.v1.PasswordResetDoneScreenText
 */
export const PasswordResetDoneScreenText = /*@__PURE__*/ proto3.makeMessageType(
  "zitadel.text.v1.PasswordResetDoneScreenText",
  () => [
    { no: 1, name: "title", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "description", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 3, name: "next_button_text", kind: "scalar", T: 9 /* ScalarType.STRING */ },
  ],
);

/**
 * @generated from message zitadel.text.v1.RegistrationOptionScreenText
 */
export const RegistrationOptionScreenText = /*@__PURE__*/ proto3.makeMessageType(
  "zitadel.text.v1.RegistrationOptionScreenText",
  () => [
    { no: 1, name: "title", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "description", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 3, name: "user_name_button_text", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 4, name: "external_login_description", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 5, name: "login_button_text", kind: "scalar", T: 9 /* ScalarType.STRING */ },
  ],
);

/**
 * @generated from message zitadel.text.v1.RegistrationUserScreenText
 */
export const RegistrationUserScreenText = /*@__PURE__*/ proto3.makeMessageType(
  "zitadel.text.v1.RegistrationUserScreenText",
  () => [
    { no: 1, name: "title", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "description", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 3, name: "description_org_register", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 4, name: "firstname_label", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 5, name: "lastname_label", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 6, name: "email_label", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 7, name: "username_label", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 8, name: "language_label", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 9, name: "gender_label", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 10, name: "password_label", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 11, name: "password_confirm_label", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 12, name: "tos_and_privacy_label", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 13, name: "tos_confirm", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 15, name: "tos_link_text", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 16, name: "privacy_confirm", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 18, name: "privacy_link_text", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 20, name: "next_button_text", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 21, name: "back_button_text", kind: "scalar", T: 9 /* ScalarType.STRING */ },
  ],
);

/**
 * @generated from message zitadel.text.v1.ExternalRegistrationUserOverviewScreenText
 */
export const ExternalRegistrationUserOverviewScreenText = /*@__PURE__*/ proto3.makeMessageType(
  "zitadel.text.v1.ExternalRegistrationUserOverviewScreenText",
  () => [
    { no: 1, name: "title", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "description", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 3, name: "email_label", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 4, name: "username_label", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 5, name: "firstname_label", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 6, name: "lastname_label", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 7, name: "nickname_label", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 8, name: "language_label", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 9, name: "phone_label", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 10, name: "tos_and_privacy_label", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 11, name: "tos_confirm", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 12, name: "tos_link_text", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 14, name: "privacy_link_text", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 15, name: "back_button_text", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 16, name: "next_button_text", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 17, name: "privacy_confirm", kind: "scalar", T: 9 /* ScalarType.STRING */ },
  ],
);

/**
 * @generated from message zitadel.text.v1.RegistrationOrgScreenText
 */
export const RegistrationOrgScreenText = /*@__PURE__*/ proto3.makeMessageType(
  "zitadel.text.v1.RegistrationOrgScreenText",
  () => [
    { no: 1, name: "title", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "description", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 3, name: "orgname_label", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 4, name: "firstname_label", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 5, name: "lastname_label", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 6, name: "username_label", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 7, name: "email_label", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 9, name: "password_label", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 10, name: "password_confirm_label", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 11, name: "tos_and_privacy_label", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 12, name: "tos_confirm", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 14, name: "tos_link_text", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 15, name: "privacy_confirm", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 17, name: "privacy_link_text", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 19, name: "save_button_text", kind: "scalar", T: 9 /* ScalarType.STRING */ },
  ],
);

/**
 * @generated from message zitadel.text.v1.LinkingUserPromptScreenText
 */
export const LinkingUserPromptScreenText = /*@__PURE__*/ proto3.makeMessageType(
  "zitadel.text.v1.LinkingUserPromptScreenText",
  () => [
    { no: 1, name: "title", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "description", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 3, name: "link_button_text", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 4, name: "other_button_text", kind: "scalar", T: 9 /* ScalarType.STRING */ },
  ],
);

/**
 * @generated from message zitadel.text.v1.LinkingUserDoneScreenText
 */
export const LinkingUserDoneScreenText = /*@__PURE__*/ proto3.makeMessageType(
  "zitadel.text.v1.LinkingUserDoneScreenText",
  () => [
    { no: 1, name: "title", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "description", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 3, name: "cancel_button_text", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 4, name: "next_button_text", kind: "scalar", T: 9 /* ScalarType.STRING */ },
  ],
);

/**
 * @generated from message zitadel.text.v1.ExternalUserNotFoundScreenText
 */
export const ExternalUserNotFoundScreenText = /*@__PURE__*/ proto3.makeMessageType(
  "zitadel.text.v1.ExternalUserNotFoundScreenText",
  () => [
    { no: 1, name: "title", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "description", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 3, name: "link_button_text", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 4, name: "auto_register_button_text", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 5, name: "tos_and_privacy_label", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 6, name: "tos_confirm", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 7, name: "tos_link_text", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 8, name: "privacy_link_text", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 10, name: "privacy_confirm", kind: "scalar", T: 9 /* ScalarType.STRING */ },
  ],
);

/**
 * @generated from message zitadel.text.v1.SuccessLoginScreenText
 */
export const SuccessLoginScreenText = /*@__PURE__*/ proto3.makeMessageType(
  "zitadel.text.v1.SuccessLoginScreenText",
  () => [
    { no: 1, name: "title", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "auto_redirect_description", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 3, name: "redirected_description", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 4, name: "next_button_text", kind: "scalar", T: 9 /* ScalarType.STRING */ },
  ],
);

/**
 * @generated from message zitadel.text.v1.LogoutDoneScreenText
 */
export const LogoutDoneScreenText = /*@__PURE__*/ proto3.makeMessageType(
  "zitadel.text.v1.LogoutDoneScreenText",
  () => [
    { no: 1, name: "title", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "description", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 3, name: "login_button_text", kind: "scalar", T: 9 /* ScalarType.STRING */ },
  ],
);

/**
 * @generated from message zitadel.text.v1.FooterText
 */
export const FooterText = /*@__PURE__*/ proto3.makeMessageType(
  "zitadel.text.v1.FooterText",
  () => [
    { no: 1, name: "tos", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 3, name: "privacy_policy", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 5, name: "help", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 7, name: "support_email", kind: "scalar", T: 9 /* ScalarType.STRING */ },
  ],
);

/**
 * @generated from message zitadel.text.v1.PasswordlessPromptScreenText
 */
export const PasswordlessPromptScreenText = /*@__PURE__*/ proto3.makeMessageType(
  "zitadel.text.v1.PasswordlessPromptScreenText",
  () => [
    { no: 1, name: "title", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "description", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 3, name: "description_init", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 4, name: "passwordless_button_text", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 5, name: "next_button_text", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 6, name: "skip_button_text", kind: "scalar", T: 9 /* ScalarType.STRING */ },
  ],
);

/**
 * @generated from message zitadel.text.v1.PasswordlessRegistrationScreenText
 */
export const PasswordlessRegistrationScreenText = /*@__PURE__*/ proto3.makeMessageType(
  "zitadel.text.v1.PasswordlessRegistrationScreenText",
  () => [
    { no: 1, name: "title", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "description", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 3, name: "token_name_label", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 4, name: "not_supported", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 5, name: "register_token_button_text", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 6, name: "error_retry", kind: "scalar", T: 9 /* ScalarType.STRING */ },
  ],
);

/**
 * @generated from message zitadel.text.v1.PasswordlessRegistrationDoneScreenText
 */
export const PasswordlessRegistrationDoneScreenText = /*@__PURE__*/ proto3.makeMessageType(
  "zitadel.text.v1.PasswordlessRegistrationDoneScreenText",
  () => [
    { no: 1, name: "title", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "description", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 3, name: "next_button_text", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 4, name: "cancel_button_text", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 5, name: "description_close", kind: "scalar", T: 9 /* ScalarType.STRING */ },
  ],
);

