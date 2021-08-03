//.  app.js
var express = require( 'express' ),
    fs = require( 'fs' ),
    app = express();

app.get( '/', function( req, res ){
  console.log( '** GET / **' );
  res.contentType( 'text/plain; charset=utf-8' );
  text = 'HelloWorld! (' + ( new Date() ).toISOString() + ')';
  console.log( text );
  res.write( text );
  res.end();
});

var port = process.env.PORT || 8080;
app.listen( port );
console.log( "server starting on " + port + "(" + ( new Date() ).toISOString() + ")" );
