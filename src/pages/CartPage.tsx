import { Banner } from "@/components";
import { useMutationUpdateCartItem } from "@/hooks/useMutationUpdateCartItem";
import useQueryCart from "@/hooks/useQueryCart";
import { ICartItem } from "@/interfaces/ICartItems";
import { Removve } from "../components/icons";
import { useEffect, useState } from "react";



const CartPage = () => {
  const { data } = useQueryCart();
  const { mutate } = useMutationUpdateCartItem();
  // const { mutate : Delete } = useMutationCart({ action: "DeleteCart" });
  const [cart, setCart] = useState(data?.[0]);

  const updateQuantity = (productID : string, newQuantity : number) => {
    
      const item = cart.items.find((item: { productId: string; }) => {
        return item.productId === productID;
      });
      const cartNew = cart.items.filter((item: { productId: string; }) => {
        return item.productId !== productID;
      });
      if (item) {
        if(newQuantity > 0) {
          cartNew.push({ ...item, quantity: newQuantity })
          mutate({ ...cart, items: cartNew });
        }
      }
    
  };
 
  useEffect(() => {
    setCart(data?.[0]);
  }, [data]);

  return (
    <>
      <Banner />
      <section className="cart">
        <div className="container">
          <div className="cart_inner">
            <div className="cart_info">
              <table className="cart_table">
                <thead>
                  <tr className="cart_bg_nav">
                    <th className="theade_name">Product</th>
                    <th className="thead_price">Price</th>
                    <th className="thead_quantity">Quantity</th>
                    <th className="theade_subtotal">Subtotal</th>
                    <th />
                  </tr>
                </thead>
                <tbody>
                  {data?.[0].items.map((items: ICartItem) => (
                    <tr className="cart_body">
                      <td className="tbody_name">
                        <img src={items.mainImage} alt="" width={100} />
                        <span>{items.name}</span>
                      </td>
                      <td className="tbody_price">
                        <span>{items.price}</span>
                      </td>
                      <td className="tbody_quantity">
                      <button
                          onClick={() =>
                            updateQuantity(items.productId, items.quantity + 1)
                          }
                          className="btn_plus"
                        >
                          +
                        </button>
                        <span className="text-3xl">{items.quantity}</span>
                        <button
                          onClick={() =>
                            updateQuantity(items.productId, items.quantity - 1)
                          }
                          className="btn_minus"
                        >
                          -
                        </button>
                      </td>
                      <td className="tbody_subtotal">{items.price * items.quantity}đ</td>
                      <td className="tbody_action">
                      <img src={Removve} alt=""  />
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <div className="cart_action">
              <div className="cart_action_inner">
                <h4>Cart Totals</h4>
                <div className="cart_action_subtotal">
                  <span>Subtotal</span>
                  {data?.[0].items?.reduce((total: number, item: ICartItem) => total + item.price * item.quantity, 0)}đ
                </div>
                <div className="cart_action_total">
                  <span>Total</span>
                  <span className="price"> {data?.[0].items?.reduce((total: number, item: ICartItem) => total + item.price * item.quantity, 0)}đ</span>
                </div>
                <div className="cart_action_btn">
                  <a href="./checkout.html">Check Out</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default CartPage;
