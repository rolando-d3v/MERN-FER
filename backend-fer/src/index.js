const express = require("express");
const bodyParser = require('body-parser');

require("dotenv").config()
require('./db')


//server
const port = process.env.PORT
const app = express();
app.listen(port, () => {
  console.log(`server conectado in port ${port}`);
});

//para enviar datos del postman
app.use(bodyParser.urlencoded({extended: true}))
app.use(bodyParser.json())

//routers
app.use('/', require('./routers/usuario'))