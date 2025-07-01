import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({
  userid: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true, // <== Ensures email uniqueness in the database
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

// Use existing model if already defined
export default mongoose.models.User || mongoose.model("User", UserSchema);
