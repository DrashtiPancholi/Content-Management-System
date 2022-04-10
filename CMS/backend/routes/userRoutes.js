const router = require('express').Router();
const user = require('../models/user');

//user creation
//users/
router.post('/', async(req, res)=>{
    const {email, password} = req.body;

    try{
        const user = await user.create({email, passwprd});
        await user.generateAuthToken()
        res.status(201).send();
    }
     catch(error) {
         let msg;
         if(error.code == 11000){
             msg = 'Email already exisits'
         }
         else{
            msg = error.message;
         }
         res.status(400).json(msg)
    }
})



//login user
router.post('/login',async(req, res)=>{
    const {email, password} = req.body;
    try{
        const use = await user.findByCredentials(email, password);
        await user.generateAuthToken();
        res.json(user)

    }catch(e){
        res.status(400).json(e.message)
    }
})

module.exports = router;