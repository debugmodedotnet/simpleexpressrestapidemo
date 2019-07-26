var express = require('express');
var bodyParser = require('body-parser');
var cors = require('cors');
var app = express();

var repos = require('./repo');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
var port = process.env.PORT || 8090;
var router = express.Router();

router.use(function (req, res, next) {
    // do logging 
    // do authentication 
    console.log('Logging of request will be done here');
    next(); // make sure we go to the next routes and don't stop here
});

router.route('/repos').get(function (req, res) {
        let reposa = repos.Repos;
        res.send(reposa);
    });



app.use(cors());
app.use('/api', router);
app.listen(port);
console.log('REST API is runnning at ' + port);

