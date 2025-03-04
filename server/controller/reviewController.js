import Review from "../model/reviewModel.js";

export const createReview = async (req, res) => {
  const { reviewdescription, reviewratings } = req.body;
  try {
    const review = await Review.create({
      reviewdescription,
      reviewratings,
    });
    res.status(201).json({
      message: "Review Created Successfully",
      data: review,
    });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

export const getAllReview = async (req, res) => {
  try {
    const reviews = await Review.find();
    res.status(200).json({
      message: "Reviews fetched successfully",
      data: reviews,
    });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

export const getSingleReview = async (req, res) => {
  const { id } = req.params.id;
  try {
    const review = await Review.findById(id);
    if (!review) return res.status(404).json({ message: "Review not found" });
    res.status(200).json({
      message: "Review fetched successfully",
      data: review,
    });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

export const updateReview = async (req, res) => {
  const { reviewdescription, reviewratings, reviewAccepted } = req.body;
  const { id } = req.params.id;
  try {
    const existReview = await Review.findById(id);
    if (!existReview)
      return res.status(404).json({ message: "Review not found" });
    const review = await Review.findByIdAndUpdate(
      id,
      {
        $set: {
          reviewdescription:
            reviewdescription || existReview?.reviewdescription,
          reviewratings: reviewratings || existReview?.reviewratings,
          reviewAccepted: reviewAccepted || existReview?.reviewAccepted,
        },
      },
      { new: true }
    );
    res.status(200).json({
      message: "Review updated successfully",
      data: review,
    });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

export const deleteReview = async (req, res) => {
  const { id } = req.params.id;
  try {
    await Review.findByIdAndDelete(id);
    res.status(200).json({
      message: "Review deleted successfully",
    });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};
