const jwt = require('jsonwebtoken');
const user = require('../models/user');
const user= require('../models/user');

const authuser = async(req, res, next) => {
    try{
        const token = req.header('Aithorization').replace('Bearer ', '');
        const decoded = jwt.verify(token, 'appSecret');
        const user = await user.findOne({
            _id: decoded._id,
        });
        if(!user) throw new Error('please authenticate');
        req.token = token;
        req.user = user;
        next();

    } catch(e){
        res.status(401).send({error: e.message})
    }
}

module.exports = authuser;