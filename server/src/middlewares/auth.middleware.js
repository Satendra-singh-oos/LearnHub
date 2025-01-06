import jwt from "jsonwebtoken";
import { User } from "../models/user.model.js";
import { asyncHandler } from "../utils/asyncHandler.js";
import { ApiResponse } from "../utils/ApiResponse.js";

export const isAuthenticated = asyncHandler(async (req, res, next) => {});

// Middleware for role-based access control
export const restrictTo = (...roles) => {
  return asyncHandler(async (req, res, next) => {});
};

// Optional authentication middleware
export const optionalAuth = asyncHandler(async (req, res, next) => {});
