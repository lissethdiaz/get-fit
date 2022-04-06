const router = require('express').Router();
let Exercise = require('../models/Exercise');

router.route('/').get((req, res) => {
  Exercise.find()
    .then(exercises => res.json(exercises))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/add').post((req, res) => {
  const username = req.body.username;
  const name = req.body.name;
  const duration = req.body.duration;
  const distance = req.body.distance;
  const date = Date.parse(req.body.date);

  const newExercise = new Exercise({
    username,
    name,
    duration,
    distance,
    date,
  });

  newExercise.save()
  .then(() => res.json('Exercise added!'))
  .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;