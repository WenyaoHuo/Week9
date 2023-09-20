function deleteProduct(productCollection, id, callback){
    productCollection.deleteOne({ _id: id }, function(err, result) {
        if (err) return callback(err);
        callback(null, result);
    });
}

module.exports = {
    deleteProduct
};