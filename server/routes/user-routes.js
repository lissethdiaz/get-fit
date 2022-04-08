const router = require('express').Router();
let User = require('../models/User');

router.route('/').get((req, res) => {
  User.find()
    .then(users => res.json(users))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/add').post((req, res) => {
  const username = req.body.username;

  const user = new User({username});

  user.save()
    .then(() => res.json('User added!'))
    .catch(err => res.status(404).json('Error: ' + err));
});

module.exports = router;