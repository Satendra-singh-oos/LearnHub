import rateLimit from "express-rate-limit";

import { ApiResponse } from "../../utils/ApiResponse.js";

const rateLimiter = () => {
  return rateLimit({
    windowMs: 15 * 60 * 1000, // 15 minutes
    max: 5000, // Limit each IP to 500 requests per `window` (here, per 15 minutes)
    standardHeaders: true, // Return rate limit info in the `RateLimit-*` headers
    legacyHeaders: false, // Disable the `X-RateLimit-*` headers
    handler: (_, __, ___, options) => {
      throw new ApiResponse(
        options.statusCode || 500,
        `There are too many requests. You are only allowed ${
          options.limit
        } requests per ${options.windowMs / 60000} minutes`,
      );
    },
  });
};

export default rateLimiter;
