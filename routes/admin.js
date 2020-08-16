const express = require('express');
const router = express.Router();
const auth = require('../middleware/auth');
const admin = require('../middleware/admin');
const { check, validationResult } = require('express-validator');
const Product = require('../models/Product');

router.post(
  '/',
  auth,
  admin,
  [
    check('productName', 'Product Name is required').not().isEmpty(),
    check('price', 'Price is required').not().isEmpty().isNumeric(),
    check('imageURL', 'imageURL is required').not().isEmpty(),
    check('categories', 'Categories are required').not().isEmpty(),
    check('SKU', 'SKU are required').not().isEmpty(),
    check('availability', 'availability are required').not().isEmpty(),
  ],
  async (req, res) => {
    const errors = validationResult(req);

    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    const { productName, price, imageURL, categories, SKU, availability } = req.body;

    const product = new Product({
      productName,
      price,
      imageURL,
      categories: categories.split(','),
      SKU,
      availability,
    });
    await product.save();
    res.send(product);
  }
);
router.put(
  '/',
  auth,
  admin,
  [
    check('productName', 'Product Name is required').not().isEmpty(),
    check('price', 'Price is required').not().isEmpty().isNumeric(),
    check('imageURL', 'imageURL is required').not().isEmpty(),
    check('categories', 'Categories are required').not().isEmpty(),
    check('SKU', 'SKU are required').not().isEmpty(),
    check('availability', 'availability are required').not().isEmpty(),
  ],
  async (req, res) => {
    const errors = validationResult(req);

    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    const { _id, productName, price, imageURL, categories, SKU, availability } = req.body;

    const product = {
      productName,
      price,
      imageURL,
      categories,
      SKU,
      availability,
    };
    await Product.findByIdAndUpdate({ _id }, product, { new: true }, (err, result) => {
      if (err) {
        return res.send(err);
      }
      res.send(result);
    });
  }
);

router.delete('/', auth, admin, async (req, res) => {
  try {
    await Product.findByIdAndRemove(req.body.data);
    res.send(req.body.data);
  } catch (error) {
    console.log(error);
  }
});
module.exports = router;
