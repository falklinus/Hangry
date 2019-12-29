const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const mealSchema = new Schema(
  {
    title: {
      type: String,
      required: true,
      unique: true,
      trim: true
    },
    restaurant: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Restaurant"
    },
    ingredients: []
  },
  {
    timestamps: true
  }
);

module.exports = mongoose.model("Meal", mealSchema);
