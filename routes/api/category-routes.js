const router = require("express").Router();
const { Category, Product } = require("../../models");

// The `/api/categories` endpoint

router.get("/", async (req, res) => {
  // find all categories
  // be sure to include its associated Products
  try {
    // Find all categories with associated Products
    const categories = await Category.findAll({
      include: [{ model: Product }],
    });

    // Respond with all Categories successfully
    res.status(200).json(categories);
  } catch (err) {
    // Respond with an error if `findAll` fails
    res.status(500).json(err);
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
    if (!category) {
      res
        .status(404)
        .json({ message: "Could not find category with that ID." });
      return;
    }

    // Respond with the Category successfully
    res.status(200).json(category);
  } catch (err) {
    // Respond with an error if `findByPk` fails
    res.status(500).json(err);
  }
});

router.post("/", (req, res) => {
  // create a new category
  Category.create(req.body)
    .then((category) => {
      // Respond with the Category successfully
      res.status(200).json(category);
    })
    .catch((err) => {
      // Respond with an error if `create` fails
      res.status(500).json(err);
    });
});

router.put("/:id", (req, res) => {
  // update a category by its `id` value
  Category.update(req.body, {
    where: {
      id: req.params.id,
    },
  })
    .then((category) => {
      // Respond with the Category successfully
      res.status(200).json(category);
    })
    .catch((err) => {
      // Respond with an error if `update` fails
      res.status(400).json(err);
    });
});

router.delete("/:id", async (req, res) => {
  try {
    // delete one category by its `id` value
    const categoryData = await Category.destroy({
      where: {
        id: req.params.id,
      },
    });

    // Respond with a 404 error if the Category was not found
    if (!categoryData) {
      res
        .status(404)
        .json({ message: "Could not find category with that ID." });
      return;
    }

    // Respond with the Category successfully
    res.status(200).json(categoryData);
  } catch (err) {
    // Respond with an error if `destroy` fails
    res.status(500).json(err);
  }
});

module.exports = router;
