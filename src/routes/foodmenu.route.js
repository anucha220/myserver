const express = require('express');
const app = express.Router();
const controller = require('../controllers/foodmenu.controller')

app.get("/", controller.getFoodMenus);
app.get("/:id", controller.getFoodMenuById);
app.post("/",controller.createFoodMenu);
app.put("/:id", controller.updateFoodMenu);
app.patch("/:id", controller.addReview);
app.delete("/:id", controller.deleteFoodMenu);
app.get("/name/:name", controller.getFoodMenusByName);
app.get("/category/:category", controller.getFoodMenusByCategory);


module.exports = app;