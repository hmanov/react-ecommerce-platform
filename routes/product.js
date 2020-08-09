const express = require('express');
const router = express.Router();
const auth = require('../middleware/auth');
const Product = require('../models/Product');

router.post('/rate', auth, async (req, res) => {
  try {
    const product = await Product.findById(req.body.productId);

    product.totalRating =
      product.totalRating.filter((e) => e.user.toString() == req.user.id).length > 0
        ? product.totalRating.map((e) =>
            e.user.toString() === req.user.id ? { _id: e._id, user: req.user.id, rating: req.body.rating } : e
          )
        : [...product.totalRating, { user: req.user.id, rating: req.body.rating }];
    await product.save();

    res.send(product.totalRating);
  } catch (error) {
    console.log(error);
  }
});

module.exports = router;
