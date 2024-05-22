import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import cors from "cors"
import bookRoute from "./Routes/book_route.js"
import userRoute from "./Routes/user_route.js"
dotenv.config();

const app = express();
app.use(cors())
app.use(express.json());

const PORT = process.env.PORT || 3000;
const URI = process.env.MONGODB_URI;

const connectToDatabase = async () => {
  try {
    await mongoose.connect(URI);
    console.log("Connected to MongoDB");
  } catch (error) {
    console.error("Error connecting to MongoDB:", error);
    process.exit(1); // Exit process with failure
  }
};

// Connect to MongoDB
connectToDatabase();
// defining route
app.use("/book",bookRoute)
app.use("/user",userRoute);

app.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}`);
});
