const mongoose = require('mongoose');
const { Schema } = mongoose;


const blogSchema = new Schema({
  title: {type: String, required:true}, // String is shorthand for {type: String}
  description: {type:String, required:true},
  price: {type:Number, required:true},
  
});

const Blog = mongoose.model('Blog', blogSchema);

module.exports = Blog