
var express = require('express');
var app = express();
// set the port of our application
// process.env.PORT lets the port be set by Heroku
var port = process.env.PORT || 3000;

// set the view engine to ejs
app.set('view engine', 'ejs');

// make express look in the public directory for assets (css/js/img)
app.use(express.static(__dirname + '/public'));

// set the home page route
app.get('/', function(req, res) {

	// ejs render automatically looks in the views folder
	res.render('index');
});

//app.use(express.static('public'));
const ejs = require('ejs');
app.set('view engine', 'ejs');

/*app.get('/', function(req, res) {

	// ejs render automatically looks in the views folder
	res.render('/index');
});*/



//CODES FOR DOWNLOADING FROM SERVER 

var http = require('http').Server(app);

//This will add button to link to your download page
//res.sendfile(link of html file in your pc)

app.get('/',function(req,res){ 
  //res.sendFile('views/index' , { root : __dirname});
  res.sendFile('C:/Users/Oyekanmi Jelil/jelil-info1/views/index');
});
app.get('/download',function(req,res){
    res.download(__dirname +'/upload_folder/myCV.pdf','myCV.pdf');
});

/*app.get('/Thanks',function(req,res){server
  res.sendFile('public/thanksForDownloading.html' , { root : __dirname});

  //res.sendFile('jelil-info1/public/thanksForDownloading.html', {root: path.dirname(__dirname)}); 
   //res.sendFile('../public/thanksForDownloading.html', {root: __dirname});
    //res.sendFile('C:/Users/Oyekanmi Jelil/jelil-info1/views/thanksForDownloading.html')//Full path of thankyou.html file
    });*/


    //CODES FOR LINKS
    
      app.get('/home', (req, res) => {

        res.render('home');
        
        
        });
      
    
      app.get('/myResume', (req, res) => {
    
        res.render('myResume');
        
        });

        app.get('/digitalMarketer', (req, res) => {
    
          res.render('digitalMarketer');
          
          });

          app.get('/portfolio', (req, res) => {

            res.render('portfolio');
            
            
            });

            app.get('/aboutMe', (req, res) => {

              res.render('aboutMe');
              
              
              });

              app.get('/testing', (req, res) => {
         
                res.render('testing');
                
                });
       
  

            
      
    //COdes for message to display after downloading
        
         app.get('/Thanks', (req, res) => {
         
          res.render('thanksForDownloading');
          
          });
           

                /*app.listen(port, function() {
            console.log('Our app is running on http://localhost:' + port);
        });*/







//CODES FOR FORM DATA

//const express = require("express");
const mongoose = require("mongoose");
const formRouter = require("./routes/formRoutes.js");
//const app = express();

//app.use(express.json());
var bodyParser = require('body-parser')
app.use(bodyParser.urlencoded({ extended: false }));




        
        var path = require('path');
        
        var mongodb = require('mongodb');
        var fs = require('fs');
        var path = require('path');
        require('dotenv/config');



        
        mongoose.Promise = global.Promise;
        

        var data = process.env.MONGODB_URI;
        mongoose.connect(data);


        /*mongoose.connect(`mongodb+srv://${process.env.DB_USERNAME}:${process.env.DB_PASSWORD}@cluster0.8chyx.mongodb.net/FormData?retryWrites=true&w=majority`,
     { useNewUrlParser: true, useUnifiedTopology: true,useFindAndModify: false });*/

        
        /*const aws = require('aws-sdk');

        let s3 = new aws.S3({
          accessKeyId: process.env.S3_KEY,
          secretAccessKey: process.env.S3_SECRET
        });
        
        mongoose.connect(`mongodb+srv://${s3.accessKeyId}:${s3.secretAccessKey}@cluster0.8chyx.mongodb.net/FormData?retryWrites=true&w=majority`,
        { useNewUrlParser: true, useUnifiedTopology: true,useFindAndModify: false }
        );*/
         

    
app.use(formRouter);

app.listen(port, () => {
  console.log("Server is running...");
});