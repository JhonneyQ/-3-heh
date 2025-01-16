const Blog = require("../model/model");

const getAllData = async (req, res) => {
  try {
    const products = await Blog.find();
    res.status(200).json({ data: products, message: "succesful" });
  } catch (error) {
    res.status(500).send({ message: error.message });
  }
};

const getAllDataById = async (req, res) => {
  const { id } = req.params;
  try {
    const products = await Blog.findById(id);
    res.status(200).json({ data: products, message: "succesful" });
  } catch (error) {
    res.status(500).send({ message: error.message });
  }
};

const deleteData = async (req, res) => {
  const { id } = req.params;
  try {
    const products = await Blog.findByIdAndDelete(id);
    res.status(200).json({ data: products, message: "succesful" });
  } catch (error) {
    res.status(500).send({ message: error.message });
  }
};

const postData = async (req, res) => {
  try {
    const products = Blog({ ...req.body });
    await products.save();
    res.status(200).json({ data: products, message: "succesful" });
  } catch (error) {
    res.status(500).send({ message: error.message });
  }
};


const editData = async (req, res) => {
    const {id} = req.params
    try {
      const products = await Blog.findByIdAndUpdate(id,{ ...req.body },{
        new:true
      });
      res.status(200).json({ data: products, message: "succesful" });
    } catch (error) {
      res.status(500).send({ message: error.message });
    }
  };


module.exports = {
    getAllData,
    getAllDataById,
    deleteData,
    postData,
    editData
} 