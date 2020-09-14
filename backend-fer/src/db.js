const mongoose = require('mongoose');

require('./config/config')

require("dotenv").config()

// const db = process.env.DB

mongoose.connect(process.env.URLDB,{
    useCreateIndex: true,
    useUnifiedTopology:true,
    useNewUrlParser: true,
    useFindAndModify: false
},() => {
    console.log('db conected');
} )