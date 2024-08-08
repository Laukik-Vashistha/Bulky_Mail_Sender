const mongoose = require("mongoose");
require("dotenv").config();
console.log("MongoDB URI:", process.env.MONGODB_URL);

const connectDB = async () => {
  try {
    const con = await mongoose.connect(process.env.MONGODB_URL, {
      useNewUrlParser: true, 
      useUnifiedTopology: true, 
    });
    console.log("Database connected successfully..");
  } catch (err) {
    console.error(`Error: ${err.message}`);
    process.exit(1); // Exiting the process with failure
  }
};

module.exports = connectDB;
