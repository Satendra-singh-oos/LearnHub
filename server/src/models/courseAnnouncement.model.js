import mongoose, { Schema } from "mongoose";

const courseAnnouncementSchema = new Schema(
  {
    content: {
      type: String,
      trim: true,
      required: [true, "Content is required"],
    },
    instructor: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: [true, "Instructor reference is required"],
    },
    course: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Course",
      required: [true, "Course reference is required"],
    },
  },
  { timestamps: true }
);

export const courseAnnouncement = mongoose.model(
  "courseAnnouncement",
  courseAnnouncementSchema
);
