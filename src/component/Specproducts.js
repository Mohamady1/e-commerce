import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import Background from "./Background";
import Loading from "./Loading";
import Nav from "./Nav";

export default function Specproducts() {
  const { category } = useParams();
  const [spec, setSpec] = useState([]);

  useEffect(() => {
    const specFetch = async () => {
      const req = await fetch(
        `https://fakestoreapi.com/products/category/${category}`
      );
      const res = await req.json();
      setSpec(res);
    };
    specFetch();
  }, [category]);

  return (
    <div>
      <Nav />
      <Background src="https://images.pexels.com/photos/1127000/pexels-photo-1127000.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" />

      <h1
        style={{
          margin: "10px",
          borderBottom: "2px solid gray",
          textAlign: "center",
        }}
      >
        {category}
      </h1>

      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
          alignItems: "center",
          gap: "35px",
          margin: "15px",
        }}
      >
        {spec.length !== 0 ? (
          spec.map((spec) => (
            <Link key={spec.id} to={`/products/${spec.id}`}>
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
                  src={spec.image}
                  alt=""
                />
                <h4>{spec.title}</h4>
              </div>
            </Link>
          ))
        ) : (
          <Loading />
        )}
      </div>
    </div>
  );
}
