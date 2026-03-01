require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const productRoutes = require("./routes/productRoutes");

const app = express();
app.use(express.json());


// Bug: MongoDB URI was undefined because environment variable was missing
// Fix: Added MONGO_URI to .env file and ensured dotenv loads before mongoose.connect
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log("DB Connected"))
  .catch((err) => console.log(err));

app.use("/api", productRoutes);

app.listen(5000, () => console.log("Server Running"));
