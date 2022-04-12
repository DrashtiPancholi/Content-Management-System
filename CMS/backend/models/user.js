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
    articles: [{type: mongoose.Schema.Types.ObjectId, ref: 'BlogPost'}]
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

UserSchema.method.toJSON = function() {
    const user = this;
    const userObject = user.toObject();
    delete userObject.password;
    delete userObject.tokens;
    delete userObject.articles;
    return userObject;
}

UserSchema.methods.generateAuthToken = async function() {
    const user = this;
    console.log('user is', user)
    const token = jwt.sign({_id: user._id.toString()}, 'appSecret');
    //console.log(token);
    user.tokens = user.tokens.concat({token});
    await user.Save();
    return token;
}

UserSchema.statics.findByCredentials = async function(email, password) {
    const user = await User.findOne({email});
    if(!user) throw new Error('invalid email or password');
    const isMatch = await bcrypt.compare(password, user.password);
    if(!isMatch) throw new Error('invaild email or password');
    //if there is a match
    return user;
}

const User = mongoose.model('user', UserSchema);
module.exports = User;