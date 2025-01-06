import { Course } from "../models/course.model.js";
import { Lecture } from "../models/lecture.model.js";
import { User } from "../models/user.model.js";
import { deleteMediaFromCloudinary, uploadMedia } from "../utils/cloudinary.js";
import { ApiResponse } from "../utils/ApiResponse.js";
import { asyncHandler } from "../utils/asyncHandler.js";

/**
 * Create a new course
 * @route POST /api/v1/courses
 */
export const createNewCourse = asyncHandler(async (req, res) => {
  // TODO: Implement create new course functionality
});

/**
 * Search courses with filters
 * @route GET /api/v1/courses/search
 */
export const searchCourses = asyncHandler(async (req, res) => {
  // TODO: Implement search courses functionality
});

/**
 * Get all published courses
 * @route GET /api/v1/courses/published
 */
export const getPublishedCourses = asyncHandler(async (req, res) => {
  // TODO: Implement get published courses functionality
});

/**
 * Get courses created by the current user
 * @route GET /api/v1/courses/my-courses
 */
export const getMyCreatedCourses = asyncHandler(async (req, res) => {
  // TODO: Implement get my created courses functionality
});

/**
 * Update course details
 * @route PATCH /api/v1/courses/:courseId
 */
export const updateCourseDetails = asyncHandler(async (req, res) => {
  // TODO: Implement update course details functionality
});

/**
 * Get course by ID
 * @route GET /api/v1/courses/:courseId
 */
export const getCourseDetails = asyncHandler(async (req, res) => {
  // TODO: Implement get course details functionality
});

/**
 * Add lecture to course
 * @route POST /api/v1/courses/:courseId/lectures
 */
export const addLectureToCourse = asyncHandler(async (req, res) => {
  // TODO: Implement add lecture to course functionality
});

/**
 * Get course lectures
 * @route GET /api/v1/courses/:courseId/lectures
 */
export const getCourseLectures = asyncHandler(async (req, res) => {
  // TODO: Implement get course lectures functionality
});
