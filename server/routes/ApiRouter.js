const express = require("express");
const { get } = require("http");
const ApiRouter = express.Router();
const {BakerController} = require('./../controllers/ApiController');


ApiRouter
    .get( '/bakers', BakerController.allCakes );
ApiRouter
    .post('/baker', BakerController.addCake );
ApiRouter
    .get('/baker/:id', BakerController.findById );

/*
ApiRouter
    .delete('/remove/:title', TaskController.removeTask );

ApiRouter
    .put('/taskss/:title', TaskController.update );
*/
module.exports = {ApiRouter}