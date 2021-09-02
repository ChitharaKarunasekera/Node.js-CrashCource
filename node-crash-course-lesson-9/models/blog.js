const mongoose = require('mongoose');
const Schema = mongoose.Schema;//Thing that a model runs around

//Schema that define the structure of document
const blogSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    snippet: {
        type: String,
        required: true
    },
    body: {
        type: String,
        required: true
    }
}, { timestamps: true});

//Model based on the schema
const Blog = mongoose.model('Blog', 'blogSchema');
module.exports = Blog;//Export the models to use it in different places