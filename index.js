var express = require('express');
var bodyParser = require('body-parser')

var app = express();



app.use(express.static('public'));
app.use(bodyParser.urlencoded({ extended: false }))
 
// parse application/json 
app.use(bodyParser.json())


var port = 3000;
// process.env.PORT || 3000

app.get('/', function(req, res){
	res.render('public');
});


app.listen(port, function(){
	console.log("Server started on " + port)
});