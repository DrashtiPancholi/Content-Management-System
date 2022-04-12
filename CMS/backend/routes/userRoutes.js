const router = require('express').Router();
const user = require('../models/user');

//user creation
//users/
router.post('/', async(req, res)=>{
    const {email, password} = req.body;

    try{
        const user = await User.create({email, passwprd});
        await user.generateAuthToken()
        res.status(201).json(user);
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
        const use = await User.findByCredentials(email, password);
        await user.generateAuthToken();
       // console.log(user)
        res.json(user)

    }catch(e){
        res.status(400).json(e.message)
    }
})

module.exports = router;