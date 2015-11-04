
// server.js

    // set up ========================
    var express  = require('express');
    var app      = express();                               // create our app w/ express
    var morgan = require('morgan');             // log requests to the console (express4)
    var bodyParser = require('body-parser');    // pull information from HTML POST (express4)
    var methodOverride = require('method-override'); // simulate DELETE and PUT (express4)

    // configuration =================

    app.use(express.static(__dirname + '/public'));                 // set the static files location /public/img will be /img for users
    app.use(morgan('dev'));                                         // log every request to the console
    app.use(bodyParser.urlencoded({'extended':'true'}));            // parse application/x-www-form-urlencoded
    app.use(bodyParser.json());                                     // parse application/json
    app.use(bodyParser.json({ type: 'application/vnd.api+json' })); // parse application/vnd.api+json as json
    app.use(methodOverride());

    // listen (start app with node server.js) ======================================
    app.listen(8080);
    console.log("App listening on port 8080");



// routes ======================================================================

    // api ---------------------------------------------------------------------
    // initial loading - renvoit un flux json avec le tableau de terrain
    app.get('/api/new', function(req, res) {

        /*var terrains = require('json/terrains-init.json');*/
       var terrains = { listeTerrains : [
            {no:1, type:'mer', civils:8, guerriers:2 }, 
            {no:2, type:'plaine', civils:10, guerriers:5 }, 
            {no:3, type:'plaine', civils:10, guerriers:5 }, 
            {no:4, type:'mer', civils:8, guerriers:2 }, 
            {no:5, type:'mer', civils:10, guerriers:5 }, 
            {no:6, type:'plaine', civils:8, guerriers:2 }, 
            {no:7, type:'plaine', civils:10, guerriers:5 }, 
            {no:8, type:'plaine', civils:8, guerriers:2 }, 
            {no:9, type:'foret', civils:8, guerriers:2 }, 
            {no:10, type:'foret', civils:0, guerriers:0 },
            {no:11, type:'plaine', civils:8, guerriers:2 }, 
            {no:12, type:'marais', civils:10, guerriers:5 }, 
            {no:13, type:'montagne', civils:10, guerriers:5 }, 
            {no:14, type:'montagne', civils:8, guerriers:2 }, 
            {no:15, type:'volcan', civils:10, guerriers:5 }, 
            {no:16, type:'montagne', civils:8, guerriers:2 }, 
            {no:17, type:'plaine', civils:10, guerriers:5 }, 
            {no:18, type:'plaine', civils:8, guerriers:2 }, 
            {no:19, type:'desert', civils:8, guerriers:2 }, 
            {no:20, type:'plaine', civils:8, guerriers:2 } 
            ]
        }

		res.json(terrains); // return all todos in JSON format
       
    });

	// application angular
    app.get('*', function(req, res) {
        res.sendfile('./index.html'); // load the single view file (angular will handle the page changes on the front-end)
    });
