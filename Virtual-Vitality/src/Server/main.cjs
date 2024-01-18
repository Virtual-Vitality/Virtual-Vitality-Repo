const express = require("express");
const morgan = require("morgan");
// const ViteExpress = require("vite-express");
require("dotenv").config();
const app = express();
const port = process.env.PORT || 4200;
const cors = require('cors');



app.use(morgan("dev"));
app.use(express.json()); //it adds a 'body' property to request object
app.use(express.urlencoded({ extended: true }));//use for handling form submissions
app.use(cors());
console.log("trying to run")
app.use("/auth", require("./Auth/auth.js"));
app.use("/api", require("./API"));


app.listen(port, () =>
  console.log(`Server is listening on port ${port}`)
);
