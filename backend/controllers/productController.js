const Product = require('./../models/Product');

const getAllProducts = async (req, res) => {
    try {
        const products = await Product.find({})
        res.status(200).json({
            products,   
        })
    }
    catch(err) {
        res.status(500).json({
            msg:err,  
        })
        console.log(err);
    }
}

const getProduct = async (req, res) => {
    try {
        const id = req.params.id;
        if (!id) {
            throw new Error("id doesn't provied")
        }
        const product =  await Product.findOne({_id:id})
        if (!product) {
            throw new Error("product wasn't found")
        }
        res.status(200).json({
            product   
        })
    } catch(err) {
        res.status(500).json({
            msg:err,  
        })
        console.log(err);
    }
}

const createProduct = async (req, res) => {
    try {
        const product = await Product.create(req.body);
        res.status(201).json({
            product,
        })
    } catch(err) {
        res.status(500).json({
            msg:err,  
        })
        console.log(err);
    }
}

const updateProduct = async (req, res) => {
    const id = req.params.id;
    try {
        const product = await Product.findByIdAndUpdate({_id:id},req.body, {
            new: true,
            runValidators: true,
          });
        res.status(200).json({
            product,
        })
    } catch(err) {
        res.status(500).json({
            msg: err
        })
    }
}

const deleteProduct = async (req, res) => {
    try {
        await Product.findByIdAndRemove(req.params.id)
        res.status(200).json({
        });
    } catch(err) {
        res.status(500).json({
            msg:err
        })
    }
}

module.exports = {
    getAllProducts,
    getProduct,
    createProduct,
    updateProduct,
    deleteProduct
}