import React, { useState, useEffect } from "react";
import Background from "./Background";
import Loading from "./Loading";
import Nav from "./Nav";
import { Link } from "react-router-dom";

function Categories() {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    const fetchCategories = async () => {
      const req = await fetch("https://fakestoreapi.com/products/categories");
      const res = await req.json();
      setCategories(res);
    };
    fetchCategories();
  }, []);

  return (
    <div>
      <Nav />
      <Background src="https://www.jdplc.com/sites/jd-sportsfashion-plc/files/styles/desktop/public/Sport%20Fashion%201.jpg?itok=FyMvcsa4" />
      <h1
        style={{
          borderBottom: "2px solid gray",
          margin: "10px",
          textAlign: "center",
        }}
      >
        Categories
      </h1>
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
          alignItems: "center",
          gap: "15px",
        }}
      >
        {categories.length !== 0 ? (
          categories.map((c) => (
            <Link key={c} to={`/category/${c}`}>
              <div
                style={{
                  border: "2px solid gray",
                  width: "400px",
                  height: "500px",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  overflow: "hidden",
                  position: "relative",
                }}
              >
                <h1
                  className="h1-g"
                  style={{
                    position: "absolute",
                    top: "10px",
                    fontFamily: "Cursive",
                    fontWeight: "normal",
                  }}
                >
                  {c}
                </h1>

                <img
                  className="c-image"
                  src={
                    c === "electronics"
                      ? "https://images.pexels.com/photos/821652/pexels-photo-821652.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                      : c === "jewelery"
                      ? "https://images.pexels.com/photos/1191536/pexels-photo-1191536.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                      : c === "men's clothing"
                      ? "https://images.pexels.com/photos/9558601/pexels-photo-9558601.jpeg"
                      : "https://images.pexels.com/photos/9558901/pexels-photo-9558901.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                  }
                  alt=""
                />
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

export default Categories;
