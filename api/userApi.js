const express = require('express');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const User = require('../models/UserModel');
const { SALT_ROUNDS, SECRET, SERVER_URL } = require('../config');
const upload = require('../storage');

const router = express.Router();

const findUserByEmail = (email, isLogin = false) => {
  email = email.toLowerCase();

  return User.findOne({ email })
    .populate('tasks')
    .then(data => {
      if (data) {
        let user = data._doc;
        if (isLogin) {
          return jwt.verify(user.token, SECRET, function(err) {
            if (err) {
              console.log('token error');
              const newToken = jwt.sign(
                {
                  exp: Math.floor(Date.now() / 1000) + 60 * 60,
                  email: user.email
                },
                SECRET
              );

              return User.findOneAndUpdate(
                { email: user.email },
                { token: newToken },
                { new: true }
              )
                .then(res => {
                  return res._doc;
                })
                .catch(err => console.log(err));
            } else {
              console.log('no token error');
              return user;
            }
          });
        } else {
          return user;
        }
      } else {
        return false;
      }
    });
};

router.post('/user', upload.single('photo'), async (req, res) => {
  try {
    const { password, repeatPassword, email, photo } = req.body;

    let isPasswordEqual;

    if (password.trim() === repeatPassword.trim()) {
      isPasswordEqual = true;
    } else {
      isPasswordEqual = false;
    }

    const isFileExtensionValid = req.uploadError ? false : true;

    const isEmailEmpty = await findUserByEmail(email).then(res => res);
    const photoToUpload = req.file
      ? `${SERVER_URL}/${req.file.filename}`
      : photo;

    const user = new User({
      ...req.body,
      photo: photoToUpload
    });

    let err = user.validateSync();

    if (
      err !== undefined ||
      !isPasswordEqual ||
      isEmailEmpty !== false ||
      isFileExtensionValid === false
    ) {
      if (err === undefined) {
        let error = new Error();
        error.errors = {};

        if (!isPasswordEqual) {
          error.errors['repeatPassword'] = {
            message: 'Password and repeat password must be equal'
          };
        }

        if (isEmailEmpty !== false) {
          error.errors['email'] = {
            message: 'Email already used'
          };
        }

        if (isFileExtensionValid === false) {
          error.errors['photo'] = {
            message: req.uploadError
          };
        }

        throw error;
      } else {
        if (!isPasswordEqual) {
          err.errors['repeatPassword'] = {
            message: 'Password and repeat password must be equal'
          };
        }
        if (isEmailEmpty !== false) {
          err.errors['email'] = {
            message: 'Email already used'
          };
        }
        if (isFileExtensionValid === false) {
          err.errors['photo'] = {
            message: req.uploadError
          };
        }
      }
      throw err;
    } else {
      const hashedPassword = await bcrypt.hash(user.password, SALT_ROUNDS);
      user.password = hashedPassword;

      return user
        .save()
        .then(savedUser => {
          return res.send({
            ...savedUser._doc
          });
        })
        .catch(err => console.log(err));
    }
  } catch (err) {
    console.log(err);
    res.send(err);
  }
});

router.get('/user/:email', async (req, res) => {
  try {
    const { email } = req.params;

    let user = await findUserByEmail(email).then(res => res);

    if (user !== false) {
      res.send(user);
    }
  } catch (err) {
    res.send(err);
  }
});

router.post('/login', upload.none(), async (req, res) => {
  try {
    const { email, password } = req.body;
    const err = new Error();
    err.errors = {};
    let errorsCount = 0;

    let user = await findUserByEmail(email, true)
      .then(res => {
        return res;
      })
      .catch(err => console.log('err', err));

    if (user === false) {
      err.errors['email'] = {
        message: 'No user found with this email'
      };
      errorsCount++;
    }

    if (user !== false) {
      let isEqual = await bcrypt.compare(password, user.password);

      if (isEqual === false) {
        err.errors['password'] = {
          message: 'Wrong password'
        };
        errorsCount++;
      }
    }

    if (errorsCount > 0) {
      throw err;
    }

    res.send(user);
  } catch (err) {
    console.log(err);
    res.send(err);
  }
});

router.post('/logout', async (req, res) => {
  try {
    const user = req.body;

    User.findOneAndUpdate({ email: user.email }, { token: null })
      .then(updatedUser => {
        res.send(updatedUser);
      })
      .catch(err => console.log(err));
  } catch (err) {
    res.send(err);
  }
});

module.exports = router;
