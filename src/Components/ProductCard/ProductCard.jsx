import { Link } from "react-router-dom";
import Button from "../Button/Button";
import "./ProductCard.css"

function ProductCard({ image, title, price, id, description , ratings}) {
    return (

        <div className="product-card">
            <img src={image} alt={title} />
            <div className="about">
                <h3>{title}</h3>
                <p>{description}</p>
            </div>

            {/* Keeping Button Inside <p> */}
            <div className="rating-price">
            <p>
                Price:
                <Button
                    text={price}
                    onClick={() => console.log("Button Clicked")}
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
                    text={price}
                    onClick={() => console.log("Button Clicked")}
                    bgColor="pink"
                    padding="5px"
                    width="50px"
                    height="25px"
                    borderRadius="5px"
                /> 
            </p>
            </div>
        </div>
    );
}

export default ProductCard;
