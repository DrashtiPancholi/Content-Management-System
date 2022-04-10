const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const UserSchema = new mongoose.Schema({
    email:{
        type: 'String',
        lowercase: true,
        unique: true,
        required: [true, "can't be blank"],
        match: [/\s+@\s+\.\s+/, 'is invlid'],
        index: true
    },
    password: {
        type: 'string',
        required: [true,  "can't be blanck"]
    },
    tokens: [],
    articles: []
})

UserSchema.pre('save', function(next){
    const user = this;
    if(!user.isModified('password')) return next();
    //if user being created, or updated
    bcrypt.genSalt(10, function(er, salt){
        if(err) return next(err);

        bcrypt.hash(user.password, salt,function(err, hash){
            if(err) return next(err);

            user.password = hash;
            next();
        })
    })

})

UserSchema.methods.generateAuthToken = async () => {
    const user = this;
    const token = jwt.sign({_id: user._id.toString()}, 'appSecret');
    console.log(token);
    user.tokens.concat({token});
    await user.Save();
    return;
}

UserSchema.statics.findByCredentials = async(email, password) => {
    const user = await user.findOne({email});
    if(!user) throw new Error('invalid email or password');
    const isMatch = await bcrypt.compare(password, user.password);
    if(!isMatch) throw new Error('invaild email or password');
    //if there is a match
    return user;
}

const user = mongoose.model('user', UserSchema);
module.exports = user;