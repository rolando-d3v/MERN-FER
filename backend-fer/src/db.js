const mongoose = require('mongoose');

require("dotenv").config()

const db = process.env.DB

mongoose.connect(db,{
    useCreateIndex: true,
    useUnifiedTopology:true,
    useNewUrlParser: true,
    useFindAndModify: false
},() => {
    console.log('db conected');
} )