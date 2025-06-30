// models/User.js
import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({
  userid: {
    type: String,
    required: true,
    // unique: true,
  },
  email: {
    type: String,
    required: true,
    // unique: true,
  },
  fullName: String,
  username: String,
  firstName: String,
  lastName: String,
  imageUrl: String,
  phoneNumbers: [String], 
  syncedAt: {
    type: Date,
    default: Date.now,
  },
});

export default mongoose.models.User || mongoose.model("User", UserSchema);
