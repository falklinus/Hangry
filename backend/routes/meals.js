const router = require("express").Router();
let Meal = require("../models/Meal.models");

router.route("/").get((req, res) => {
  Meal.find()
    .populate("restaurant")
    .exec((err, meal) => {
      if (err) res.status(400).json(`Error: ${err}`);
      res.json(meal);
    });
});

router.route("/add").post((req, res) => {
  const title = req.body.title;
  const restaurant = req.body.restaurantId;
  const ingredients = req.body.ingredients;

  const newMeal = new Meal({ title, restaurant, ingredients });

  newMeal
    .save()
    .then(() => res.json("Meal added!"))
    .catch(err => res.status(400).json(`Error: ${err}`));
});

router.route("/:id").get((req, res) => {
  Meal.findById(req.params.id)
    .populate("restaurant")
    .exec((err, meal) => {
      if (err) res.status(400).json(`Error: ${err}`);
      res.json(meal);
    });
});

router.route("/:id").delete((req, res) => {
  Meal.findByIdAndDelete(req.params.id)
    .then(() => res.json("Meal deleted."))
    .catch(err => res.status(400).json(`Error: ${err}`));
});

router.route("/:id").put((req, res) => {
  Meal.findById(req.params.id).then(meal => {
    if (req.body.title) meal.title = req.body.title;
    if (req.body.restaurant) meal.restaunt = req.body.restaurant;
    if (req.body.ingredients) meal.ingredients = req.body.ingredients;
    meal
      .save()
      .then(() => res.json("Meal updated!"))
      .catch(err => res.status(400).json(`Error: ${err}`));
  });
});

module.exports = router;
