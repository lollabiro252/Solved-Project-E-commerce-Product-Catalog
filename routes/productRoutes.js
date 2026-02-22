const express = require("express");
const router = express.Router();
const createProduct = require("../controllers/productController");
const { getAllProducts } = require("../controllers/productController");

router.get("/products", createProduct);
router.get("/products/all", getAllProducts);

module.exports = router;
