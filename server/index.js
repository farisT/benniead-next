const express = require("express");
const next = require("next");
const bodyParser = require("body-parser");
const path = require("path");
const db = require(path.resolve( __dirname, "./config/db.js" ))
const pg = require("pg");
const WEBPORT = process.env.WEBPORT || 3000;
const dev = process.env.NODE_ENV !== "production";
const app = next({ dev });
const handle = app.getRequestHandler();

require ('dotenv').load();


app
  .prepare()
  .then(() => {
    const server = express();
    server.use(bodyParser.urlencoded({extended:true}))
    server.use(bodyParser.json());

    server.use('/static', express.static(path.join(__dirname, '../static'), {
      maxAge: dev ? '0' : '365d'
    }));

    server.get('/', (req, res) => {
      return app.render(req, res, '/index', req.query)
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

db.sequelize.sync({ 
    force: true, // CHANGE THIS TO FALSE WHEN HOSTING - WILL OTHERWISE DELETE ALL DATA WHEN RESTARTING THE APP ! ! ! ! ! ! ! ! ! !! ! ! ! ! ! ! !! ! 
    logging: console.log 
}).then(()=> {
	server.listen(WEBPORT, ()=>{
	console.log('Running on', WEBPORT)
	})
})
  })
  .catch(ex => {
    console.error(ex.stack);
    process.exit(1);
  });