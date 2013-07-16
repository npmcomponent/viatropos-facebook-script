
var facebook = require('facebook-script');
var assert = require('assert');

describe('facebook', function(){
  it('should load facebook', function(done){
    facebook('138567726170761', function(){
      assert('object' == typeof FB);
      done();
    });
  });
});