const router = require('express').Router();
let Restaurant = require('../models/restaurant.models');

router.route('/').get((req, res) => {
  Restaurant.find()
    .then(restaurants => res.json(restaurants))
    .catch(err => res.status(400).json(`Error: ${err}`));
});

router.route('/add').post((req, res) => {
  const name = req.body.name;

  const newRestaurant = new Restaurant({ name });

  newRestaurant
    .save()
    .then(() => res.json('Restaurant added!'))
    .catch(err => res.status(400).json(`Error: ${err}`));
});

router.route('/:id').get((req, res) => {
  Restaurant.findById(req.params.id)
    .then(restaurant => res.json(restaurant))
    .catch(err => res.status(400).json(`Error: ${err}`));
});

router.route('/:id').delete((req, res) => {
  Restaurant.findByIdAndDelete(req.params.id)
    .then(() => res.json('Restaurant deleted.'))
    .catch(err => res.status(400).json(`Error: ${err}`));
});

router.route('/:id').put((req, res) => {
  Restaurant.findById(req.params.id)
    .then(restaurant => {
      restaurant.name = req.body.name;

      restaurant
        .save()
        .then(() => res.json('Restaurant updated'))
        .catch(err => res.status(400).json(`Error: ${err}`));
    })
    .catch(err => res.status(400).json(`Error: ${err}`));
});

module.exports = router;
