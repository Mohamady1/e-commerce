import React from "react";
import "../App.css";
import Allproducts from "./Allproducts";
import { Link } from "react-router-dom";
import Nav from "./Nav";
import Background from "./Background";
import { BsSearch } from "react-icons/bs";

function Home({ products }) {
  return (
    <div style={{ position: "relative" }}>
      <Nav />
      <Background src="https://images.pexels.com/photos/821413/pexels-photo-821413.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" />
      <h1
        className="qoute"
        style={{
          position: "absolute",
          top: "310px",
          color: "white",
          left: "10px",
          fontFamily: "Cursive",
        }}
      >
        Spice it for all year with us
      </h1>
      {/* <h1
        className="qoute"
        style={{
          position: "absolute",
          top: "50%",
          left: "40px",
          fontSize: "40px",
          fontFamily: "Cursive",
          width: "550px",
          color: "white",
        }}
      >
        Spice it up for all year with us
      </h1> */}
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          margin: "20px",
          alignItems: "center",
        }}
      >
        <h1> All Products</h1>
        <Link to="/categories">
          <button
            style={{
              fontSize: "20px",
              cursor: "pointer",
              backgroundColor: "transparent",
              padding: "10px",
              borderRadius: "20px",
            }}
          >
            <BsSearch /> Explore Categories
          </button>
        </Link>
      </div>
      <Allproducts products={products} />
    </div>
  );
}

export default Home;
