import { Link } from "react-router-dom";
import Button from "../Button/Button";
import "./ProductCard.css";

function ProductCard({ image, title, price, id, description, ratings }) {
    return (
        <Link to={`/products/${id}`} className="product-link"> {/* ✅ Wrapped entire container */}
            <div className="product-card">
                <img src={image} alt={title} />
                <div className="about">
                    <h3>{title}</h3>
                    <p>{description}</p>
                </div>

                <div className="rating-price">
                    <p>
                        Price:
                        <Button
                            text={price}
                            onClick={(e) => {
                                e.preventDefault(); // ✅ Prevent navigation on button click
                                console.log("Price Button Clicked");
                            }}
                            bgColor="pink"
                            padding="5px"
                            width="50px"
                            height="25px"
                            borderRadius="5px"
                        />
                    </p>
                    <p>
                        Ratings:
                        <Button
                            text={ratings}  
                            onClick={(e) => {
                                e.preventDefault(); // ✅ Prevent navigation on button click
                                console.log("Ratings Button Clicked");
                            }}
                            bgColor="pink"
                            padding="5px"
                            width="50px"
                            height="25px"
                            borderRadius="5px"
                        /> 
                    </p>
                </div>
            </div>
        </Link>
    );
}

export default ProductCard;
