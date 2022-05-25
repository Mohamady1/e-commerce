import React, { useState, useEffect } from "react";
import { MdOutlineLocalGroceryStore as Cart } from "react-icons/md";

export default function Nav() {
  const [navbg, setNavbg] = useState(false);

  useEffect(() => {
    document.addEventListener("scroll", () => {
      if (window.scrollY > 200) {
        setNavbg(true);
      } else {
        setNavbg(false);
      }
    });
  }, []);

  return (
    <div>
      <div className={navbg ? "navactive" : "navlink"}>
        <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
          <img
            style={{ height: "45px", width: "45px" }}
            src="https://i.ibb.co/Qp1SXBw/commerce.png"
            alt=""
          />
          <h1 className="title">
            <a href="/">My E-Commerce</a>
          </h1>
        </div>
        <div
          style={{
            display: "flex",
            gap: "15px",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Cart size="30" color="white" />
        </div>
      </div>
    </div>
  );
}
