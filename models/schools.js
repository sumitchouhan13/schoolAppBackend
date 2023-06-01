import mongoose from "mongoose";

const schema = new mongoose.Schema({
  schoolNames: [
    {
      name: {
        type: String,
        required: true,
      },
      email: {
        type: String,
        required: true,
        unique: true,
      },
      address: {
        required: true,
        type: String,
        select: false,
      },
      createdAt: {
        type: Date,
        default: Date.now(),
      },
    },
  ],
});

export const School = mongoose.model("School", schema);
