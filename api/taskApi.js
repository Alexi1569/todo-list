const express = require('express');

const upload = require('../storage');
const Task = require('../models/TaskModel');
const User = require('../models/UserModel');
const router = express.Router();

router.post('/task', upload.none(), async (req, res) => {
  try {
    const task = new Task({
      ...req.body,
      isFinished: false
    });

    let err = task.validateSync();

    if (err !== undefined) {
      throw err;
    }

    const savedTask = await task.save();
    const savedTaskCreatorId = savedTask._doc.creatorId;

    if (savedTaskCreatorId) {
      const user = await User.findByIdAndUpdate(savedTaskCreatorId, {
        $push: { tasks: savedTask._doc._id }
      });

      res.send(savedTask._doc);
    }
  } catch (err) {
    console.log(err);
    res.send(err);
  }
});

router.delete('/task/:id', async (req, res) => {
  try {
    const deletedTask = await Task.findByIdAndDelete(req.params.id);
    res.send(deletedTask);
  } catch (err) {
    console.log(err);
    res.send(err);
  }
});

router.put('/task', upload.none(), async (req, res) => {
  try {
    console.log(req.body);

    const updatedTask = await Task.findByIdAndUpdate(
      req.body._id,
      { ...req.body },
      { runValidators: true, new: true }
    );

    res.send(updatedTask);
  } catch (err) {
    console.log(err);
    res.send(err);
  }
});

module.exports = router;
