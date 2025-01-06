import { body, param, query, validationResult } from "express-validator";
import { ApiResponse } from "../utils/ApiResponse.js";
export const validate = (validations) => {};

// Common validation chains
export const commonValidations = {};

// User validation chains
export const validateSignup = validate();

export const validateSignin = validate();

export const validatePasswordChange = validate();
