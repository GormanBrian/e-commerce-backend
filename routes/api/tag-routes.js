const router = require("express").Router();
const { Tag, Product, ProductTag } = require("../../models");

// The `/api/tags` endpoint

router.get("/", async (req, res) => {
  try {
    // find all tags
    // be sure to include its associated Product data
    const tags = await Tag.findAll({
      include: [{ model: Product, through: ProductTag }],
    });

    // Respond with all Tags successfully
    res.status(200).json(tags);
  } catch (err) {
    // Respond with an error if `findAll` fails
    res.status(500).json(err);
  }
});

router.get("/:id", async (req, res) => {
  try {
    // find a single tag by its `id`
    // be sure to include its associated Product data
    const tag = await Tag.findByPk(req.params.id, {
      include: [{ model: Product, through: ProductTag }],
    });

    // Respond with a 404 error if the Tag was not found
    if (!tag) {
      res.status(404).json({ message: "Could not find tag with that ID." });
      return;
    }

    // Respond with the Tag successfully
    res.status(200).json(tag);
  } catch (err) {
    // Respond with an error if `findByPk` fails
    res.status(500).json(err);
  }
});

router.post("/", (req, res) => {
  // create a new tag
});

router.put("/:id", (req, res) => {
  // update a tag's name by its `id` value
});

router.delete("/:id", (req, res) => {
  // delete on tag by its `id` value
});

module.exports = router;
