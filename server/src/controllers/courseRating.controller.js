import { Course } from "../models/course.model.js";
import { CourseRating } from "../models/courseRating.model.js";
import { asyncHandler } from "../utils/asyncHandler.js";
import { ApiResponse } from "../utils/ApiResponse.js";
/**
 * Get Rating for a Course
 * @route GET /api/v1/ratings/:courseId
 */
export const getCourseRating = asyncHandler((req, res) => {
  // TODO: Implementation for getting the rating for a course
});

/**
 * Give a Rating to a Course
 * @route POST /api/v1/ratings/toggle/c/:courseId
 */
export const giveCourseRating = asyncHandler((req, res) => {
  // TODO: Implementation for giving a rating to a course
});

/**
 * Update a Rating for a Course
 * @route PATCH /api/v1/ratings/toggle/c/:courseId
 */
export const updateCourseRating = asyncHandler((req, res) => {
  // TODO: Implementation for updating a rating for a course
});
