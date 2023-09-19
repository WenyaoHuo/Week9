const { MongoClient } = require('mongodb');
const url = 'mongodb://127.0.0.1:27017';
const dbName = 'myWeek9db';

MongoClient.connect(url, function(err, client) {
    if(err) {return console.log(err)}

    const db = client.db(dbName);
    const productCollection = db.collection('products');
    console.log('Connected to MongoDB successfully!');

    // add products
    const { addProducts } = require('./add.js');
    addProducts(productCollection,function(err, result){
        if (err) {
            console.error("Error:", err);
            return;
        }
        console.log("Products added successfully.");
    });


    //read products
    // const { readProducts } = require('./read.js');
    // readProducts(productCollection,function(err, result){
    //     if (err) {
    //         console.error("Error:", err);
    //         return;
    //     }
    //     console.log("Products read successfully.");
    // });

    //update product
    // const { updateProduct } = require('./update.js');
    // updateProduct(productCollection,function(err, result){
    //     if (err) {
    //         console.error("Error:", err);
    //         return;
    //     }
    //     console.log("Products updated successfully.");
    // });

    //delete product
    // const { deleteProduct } = require('./remove.js');
    // deleteProduct(productCollection,function(err, result){
    //     if (err) {
    //         console.error("Error:", err);
    //         return;
    //     }
    //     console.log("Products deleted successfully.");
    // });

});

