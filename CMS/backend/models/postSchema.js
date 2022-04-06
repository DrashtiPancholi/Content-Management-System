const { string } = require("joi");
const {Schema, model, Schema} = require("mongoose");

const require = true;
const Schema =  Schema({
    title: { type: String, required},
    description: { type: String, required },
    imageFlieSet: { type:String, required },
    publishedAt: { type: Date, default: Date.now() },
});

model.exports = model("posts", Schema);