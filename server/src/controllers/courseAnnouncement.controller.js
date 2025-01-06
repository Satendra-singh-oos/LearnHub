import { Course } from "../models/course.model.js";
import { courseAnnouncement } from "../models/courseAnnouncement.model.js";
import { asyncHandler } from "../utils/asyncHandler.js";
import { ApiResponse } from "../utils/ApiResponse.js";

/**
 * Get All Announcements for a Course
 * @route GET /api/v1/announcement/courses/:courseId
 */
export const getAllCourseAnnouncements = asyncHandler(async (req, res) => {});

/**
 * Create an Announcement for a Course
 * @route POST /api/v1/announcement/:courseId
 */
export const createAnnouncement = asyncHandler(async (req, res) => {});

/**
 * Update an Announcement
 * @route PATCH /api/v1/announcement/:announcementId
 */
export const updateAnnouncement = asyncHandler(async (req, res) => {});

/**
 * Delete an Announcement
 * @route DELETE /api/v1/announcement/:announcementId
 */
export const deleteAnnouncement = asyncHandler(async (req, res) => {});
