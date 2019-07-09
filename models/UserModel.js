const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
  name: {
    type: String,
    required: [true, 'Name must be filled'],
    trim: true,
    minlength: [3, 'Name must be more than 3 characters']
  },
  photo: {
    type: String,
    required: [true, 'Photo must be filled']
  },
  email: {
    type: String,
    required: [true, 'Email must be filled'],
    lowercase: true,
    trim: true,
    validate: {
      validator: email => {
        let reg = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/;
        return reg.test(email);
      },
      message: 'Must be valid email'
    }
  },
  password: {
    type: String,
    trim: true,
    required: [true, 'Password must be filled'],
    minlength: [5, 'Password must be more than 5 characters']
  },
  token: {
    type: String,
    default: null
  },
  tasks: {
    type: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Task'
      }
    ]
  }
});

module.exports = mongoose.model('User', userSchema);
