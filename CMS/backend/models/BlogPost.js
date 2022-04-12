const mongoose = require('mongoose');
const dateOptions = {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric'
}

const BlogPostschema = new mongoose.Schema({
    Creator: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    title: {
        type: 'string',
        required: true
    },
    image: {
        type: 'string',
        required: true
    },
    category: {
        type: 'string',
        default: 'others'
    },
    created_at: {
        type: 'string',
        default: new Date().toLocaleDateString('en-us', )
    }
})

const BlogPost = mongoose.model('BlogPost', BlogPostschema);

module.exports = BlogPost;