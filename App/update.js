function updateProduct(productCollection){
    productCollection.updateOne({ id: 1 }, { $set: { name: "Updated Product1" } }, function(err, result) {
        if (err) throw err;
        console.log("Updated product");
    });
}

module.exports = {
    updateProduct
};