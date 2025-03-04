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
  },

  {
    timestamps: true,
  }
);

const Review = mongoose.model("review", reviewSchema);

export default Review;
