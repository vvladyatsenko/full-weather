const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const dotenv = require('dotenv');
const userRoutes = require('./routes/users');

dotenv.config();

const app = express();

app.use(bodyParser.json());

const dbURI = process.env.MONGODB_URI;
const jwtSecret = process.env.JWT_SECRET;

console.log('MONGODB_URI:', dbURI);
console.log('JWT_SECRET:', jwtSecret);

mongoose
  .connect(dbURI)
  .then(() => console.log('MongoDB Connected'))
  .catch((err) => console.log(err));

app.get('/', (req, res) => {
  res.send('Welcome to the API');
});

app.use('/api/users', userRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
