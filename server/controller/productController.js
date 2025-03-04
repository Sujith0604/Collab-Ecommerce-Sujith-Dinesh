import Product from "../model/productModal";

export const createProduct = async (req, res) => {
  const {
    productName,
    productDescription,
    productQuantity,
    productInStock,
    productImage,
    productCategory,
    productGallery,
    productBrand,
    productActive,
    productPrice,
  } = req.body;
  try {
    const product = await Product.create({
      productName,
      productDescription,
      productQuantity,
      productInStock,
      productImage,
      productCategory,
      productGallery,
      productBrand,
      productActive,
      productPrice,
    });

    res
      .status(201)
      .json({ message: "Product Created Successfully", data: product });
  } catch (error) {
    res.status(500).json({ message: "Server Error", error: error.message });
  }
};

export const getAllProduct = async (req, res) => {
  try {
    const Product = await Product.find();
    res.status(200).json({ message: "All Products", data: Product });
  } catch (error) {
    res.status(500).json({ message: "Server Error", error: error.message });
  }
};

export const getSingleProduct = async (req, res) => {
  const { id } = req.params;

  try {
    const product = await Product.findById(id);
    if (!product) return res.status(404).json({ message: "Product not found" });
    res.status(200).json({ message: "Product Found", data: product });
  } catch (error) {
    res.status(500).json({ message: "Server Error", error: error.message });
  }
};

export const updateProduct = async (req, res) => {
  const { id } = req.params;
  const {
    productName,
    productDescription,
    productQuantity,
    productInStock,
    productImage,
    productCategory,
    productGallery,
    productBrand,
    productActive,
    productPrice,
  } = req.body;
  try {
    const product = await Product.findById(id);
    if (!product) return res.status(404).json({ message: "Product not found" });

    const updatedProduct = await Product.findByIdAndUpdate(
      id,
      {
        $set: {
          productName: productName || product.productName,
          productDescription: productDescription || product.productDescription,
          productQuantity: productQuantity || product.productQuantity,
          productInStock: productInStock || product.product,
          productImage: productImage || product.productImage,
          productCategory: productCategory || product.productCategory,
          productGallery: productGallery || product.productGallery,
          productBrand: productBrand || product.productBrand,
          productActive: productActive || product.productActive,
          productPrice: productPrice || product.productPrice,
        },
      },
      { new: true }
    );
    res
      .status(200)
      .json({ message: "Product Updated Successfully", data: updatedProduct });
  } catch (error) {
    res.status(500).json({ message: "Server Error", error: error.message });
  }
};

export const deleteProduct = async (req, res) => {
  const { id } = req.params;
  try {
    const product = await Product.findByIdAndDelete(id);
    if (!product) return res.status(404).json({ message: "Product not found" });
    res.status(200).json({ message: "Product deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: "Server Error", error: error.message });
  }
};
