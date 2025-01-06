import Razorpay from "razorpay";
import crypto from "crypto";
import { Course } from "../models/course.model.js";
import { CoursePurchase } from "../models/coursePurchase.model.js";
import { ApiResponse } from "../utils/ApiResponse.js";

const razorpay = new Razorpay({
  key_id: process.env.RAZORPAY_KEY_ID,
  key_secret: process.env.RAZORPAY_KEY_SECRET,
});

/**
 * Create RazorpayOrder
 * @route POST /api/v1/razorpay/create-order
 */

export const createRazorpayOrder = async (req, res) => {};

/**
 * Verify RazorpayOrder
 * @route POST /api/v1/razorpay/verify-payment
 */

export const verifyPayment = async (req, res) => {};
