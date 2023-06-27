const mongoose = require('mongoose');

const mongoDB_connection = async function () {
  mongoose.set('strictQuery', false);

  const MONGO_URI = process.env.MONGO_URI;
  const dbName = process.env.dbName;

  await mongoose
    .connect(MONGO_URI, {
      dbName,
    })
    .then((result) => {
      console.log('Connection to mongoDB established successfully.');
    })
    .catch((error) => {
      console.log('Failed to connect to database.');
      console.log(error);
    });
};

module.exports = mongoDB_connection;
