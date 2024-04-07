import ProductList from "@/components/ProductList";
import {
  ArrownavIcon,
  starIcon,
  star_halfIcon,
  fbIcon,
  akarIcon,
  twiconIcon,
  Desimg1,
  Desimg2,
} from "@/components/icons";
import { useQueryProduct } from "@/hooks/useQueryProduct";
import {  useNavigate, useParams } from "react-router-dom";
import ImageSwiper from "./ImageSwiper";
import { useMutationCart } from "@/hooks/useMutaionCart";
import { ICart } from "@/interfaces/ICart";
import { getUserId } from "@/hooks/useAuth";

const Detail_Product = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { data } = useQueryProduct({ action: "productDetail", id });
  const { mutate } = useMutationCart({ action: "AddCart" });
  console.log(
    "🚀 ~ file: Detail_Product.tsx ~ line 10 ~ Detail_Product ~ data",
    data
  );

  if (!data) {
    return null;
  }

  const mainImage = data?.data.mainImage;
  const additionalImages = data?.data.additionalImages.map(
    (image: { [key: string]: string }) => Object.values(image)[0]
  );
  const userId = getUserId();
  console.log("🚀 ~ userId:", userId);

  const hadleCartAdd = () => {
    const newItem = {
      productId: data?.data.id,
      quantity: 1,
      name: data?.data.name,
      mainImage: data?.data.mainImage,
      price: data?.data.price,
    };
    console.log("====================================");
    console.log(newItem);
    console.log("====================================");
    const cart: ICart = {
      userId: userId,
      items: [newItem],
    };

    mutate(cart);
    navigate("/cart");
    console.log("🚀 ~ hadleCartAdd ~ cart:", cart);
  };

  return (
    <>
      <section className="action-bar">
        <div className="container">
          <div className="action-bar_inner">
            <div className="action-bar_inner_left">
              <div className="action-bar_inner_left_filter">
                <a href="index.html">
                  <span>Home</span>
                </a>
                <div>
                  <a href="">
                    <img src={ArrownavIcon} alt="" />
                  </a>
                </div>
              </div>
              <div className="action-bar_inner_left_filter">
                <a href="shop.html">
                  <span>Shop</span>
                </a>
                <div>
                  <a href="">
                    <img src={ArrownavIcon} alt="" />
                  </a>
                </div>
              </div>
              <div className="action-bar_inner_left_showing">
                <span>Asgaard sofa</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="detail">
        <div className="container">
          <div className="detail_inner">
            <div className="detail_media">
              <div className="detail_media_slide">
                <div>
                  <img
                    src={data?.data.additionalImages[0].image1}
                    alt=""
                    width={100}
                    height={100}
                  />
                </div>
                <div>
                  <img
                    src={data?.data.additionalImages[1].image2}
                    alt=""
                    width={100}
                    height={100}
                  />
                </div>
                <div>
                  <img
                    src={data?.data.additionalImages[2].image3}
                    alt=""
                    width={100}
                    height={100}
                  />
                </div>
                <div>
                  <img
                    src={data?.data.additionalImages[3].image4}
                    alt=""
                    width={100}
                    height={100}
                  />
                </div>
              </div>
              <div className="detail_media_thumbnail">
                <div className="detail_media_thumbnail__bg">
                  <ImageSwiper
                    mainImage={mainImage}
                    additionalImages={additionalImages}
                  />
                </div>
              </div>
            </div>
            <div className="detail_content">
              <div className="detail_content">
                <h2>{data?.data.name}</h2>
                <span>{data?.data.price} đ</span>
                <div className="detail_content__star">
                  <div className="star_fill">
                    <img src={starIcon} alt="" />
                    <img src={starIcon} alt="" />
                    <img src={starIcon} alt="" />
                    <img src={starIcon} alt="" />
                    <img src={star_halfIcon} alt="" />
                  </div>
                  <div className="detail_content__star__view">
                    <span>5 Customer Review</span>
                  </div>
                </div>
                <p>{data?.data.description}</p>
                <div className="detail_content__size">
                  <span>Size</span>
                  <div className="detail_content__size__btn">
                    <button>L</button>
                    <button>XL</button>
                    <button>XS</button>
                  </div>
                </div>
                <div className="detail_content__color">
                  <span>Color</span>
                  <div className="detail_content__color__btn">
                    <button className="violet" />
                    <button className="black" />
                    <button className="brown" />
                  </div>
                </div>
                <div className="detail_content_action">
                  <div className="detail_content_action__number">
                    <span>-</span>
                    <span>1</span>
                    <span>+</span>
                  </div>
                  <div className="detail_content_action__addcart">
                    <a>
                      <button onClick={hadleCartAdd}>Thêm vào giỏ hàng</button>
                    </a>
                    <button>+ Compare</button>
                  </div>
                </div>
                <div className="handle" />
                <div className="detail_content_more">
                  <div className="detail_content_more_box">
                    <div className="name_more">
                      <span>SKU</span>
                    </div>
                    <span className="detail_content_more__dot">:</span>
                    <span>SS001</span>
                  </div>
                  <div className="detail_content_more_box">
                    <div className="name_more">
                      <span>Category</span>
                    </div>
                    <span className="detail_content_more__dot">:</span>
                    <span>Sofas</span>
                  </div>
                  <div className="detail_content_more_box">
                    <div className="name_more">
                      <span>Tags</span>
                    </div>
                    <span className="detail_content_more__dot">:</span>
                    <span>Sofa, Chair, Home, Shop</span>
                  </div>
                  <div className="detail_content_more_box">
                    <div className="name_more">
                      <span>Share</span>
                    </div>
                    <span className="detail_content_more__dot">:</span>
                    <span className="detail_content_more__share">
                      <img src={fbIcon} alt="" />
                      <img src={akarIcon} alt="" />
                      <img src={twiconIcon} alt="" />
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="description">
        <div className="container">
          <div className="description_inner">
            <div className="description_title">
              <h2 className="actived">Description</h2>
              <h2>Additional Information</h2>
              <h2>Reviews [5]</h2>
            </div>
            <div className="description_content">
              <p>
                Embodying the raw, wayward spirit of rock ‘n’ roll, the Kilburn
                portable active stereo speaker takes the unmistakable look and
                sound of Marshall, unplugs the chords, and takes the show on the
                road.
              </p>
              <p>
                Weighing in under 7 pounds, the Kilburn is a lightweight piece
                of vintage styled engineering. Setting the bar as one of the
                loudest speakers in its class, the Kilburn is a compact,
                stout-hearted hero with a well-balanced audio which boasts a
                clear midrange and extended highs for a sound that is both
                articulate and pronounced. The analogue knobs allow you to fine
                tune the controls to your personal preferences while the
                guitar-influenced leather strap enables easy and stylish travel.
              </p>
            </div>
            <div className="description_media">
              <img src={Desimg1} alt="" />
              <img src={Desimg2} alt="" />
            </div>
          </div>
        </div>
      </section>

      <div className="related">
        <div className="container">
          <div className="related_title">
            <span>Related Products</span>
          </div>
          <div className="related_products">
            <ProductList action="category" categoryId={data?.data.categoryId} />
          </div>
          <div className="related_action">
            <button>Show More</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Detail_Product;
