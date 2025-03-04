import Brand from "../model/brandModel";

export const createBrand = async (req, res) => {
  const { brandName, brandDescription, brandLogo, brandActive } = req.body;

  try {
    const brand = await Brand.create({
      brandName,
      brandDescription,
      brandLogo,
      brandActive,
    });
    res
      .status(201)
      .json({ message: "Brand Created Successfully", data: brand });
  } catch (error) {
    res.status(500).json({ message: "Server Error", error: error.message });
  }
};

export const getAllBrand = async (req, res) => {
  try {
    const brand = await Brand.find();
    res.status(200).json({ message: "All Brands", data: brand });
  } catch (error) {
    res.status(500).json({ message: "Server Error", error: error.message });
  }
};

export const getSingleBrand = async (req, res) => {
  const { id } = req.params;
  try {
    const brand = await Brand.findById(id);
    res.status(200).json({ message: "Brand Found", data: brand });
  } catch (error) {
    res.status(500).json({ message: "Server Error", error: error.message });
  }
};

export const updateBrand = async (req, res) => {
  const { id } = req.params;
  const { brandName, brandDescription, brandLogo, brandActive } = req.body;
  try {
    const existBrand = await Brand.findById(id);
    if (!existBrand) {
      return res.status(404).json({ message: "Brand not found" });
    }

    const brand = await Brand.findByIdAndUpdate(
      id,
      {
        $set: {
          brandName: brandName || existBrand.brandName,
          brandDescription: brandDescription || existBrand.brandDescription,
          brandLogo: brandLogo || existBrand.brandLogo,
          brandActive: existBrand.brandActive || existBrand.brandActive,
        },
      },
      { new: true }
    );
    res
      .status(200)
      .json({ message: "Brand Updated Successfully", data: brand });
  } catch (error) {
    res.status(500).json({ message: "Server Error", error: error.message });
  }
};

export const deleteBrand = async (req, res) => {
  const { id } = req.params;

  try {
    const brand = await Brand.findByIdAndDelete(id);
    res.status(200).json({ message: "Brand Deleted Successfully" });
  } catch (error) {
    res.status(500).json({ message: "Server Error", error: error.message });
  }
};
