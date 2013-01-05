var should = require('chai').should();

var config = require('../config/config.js');



describe('Google Oauth', function(){
  var gAuth = require('../index.js')({
   client_id : config.client_id,
   client_secret : config.client_secret
  });
  
  var auth_code;
  var access_token;
  var refresh_token;

  describe('#getAuthCode()', function(){
    it('Respond with authorization code', function(done){
      gAuth.getAuthCode(function(err, code){
        should.not.exist(err);
        should.exist(code);
        code.should.be.a('string');
        auth_code = code;
        done();
      });
     });
  });
  
  describe('#getToken()', function(){
    it('Respond with access token, refresh token, etc', function(done){
      gAuth.getToken(auth_code, function(err, body){
        console.log(body);
        should.not.exist(err);
        should.exist(body);
        body.should.be.an('object');
        done();
      });
     });
  });

  describe('#getToken()', function(){
    it('Respond with access token, refresh token, etc', function(done){
      gAuth.getToken(auth_code, function(err, body){
        console.log(body);
        should.not.exist(err);
        should.exist(body);
        body.should.be.an('object');
        done();
      });
     });
  });


});



