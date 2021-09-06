const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require('mongoose');
const app = express();
mongoose.connect('mongodb://localhost:27017/fruitDB');

const fruitSchema = new mongoose.Schema({
  name:String,
  price:Number
});

const Fruit = mongoose.model("Fruit",fruitSchema);

const fruit = new Fruit({
  name : "apple",
  price : 20
});
fruit.save();
