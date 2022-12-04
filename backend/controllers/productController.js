const Product = require('./../models/Product');

const getAllProducts = async (req, res) => {
    try {
        const products = await Product.find({})
        res.json({
            msg:'success',
            products,   
        })
    }
    catch(err) {
        res.json({
            msg:err,  
        })
        console.log(err);
    }
}

module.exports = {
    getAllProducts,
}