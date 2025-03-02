import axios from "axios";

const getParticularProductById = async (id) => {
    try {
        const response = await axios.get(`https://fakestoreapi.com/products/${id}`);
        return response.data; // Return the product instead of modifying state inside this function
    } catch (error) {
        console.error("Error fetching product:", error);
        return null; // Return null in case of an error
    }
};

export default getParticularProductById;
