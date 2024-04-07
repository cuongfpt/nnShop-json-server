import React from "react";
import ProductList from "./ProductList";

const News = () => {
  return (
    <>
      <section className="news">
        <div className="container">
          <div className="handing">
            <h1 className="handing__title">News</h1>
          </div>
          <div className="body">
            <ProductList  action="product"/>
          </div>
        </div>
      </section>
    </>
  );
};

export default News;
