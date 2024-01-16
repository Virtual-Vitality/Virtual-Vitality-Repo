const express = require("express");
const morgan = require("morgan");
const ViteExpress = require("vite-express");
require("dotenv").config();
const app = express();



app.use(morgan("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/api", require("./API"));
app.use("/auth", require("./AUTH"));

ViteExpress.listen(app, 3000, () =>
  console.log("Server is listening on port 3000...")
);