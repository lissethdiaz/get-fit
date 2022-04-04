const router = require('express').Router();
let Cardio = require('../models/Cardio');

router.route('/').get((req, res) => {
  Cardio.find()
    .then(cardio => res.json(cardio))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/add').post((req, res) => {
  const username = req.body.username;
  const name = req.body.name;
  const distance = req.body.distance;
  const duration = req.body.duration;
  const createdAt = req.body.createdAt;


  const newCardio = new Cardio({
    username,
    name,
    distance,
    duration,
    createdAt,
  });

  newCardio.save()
  .then(() => res.json('Cardio added!'))
  .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;