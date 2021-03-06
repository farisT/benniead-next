const express = require("express");
const next = require("next");
const bodyParser = require("body-parser");
const path = require("path");
const db = require(path.resolve( __dirname, "./server/config/db.js" ))
const pg = require("pg");
const PORT = process.env.PORT || 3000;
const dev = process.env.NODE_ENV !== "production";
const app = next({ dir: '.', dev });
const handle = app.getRequestHandler();

require ('dotenv').load();


app
  .prepare()
  .then(() => {
    const server = express();


    if (!dev) {
      // Enforce SSL & HSTS in production
      server.use(function(req, res, next) {
        var proto = req.headers["x-forwarded-proto"];
        if (proto === "https") {
          res.set({
            'Strict-Transport-Security': 'max-age=31557600' // one-year
          });
          return next();
        }
        res.redirect("https://" + req.headers.host + req.url);
      });
    }
    server.use(bodyParser.urlencoded({extended:true}))
    server.use(bodyParser.json());

    server.use('/static', express.static(path.join(__dirname, 'static'), {
      maxAge: dev ? '0' : '365d'
    }));

    server.get('/', (req, res) => {
      return app.render(req, res, '/', req.query)
    })
      // Example server-side routing
      server.get('/about', (req, res) => {
        return app.render(req, res, '/about', req.query)
      })

    server.post('/user/interest', (req, res) => {
      console.log(req.body);
      console.log(`saving user ${req.body.name} with email ${req.body.email} and request ${req.body.message}`);
      db.users.create({
          name: req.body.name,
          email: req.body.email,
          message: req.body.message,
      })
  });
    // const showRoutes = require("./routes/index.js");

    // server.use(showRoutes);


    server.get("*", (req, res) => {
      return handle(req, res);
    });


  //   	server.listen(PORT, ()=>{
	// console.log('Running on', PORT)
	// })
db.sequelize.sync({ 
    force: false, // CHANGE THIS TO FALSE WHEN HOSTING - WILL OTHERWISE DELETE ALL DATA WHEN RESTARTING THE APP ! ! ! ! ! ! ! ! ! !! ! ! ! ! ! ! !! ! 
    logging: console.log 
}).then(()=> {
	server.listen(PORT, ()=>{
	console.log('Running on', PORT)
	})
})
  })
  .catch(ex => {
    console.error(ex.stack);
    process.exit(1);
  });