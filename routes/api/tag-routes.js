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
  Tag.create(req.body)
    .then((tag) => {
      res.status(200).json(tag);
    })
    .catch((err) => {
      res.status(400).json(err);
    });
});

router.put("/:id", (req, res) => {
  // update a tag's name by its `id` value
  Tag.update(req.body, {
    where: {
      id: req.params.id,
    },
  })
    .then((tag) => {
      res.status(200).json(tag);
    })
    .catch((err) => {
      res.status(400).json(err);
    });
});

router.delete("/:id", async (req, res) => {
  try {
    // delete on tag by its `id` value
    const tag = await Tag.destroy({
      where: {
        id: req.params.id,
      },
    });

    // Respond with a 404 error if the Tag was not found
    if (!tag) {
      res.status(404).json({ message: "Could not find tag with that ID." });
      return;
    }

    // Respond with the Tag successfully
    res.status(200).json(tag);
  } catch (err) {
    // Respond with an error if `destroy` fails
    res.status(500).json(err);
  }
});

module.exports = router;
