const express = require("express")
const Categories = require("./categories-model")
const router = express.Router()

//gets all categories
router.get('/categories', (req, res) => {
    Categories.findCategories()
    .then(categories => {
      res.json(categories);
    })
    .catch(err => {
      res.status(500).json({ message: 'Failed to get users' });
    });
  });

//gets categories by ID
router.get('/categories/:id', (req, res) => {
    Categories.findCategoryByID(req.params.id)
        .then((categories) => {
            if (!categories) {
                return res.status(404).json({
                    message: "The category with the specified ID does not exist."
                })
            }
            res.json(categories)
        })
        .catch((error) => {
            console.log(error)
            res.status(500).json({
                error: "The category information could not be retrieved."
            })
        })
    });

//add categories
  router.post("/categories", (req, res) => {
    Categories
      .addCategories(req.body)
      .then((categories) => {
        res.status(200).json({ categories });
      })
      .catch((err) => {
        res.status(500).json({ message: "Can't post the category." });
      });
  });

//delete user by ID
router.delete("/categories/:id", (req, res) => {
  Categories
    .removeCategory(req.params.id)
    .then((categories) => {
      if (categories) {
        res.status(200).json({ categories });
      } else {
        res.status(404).json({ message: "Category with this ID doesn't exist." });
      }
    })
    .catch((err) => {
      res.status(500).json({ message: "Error deleting the category." });
    });
});


router.put("/categories/:id", (req, res) => {
    Categories
      .updateCategory(req.params.id, req.body)
      .then((categories) => {
        if (categories) {
          res.status(200).json({ categories });
        } else {
          res.status(404).json({ message: "Incorrect information provided." });
        }
      })
      .catch((err) => {
        res
          .status(500)
          .json({ message: "There was an error updating the category." });
      });
  });

module.exports = router