import express from "express";
import hpp from "hpp";
import requestIp from "request-ip";
import morgan from "morgan";
import cookieParser from "cookie-parser";
import compression from "compression";
import helmetOptions from "./middlewares/global/helemt.js";
import corsOptions from "./middlewares/global/cors.js";
import rateLimiter from "./middlewares/global/rateLimiter.js";

const app = express();

// Security Middleware

app.use(helmetOptions()); // Set security HTTP headers
app.use(requestIp.mw()); // get user Ip
app.use("/api", rateLimiter()); // Rate limiter to avoid misuse of the service and avoid cost spikes ,Apply rate limiting to all routes
app.use(hpp()); // Prevent HTTP Parameter Pollution
app.use(compression());

// Logging Middleware
if (process.env.NODE_ENV === "development") {
  app.use(morgan("dev"));
}

// CORS Configuration
app.use(corsOptions());

// Body Parser Middlewar
app.use(express.json({ limit: "10kb" })); //Body Limit is 10kb
app.use(express.urlencoded({ extended: true, limit: "10kb" }));
app.use(cookieParser());

// API Routes

import userRoute from "./routes/user.route.js";
import courseRoute from "./routes/course.route.js";
import purchaseRoute from "./routes/coursePurchase.route.js";
import courseProgressRoute from "./routes/courseProgress.route.js";
import razorpayRoute from "./routes/razorpay.route.js";
import healthRoute from "./routes/health.route.js";
import courseAnnouncementRoute from "./routes/courseAnnouncement.route.js";
import courseRatingRoute from "./routes/courseRating.route.js";

app.use("/health", healthRoute);
app.use("/api/v1/user", userRoute);
app.use("/api/v1/course", courseRoute);
app.use("/api/v1/purchase", purchaseRoute);
app.use("/api/v1/progress", courseProgressRoute);
app.use("/api/v1/rating", courseRatingRoute);
app.use("/api/v1/announcement", courseAnnouncementRoute);
app.use("/api/v1/razorpay", razorpayRoute);

//  404 route if page not exist
app.use((req, res) => {
  res.status(404).json({
    status: "error",
    message: "Route/Page Dose Not Exist",
  });
});

// Global Error Handler.
app.use((err, req, res, next) => {
  console.error(err);
  return res.status(err.statusCode || 500).json({
    status: "error",
    message: err.message || "Internal server error",
    ...(process.env.NODE_ENV === "development" && { stack: err.stack }),
  });
});

export { app };
