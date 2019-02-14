const router = require("express").Router();
const walmartRoutes = require("./walmart");
const productRoutes = require("./product");
const recipeRoutes = require("./recipe");
const userRoutes = require("./user");


router.use("/walmart", walmartRoutes);
router.use("/product", productRoutes);
router.use("/recipe", recipeRoutes);
router.use("/user", userRoutes);
module.exports = router;