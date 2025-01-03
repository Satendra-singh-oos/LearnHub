import mongoose, { Schema } from "mongoose";
import { CourseCatogoriesEnum, CourseLevelEnum } from "../constant.js";
import { CourseRating } from "./courseRating.model.js";

const courseSchema = new Schema(
  {
    title: {
      type: String,
      requried: [true, "Course Titile must be provided"],
      trim: true,
      maxLength: [100, "Course title must be less then 100 characters"],
    },
    subtitle: {
      type: String,
      trim: true,
      maxLength: [200, "Course subtitle cannot exceed 200 characters"],
    },
    description: {
      type: String,
      trim: true,
    },
    category: {
      type: String,
      enum: CourseCatogoriesEnum,
      default: CourseCatogoriesEnum.UNKNOWN,
    },

    level: {
      type: String,
      enum: CourseLevelEnum,
      default: CourseLevelEnum.BEGINNER,
    },

    price: {
      type: Number,
      required: [true, "Course price is required"],
      min: [0, "Course price must be non-negative"],
    },
    thumbnail: {
      type: String,
      required: [true, "Course thumbnail is required"],
    },
    enrolledStudents: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
      },
    ],
    lectures: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Lecture",
      },
    ],

    instructor: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: [true, "Course Instructor is required"],
    },

    isPublished: {
      type: Boolean,
      default: true,
    },
    totalDuration: {
      type: Number,
      default: 0,
    },
    totalLectures: {
      type: Number,
      default: 0,
    },
  },
  {
    timestamps: true,
    toJSON: { virtuals: true },
    toObject: { virtuals: true },
  }
);

// TODO: check this virtual is working or not also add some more virtual fo like total comment on course
// Virtual field for average rating (to be implemented with reviews)
courseSchema.virtual("averageRating").get(function () {
  const rating = CourseRating.aggregate([
    {
      $match: {
        course: this._id,
      },
    },
    {
      $group: {
        _id: null,
        avgRating: {
          $avg: "$rating",
        },
        ratingCount: {
          $sum: 1,
        },
      },
    },
  ]);

  return {
    averageRating: rating[0] ? rating[0].avgRating : 0,
    reviewCount: rating[0] ? rating[0].ratingCount : 0,
  };
});

courseSchema.pre("save", function (next) {
  if (this.lectures) {
    this.totalLectures = this.lectures.length;
  }
  next();
});

export const Course = mongoose.model("Course", courseSchema);
