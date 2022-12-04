const mongoose = require('mongoose');

const productSchema = mongoose.Schema({
    title: {
        type: String,
        required: [true, 'you must provide product title'],
        trim:true,
        maxLength:50,
    },
    price: {
        type: Number,
        required: [true, 'you must provide product price'],
    },
    country: {
        type: String,
        required: [true, 'you must provide product country'],
        trim: true,
        maxLength:30
    },
    description: {
        type: String,
        default: null
    }
})

module.exports = mongoose.model('product',productSchema);