import { useQueryProduct } from "@/hooks/useQueryProduct";
import { shareIcon, compareIcon, HeartcardIcon } from "./icons";
import { IProduct } from "@/interfaces/IProduct";
import { Link } from "react-router-dom";
import { convert } from "@/configs/utils";
type ProductListProps = {
  categoryId?: string;
  action: "category" | "product" | "productDetail";
};
const ProductList = ({ categoryId, action }: ProductListProps) => {
  const { data } = useQueryProduct({
    action: action,
    categoryId: categoryId,
  });
  return (
    <>
      <div className="product-list">
        {data?.data.map((product: IProduct) => {
          return (
            <div className="product-item" key={product.id}>
              <div className="product-media">
                <img
                  src={product.mainImage}
                  className="product-media__img object-fill"
                  alt=""
                  width={285}
                  height={301}
                />
                <span className="product-media__label">{product.discount}</span>
              </div>
              <div className="product-content">
                <h3 className="product__name">
                  {product.name}
                </h3>
                <a className="product__category" href="">
                  Stylish cafe chair
                </a>
                <div className="product-price">
                  <span className="product-price__new">{convert.format(product.price)}</span>
                  <span className="product-price__old">3.500.000đ</span>
                </div>
              </div>
              <div className="product-actions">
                <a href="cart.html">
                  <button className="product-actions__addtocart">
                    Add To Cart
                  </button>
                </a>
                <Link
                  to={`/products/${product.id}`}
                  className="product-actions__viewdetail text-decoration-none"
                >
                  View Detail
                </Link>
                <ul className="product-actions__more">
                  <li>
                    <a href="">
                      <img src={shareIcon} alt="" />
                      Share
                    </a>
                  </li>
                  <li>
                    <a href="">
                      <img src={compareIcon} alt="" />
                      Compare
                    </a>
                  </li>
                  <li>
                    <a href="">
                      <img src={HeartcardIcon} alt="" />
                      Like
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default ProductList;
