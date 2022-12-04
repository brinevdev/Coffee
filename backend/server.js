const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const server = new express();
const productRouter = require('./routes/productRoute');

 const port = process.env.PORT || 3001;

server.use(express.json());
server.use(cors());
server.use('/api/v1/products',productRouter);


mongoose.connect(`mongodb+srv://darktorgal:qHkaC5qg3TVXCVb@cluster0.mm4jqd5.mongodb.net/coffeeShop?retryWrites=true&w=majority`)
    .then(console.log('connect to db'))
    .then(server.listen(port,'127.0.0.1', () => console.log(`start using port:${port}`)))
    .catch(err => console.log(err));
