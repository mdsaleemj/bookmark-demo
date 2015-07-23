'use strict'

var express = require('express')
    ,mongoose = require('mongoose')
    ,path = require('path')
    ,bookmarkController  = require('./controllers/BookMarkCtrl');

var app = express.createServer();
var port = '20020';

app.use(express.bodyParser());
app.use(express.static(path.join(__dirname,'public')));	


//Routes
app.get('/api',function(req,res){
  res.send("api running.....",200) 
  console.log("Bookmark api running....");
});
app.get('/api/bookmark',bookmarkController.list);
app.get('/api/bookmark/:id',bookmarkController.getById );

app.post('/api/bookmark',bookmarkController.insert );
app.put('/api/bookmark/:id',bookmarkController.update );


app.delete('/api/bookmark/:id',bookmarkController.remove);

//start the server
app.listen(port,function(){
  console.log('Express server listening on port %d',port);
});




