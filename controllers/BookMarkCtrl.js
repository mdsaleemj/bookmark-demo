var bookMarkModel = require('../models/BookMarkModel');

exports.insert = function(req,res){
   var bookmark= {};
    bookmark.title = req.body.title || 'Untitled' ;
    bookmark.url   = req.body.url;
   console.log(bookmark);  
    bookMarkModel.add(bookmark, function(error,bookmark){
			if(error){
        res.send("Server Error",500);
        console.log(error);
      }else{
        res.send({'msg': 'BookMark Saved'});
      }
     

    }); 
 
};

exports.remove = function(req,res){
   bookMarkModel.remove(req.params.id, function(error, bookmark){
   	 if(error){
				res.send("Server Error",500);
        console.log(error);
     }else{
       res.send({"msg": "Bookmark deleted"});
     }
   });

};


exports.list = function(req,res){
   bookMarkModel.get(function(error,bookmarks){
     if(error){
        res.send("server Error",500);
        console.log(error);
      }else{
        res.send(bookmarks);
      }
     
   });
};


exports.getById = function(req,res){
   bookMarkModel.getById(req.params.id , function(error,bookmark){
      if(error){ 
        res.send("server Error",500);
        console.log(error);
      }else{
         res.send(bookmark);
      }
       
  });

};


exports.update = function(req,res){
	var bookmark = {};
  bookmark.title = req.body.title || 'Untitled' ;
  bookmark.url   = req.body.url;
  bookMarkModel.update(req.params.id, bookmark, function(error,bookmark){
		if(error){
			res.send("Server Error", 500);
      console.log(error);
    }else{
      res.send({"msg" :"Bookmark updated"});
    }
}); 

};


