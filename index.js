const express = require('express');
const { urlencoded } = require('express');
const app = express();
const cors = require('cors');
const Product = require('./models/Product');
const path = require('path');
const connectDB = require('./config/dbConnect');
connectDB();
app.use(cors());

app.use(express.json());
app.use(urlencoded({ extended: false }));

app.get('/api', async (req, res) => {
  const data = await Product.find().lean();
  res.json(data);
});

app.use('/api/auth', require('./routes/auth'));
app.use('/api/admin', require('./routes/admin'));
app.use('/api/product', require('./routes/product'));

const root = require('path').join(__dirname, '/client/build');
app.use(express.static(root));
app.get('*', (req, res) => {
  res.sendFile('index.html', { root });
});
// app.get('/*', function (req, res) {
//   console.log(path.join(__dirname, '/client/build/index.html'));
//   res.sendFile(path.join(__dirname, '/client/build/index.html'), function (err) {
//     if (err) {
//       res.status(500).send(err);
//     }
//   });
// });
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`server started on port ${PORT}`);
});
