import mongoose from "mongoose";

const adminSchema = new mongoose.Schema(
  {
    adminName: { type: String, required: true },
    adminEmail: { type: String, required: true },
    adminPassword: { type: String, required: true },
    adminRole: {
      type: String,
      required: true,
      default: "user",
      enum: ["user", "admin"],
    },
  },

  {
    timestamps: true,
  }
);

const Admin = mongoose.model("Admin", adminSchema);

export default Admin;
