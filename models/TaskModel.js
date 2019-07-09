const mongoose = require('mongoose');

const taskSchema = mongoose.Schema({
  title: {
    type: String,
    required: [1, 'Title must not be empty']
  },
  description: {
    type: String,
    required: [1, 'Description must not be empty']
  },
  isFinished: {
    type: Boolean,
    default: false
  },
  creatorId: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    ref: 'User'
  }
});

module.exports = mongoose.model('Task', taskSchema);
