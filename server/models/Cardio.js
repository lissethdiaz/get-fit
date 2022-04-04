const { Schema, model } = require('mongoose');
const dateFormat = require('../utils/dateFormat');

const cardioSchema = new Schema(
{
  username: {
    type: String,
    required: true
  },
  name: {
    type: String,
    required: true
  },
  distance: {
    type: Number,
    required: true
  },
  duration: {
    type: Number,
    required: true
  },
  date: {
    type: Date,
    default: Date.now,
    get: createdAtVal => dateFormat(createdAtVal)
  },
},
{
  toJSON: {
    virtuals: true,
  },
  id: false
}
);

const Cardio = model('Cardio', cardioSchema);

module.exports = Cardio;