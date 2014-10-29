var myData = require('./server-assets/myData.js');
var express = require('express');
var bodyParser = require('body-parser');
var app = express();

app.use(bodyParser.json());

app.use(express.static('./public'));

app.get('/family', function (req, res){
	res.status(200).json(myData.getFamily())
})
app.get('/friends', function (req, res){
	res.status(200).json(myData.getFriends())
})
app.get('/activities', function (req, res){
	res.status(200).json(myData.getActivities())
})
app.post('/family', function (req, res){
	myData.addFamily(req.body)
	res.status(200).json(myData.getFamily())
})
app.post('/friends', function (req, res){
	myData.addFriends(req.body)
	res.status(200).json(myData.getFriends())
})
app.post('/activities', function (req, res){
	myData.addActivity(req.body)
	res.status(200).json(myData.getActivities())
})
// var onRequest = function(req, res) {		
// 	var data = {
// 		Hello: "world"
// 	}

// function ensureValidData (obj, requiredKeys){
// 	var validatedObj = {};
// 	for (var i = requiredKeys.length - 1; i >= 0; i--) {
// 		requiredKeys[i]
// 	};
// }

app.listen(3000);