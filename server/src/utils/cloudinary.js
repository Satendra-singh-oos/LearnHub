import { v2 as cloudinary } from "cloudinary";
import dotenv from "dotenv";
dotenv.config({});

cloudinary.config({
  api_key: process.env.API_KEY,
  api_secret: process.env.API_SECRET,
  cloud_name: process.env.CLOUD_NAME,
});

export const uploadMedia = async (file) => {};
export const deleteMediaFromCloudinary = async (publicId) => {};

export const deleteVideoFromCloudinary = async (publicId) => {};
