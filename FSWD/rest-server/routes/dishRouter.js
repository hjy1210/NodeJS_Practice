var express = require('express');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');

var Dishes = require('../models/dishes');


var dishRouter = express.Router();

dishRouter.use(bodyParser.json());

dishRouter.route('/')
	.get(function (req, res, next) {
		Dishes.find({}, (err, dish) => {
			if (err) throw err
			res.json(dish)
		})
	})
	.post(function (req, res, next) {
		Dishes.create(req.body, (err, dish) => {
			if (err) throw error
			console.log("Dish created!")
			var id = dish._id
			res.writeHead(200, {
				"Content-Type": "text/plain"
			})
			res.end('Added the dish with id: ' + id)
		})
	})
	.delete(function (req, res, next) {
		Dishes.remove({}, (err, resp) => {
			if (err) throw err
			res.json(resp)
		})
	});

dishRouter.route('/:dishId')
	.get(function (req, res, next) {
		Dishes.findById(req.params.dishId, (err, dish) => {
			if (err) throw err
			res.json(dish)
		})
	})
	.put(function (req, res, next) {
		Dishes.findByIdAndUpdate(req.params.dishId, {
			$set: req.body
		}, {
				new: true
			}, (err, dish) => {
				if (err) throw err
				res.json(dish)
			})
	})
	.delete(function (req, res, next) {
		Dishes.findByIdAndRemove(req.params.dishId, (err, dish) => {
			if (err) throw err
			res.json(dish)
		})
	});

dishRouter.route('/:dishId/comments')
	.get(function (req, res, next) {
		Dishes.findById(req.params.dishId,(err,dish)=>{
			if (err) throw error
			res.json(dish.comments)
		})
	})
	.post((req,res,next)=>{
		Dishes.findById(req.params.dishId, (err,dish)=>{
			if (err) throw err
			dish.comments.push(req.body)
			dish.save((err,dish)=>{
				if (err) throw err
				console.log("Updated comments!")
				res.json(dish)
			})
		})
	})
	.delete((req,res,next)=>{
		Dishes.findById(req.params.dishId, (err,dish)=>{
			if (err) throw err
			for (var i=dish.comments.length-1;i>=0;i--){
				dish.comments.id(dish.comments[i]._id).remove()
			}
			dish.save((err,dish)=>{
				if (err) throw err
				res.json(dish)
			})
		})
	})

dishRouter.route('/:dishId/comments/:commentId')
	.get(function (req, res, next) {
		Dishes.findById(req.params.dishId, (err,dish)=>{
			if (err) throw err
			res.json(dish.comments.id(req.params.commentId))
		})
	})
	.put((req,res,next)=>{
		Dishes.findById(req.params.dishId, (err,dish)=>{
			if (err) throw err
			dish.comments.id(req.params.commentId).remove()
			dish.comments.push(req.body)
			dish.save((err,dish)=>{
				if (err) throw err
				console.log("Updated comments!")
				res.json(dish)
			})
		})
	})
	.delete((req,res,next)=>{
		Dishes.findById(req.params.dishId, (err,dish)=>{
			if (err) throw err
			dish.comments.id(req.params.commentId).remove()
			dish.save((err,dish)=>{
				if (err) throw err
				res.json(dish)
			})
		})
	})

module.exports = dishRouter;
