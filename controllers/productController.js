const Product = require("../models/Product");

const createProduct = async (req, res) => {
  try{
  const { name, price, category } = req.body;

  if (!name || !price) {
    return res.status(400).json({ msg: "Missing Data" });
  }

  // Bug: Using .then() without .catch() could cause unhandled promise rejection
  // Fix: Used async/await with try/catch for better error handling
  const product = await Product.create({ name, price, category });

    res.status(201).json({ msg: "Product Created", data: product });
  } catch (error) {
    console.log(error);
    res.status(500).json({ msg: "Server Error" });
  }
};

const getAllProducts = async (req, res) => {
  try {
    const limit = req.query.limit || "10";

    const products = await Product.find().limit(limit);
    res.status(200).json({ msg: "Products fetched", data: products });
    
  } catch (error) {
    console.log(error);
    res.status(500).json({ msg: "Server Error" });
  }
};

module.exports = { createProduct, getAllProducts };
