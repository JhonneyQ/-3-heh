const mongoose = require('mongoose');
const { Schema } = mongoose;

const blogSchema = new Schema({
  description: {type:String , required:true}, // String is shorthand for {type: String}
  price:  {type:Number , required:true},
  category: {type:String, required:true }
 
});


const Blog = mongoose.model('Quiz', blogSchema);


module.exports = Blog