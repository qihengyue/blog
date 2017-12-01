var express = require('express');
var router = express.Router();

//mongodb
var mongoose = require('mongoose');
mongoose.Promise = global.Promise;
        
var conn = mongoose.connection.openUri('mongodb://127.0.0.1:27017/blog');
var User = new mongoose.Schema({
    name: String,
    email: String,
    age: String
});
console.log("user"+User);

var myModel = conn.model('user', User);
// router.use(function(req,res,next){  
//      res.send('Hello World');  
//      next();
// });

/* GET index listing. */
router.get('/', function(req, res, next) {
    myModel.findOne({name:"zhangangs"}, function (err, user) {
        console.log(user);
        res.render('index', {title: 'Express', user: user });
    });
});

module.exports = router;
