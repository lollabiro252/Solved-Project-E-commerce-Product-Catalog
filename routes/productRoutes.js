const express = require("express");
const router = express.Router();

// Bug: Controller was imported as a whole object instead of destructuring functions
// Fix: Used destructuring to correctly import createProduct and getAllProducts functions
const { createProduct, getAllProducts } = require("../controllers/productController");

router.post("/products", createProduct);
router.get("/products/all", getAllProducts);

module.exports = router;
