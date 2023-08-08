const router = require("express").Router();
const { Category, Product } = require("../../models");

// The `/api/categories` endpoint

router.get("/", async (req, res) => {
  // find all categories
  // be sure to include its associated Products
  try {
    // Find all categories with associated products
    const categories = await Category.findAll({
      include: [{ model: Product }],
    });

    // Respond with all categories successfully
    return res.status(200).json(categories);
  } catch (err) {
    // Respond with an error if findAll fails
    return res.status(500).json(err);
  }
});

router.get("/:id", async (req, res) => {
  try {
    // find one category by its `id` value
    // be sure to include its associated Products
    const category = await Category.findByPk(req.params.id, {
      include: [{ model: Product }],
    });

    // Respond with a 404 error if the Category was not found
    if (!category)
      return res
        .status(404)
        .json({ message: "Could not find category with that ID." });

    // Respond with the Category successfully
    return res.status(200).json(category);
  } catch (err) {
    // Respond with an error if findByPk fails
    return res.status(500).json(err);
  }
});

router.post("/", (req, res) => {
  // create a new category
});

router.put("/:id", (req, res) => {
  // update a category by its `id` value
});

router.delete("/:id", (req, res) => {
  // delete a category by its `id` value
});

module.exports = router;
