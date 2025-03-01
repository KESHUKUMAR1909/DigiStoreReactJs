import { useEffect, useState } from "react";
import axios from "axios";
import Loader from "../../Components/Loader/Loader";
import ProductCard from "../../Components/ProductCard/ProductCard";
import "./HomePage.css";

function HomePage() {
    const [productDetails, setProductDetails] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [visibleProducts, setVisibleProducts] = useState(10); // Number of products to show at a time

    const getProduct = async () => {
        try {
            setIsLoading(true);
            const response = await axios.get("https://fakestoreapi.com/products");
            setProductDetails(response.data); // Store all products
            setIsLoading(false);
        } catch (error) {
            console.error("Error fetching products:", error);
        }
    };

    function shortTheText(str) {
        return str.length > 20 ? str.slice(0, 20).concat("...") : str;
    }

    useEffect(() => {
        getProduct();
    }, []);

    return (
        <div className="home-page">
            {isLoading ? (
                <div className="loader-position">
                <Loader />
                </div>
            ) : (
                <>
                    {productDetails.slice(0, visibleProducts).map((item, index) => (
                        <ProductCard
                            key={index}
                            id={item.id}
                            image={item.image}
                            title={shortTheText(item.title)}
                            description={shortTheText(item.description)}
                            price={item.price}
                            ratings={item.rating.rate}
                        />
                    ))}
                </>
            )}
        </div>
    );
}

export default HomePage;
