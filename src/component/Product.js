import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Nav from "./Nav";
import Background from "./Background";
import { RiStarSFill } from "react-icons/ri";

function Product() {
  const { id } = useParams();
  const [product, setProduct] = useState([]);

  useEffect(() => {
    const productFetch = async () => {
      const req = await fetch(`https://fakestoreapi.com/products/${id}`);
      const res = await req.json();
      setProduct(res);
    };

    productFetch();
  }, [id]);

  return (
    <div>
      <Nav />
      <Background src="https://assets.vogue.com/photos/60ac6f51c0c9322441933170/16:9/w_1280,c_limit/0316-VO-VIEW09-01%20social.jpeg" />
      <div style={{ marginTop: "30px" }}>
        <h1 style={{ marginBottom: "20px" }}>{product.category}</h1>

        <div
          style={{
            display: "flex",
            justifyContent: "space-around",
            alignItems: "center",
            flexWrap: "wrap",
            gap: "20px",
          }}
        >
          <img
            style={{
              width: "260px",
              height: "260px",
            }}
            src={product.image}
            alt=""
          />
          <h3
            style={{
              width: "545px",
              background: "rgba(0,0,0,0.070)",
              borderRadius: "20px",
              padding: "30px",
            }}
          >
            {product.description}
          </h3>
        </div>
        <div
          style={{
            margin: "20px",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <div
            style={{ display: "flex", flexDirection: "column", gap: "20px" }}
          >
            <h3>Name: {product.title}</h3>
            <h3>Price: {product.price}$</h3>
          </div>
          <div
            style={{
              gap: "10px",
              display: "flex",
              alignItems: "center",
            }}
          >
            <h1>{product.rating && product.rating.rate}</h1>
            <RiStarSFill size="30" color="rgb(255, 196, 0)" />
          </div>
        </div>
        <div style={{ display: "flex", justifyContent: "center" }}>
          <button
            onClick={() => alert("Added to the Cart")}
            style={{
              width: "165px",
              height: "56px",
              background: "transparent",
              borderRadius: "20px",
              fontSize: "20px",
              cursor: "pointer",
            }}
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
}

export default Product;
