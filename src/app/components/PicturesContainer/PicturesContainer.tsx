// import Image from "next/image";
// import { MouseEvent, MouseEventHandler, useState } from "react";
// // import image1 from "../../../../images/image-product-1-thumbnail.jpg";
// // import image2 from "../../../../images/image-product-2-thumbnail.jpg";
// // import image3 from "../../../../images/image-product-3-thumbnail.jpg";
// // import image4 from "../../../../images/image-product-4-thumbnail.jpg";
// // import image1b from "../../../../images/image-product-1.jpg";
// // import image2b from "../../../../images/image-product-2.jpg";
// // import image3b from "../../../../images/image-product-3.jpg";
// // import image4b from "../../../../images/image-product-4.jpg";
// import styles from "./PicturesContainer.module.css";
// import { imageObject, MyArray } from "../../compiler/types";
// import ZoomIn from "../ZoomIn/ZoomIn";
// type PicturesContainerProps = {
//   images: MyArray<imageObject>;
//   onClick?: MouseEventHandler;
//   // zoomIn: boolean;
// };
// function PicturesContainer({ images, onClick }: PicturesContainerProps) {

//   const [active, setActive] = useState(images[0].big);

//   const handleClick = (event: MouseEvent) => {
//     const items = document.getElementById("selected").children;
//     for (let i = 1; i < 5; i++) {
//       console.log(items[i]);
//       items[i].classList.remove(styles.active);
//     }
//     event.currentTarget.classList.add(styles.active);
//     setActive(images[event.currentTarget.id].big);
//     // console.log(event.currentTarget.classList);
//   };
//   return (
//     <>
//       <div className={styles.container} id="selected">
//         {/* <Image className={styles.homeBox} src={active} alt="" /> */}
//         <Image
//           className={styles.homeBox}
//           src={active}
//           alt=""
//           onClick={onClick}
//         />
//         <Image
//           className={styles.thumbnail}
//           id="0"
//           src={images[0].small}
//           alt=""
//           onClick={handleClick}
//         />
//         <Image
//           className={styles.thumbnail}
//           id="1"
//           src={images[1].small}
//           alt=""
//           onClick={handleClick}
//         />
//         <Image
//           className={styles.thumbnail}
//           id="2"
//           src={images[2].small}
//           alt=""
//           onClick={handleClick}
//         />
//         <Image
//           className={styles.thumbnail}
//           id="3"
//           src={images[3].small}
//           alt=""
//           onClick={handleClick}
//         />
//       </div>
//     </>
//   );
// }
// export default PicturesContainer;
import styles from "./PicturesContainer.module.css";
import { useState, useRef, useEffect } from "react";
import { imageObject } from "@/app/compiler/types";
import { CloseIcon } from "../Icon/CloseIcon";
import PreviousIcon from "../Icon/PreviousIcon";
import NextIcon from "../Icon/NextIcon";
import Image from "next/image";
type ZoomInProps = {
  images: imageObject[];
  onClick?: () => void;
  handleDelete: () => void;
  currentIndex: number;
  setCurrentIndex: (index: number) => void;
};

function ZoomIn({
  images,
  onClick,
  currentIndex,
  setCurrentIndex,
}: ZoomInProps) {
  const [currentImageIndex, setCurrentImageIndex] = useState(currentIndex);
  const ref = useRef<HTMLDivElement>(null); // Ref for thumbnail container

  const handleClick = (index: number) => {
    setCurrentImageIndex(index);
    // setCurrentIndex(currentImageIndex);
  };
  useEffect(() => {
    setCurrentIndex(currentImageIndex);
  }, [currentImageIndex]);
  return (
    <div className={styles.container}>
      <div className={styles.container} ref={ref}>
        <Image
          className={styles.homeBox}
          src={images[currentImageIndex].big}
          alt=""
          onClick={onClick}
        />
        {images.map((image: imageObject, index) => (
          <Image
            key={index}
            className={`${styles.thumbnail} ${
              index === currentImageIndex ? styles.active : ""
            }`}
            src={image.small}
            alt=""
            onClick={() => handleClick(index)}
          />
        ))}
      </div>
    </div>
  );
}

export default ZoomIn;
