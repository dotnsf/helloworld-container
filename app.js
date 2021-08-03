//.  app.js
var express = require( 'express' ),
    fs = require( 'fs' ),
    app = express();

app.get( '/', function( req, res ){
  console.log( 'GET /' );
  res.contentType( 'text/plain; charset=utf-8' );
  console.log( 'HelloWorld! (' + ( new Date() ).toISOString() + ')' );
  res.write( 'HelloWorld!' );
  res.end();
});

var port = process.env.PORT || 8080;
app.listen( port );
console.log( "server starting on " + port + " ..." );
