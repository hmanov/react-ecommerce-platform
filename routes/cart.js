const express = require('express');
const router = express.Router();
const auth = require('../middleware/auth');

const { check, validationResult } = require('express-validator');
const User = require('../models/User');

router.post('/', auth, async (req, res) => {
  try {
    if (req.body.count === 0) {
      const user = await User.findById(req.user.id);
      return res.send(user.cart);
    }
    const user = await User.findById(req.user.id);
    user.cart =
      user.cart.filter((e) => e.itemId.toString() == req.body.itemId).length > 0
        ? user.cart.map((e) =>
            e.itemId.toString() == req.body.itemId
              ? {
                  _id: e._id,
                  itemId: req.body.itemId,
                  count: e.count + req.body.count >= 0 ? e.count + req.body.count : 0,
                }
              : e
          )
        : [...user.cart, { itemId: req.body.itemId, count: req.body.count }];
    await user.save();
    res.send(user.cart);
  } catch (error) {
    console.log(error);
  }
});
router.delete('/', auth, async (req, res) => {
  const user = await User.findById(req.user.id);
  user.cart = user.cart.filter((e) => e.itemId != req.body.itemId);
  await user.save();

  res.send(user.cart);
});
router.delete('/clear', auth, async (req, res) => {
  const user = await User.findById(req.user.id);
  user.cart = [];
  await user.save();
  res.send(user.cart);
});
module.exports = router;
