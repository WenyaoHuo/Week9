const products = [
    {
        id: 1,
        name: "Product1",
        description: "This is Product 1",
        price: 10.00,
        units: 100
    },
    {
        id: 2,
        name: "Product2",
        description: "This is Product 2",
        price: 12.00,
        units: 120
    },
    {
        id: 3,
        name: "Product3",
        description: "This is Product 3",
        price: 30.00,
        units: 130
    }
];

function addProducts(productCollection){
    productCollection.insertMany(products, function(err, result) {
        if (err) throw err;
        console.log("Inserted products");
    });
}

module.exports = {
    addProducts
};