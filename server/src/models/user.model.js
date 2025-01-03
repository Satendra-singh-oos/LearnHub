import mongoose, { Schema } from "mongoose";
import { RESET_PASSWORD_TOKEN_EXPIRY, UserRolesEnum } from "../constant.js";
import bcrypt from "bcryptjs";
import crypto from "crypto";

const userSchema = new Schema(
  {
    username: {
      type: String,
      required: [true, "Name is required"],
      trim: true,
      maxLength: [50, "Name cannot exceed 50 characters"],
    },

    email: {
      type: String,
      require: [true, "Email is required"],
      unique: true,
      lowercase: true,
      trim: true,
      match: [
        /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/,
        "Please provide a valid email",
      ],
    },
    password: {
      type: String,
      required: [true, "Passwrod is required"],
      minLength: [8, "Passwrod must be atleast 8 characters"],
      select: false, // by default this field will not be come when we query from the db so it is save when i needed i need to explectly tell in the controller that i need it
    },

    role: {
      type: String,
      enum: UserRolesEnum,
      default: UserRolesEnum.STUDENT,
    },

    avatar: {
      type: String,
      default: "default-avatar.png",
    },
    bio: {
      type: String,
      maxLength: [200, "Bio cannot exceed 200 characters"],
    },

    enrolledCourses: [
      {
        course: {
          type: mongoose.Schema.Types.ObjectId,
          ref: "Course",
        },
        enrolledAt: {
          type: Date,
          default: Date.now(),
        },
      },
    ],

    createdCourses: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Course",
      },
    ],

    resetPasswordToken: String,
    resetPasswordExpire: Date,
    lastActive: {
      type: Date,
      default: Date.now,
    },
  },
  {
    timestamps: true,
    // when we use any virtual field we need to tell mongoose so that virtual come form database and go for the query in the database
    toJSON: { virtuals: true },
    toObject: { virtuals: true },
  }
);

// Encrypt password before saving
userSchema.pre("save", async function (next) {
  if (!this.isModified("password")) {
    return next();
  }
  this.password = await bcrypt.hash(
    this.password,
    Number(process.env.BCRYPT_SALT)
  );
  next();
});

// Compare password method
userSchema.methods.comparePasswrod = async function (password) {
  return await bcrypt.compare(password, this.password);
};

// Generate password reset token
userSchema.methods.getResetPasswordToken = function () {
  const resetToken = crypto.randomBytes(20).toString("hex");
  this.resetPasswordToken = crypto
    .createHash("sha256")
    .update(resetToken)
    .digest("hex");

  this.resetPasswordToken = Date.now() + RESET_PASSWORD_TOKEN_EXPIRY;
  return resetToken;
};

// Update lastActive timestamp
userSchema.methods.updateLastActive = function () {
  this.lastActive = Date.now();
  return this.save({ validateBeforeSave: false });
};

// virtual are the field which dose not exist in db means this are the calculation field

// Virtual field for total enrolled courses
userSchema.virtual("totalEnrolledCourses").get(function () {
  return this.enrolledCourses?.length;
});
userSchema.virtual("totalCreatedCourses").get(function () {
  return this.createdCourses?.length;
});

export const User = mongoose.model("User", userSchema);
