import React from "react";
import shop1 from "@/img/shop1.png";
import shop2 from "@/img/shop2.png";
import shop3 from "@/img/shop3.png";
import shop4 from "@/img/shop4.png";
const Shop = () => {
  return (
    <>
      <section className="shop">
        <div className="container">
          <div className="handing">
            <h1 className="handing__title">Shop</h1>
          </div>
          <div className="shop-body">
            <div className="shop-product">
              <img src={shop1} alt="" />
              <img src={shop2} alt="" />
              <img src={shop3} alt="" />
              <img src={shop4} alt="" />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Shop;
