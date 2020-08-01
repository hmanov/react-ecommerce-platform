const mongoose = require('mongoose');
const config = require('config');
const uri = config.get('URI');
const connectDB = async () => {
  try {
    await mongoose.connect(uri, {
      useNewUrlParser: true,
      useFindAndModify: false,
      useUnifiedTopology: true,
      useCreateIndex: true,
    });
    console.log(`DB connected`);
  } catch (error) {
    console.error(error);
  }
};
module.exports = connectDB;
