require('dotenv').config({ path: './config.env'});
const express = require("express");
const app = express();
const port = process.env.PORT || 4000;
const bodyParser = require('body-parser');
const cors = require('cors');

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

require("./db.js")(app);

app.get("/", (req, res) => {
  res.send("anucha!");
});
const foodMenuRoute = require('./routes/foodmenu.route');
app.use("/foodmenu", foodMenuRoute);

app.get("/about", (req, res) => {
    res.send("A bout us!");
  });
  app.get("/contact", (req, res) => {
    res.send("contact!");
  });
  app.get("/people", (req, res) => {
    res.send("people!");
  });

app.listen(port, () => {
  console.log("Starting node.js at port " + port);
});