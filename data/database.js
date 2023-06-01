import mongoose from "mongoose";

const mongoURI = process.env.MONGO_URI;

export const connectToMongo = async () => {
  try {
    mongoose.set("strictQuery", false);
    mongoose.connect(mongoURI, { dbName: "schoolBackendAPI" });
    console.log("Connected to Mongo Successfully!");
  } catch (error) {
    console.log(error);
  }
};
