// const mongoose = require('mongoose');
// require('dotenv').config()
// mongoose.connect('mongodb+srv://${process.env.DB_USER}:${process.env.DB_PW}@cms.qgsn3.mongodb.net/cms?retryWrites=true&w=majority', ()=>{
//     console.log('connected to db')
// })

const mongoose = require('mongoose');
require('dotenv').config()
mongoose.connect('mongodb+srv://${process.env.DB_USER}:${process.env.DB_PW}@cluster0.y71yu.mongodb.net/cms?retryWrites=true&w=majority', ()=>{
    console.log('connected to db')
})

// mongodb+srv://root:<password>@cluster0.y71yu.mongodb.net/myFirstDatabase?retryWrites=true&w=majority