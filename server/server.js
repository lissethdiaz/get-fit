const express = require('express');
const path = require('path');
const usersRouter = require('./routes/user-routes');
const exercisesRouter = require('./routes/exercise-routes');

const db = require('./config/connection');

const PORT = process.env.PORT || 3001;
const app = express();

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// Serve up static assets
if (process.env.NODE_ENV === 'production') {
  app.use(express.static(path.join(__dirname, '../client/build')));

  router.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '../client/build/index.html'));
  });
}

app.use('/users', usersRouter);
app.use('/exercises', exercisesRouter);

app.use((req, res) => {
  res.sendFile(path.join(__dirname, '../client/build/index.html'));
});

db.once("open", () => {
  app.listen(PORT, () => {
    console.log(`API server running on port ${PORT}!`);
  });
});
