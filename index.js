let express = require("express");
require("dotenv").config();
let { connect } = require("./DataBase/DBconnect");
let newroute = require("./Routers/person");

let application = express();
application.use(express.json());
application.use(newroute.route);

connect();

application.listen(process.env.PORT, () =>
  console.log(`My server is run on http://localhost:${process.env.PORT}`)
);
