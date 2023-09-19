function readProducts(productCollection){
    productCollection.find({}).toArray(function(err, items) {
        if (err) throw err;
        console.log(items);
    });
}

module.exports = {
    readProducts
};