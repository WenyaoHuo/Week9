function deleteProduct(productCollection){
    productCollection.deleteOne({ id: 2 }, function(err, result) {
        if (err) throw err;
        console.log("Deleted product");
    });
}

module.exports = {
    deleteProduct
};