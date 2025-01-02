import express from "express";

const app = express();

// Global Middelware

app.use((err, req, res, next) => {
  console.log("Global Error:" + err.stack);
  res.status(err.status || 500).json({
    status: "error",
    message: err.message || "Internal Server Error",
    ...(process.env.NODE_ENV === "develeopment" && { stack: err.stack }),
  });
});

//  404 route if some thing crashese the server
app.use((req, res) => {
  res.status(404).json({
    status: "error",
    message: "Route/Page Dose Not Exist",
  });
});

export { app };
