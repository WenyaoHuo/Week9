const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(bodyParser.json());


const { MongoClient } = require('mongodb');
const ObjectId = require('mongodb').ObjectId;

const url = 'mongodb://127.0.0.1:27017';
const dbName = 'myWeek9db';


const { addProducts } = require('../App/add.js');
const { readProducts } = require('../App/read.js');
const { deleteProduct } = require('../App/remove.js');
const { updateProduct } = require('../App/update.js');



MongoClient.connect(url, function(err, client) {
    if(err) {return console.log(err)}
    console.log('Connected to MongoDB successfully!');

    const db = client.db(dbName);
    const productCollection = db.collection('products');

    app.listen(3000, () => {
        console.log('Server is running on port 3000');
    });

    //Routes

    // app.post('/addProduct', (req, res) => {
    //     addProducts(productCollection, err => {
    //         if (err) return res.status(500).send({ error: 'Failed to add products.' });
    //         res.send({ message: 'Products added successfully!' });
    //     });
    // });

    // app.get('/products', (req, res) => {
    //     readProducts(productCollection, (err, data) => {
    //         if (err) return res.status(500).send({ error: 'Failed to fetch products.' });
    //         res.send(data);
    //     });
    // });

    // app.post('/updateProduct', (req, res) => {
    //     updateProduct(productCollection, (err, result) => {
    //         if (err) return res.status(500).send({ error: 'Failed to update product.' });
    //         res.send({ message: 'Product updated successfully!' });
    //     });
    // });

    // app.post('/deleteProduct', (req, res) => {
    //     deleteProduct(productCollection, (err, result)=> {
    //         if (err) return res.status(500).send({ error: 'Failed to delete product.' });
    //         res.send({ message: 'Product deleted successfully!' });
    //     });
    // });

    app.post('/products', (req, res) => {
        const newProduct = req.body;
        console.log("Received product(s):", newProduct);
        addProducts(productCollection, newProduct, (err, result) => {
            if (err) return res.status(500).send(err);
            res.json(result);
        });
    });
    
    app.get('/products', (req, res) => {
        readProducts(productCollection, (err, products) => {
            if (err) return res.status(500).send(err);
            res.json(products);
        });
    });
    
    app.delete('/products/:id', (req, res) => {
        const { id } = req.params;
        deleteProduct(productCollection, ObjectId(id), (err, result) => {
            if (err) return res.status(500).send(err);
            res.json(result);
        });
    });
    
    app.put('/products/:id', (req, res) => {
        const { id } = req.params;
        const updatedProduct = req.body;
        updateProduct(productCollection, ObjectId(id), updatedProduct, (err, result) => {
            if (err) return res.status(500).send(err);
            res.json(result);
        });
    });

});



