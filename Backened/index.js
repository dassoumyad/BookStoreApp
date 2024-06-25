import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import cors from "cors";
import bookRoute from "./Routes/book_route.js"; // Assuming you have this route
import userRoute from "./Routes/user_route.js"; // Assuming you have this route
import messageRoute from "./Routes/messageRoute.js"; // Correcting the import path

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

const PORT = process.env.PORT || 3000;
const URI = process.env.MONGODB_URI;

const connectToDatabase = async () => {
  try {
    await mongoose.connect(URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("Connected to MongoDB");
  } catch (error) {
    console.error("Error connecting to MongoDB:", error);
    process.exit(1); // Exit process with failure
  }
};

// Connect to MongoDB
connectToDatabase();

// Define routes
app.use("/book", bookRoute); // Assuming you have this route
app.use("/user", userRoute); // Assuming you have this route
app.use("/message", messageRoute); // Correcting the path

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
