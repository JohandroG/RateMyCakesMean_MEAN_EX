const express = require('express');
const bodyParser = require("body-parser");
const { ApiRouter } = require( './server/routes/ApiRouter' );
const app = express();
const cors = require('cors');
const { CakeRouter } = require('./server/routes/CakeRouter');
app.use(cors());

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

require('./server/config/database');
app.use( '', ApiRouter );
app.use( '/cake', CakeRouter );

app.listen( 8080, function(){
    console.log( "The users server is running in port 8080." );
});
