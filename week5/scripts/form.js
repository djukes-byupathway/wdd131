const products = [
    {
        id: "fc-1888",
        name: "flux capacitor",
        averagerating: 4.5
    },
    {
        id: "fc-2050",
        name: "power laces",
        averagerating: 4.7
    },
    {
        id: "fs-1987",
        name: "time circuits",
        averagerating: 3.5
    },
    {
        id: "ac-2000",
        name: "low voltage reactor",
        averagerating: 3.9
    },
    {
        id: "jj-1969",
        name: "warp equalizer",
        averagerating: 5.0
    }
];

//call to function to add options to select
addProductsToSelect(products);
//localStorage.setItem('username', 'JohnDoe');

function addProductsToSelect(products) {
    const selectProduct = document.getElementById("product");
    for (let i = 0; i < products.length; i++) {
        //read each row into a variable
        var newProduct = products[i]
        var newOption = document.createElement("option");
        // value = id 
        newOption.value = newProduct.id;
        // text = name 
        newOption.text = newProduct.name;
        selectProduct.add(newOption);

    }
};

