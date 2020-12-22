var express = require('express');
var hotelRouter = express.Router();
var mongodb = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017";

function router(menu){
  hotelRouter.route('/')
      .get(function(req,res){
          mongodb.connect(url,function(err,connection){
            if(err){
              res.status(501).send("Error While connecting")
            }else{
              const dbo = connection.db('octnode');
              dbo.collection('hotels').find({}).toArray((err,data) => {
                if(err){
                  res.status(501).send("Error While fetching")
                }else{
                  res.render('hotel',{title:'Hotel Page',hoteldata:data,menu:menu})
                }
              })
            }
          })
          //res.send(hotels)
      });

  hotelRouter.route('/details')
      .get(function(req,res){
          res.send('Hotel Details')
      });

      return hotelRouter
  }

module.exports= router;