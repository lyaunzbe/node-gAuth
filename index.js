var request = require('request'),
	exec = require('child_process').exec,
	querystring = require('querystring');

var events = require('events');


module.exports =  function(opts) {
	if(!opts.redirect_uri){
		opts.redirect_uri = 'http://localhost:3000/callback'; 
	}
	
	var gAuth = {};

	var endpoint = 'https://accounts.google.com/o/oauth2/auth';

	function getAuthCode(callback){
		var qs = {
			response_type: 'code',
			client_id: opts.client_id,
			redirect_uri: opts.redirect_uri,
			scope: 'https://www.googleapis.com/auth/userinfo.profile'	
		};
		
		var url = '\''+endpoint + '?' + querystring.stringify(qs) +'\'';

		exec('open '+url, function(err){
			if(err !== null){
				console.log(err);
			}
		});

		var server = require('http').createServer(function(req, res) {
			if(req.url.match(/callback/)) return parseCode(req, res)
		}).listen(3000);

		function parseCode(req,res){
			//for gdrive-cli:
			//instead of just closing the connection, redirect to an informational page
			server.close();

			//split url by ? so we just have the querystring left
			//extract out the auth code
			callback(querystring.parse(req.url.split('?')[1])['code']);
		}
	}

	gAuth.getAuthCode = getAuthCode;

	gAuth.
	
	return gAuth;
};