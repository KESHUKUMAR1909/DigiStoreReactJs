import { useContext, useEffect } from "react";
import CartContext from "../../config/CartContext.js";
import { useNavigate } from "react-router-dom";
import Button from "../../Components/Button/Button";
import "./CartPage.css";

function CartPage() {
    const { cart, setCart } = useContext(CartContext);
    const navigate = useNavigate();

    // console.log("Cart Data:", JSON.stringify(cart, null, 2));

    // Ensure cart is always an array and filter out invalid items
    const cartItems = Array.isArray(cart) ? cart.filter(item => item && typeof item === "object" && item.id) : [];

    useEffect(() => {
        localStorage.setItem("cart", JSON.stringify(cartItems));
    }, [cartItems]);

    const removeFromCart = (id) => {
        setCart((prevCart) => prevCart.filter((item) => item.id !== id));
    };

    const calculateTotal = () => {
        return cartItems.reduce((total, item) => {
            const price = typeof item.price === "number" ? item.price : 0;
            const quantity = typeof item.quantity === "number" ? item.quantity : 1;
            return total + price * quantity;
        }, 0).toFixed(2);
    };

    return (
        <div className="cart-page">
            <h1>Shopping Cart</h1>
            {cartItems.length === 0 ? (
                <div className="empty-cart">
                    <p>Your cart is empty.</p>
                    <Button text="Shop Now" bgColor="blue" onClick={() => navigate("/")}  width={"20%"} padding={"10px"} borderRadius={"10px"}/>
                </div>
            ) : (
                <div className="cart-items">
                    {cartItems.map((item) => (
                        <div key={item.id} className="cart-item">
                            {item.image && <img src={item.image} alt={item.title || "Product"} />}
                            <div className="item-details">
                                <h2>{item.title || "No Title"}</h2>
                                <p>Price: ${typeof item.price === "number" ? item.price : 0}</p>
                                <p>Quantity: {typeof item.quantity === "number" ? item.quantity : 1}</p>
                                <Button text="Remove" bgColor="red" onClick={() => removeFromCart(item.id)} />
                            </div>
                        </div>
                    ))}
                    <div className="cart-summary">
                        <h2>Total: ${calculateTotal()}</h2>
                        <Button text="Proceed to Checkout" bgColor="green" onClick={() => navigate("/checkout")} width={"20%"} padding={"10px"} borderRadius={"10px"}/>
                    </div>
                </div>
            )}
        </div>
    );
}

export default CartPage;
