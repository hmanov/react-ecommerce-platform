const express = require('express');
const router = express.Router();
const { check, validationResult } = require('express-validator');
const bcrypt = require('bcryptjs');
const User = require('../models/User');
const jwt = require('jsonwebtoken');
const config = require('config');
const auth = require('../middleware/auth');

router.get('/', auth, async (req, res) => {
  try {
    const user = await User.findById(req.user.id).select('-password');
    res.json(user);
  } catch (error) {
    console.error(error.message);
    res.status(500).send('Server Error');
  }
});

router.post(
  '/register',
  [
    check('firstName', 'Name is required').not().isEmpty(),
    check('lastName', 'Name is required').not().isEmpty(),
    check('email', 'Please include valid email').isEmail(),
    check('password', 'Please enter a password with 6 or more characters').isLength({ min: 6 }),
  ],
  async (req, res) => {
    const errors = validationResult(req);

    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const { firstName, lastName, email, password } = req.body;

    try {
      let user = await User.findOne({ email });

      if (user) {
        return res.status(400).json({ errors: [{ msg: 'User already exists' }] });
      }

      const hashedPassword = await bcrypt.hash(password, 10);

      user = new User({ firstName, lastName, email, password: hashedPassword });

      await user.save();

      const payload = {
        user: {
          id: user.id,
          is,
        },
      };
      jwt.sign(payload, config.get('jwt'), { expiresIn: config.get('expiresIn') }, (err, token) => {
        if (err) throw err;
        res.json({ token });
      });
    } catch (error) {
      console.error(error.message);
      res.status(500).send('Server Error');
    }
  }
);

router.post(
  '/login',
  [
    check('email', 'Please include valid email').isEmail(),
    check('password', 'Please enter a password with 6 or more characters').exists(),
  ],
  async (req, res) => {
    const errors = validationResult(req);

    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const { email, password } = req.body;

    try {
      const user = await User.findOne({ email });

      if (!user) {
        return res.status(401).json({ errors: [{ msg: 'Invalid Credentials' }] });
      }

      const isMatch = await bcrypt.compare(password, user.password);

      if (!isMatch) {
        res.status(400).json({ errors: [{ msg: 'Invalid Credentials' }] });
      }
      const payload = {
        user: {
          id: user.id,
          isAdmin: user.isAdmin,
        },
      };
      jwt.sign(payload, config.get('jwt'), { expiresIn: config.get('expiresIn') }, (err, token) => {
        if (err) throw err;
        res.json({ token });
      });
    } catch (error) {
      console.error(error.message);
      res.status(500).send('Server Error');
    }
  }
);
module.exports = router;
