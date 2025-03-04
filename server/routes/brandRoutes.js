import express from "express";
import {
  createBrand,
  deleteBrand,
  getAllBrand,
  getSingleBrand,
  updateBrand,
} from "../controller/brandController.js";

const brandRouter = express.Router();

brandRouter.route("/").get(getAllBrand).post(createBrand);
brandRouter
  .route("/:id")
  .get(getSingleBrand)
  .put(updateBrand)
  .delete(deleteBrand);

export default brandRouter;
