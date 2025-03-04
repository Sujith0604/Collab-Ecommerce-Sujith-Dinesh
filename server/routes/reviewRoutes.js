import express from "express";
import {
  createReview,
  deleteReview,
  getAllReview,
  getSingleReview,
  updateReview,
} from "../controller/reviewController.js";

const reviewRouter = express.Router();

reviewRouter.route("/").get(getAllReview).post(createReview);
reviewRouter
  .route("/:id")
  .get(getSingleReview)
  .put(updateReview)
  .delete(deleteReview);

export default reviewRouter;
