var express = require('express');
var app = express();
var port = 8700;

var menu = [
    {link:'/', name:'Home'},
    {link:'/hotel', name:'Hotels'},
    {link:'/city', name:'City'}
]

var hotelRouter = require('./src/routes/hotelRoutes')(menu);
var cityRouter = require('./src/routes/cityRoutes')(menu);


//Static file path
app.use(express.static(__dirname+'/public'));
//html
app.set('views','./src/views');
//view engine
app.set('view engine','ejs');

app.get('/',function(req,res){
    //res.send("Welcome to NodeJs")
    res.render('index',{title:'Home Page',menu:menu});
});

app.use('/hotel',hotelRouter);
app.use('/city',cityRouter);

app.listen(port,function(err){
    if(err) throw err;
    console.log("Server is running on port 8700")
});