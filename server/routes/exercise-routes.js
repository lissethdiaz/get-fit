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
  const duration = Number(req.body.duration);
  const distance = Number(req.body.distance);
  const date = Date.parse(req.body.date);

  const newExercise = new Exercise({
    username,
    name,
    duration,
    distance,
    date,
  });

  newExercise.save()
  .then(() => res.json('Exercise has been added'))
  .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/:id').get((req, res) => {
  Exercise.findById(req.params.id)
    .then(exercise => res.json(exercise))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/:id').delete((req, res) => {
  Exercise.findByIdAndDelete(req.params.id)
    .then(() => res.json('Exercise has been deleted'))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/update/:id').post((req, res) => {
  Exercise.findById(req.params.id)
    .then(exercise => {
      exercise.username = req.body.username;
      exercise.name = req.body.name;
      exercise.duration = Number(req.body.duration);
      exercise.distance = Number(req.body.distance);
      exercise.date = Date.parse(req.body.date);

      exercise.save()
        .then(() => res.json('Exercise has been updated'))
        .catch(err => res.status(400).json('Error: ' + err));
    })
    .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;