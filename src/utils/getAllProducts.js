import axios from "axios";

const getAllProduct = async (setProductDetails, setIsLoading) => {
    try {
        setIsLoading(true);
        const response = await axios.get("https://fakestoreapi.com/products");
        setProductDetails(response.data); // Store all products
    } catch (error) {
        console.error("Error fetching products:", error);
        setProductDetails([]); // Set an empty array in case of error
    } finally {
        setIsLoading(false); // Ensure loading state resets
    }
};

export default getAllProduct;
