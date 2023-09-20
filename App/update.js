function updateProduct(productCollection, id, updatedData, callback){
    productCollection.updateOne({_id: id}, { $set: updatedData }, function(err, result) {
        if (err) return callback(err);
        callback(null, result);
    });
}

module.exports = {
    updateProduct
};