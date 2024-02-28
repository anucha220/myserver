const FoodMenu = require("../models/foodmenu.model");
exports.getFoodMenus = (req, res) => {
  FoodMenu.find().then((result) => {
    res.status(200).json({
      msg: "Search OK",
      data: result,
    });
  });

};


exports.getFoodMenuById = (req, res) => {
  FoodMenu.findById(req.params.id).then((result) => {
    res.status(200).json({
      msg: "Search OK",
      data: result,
    });
  });
};


exports.createFoodMenu = async (req, res) => {
  //เพิ่ม foodmenu
  try {
    let foodMenu = new FoodMenu({
      name: req.body.name,
      category: req.body.category,
      price: req.body.price,
      ingredients: req.body.ingredients
    });
    let createdFoodMenu = await foodMenu.save();
    res.status(200).json({
      msg: "Add a foodmenu complete.",
      data: createdFoodMenu,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      msg: error,
    });
  }

};
exports.updateFoodMenu = (req, res) => {
  let foodmenu = {
    name: req.body.name,
    category: req.body.category,
    price: req.body.price,
    ingredients: req.body.ingredients,
  };
  FoodMenu.findByIdAndUpdate(req.params.id, foodmenu)
    .then((result) => {
    // findById อีกครั้งเพื่อเอา data ใหม่
    FoodMenu.findById(req.params.id).then((result) => {
      res.status(200).json({
        msg: "OK",
        data: result,
      });
    });
  });
};

exports.addReview = (req, res) => {
  let reviewData = {
    $push: {
      reviews: {
        star: req.body.star,
        message: req.body.message,
      },
    },
  };
  FoodMenu.findByIdAndUpdate(req.params.id, reviewData).then((result) => {
    // findById อีกครั้งเพื่อเอา data ใหม่
    FoodMenu.findById(req.params.id).then((result) => {
      res.status(200).json({
        msg: "OK",
        data: result,
      });
    });
  });
};

exports.deleteFoodMenu = (req, res) => {
  FoodMenu.findByIdAndDelete(req.params.id)
  .then((result) => {
      res.status(200).json({
        msg: `Food Menu id ${req.params.id} is deleted.`,
      });
    });
  };
  
exports.getFoodMenusByName = (req, res) => {
  FoodMenu.find({ 
    name: new RegExp(req.params.name)
  }).then((result) => {
    res.status(200).json({
      msg: "Search OK",
      data: result,
    });
  });
};
exports.getFoodMenusByCategory = (req, res) => {
  FoodMenu.find({ 
    category: new RegExp(req.params.category)
  }).then((result) => {
    res.status(200).json({
      msg: "Search OK",
      data: result,
    });
  });
};
