import express from "express";
import { isAuthenticated, restrictTo } from "../middlewares/auth.middleware.js";
import {
  getCourseRating,
  giveCourseRating,
  updateCourseRating,
} from "../controllers/courseRating.controller.js";

const router = express.Router();

// Public route to get the rating for a course
router.get("/:courseId", getCourseRating);

// Protected routes
router.use(isAuthenticated);

// Give Rating to a Course
router
  .route("/toggle/c/:courseId")
  .post(restrictTo("student"), giveCourseRating);

// Update Rating for a Course
router
  .route("/toggle/c/:courseId")
  .patch(restrictTo("student"), updateCourseRating);

export default router;
