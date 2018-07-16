const express = require("express");
const next = require("next");
const bodyParser = require("body-parser");
const path = require("path");
const db = require(path.resolve( __dirname, "./config/db.js" ))
const env = require(path.resolve( __dirname, "../.env" ))
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

    const showRoutes = require("./routes/index.js");

    server.use(showRoutes);


    server.get("*", (req, res) => {
      return handle(req, res);
    });

db.sequelize.sync({ 
    force: false, // CHANGE THIS TO FALSE WHEN HOSTING - WILL OTHERWISE DELETE ALL DATA WHEN RESTARTING THE APP ! ! ! ! ! ! ! ! ! !! ! ! ! ! ! ! !! ! 
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