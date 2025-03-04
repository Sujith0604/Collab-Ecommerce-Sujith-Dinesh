import mongoose from "mongoose";

const brandSchema = new mongoose.Schema(
  {
    brandName: { type: String, required: true },
    brandDescription: { type: String, required: true },
    brandLogo: { type: String, required: true },
    brandActive: { type: Boolean, required: true },
    products: [{ type: mongoose.Schema.Types.ObjectId, ref: "Product" }],
  },

  {
    timestamps: true,
  }
);

const Brand = mongoose.model("Brand", brandSchema);

export default Brand;
