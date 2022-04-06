const express = require('express');
const app = express();
const core = require('cors');
require('./connection')

app.use(core());
app.use(express.urlencoded({extend: true}));
app.use(express.json({extend: true}));

app.listen(5000,()=>{
    console.log('server is running')
})