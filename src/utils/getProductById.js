function findProductById(productDetails, id) {
    if (productDetails.length !== 0) {
        return productDetails.find(product => product.id === Number(id)); // Convert id to number
    }
    return null; // Return null if no product is found or the list is empty
}
export default findProductById;
