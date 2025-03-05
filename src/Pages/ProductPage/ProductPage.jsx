import { useParams, useNavigate } from "react-router-dom";
import "./ProductPage.css";
import Loader from "../../Components/Loader/Loader";
import { useContext, useEffect, useState } from "react";
import getParticularProductById from "../../utils/getProductByPartiCularUrl";
import Button from "../../Components/Button/Button";
import quantityContext from "../../config/quantity";
import CartContext from "../../config/CartContext.js";
import productContext from "../../config/productDetails.js";
import isLoginContext from "../../config/isLogin.js";

function ProductPage() {
    const { id } = useParams();
    const navigate = useNavigate();
    const [product, setProduct] = useState(null);
    const { quantity, setQuantity } = useContext(quantityContext);
    const { cart, setCart } = useContext(CartContext);
    const { isLogin } = useContext(isLoginContext);
    const [isLoading, setIsLoading] = useState(true);
    const [message, setMessage] = useState(""); // State for user messages

    useEffect(() => {
        const fetchProduct = async () => {
            setIsLoading(true);
            const productData = await getParticularProductById(id);
            setProduct(productData);
            setIsLoading(false);
        };
        fetchProduct();
    }, [id]);

    useEffect(() => {
        localStorage.setItem("cart", JSON.stringify(cart)); // Persist cart
    }, [cart]);

    const handleQuantityChange = (event) => {
        let value = Number(event.target.value);
        const maxQuantity = product?.rating?.count ?? 10;

        if (value < 1) value = 1;
        if (value > maxQuantity) value = maxQuantity;

        setQuantity(value);
    };

    const addToCart = () => {
        if (!product) return;
        if (!isLogin) {
            alert("Please login first!");
            return;
        }

        // Check if the product already exists in cart
        const existingItem = cart.find((item) => item.id === product.id);
        let updatedCart;
        if (existingItem) {
            updatedCart = cart.map((item) =>
                item.id === product.id ? { ...item, quantity: item.quantity + quantity } : item
            );
        } else {
            updatedCart = [...cart, { ...product, quantity }];
        }

        setCart(updatedCart);
        setMessage(`${product.title} added to cart!`);
        navigate("/cart")
        setTimeout(() => setMessage(""), 3000); // Auto-clear message    
    };

    return (
        <>
            {isLoading ? (
                <div className="loader-position">
                    <Loader />
                </div>
            ) : product ? (
                <div className="product-page">
                    {message && alert(`${product.title} added to cart`)} {/* Message Display */}
                    <div className="left-part">
                        <img src={product.image} alt={product.title} />
                        <Button text={"Add To Cart"} width={"50%"} padding={"10px"} onClick={addToCart} borderRadius={"40px"} bgColor={"orange"} />
                        <Button text={"Buy Now"} width={"50%"} padding={"10px"} onClick={() => navigate("/checkout")} borderRadius={"40px"} bgColor={"pink"} />
                    </div>
                    <div className="right-part">
                        <h1>{product.title}</h1>
                        <div className="chips">
                            <Button text={`Rating: ${product.rating.rate}`} width={"20%"} padding={"1px"} borderRadius={"40px"} bgColor={"orange"} />
                            <div>
                                <label htmlFor="quantity">Quantity:</label>
                                <input
                                    type="number"
                                    id="quantity"
                                    min={1}
                                    max={product?.rating?.count ?? 10}
                                    value={quantity}
                                    onChange={handleQuantityChange}
                                />
                            </div>
                        </div>
                        <hr />
                        <div className="price-area">
                            <Button text={`Price: $${product.price}`} width={"30%"} padding={"10px"} borderRadius={"40px"} bgColor={"pink"} />
                        </div>
                    </div>
                </div>
            ) : (
                <p>Product not found.</p>
            )}
        </>
    );
}

export default ProductPage;
