const express = require('express');
const app = express();
const core = require('cors');
const userRoutes = require('./routes/userRoutes');
require('./connection')

app.use(core());
app.use(express.urlencoded({extended: true}));
app.use(express.json({extended: true}));
app.use('/users', userRoutes)

app.listen(5000,()=>{
    console.log('server is running')
})