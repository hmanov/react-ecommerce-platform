const mongoose = require('mongoose');

const Profile = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'user',
  },
  itemHistory: {
    type: Object,
  },
});
