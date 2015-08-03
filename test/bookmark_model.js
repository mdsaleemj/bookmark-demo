'use strict';
//uses Mocha testing framework with should assertion lib
var should = require('should'),
	  mongoose = require('mongoose'),
    request = require('supertest'); 

describe('Unit Testing', function() {
  var url = "http://localhost:20020/"  
  before(function(done) {
    mongoose.connect("mongodb://localhost/bookmark-db");    
		done();
  });

  describe('Bookmark  Saving cases...', function() {
		it('BookMark  should be Saved ', function(done) {
     var  bookmark = {};
      bookmark.title = "A sample title...";
      bookmark.url = "www.expresscafe.com";
      request(url)
			.post('/api/bookmark')
			.send(bookmark)
			.end(function(err, res) {
          if (err) {
            throw err;
          }
          res.should.have.status(200);
          done();
        });
		});

		it('should be able to show an error when try to save without url', function(done) {
			var bookmark = {};
      request(url)
			.post('/api/bookmark')
			.send(bookmark)
			.end(function(err, res) {
          if (err) {
            throw err;
          }
          res.should.have.status(400);
          done();
        });
	
			});
		});

	});
