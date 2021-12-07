const express = require("express");
const { get } = require("http");
const CakeRouter = express.Router();
const {CakeController} = require('../controllers/CakeController');


CakeRouter
    .post('/rate', CakeController.addRate);
/*
ApiRouter
    .delete('/remove/:title', CakeController.removeTask );
ApiRouter
    .get('/tasks/:title', CakeController.findByName );
ApiRouter
    .put('/taskss/:title', CakeController.update );
ApiRouter
    .get( '/tasks', CakeController.allTasks );
*/
module.exports = {CakeRouter}