import dotenv from "dotenv";
import express from "express";

import connectDB from "./db/index.js";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 8000;

connectDB()
  .then(() => {
    app.listen(PORT, () => {
      console.log(
        `Server is running at http://localhost:${PORT}`
      );
    });
  })
  .catch((error) => {
    console.error("Database connection failed:", error);
  });










  

  // THIS IS THE DIRECT CONNECTION OF MONGODB WITHOUT USING THE connectDB FUNCTION. I HAVE COMMENTED IT OUT BECAUSE I AM USING THE SEPARATE FUNCTION connectDB() TO CONNECT TO MONGODB. I HAVE KEPT THIS CODE FOR REFERENCE PURPOSES ONLY.
  /*
  import dotenv from "dotenv";
import express from "express";
import mongoose from "mongoose";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 8000;

const startServer = async () => {
  try {
    await mongoose.connect(
      `${process.env.MONGODB_URI}/${process.env.DB_NAME}`
    );

    console.log("MongoDB connected successfully");

    app.listen(PORT, () => {
      console.log(
        `Server is running at http://localhost:${PORT}`
      );
    });
  } catch (error) {
    console.error("Error connecting to MongoDB:", error);
    process.exit(1);
  }
};

startServer();

*/