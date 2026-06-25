const mongoose = require("mongoose");
const dotenv = require("dotenv");
const Dish = require("./models/Dish");

dotenv.config();

mongoose.connect(process.env.MONGO_URI);

const dishes = require("./data/dishes.json");

const importData = async () => {
    try {
        await Dish.deleteMany();

        await Dish.insertMany(dishes);

        console.log("✅ Data Imported Successfully");

        process.exit();
    } catch (error) {
        console.error(error);
        process.exit(1);
    }
};

importData();