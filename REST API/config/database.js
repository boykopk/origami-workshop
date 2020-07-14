const mongoose = require("mongoose");
const config = require("./config");

module.exports = () => {
  return mongoose.connect(config.dbURL, {
    useCreateIndex: true,
    useNewUrlParser: true,
    useUnifiedTopology: true,
  },
  (err) => {
    if (err) {
      console.error(err);
      throw err;
    }

    console.log("Database is setup and running");
  });
};
