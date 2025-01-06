// import Stripe from "stripe";
import { Course } from "../models/course.model.js";
import { CoursePurchase } from "../models/coursePurchase.model.js";
import { Lecture } from "../models/lecture.model.js";
import { User } from "../models/user.model.js";
import { ApiResponse } from "../utils/ApiResponse.js";

import { asyncHandler } from "../utils/asyncHandler.js";

// /**
//  * Create a Stripe checkout session for course purchase
//  * @route POST /api/v1/payments/create-checkout-session
//  */
// export const initiateStripeCheckout = asyncHandler(async (req, res) => {
//   // TODO: Implement stripe checkout session creation functionality
// });

// /**
//  * Handle Stripe webhook events
//  * @route POST /api/v1/payments/webhook
//  */
// export const handleStripeWebhook = asyncHandler(async (req, res) => {
//   // TODO: Implement stripe webhook handling functionality
// });

/**
 * Get course details with purchase status
 * @route GET /api/v1/payments/courses/:courseId/purchase-status
 */
export const getCoursePurchaseStatus = asyncHandler(async (req, res) => {
  // TODO: Implement get course purchase status functionality
});

/**
 * Get all purchased courses
 * @route GET /api/v1/payments/purchased-courses
 */
export const getPurchasedCourses = asyncHandler(async (req, res) => {
  // TODO: Implement get purchased courses functionality
});
