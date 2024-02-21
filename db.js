const mongoose = require("mongoose");

// Define the database URL to connect to.
const mongoDB = "mongodb://127.0.0.1/food_app";

const connectToDatabase = async () => {
  await mongoose.connect(mongoDB);
}

module.exports = {
    connectToDatabase
}