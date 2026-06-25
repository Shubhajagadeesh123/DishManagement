const Dish = require("../models/Dish");

// GET ALL DISHES
const getAllDishes = async (req, res) => {
  try {
    const dishes = await Dish.find();

    res.status(200).json(dishes);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

// TOGGLE PUBLISH STATUS
const togglePublish = async (req, res) => {
  try {
    const dish = await Dish.findById(req.params.id);

    if (!dish) {
      return res.status(404).json({
        message: "Dish not found",
      });
    }

    dish.isPublished = !dish.isPublished;

    await dish.save();

    // Notify all connected clients
    const io = req.app.get("io");

    if (io) {
      io.emit("dishUpdated");
    }

    res.status(200).json(dish);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

module.exports = {
  getAllDishes,
  togglePublish,
};