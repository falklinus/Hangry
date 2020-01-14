const router = require('express').Router();
let User = require('../models/User.models');

router.route('/').get((req, res) => {
  User.find();
});

module.exports = router;
