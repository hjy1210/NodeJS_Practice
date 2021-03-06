const mongoose = require('mongoose')
const Schema = mongoose.Schema
//const assert=require('assert')
const commentSchema = new Schema({
  rating: { type: Number, min: 1, max: 5, required: true },
  comment: { type: String, required: true },
  postedBy:{ type:mongoose.Schema.Types.ObjectId, ref:'User'}
},
  {
    timestamps: true
  })

const dishSchema = new Schema({
  name: { type: String, required: true, unique: true },
  category: { type: String },
  label: { type: String },
  description: { type: String, requires: true },
  comments: [commentSchema]
}, {
    timestamps: true
  })

const Dishes = mongoose.model('Dish', dishSchema)
module.exports = Dishes
