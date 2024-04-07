import { Banner } from "@/components";
import CategoryList from "@/components/CategoryList";
import ProductList from "@/components/ProductList";
import { Option, Dot, Viewlist } from "@/components/icons";
import { useState } from "react";
const ShopPage = () => {
 const [categoryId, setCategoryId] = useState("");
  const handleCategory = (category: string) => {
    setCategoryId(category);
  };

  return (
    <>
      <Banner />
      <section className="action-bar">
        <div className="container">
          <div className="action-bar_inner">
            <div className="action-bar_inner_left">
              <div className="action-bar_inner_left_filter">
                <div>
                  <a href="">
                    <img src={Option} alt="" />
                  </a>
                </div>
                <a href="" className="text-decoration-none text-black">
                  <span>Filter</span>
                </a>
              </div>
              <div className="action-bar_inner_left_dot">
                <a href="">
                  <img src={Dot} alt="" />
                </a>
              </div>
              <div className="action-bar_inner_left_viewlist">
                <a href="">
                  <img src={Viewlist} alt="" />
                </a>
              </div>
              <div className="action-bar_inner_left_showing">
                <span>Showing 1-16 of 32 results</span>
              </div>
            </div>
            <div className="action-bar_inner_right">
              <div className="action-bar_inner_right_action">
                <span>Show</span>
                <span className="action-bar_inner_right_box">16</span>
              </div>
              <CategoryList categoryFn ={handleCategory} /> 
            </div>
          </div>
        </div>
      </section>
      <section className="products">
        <div className="container">
          <div className="product_inner">
            <ProductList categoryId = { categoryId } action= "category" />
          </div>
          <div className="product_action">
            <button className="product_action_active">1</button>
            <button className="product_action_btn">2</button>
            <button className="product_action_btn">3</button>
            <button className="product_action_btn">Next</button>
          </div>
        </div>
      </section>
    </>
  );
};

export default ShopPage;
