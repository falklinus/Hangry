const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');

require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

const URI = process.env.MONGO_DB_URI;
mongoose.connect(URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  createIndexes: true
});

const connection = mongoose.connection;
connection
  .once('open', () => {
    console.log('MongoDB database connection established successfully');
  })
  .catch(error => {
    console.log(error);
  });

const restaurantsRouter = require('./routes/restaurants');
const mealsRouter = require('./routes/meals');
const usersRouter = require('./routes/users');

app.use('/restaurants', restaurantsRouter);
app.use('/meals', mealsRouter);
app.use('/users', usersRouter);

const { signup, login } = require('./handlers/users');
/* app.get('/signup', signup);
app.get('/login', login); */

app.listen(PORT, () => {
  console.log(`Server is up and running on port: ${PORT}`);
});
