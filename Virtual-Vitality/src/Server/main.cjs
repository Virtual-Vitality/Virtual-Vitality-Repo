const express = require("express");
const morgan = require("morgan");
<<<<<<< HEAD
const ViteExpress = require("vite-express");
require("dotenv").config();
const app = express();
const port = process.env.PORT || 4200;
=======
// const ViteExpress = require("vite-express");
require("dotenv").config();
const app = express();
const port = process.env.PORT || 4200;
const cors = require('cors');
>>>>>>> main



app.use(morgan("dev"));
<<<<<<< HEAD
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/api", require("./API"));
// app.use("/auth", require("./Auth"));

app.listen(port, () =>
 console.log(`Server is listening on port ${port}`))
;
=======
app.use(express.json()); //it adds a 'body' property to request object
app.use(express.urlencoded({ extended: true }));//use for handling form submissions
app.use(cors());

app.use("/auth", require("./Auth/auth.js"));
app.use("/api", require("./API"));


app.listen(port, () =>
  console.log(`Server is listening on port ${port}`)
);
>>>>>>> main
