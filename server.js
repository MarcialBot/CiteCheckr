const express = require('express');
const logger = require('morgan');
const serveFavicon = require('serve-favicon');
const path = require('path');
const cors = require('cors');
const app = express();

require('dotenv').config();
require('./config/database');


app.use(logger('dev'));
app.use(express.json());
app.use(cors());

app.use(serveFavicon(path.join(__dirname, 'build', 'favicon.ico')));
app.use(express.static(path.join(__dirname, 'build')));

const port = process.env.PORT || 3001;

app.use('/api/users', require('./routes/api/users'));
app.use('/api/campaigns', require('./routes/api/campaigns'));

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", `http://localhost:${port}`); // update to match the domain you will make the request from
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
  });
// app.use('/api/websites', require('./routes/api/websites'));


app.get('/*', function(req, res){
    res.sendFile(path.join(__dirname, 'build', 'index.html'));
    res.json({msg: 'This is CORS-enabled for all origins!'})
});

app.listen(port, function() {
    console.log(`Express is listening on port: ${port}`);
});

