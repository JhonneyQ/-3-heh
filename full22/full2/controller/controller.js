const Blog = require("../model/model");

const getAllData = async (req, res) => {
  try {
    const prod = await Blog.find();
    res.status(200).json({ data: prod, message: "succesful" });
  } catch (error) {
    res.status(500).send({ message: error.message });
  }
};

const getAllDataById = async (req, res) => {
    const {id} = req.params
  try {
    const prod = await Blog.findById(id);
    res.status(200).json({ data: prod, message: "succesful" });
  } catch (error) {
    res.status(500).send({ message: error.message });
  }
};


const deleteById = async (req, res) => {
    const {id} = req.params
  try {
    const prod = await Blog.findByIdAndDelete(id);
    res.status(200).json({ data: prod, message: "succesful" });
  } catch (error) {
    res.status(500).send({ message: error.message });
  }
};


const postData = async (req, res) => {
  try {
    const prod = Blog({...req.body});
    await prod.save()
    res.status(200).json({ data: prod, message: "succesful" });
  } catch (error) {
    res.status(500).send({ message: error.message });
  }
};


const editDataById = async (req, res) => {
    const {id} = req.params
  try {
    const prod = await Blog.findByIdAndUpdate(id,{...req.body},{
        new:true
    });
    res.status(200).json({ data: prod, message: "succesful" });
  } catch (error) {
    res.status(500).send({ message: error.message });
  }
};


module.exports = {
    getAllData,
    getAllDataById,
    deleteById,
    postData,
    editDataById
}