const express = require("express");

const router = express.Router();

const {
    getAllDishes,
    togglePublish
} = require("../controllers/dishController");

router.get("/", getAllDishes);

router.patch("/:id/toggle", togglePublish);

module.exports = router;