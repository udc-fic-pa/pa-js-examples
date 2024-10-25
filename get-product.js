const getProduct = async (productId) => {

    try {

        const response = await fetch(`http://localhost:8080/catalog/products/${productId}`);

        if (response.ok) { // status code is 2xx.
            const product = await response.json();
            console.log(product);
        } else {
            console.log("Status code != 2xx");
        }

    } catch (error) {
        console.log(error);
    }

}

console.log("*** Before getProduct");
getProduct(1);
console.log("*** After getProduct");

