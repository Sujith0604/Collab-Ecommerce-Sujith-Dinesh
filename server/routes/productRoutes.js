import express from "express";
import {
  createProduct,
  deleteProduct,
  getAllProduct,
  getSingleProduct,
  updateProduct,
} from "../controller/productController.js";

const productRouter = express.Router();

productRouter.route("/").get(getAllProduct).post(createProduct);
productRouter
  .route("/:id")
  .get(getSingleProduct)
  .put(updateProduct)
  .delete(deleteProduct);

export default productRouter;
