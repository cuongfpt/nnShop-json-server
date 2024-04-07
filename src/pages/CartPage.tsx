import { Banner } from "@/components";
import { useMutationUpdateCartItem } from "@/hooks/useMutationUpdateCartItem";
import useQueryCart from "@/hooks/useQueryCart";
import { ICartItem } from "@/interfaces/ICartItems";
import { useEffect, useState } from "react";

const CartPage = () => {
  const { data : initialData  } = useQueryCart();
   const [cartItems, setCartItems] = useState<ICartItem[]>([]);
 const { mutate: updateCartItem } = useMutationUpdateCartItem(); // Use the new hook

 useEffect(() => {
    if (initialData?.[0]?.items) {
      setCartItems(initialData[0].items);
    }
 }, [initialData]);

 const incrementQuantity = (index: number) => {
    const updatedItems = [...cartItems];
    const item = updatedItems[index];
    item.quantity += 1;
    setCartItems(updatedItems);
    // Call the mutation function to update the item on the server using productId
    updateCartItem({productId: item.productId, quantity: item.quantity });
 };

 const decrementQuantity = (index: number) => {
    const updatedItems = [...cartItems];
    const item = updatedItems[index];
    if (item.quantity > 1) {
      item.quantity -= 1;
      setCartItems(updatedItems);
      // Call the mutation function to update the item on the server using productId
      updateCartItem({ productId: item.productId, quantity: item.quantity });
    }
 };
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
                  {initialData?.[0].items.map((items: ICartItem, index: number) => (
                    <tr className="cart_body">
                      <td className="tbody_name">
                        <img src={items.mainImage} alt="" width={100} />
                        <span>{items.name}</span>
                      </td>
                      <td className="tbody_price">
                        <span>{items.price}</span>
                      </td>
                      <td className="tbody_quantity">
                        <button onClick={() => decrementQuantity(index)}>-</button>
                        <span className="quantity_table">{items.quantity}</span>
                        <button onClick={() => incrementQuantity(index)}>+</button>
                      </td>
                      <td className="tbody_subtotal">25.000.000đ</td>
                      <td className="tbody_action">
                        <img src="./img/removve.png" alt="" />
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
                  <span className="price">25.000.000đ</span>
                </div>
                <div className="cart_action_total">
                  <span>Total</span>
                  <span className="price">25.000.000đ</span>
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
