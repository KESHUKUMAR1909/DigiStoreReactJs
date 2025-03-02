import { useParams } from "react-router-dom";
import "./ProductPage.css";
import Loader from "../../Components/Loader/Loader";
import { useEffect, useState } from "react";
import getParticularProductById from "../../utils/getProductByPartiCularUrl";
import Button from "../../Components/Button/Button"

function ProductPage() {
    const { id } = useParams();
    const [product, setProduct] = useState(null);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const fetchProduct = async () => {
            setIsLoading(true);
            const productData = await getParticularProductById(id);
            setProduct(productData);
            setIsLoading(false);
        };
        fetchProduct();
    }, [id]);

    return (
        <>
            {isLoading ? (
                <div className="loader-position">

                    <Loader />
                </div>


            ) : product ? (
                <div className="product-page">
                    <div className="left-part">
                        <img src={product.image} />
                        <Button text={"Add To Cart"} width={"50%"} padding={"10px"} onClick={() => console.log("OnClick CLicked")} borderRadius={"40px"} bgColor={"orange"} />
                        <Button text={"Buy Now"} width={"50%"} padding={"10px"} onClick={() => console.log("OnClick CLicked")} borderRadius={"40px"} bgColor={"pink"} />
                    </div>
                    <div className="right-part">
                        <h1>{product.title}</h1>
                        <div className="chips">
                            <Button text={`rating:${product.rating.rate}`} width={"20%"} padding={"1px"} onClick={() => console.log("OnClick CLicked")} borderRadius={"40px"} bgColor={"orange"} />
                            <div>
                                <label htmlFor="quantity">Quantity:</label>
                                <input
                                    type="number"
                                    id="quantity"
                                    min={0}
                                    placeholder="10"
                                    max={product?.rating?.count ?? 10}
                                />
                            </div>
                        </div>
                        <hr />
                        <div className="price-area">
                            <Button text={` Price :$${product.price}`} width={"30%"} padding={"10px"} onClick={() => console.log("OnClick CLicked")} borderRadius={"40px"} bgColor={"pink"} />
                        </div>
                        <hr />
                        <h2>About This Item</h2>
                        <h3 style={{ fontWeight: "lighter" }}>{product.description}</h3>
                        <hr/>
                        <h3>Available Offers</h3>
                        <ul>
                            <li>💳 <strong>Bank Offer:</strong> 5% Unlimited Cashback on Flipkart Axis Bank Credit Card</li>
                            <li>💳 <strong>Bank Offer:</strong> 5% off up to ₹750 on IDFC FIRST Power Women Platinum and Signature Debit Cards. Min Txn Value: ₹5000 </li>
                            <li>💳 <strong>Bank Offer:</strong> ₹1000 Off On All Banks Credit Card Non EMI Transactions. </li>
                            <li>🔥 <strong>Special Price:</strong> Get extra ₹1000 off (price inclusive of cashback/coupon)</li>
                        </ul>



                    </div>
                </div>
            ) : (
                <p>Product not found.</p>
            )}
        </>
    );
}

export default ProductPage;
