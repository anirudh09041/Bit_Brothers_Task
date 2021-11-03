const express = require("express");
require("dotenv").config();
const port = process.env.PORT || 8080;
const mongoose = require("mongoose");
const cors = require("cors");
const userRoute = require("./route/user");

const app = express();
app.use(express.json());
app.use(cors());

mongoose
  .connect(process.env.DB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then((result) => console.log("connected to the database.."))
  .catch((err) => console.log(err));

app.use("/user", userRoute);

app.listen(port, () => {
  console.log("server running at port " + port + " .....");
});
