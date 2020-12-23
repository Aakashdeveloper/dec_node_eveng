import express from 'express';
import request from 'request';
const app = express();
const port = 7899;

//var apiurl = "http://api.openweathermap.org/data/2.5/forecast/daily?q=Delhi&mode=json&units=metric&cnt=5&appid=fbf712a5a83d7305c3cda4ca8fe7ef29";

//Static file path
app.use(express.static(__dirname+'/public'));
//html
app.set('views','./src/views');
//view engine
app.set('view engine','ejs');


app.get('/weather',function(req,res){
    const city = req.query.city?req.query.city:'London'
    const apiurl = `http://api.openweathermap.org/data/2.5/forecast/daily?q=${city}&mode=json&units=metric&cnt=5&appid=fbf712a5a83d7305c3cda4ca8fe7ef29`;
    request(apiurl,function(err,response){
        if(err) throw err;
        var output = JSON.parse(response.body);
        //res.send(output)
        res.render('index',{title:'Weather App',result:output})
    })
});

app.listen(port,function(err){
    if(err) throw err;
    console.log(`Server is running on port ${port}`)
})