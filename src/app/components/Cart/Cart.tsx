// import { useEffect, useState } from "react";
// import styles from "./Cart.module.css";
// function Cart() {
//   const [items, setItems] = useState({});
//   const [empty, setEmpty] = useState(true);
//   useEffect(() => {
//     if (empty) setEmpty(false);
//     else setEmpty(true);
//   }, [items, empty]);
//   return (
//     <>
//       <div className={styles.cart}>
//         <div className={styles.title}>Cart</div>
//         {empty && <p>Your cart is empty</p>}
//         {!empty && <p>cart is not empty</p>}
//       </div>
//     </>
//   );
// }
// export default Cart;
import { useEffect, useRef, useState } from "react";
import styles from "./Cart.module.css";
import { item } from "@/app/compiler/types";
import Image from "next/image";
import image from "../../../../images/product1-images/image-product-1-thumbnail.jpg";
import { DeleteIcon } from "../Icon/DeleteIcon";
// interface Item {
//   [key: string]: productCartItem;
// }

interface CartProps {
  items: item[];
  handleDelete: (index: number) => void;
  isActive: boolean;
}
const Cart: React.FC<CartProps> = ({ items, handleDelete, isActive }) => {
  // const [cartItems, setCartItems] = useState(items);
  // useEffect(() => {
  //   console.log(cartItems);
  // }, [cartItems]);
  // const [isActive, setActive] = useState(false);

  return (
    <div
      className={styles.cart}
      id="cart"
      style={{ display: isActive ? "flex" : "none", zIndex: 0 }}
    >
      <div className={styles.title}>Cart</div>

      {items.length == 0 ? (
        <p>Your cart is empty</p>
      ) : (
        items.map((item, index) => (
          <>
            <div className={styles.item} key={index}>
              <div className={styles.infoItem}>
                <Image
                  className={styles.product}
                  alt="product picture "
                  src={image}
                />
                <div className={styles.text}>
                  Fall Limited Edition Sneakers
                  <br />
                  <p>
                    {item.price + " x " + item.quantity + " = "}
                    <span>{item.price * Number(item.quantity)}</span>
                  </p>
                </div>
              </div>
              <DeleteIcon onClick={() => handleDelete(index)} />
            </div>
          </>
        ))
      )}
    </div>
  );
};

export default Cart;
