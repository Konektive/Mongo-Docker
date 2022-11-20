const express = require("express");
const app = express();
const cors = require("cors");
const mongoose = require("mongoose");
require("dotenv").config();

const dotenv = require("dotenv");
const routesUrls = require("./routes/routes");

dotenv.config();

mongoose.connect(process.env.DATABASE_URL, () => {
  console.log("database connected");
});

app.use(express.json());
app.use(cors());

app.use("/", routesUrls);

//different port than react server
app.listen(4000, () => {
  console.log("server is working on port 4000");
});
