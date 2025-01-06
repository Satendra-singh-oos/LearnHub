import express from "express";
import { isAuthenticated, restrictTo } from "../middlewares/auth.middleware.js";
import {
  getAllCourseAnnouncements,
  createAnnouncement,
  updateAnnouncement,
  deleteAnnouncement,
} from "../controllers/courseAnnouncement.controller.js";

const router = express.Router();

// Protected routes
router.use(isAuthenticated);

router.get(
  "/courses/:courseId",
  restrictTo("student"),
  getAllCourseAnnouncements
);
// Create Announcement
router.route("/:courseId").post(restrictTo("instructor"), createAnnouncement);

// Update Announcement
router
  .route("/:announcementId")
  .patch(restrictTo("instructor"), updateAnnouncement);

// Delete Announcement
router
  .route("/:announcementId")
  .delete(restrictTo("instructor"), deleteAnnouncement);

export default router;
