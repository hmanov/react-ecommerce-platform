const mongoose = require('mongoose');

const Product = mongoose.Schema({
  productName: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  imageURL: {
    type: String,
    required: true,
  },
  categories: [
    {
      type: String,
      required: true,
    },
  ],
  SKU: {
    type: String,
    required: true,
  },
  availability: {
    type: Boolean,
    required: true,
  },
  totalRating: [
    {
      user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'user',
      },
      rating: {
        type: Number,
      },
    },
  ],
  date: {
    type: Date,
    default: Date.now,
  },
});
module.exports = mongoose.model('product', Product, 'product');
