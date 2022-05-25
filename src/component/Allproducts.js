import React, { useState, useEffect } from "react";
import Loading from "./Loading";
import { Link } from "react-router-dom";

function Allproducts() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const req = await fetch(`https://fakestoreapi.com/products`);
      const res = await req.json();
      setProducts(res);
    };
    fetchData();
  }, []);

  return (
    <div
      style={{
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "center",
        alignItems: "center",
        gap: "35px",
      }}
    >
      {products.length !== 0 ? (
        products.map((s) => (
          <Link key={s.id} to={`/products/${s.id}`}>
            <div
              className="div-shadow"
              style={{
                border: "2px solid gray",
                borderRadius: "20px",
                width: "400px",
                height: "580px",
                display: "flex",
                flexDirection: "column",
                justifyContent: "flex-start",
                alignItems: "center",
                gap: "50px",
                textAlign: "center",
                padding: "10px",
              }}
            >
              <img
                style={{ width: "300px", height: "450px" }}
                src={s.image}
                alt=""
              />
              <h4>{s.title}</h4>
            </div>
          </Link>
        ))
      ) : (
        <Loading />
      )}
    </div>
  );
}

export default Allproducts;
