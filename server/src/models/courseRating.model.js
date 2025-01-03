import mongoose, { Schema } from "mongoose";

const courseRatingSchema = new Schema(
  {
    rating: {
      type: Number,
      required: [true, "Rating is required"],
      min: [0, "Rating  must be non-negative"],
      max: [5, "Rating Must be in between 0 to 5"],
    },

    course: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Course",
      required: [true, "Course reference is required"],
    },

    owner: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: [true, "User reference is required"],
    },
  },
  {
    timestamps: true,
  }
);

export const CourseRating = mongoose.model("CourseRating", courseRatingSchema);
