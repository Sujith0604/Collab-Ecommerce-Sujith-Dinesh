import mongoose from "mongoose";

const productSchema = new mongoose.Schema(
  {
    productName: { typ: String, required: true },
    productDescription: { typ: String, required: true },
    productQuantity: { typ: Number, required: true },
    productInStock: { typ: Number, required: true },
    productImage: { typ: String, required: true },
    productCategory: {
      type: String,
      required: true,
    },
    productGallery: {
      type: [String],
      required: true,
    },
    productBrand: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Brand",
    },
    productReview: { type: mongoose.Schema.Types.ObjectId, ref: "Review" },
    productActive: { typ: Boolean, required: true },
    productPrice: { type: Number, required: true },
  },
  {
    timestamps: true,
  }
);

const Product = mongoose.model("Product", productSchema);

export default Product;
