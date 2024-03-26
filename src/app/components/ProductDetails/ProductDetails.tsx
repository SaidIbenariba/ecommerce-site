import styles from "./ProductDetails.module.css";
import Button from "../Button/Button";
import CartIcon from "../Icon/CartIcon";
import { MouseEventHandler, useEffect, useState } from "react";

interface content {
  result: number;
  price: number;
  reduction: number;
  addToCart: MouseEventHandler;
  handleQuantity: MouseEventHandler;
  quantity: number;
  promotion: string;
}

const QuantityButton = (quantity: number, handleClick: MouseEventHandler) => {
  // const [Quantity, setQuantity] = useState(quantity);

  return (
    <>
      <div className={styles.quantityButton}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="12"
          height="4"
          viewBox="0 0 12 4"
          fill="none"
          onClick={handleClick}
        >
          <g clip-path="url(#clip0_38_1408)">
            <path
              d="M11.357 3.332C11.4414 3.33227 11.5251 3.31585 11.6031 3.28369C11.6812 3.25153 11.7522 3.20427 11.8119 3.14461C11.8717 3.08496 11.919 3.01409 11.9513 2.93607C11.9836 2.85806 12.0001 2.77443 12 2.69V0.643003C12.0003 0.558489 11.9838 0.474757 11.9516 0.396626C11.9194 0.318494 11.872 0.247505 11.8123 0.187745C11.7525 0.127984 11.6815 0.0806309 11.6034 0.0484107C11.5252 0.0161904 11.4415 -0.000260978 11.357 3.13019e-06H0.643003C0.558489 -0.000260978 0.474757 0.0161904 0.396626 0.0484107C0.318494 0.0806309 0.247505 0.127984 0.187745 0.187745C0.127984 0.247505 0.0806309 0.318494 0.0484107 0.396626C0.0161904 0.474757 -0.000260978 0.558489 3.13019e-06 0.643003V2.689C3.13019e-06 3.046 0.287003 3.332 0.643003 3.332H11.357Z"
              fill="#FF7E1B"
            />
          </g>
          <defs>
            <clipPath id="clip0_38_1408">
              <rect width="12" height="4" fill="white" />
            </clipPath>
          </defs>
        </svg>
        <div>{quantity}</div>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="12"
          height="4"
          viewBox="0 0 12 12"
          fill="none"
          onClick={handleClick}
          id="plus"
        >
          <g clip-path="url(#clip0_38_1411)">
            <path
              d="M12 7.02301V4.97701C12.0003 4.8925 11.9838 4.80877 11.9516 4.73063C11.9194 4.6525 11.872 4.58151 11.8123 4.52175C11.7525 4.46199 11.6815 4.41464 11.6034 4.38242C11.5253 4.3502 11.4415 4.33375 11.357 4.33401H7.66701V0.643013C7.66728 0.558329 7.65076 0.474433 7.61842 0.39617C7.58607 0.317907 7.53854 0.246829 7.47857 0.187041C7.41859 0.127254 7.34737 0.079943 7.269 0.0478413C7.19064 0.0157396 7.10669 -0.000516362 7.02201 1.25014e-05H4.97701C4.8925 -0.000251607 4.80877 0.0161998 4.73063 0.04842C4.6525 0.0806403 4.58151 0.127993 4.52175 0.187754C4.46199 0.247515 4.41464 0.318503 4.38242 0.396635C4.3502 0.474766 4.33375 0.558499 4.33401 0.643013V4.33301H0.643013C0.558329 4.33275 0.474433 4.34926 0.39617 4.38161C0.317907 4.41395 0.246829 4.46148 0.187041 4.52146C0.127254 4.58143 0.079943 4.65266 0.0478413 4.73102C0.0157396 4.80938 -0.000516362 4.89333 1.25014e-05 4.97801V7.02401C1.25014e-05 7.38001 0.287013 7.66701 0.643013 7.66701H4.33301V11.358C4.33301 11.714 4.62101 12.001 4.97701 12.001H7.02301C7.10753 12.0013 7.19126 11.9848 7.26939 11.9526C7.34752 11.9204 7.41851 11.873 7.47827 11.8133C7.53803 11.7535 7.58538 11.6825 7.6176 11.6044C7.64983 11.5263 7.66628 11.4425 7.66601 11.358V7.66801H11.357C11.4418 7.66828 11.5258 7.65173 11.6041 7.61932C11.6824 7.58692 11.7535 7.53929 11.8133 7.47921C11.8731 7.41914 11.9204 7.34779 11.9525 7.26931C11.9845 7.19083 12.0007 7.10678 12 7.02201V7.02301Z"
              fill="#FF7E1B"
            />
          </g>
          <defs>
            <clipPath id="clip0_38_1411">
              <rect width="12" height="12" fill="white" />
            </clipPath>
          </defs>
        </svg>
      </div>
    </>
  );
};

function ProductDetails({
  quantity,
  handleQuantity,
  result,
  price,
  reduction,
  addToCart,
  promotion,
}: content) {
  //   const [result, setResult] = useState(0);

  //   const result = useMemo(() => (Number(price) * 100) / Number(reduction));
  // const handleClick1 = (event: MouseEvent) => {
  //   const Item = event.currentTarget;
  //   if (Item.id == "plus") {
  //     setQuantity(quantity + 1);
  //   } else {
  //     if (quantity != 0) setQuantity(quantity - 1);
  //   }
  // };

  // const addToCart = (itemId: string) => {
  //   let items: item[] = [];
  //   items.push({
  //     itemId: itemId,
  //     image: "/images/product1-images/image-product-1-thumbnail.jpg",
  //     price: result,
  //     quantity: quantity,
  //   });
  //   setCartItems((prevItems) => (prevItems ? [...prevItems, item] : [item]));
  //   console.log("product add to cart");
  // };
  // useEffect(() => {}, [cartItems]);
  return (
    <>
      <div className={styles.productDetails}>
        <div className={styles.description}>
          <span>SNEAKER COMPANY</span>
          <h2>{promotion}</h2>
          <p>
            These low-profile sneakers are your prefect casual wear companion.
            Featuring a durable rubber outer sole, they’ll withstand everything
            the weather can offer.{" "}
          </p>
        </div>
        <div className={styles.priceBox}>
          <div>{"$" + result.toFixed(2)}</div>
          <div>{reduction + "%"}</div>
          <div>{"$" + price.toFixed(2)}</div>
        </div>
        <div className={styles.priceAddBox}>
          {QuantityButton(quantity, handleQuantity)}
          <Button Icon={CartIcon} text="add to cart" handleClick={addToCart} />
        </div>
      </div>
    </>
  );
}

export default ProductDetails;
