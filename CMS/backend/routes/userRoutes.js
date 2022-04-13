const router = require('express').Router();
const authuser = require('../middleware/auth');
const user = require('../models/user');

//user creation
//users/
router.post('/', async(req, res)=>{
    const {email, password} = req.body;

    try{
        const user = await User.create({email, passwprd});
        const token = await user.generateAuthToken();
        res.status(201).json({user, token});
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
        const token = await user.generateAuthToken();
       // console.log(user)
        res.json({user, token});

    }catch(e){
        res.status(400).json(e.message)
    }
})

//logout user

router.delete('/logout', authuser, async(req, res)=>{
    try{
        req.user.tokens = req.user.tokens.filter((tokenObj)=>{
            return tokenObj.token != req.token;
        })
        await req.user.save();
        res.status(200).send()
    } catch(e) {
        res.status(400).json(e.message)
    }
})

module.exports = router;