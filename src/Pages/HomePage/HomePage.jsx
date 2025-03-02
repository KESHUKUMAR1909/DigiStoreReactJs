import { useContext, useEffect, useState } from "react";
import Loader from "../../Components/Loader/Loader";
import ProductCard from "../../Components/ProductCard/ProductCard";
import "./HomePage.css";
import getAllProduct from "../../utils/getAllProducts";
import productContext from "../../config/productDetails";

function HomePage() {
    const { productDetails, setProductDetails } = useContext(productContext);
    const [isLoading, setIsLoading] = useState(false);
    const [visibleProducts, setVisibleProducts] = useState(10);

    function shortTheText(str) {
        return str.length > 20 ? str.slice(0, 20) + "..." : str;
    }

    useEffect(() => {
        if (productDetails.length === 0) {
            const fetchProducts = async () => {
                setIsLoading(true);
                await getAllProduct(setProductDetails, setIsLoading);
            };
            fetchProducts();
        }
    }, []);

    return (
        <div className="home-page">
            {isLoading ? (
                <div className="loader-position">
                    <Loader />
                </div>
            ) : (
                <>
                    {productDetails.slice(0, visibleProducts).map((item) => (
                
                        <ProductCard
                            key={item.id}
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
