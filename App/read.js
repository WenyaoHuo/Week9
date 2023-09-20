function readProducts(productCollection, callback){
    productCollection.find({}).toArray(function(err, result) {
        if (err) return callback(err);
        callback(null, result);
    });
}

module.exports = {
    readProducts
};