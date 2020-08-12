const express = require('express');
const { urlencoded } = require('express');
const app = express();
const cors = require('cors');
const Product = require('./models/Product');
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
app.use('/api/cart', require('./routes/cart'));

const root = require('path').join(__dirname, '/client/build');
app.use(express.static(root));
app.get('*', (req, res) => {
  res.sendFile('index.html', { root });
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`server started on port ${PORT}`);
});
