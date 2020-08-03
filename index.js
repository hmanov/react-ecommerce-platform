const express = require('express');
const { urlencoded } = require('express');
const app = express();
const cors = require('cors');

const connectDB = require('./config/dbConnect');
connectDB();
app.use(cors());

app.use(express.json());
app.use(urlencoded({ extended: false }));
const dummyData = [
  {
    name: 'Ducky one 2 TKL RGB1',
    price: 199,
    sku: 'DKON2061ST-_USPDAZT1',
    imgUrl: 'https://p1.akcdn.net/full/574756884.ducky-one-2-rgb-tkl-dkon1787st.jpg',
    totalRating: [
      { user: 'aa', rating: 3 },
      { user: 'aa', rating: 3 },
      { user: 'aa', rating: 4 },
      { user: 'aa', rating: 5 },
    ],
  },
  {
    name: 'Ducky One 2 RGB TKL RGB LED Double Shot PBT Mechanical Keyboard',
    price: 199,
    sku: 'DKON2061ST-_USPDAZT1',
    imgUrl: 'https://p1.akcdn.net/full/574756884.ducky-one-2-rgb-tkl-dkon1787st.jpg',
    featured: true,
    totalRating: [
      { user: 'aa', rating: 5 },
      { user: 'aa', rating: 5 },
      { user: 'aa', rating: 5 },
      { user: 'aa', rating: 5 },
    ],
  },
  {
    name: 'Ducky one 2 TKL RGB3',
    price: 199,
    sku: 'DKON2061ST-_USPDAZT1',
    imgUrl: 'https://p1.akcdn.net/full/574756884.ducky-one-2-rgb-tkl-dkon1787st.jpg',
    totalRating: [
      { user: 'aa', rating: 4 },
      { user: 'aa', rating: 4 },
      { user: 'aa', rating: 4 },
      { user: 'aa', rating: 5 },
    ],
  },
  {
    name: 'Ducky one 2 TKL RGB1',
    price: 199,
    sku: 'DKON2061ST-_USPDAZT1',
    imgUrl: 'https://p1.akcdn.net/full/574756884.ducky-one-2-rgb-tkl-dkon1787st.jpg',
    totalRating: [
      { user: 'aa', rating: 2 },
      { user: 'aa', rating: 3 },
      { user: 'aa', rating: 3 },
      { user: 'aa', rating: 3 },
    ],
  },
  {
    name: 'Ducky one 2 TKL RGB2',
    price: 199,
    sku: 'DKON2061ST-_USPDAZT1',
    imgUrl: 'https://p1.akcdn.net/full/574756884.ducky-one-2-rgb-tkl-dkon1787st.jpg',
    totalRating: [
      { user: 'aa', rating: 2 },
      { user: 'aa', rating: 3 },
      { user: 'aa', rating: 4 },
      { user: 'aa', rating: 5 },
    ],
    featured: true,
  },
  {
    name: 'Ducky one 2 TKL RGB3',
    price: 199,
    sku: 'DKON2061ST-_USPDAZT1',
    imgUrl: 'https://p1.akcdn.net/full/574756884.ducky-one-2-rgb-tkl-dkon1787st.jpg',
    totalRating: [
      { user: 'aa', rating: 2 },
      { user: 'aa', rating: 3 },
      { user: 'aa', rating: 4 },
      { user: 'aa', rating: 5 },
    ],
  },
];
app.get('/api', (req, res) => {
  res.send(dummyData);
});

app.use('/api/auth', require('./routes/auth'));
app.use('/api/admin', require('./routes/admin'));

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`server started on port ${PORT}`);
});
