import mongoose from "mongoose";

const customerSchema = new mongoose.Schema(
  {
    customerName: { type: String, required: true },
    customerEmail: { type: String, required: true },
    customerPassword: { type: String, required: true },
    customerAddress: { type: String, required: true },
    customerContact: { type: String, required: true },
    customerOrders: [{ type: mongoose.Schema.Types.ObjectId, ref: "Order" }],
    customerReviews: [{ type: mongoose.Schema.Types.ObjectId, ref: "Review" }],
  },

  {
    timestamps: true,
  }
);

const Customer = mongoose.model("Customer", customerSchema);

export default Customer;
