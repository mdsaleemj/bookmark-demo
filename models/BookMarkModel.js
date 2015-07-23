'use strict';

var mongoose = require('mongoose')
	 ,Schema	 = mongoose.Schema
;

var BookMarkSchema = new Schema({
	title : { type  : String},
  url   : { type  : String}
});

var BookMark = mongoose.model('BookMark',BookMarkSchema);

//connect to db called bookmark-db
mongoose.connect("mongodb://localhost/bookmark-db");

exports.add = function(bookmark,cb){
  var bmark = new BookMark();
  bmark.title = bookmark.title;
  bmark.url  = bookmark.url;
  
  bmark.save(function(err,doc){
    cb(err,doc);
  });
};

exports.remove = function(id,cb){
  BookMark.findOne({_id : id})
          .remove(function(err){
					  if(err) cb(err,false);
            else cb(null,false);	
          });
};

exports.get = function(cb){
   BookMark.find(function(err,bookmarks){
		 cb(err,bookmarks);
   });
};

exports.getById = function(id,cb){
  BookMark.findById(id,function(err,bookmark){
		cb(err,bookmark);
  });

};


exports.update = function(id,bookmark,cb){
  BookMark.findById(id,function(err,doc){
     doc.title = bookmark.title;
     doc.url   = bookmark.url;
     doc.save(function(err){
       cb(err,doc);
     })
  });

};
