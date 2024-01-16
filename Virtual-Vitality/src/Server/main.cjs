const express = require("express");
const morgan = require("morgan");
const ViteExpress = require("vite-express");
require("dotenv").config();
const app = express();
const port = process.env.PORT || 4200;



app.use(morgan("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/api", require("./API"));
// app.use("/auth", require("./Auth"));

app.listen(port, () =>
 console.log(`Server is listening on port ${port}`))
;