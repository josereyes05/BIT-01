const mongoose = require("mongoose");

mongoose
  .connect(
    process.env.MONGO_DB
  )
  .then((db) => console.log("Conectao' a la base mi rey"))
  .catch((error) => console.log("no me coneté :("));
