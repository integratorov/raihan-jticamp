const express = require('express');
const router = express.Router();
mongo = require('mongojs');
const db = mongo('mongodb+srv://raihanadi:$Spchlss2899@cluster0.igmzuhf.mongodb.net/techcamp', ['todo']);

router.get('/', function(req, res, next){
    db.todo.find({}, function(err, result){
        if(err){
            res.send(err);
        }else{
            res.json(result);
        }
    })
});
module.exports = router;

