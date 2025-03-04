import mongoose from "mongoose";

const reviewSchema = new mongoose.Schema(
  {
    reviewdescription: { type: String, required: true },
    reviewratings: { type: String, required: true },
    reviewproduct: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Product",
    },
    reviewcustomer: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Customer",
    },
    reviewdate: { type: Date, default: Date.now },
    reviewAccepted: { type: Boolean, default: false },
  },

  {
    timestamps: true,
  }
);

const Review = mongoose.model("review", reviewSchema);

export default Review;
