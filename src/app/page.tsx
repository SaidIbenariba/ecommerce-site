// import Image from "next/image";
"use client";
import styles from "./page.module.css";
import ProductPage from "./components/ProductPage/ProductPage";
import { Kumbh_Sans } from "@next/font/google";
import { useState } from "react";
import image1 from "../../images/product1-images/image-product-1-thumbnail.jpg";
import image2 from "../../images/product1-images/image-product-2-thumbnail.jpg";
import image3 from "../../images/product1-images/image-product-3-thumbnail.jpg";
import image4 from "../../images/product1-images/image-product-4-thumbnail.jpg";
import image1b from "../../images/product1-images/image-product-1.jpg";
import image2b from "../../images/product1-images/image-product-2.jpg";
import image3b from "../../images/product1-images/image-product-3.jpg";
import image4b from "../../images/product1-images/image-product-4.jpg";
import { stringify } from "querystring";
import { StaticImageData } from "next/image";
import { imageObject, MyArray } from "./compiler/types";
// import CartIcon from "./components/Icon/CartIcon";

// const images: imageObject[] = [];
// images.push(

// );
const images: MyArray<imageObject> = [
  { small: image1, big: image1b },
  {
    small: image2,
    big: image2b,
  },
  {
    small: image3,
    big: image3b,
  },
  {
    small: image4,
    big: image4b,
  },
];

const kumbh_Sans = Kumbh_Sans({
  subsets: ["latin"],
  weight: ["400", "700"],
});

export default function Home() {
  const [product, setProduct] = useState({
    id: 1,
    name: "sneakers",
    price: 200,
    reduction: 50,
    description:
      "These low-profile sneakers are your prefect casual wear companion. Featuring a durable rubber outer sole, they’ll withstand everything the weather can offer. ",
    PicturesObject: images,
  });
  return (
    <div className={(kumbh_Sans.className, styles.main)}>
      <ProductPage
        id={product.id}
        name={product.name}
        price={product.price}
        reduction={product.reduction}
        description={product.description}
        PicturesObject={product.PicturesObject}
        promotion="Fall Limited Edition Sneakers"
      />
    </div>
  );
}
