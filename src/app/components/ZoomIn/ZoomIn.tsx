import React, { useState, useRef } from "react";
import styles from "./ZoomIn.module.css"; // Import CSS module styles
import { imageObject } from "../../compiler/types";
import Image from "next/image";
import { CloseIcon } from "../Icon/CloseIcon";
import PreviousIcon from "@/app/components/Icon/PreviousIcon";
import NextIcon from "@/app/components/Icon/NextIcon";

type PicturesContainerProps = {
  images: imageObject[];
  onClick?: () => void;
  handleDelete: () => void;
  currentIndex: number;
};

function ZoomIn({ images, onClick, currentIndex }: PicturesContainerProps) {
  const [currentImageIndex, setCurrentImageIndex] = useState(currentIndex);
  const ref = useRef<HTMLDivElement>(null); // Ref for thumbnail container

  const handleClick = (index: number) => {
    setCurrentImageIndex(index);
  };

  const nextImage = () => {
    const nextIndex = (currentImageIndex + 1) % images.length;
    setCurrentImageIndex(nextIndex);
    if (ref.current) {
      ref.current.children[currentImageIndex].classList.remove(styles.active);
      ref.current.children[nextIndex].classList.add(styles.active);
      console.log(ref.current.children);
    }
  };

  const prevImage = () => {
    const prevIndex =
      currentImageIndex === 0 ? images.length - 1 : currentImageIndex - 1;
    setCurrentImageIndex(prevIndex);
    if (ref.current) {
      ref.current.children[currentImageIndex].classList.remove(styles.active);
      ref.current.children[prevIndex].classList.add(styles.active);
    }
  };

  return (
    <div className={styles.zoomIn}>
      {/* <button
        style={{
          display: "flex",
          backgroundColor: "transparent",
          border: 0,
          justifyContent: "flex-end",
        }}
      > */}
      <CloseIcon fill="#fff" onClick={onClick} />

      <div className={styles.container}>
        <PreviousIcon className={styles.previousIcon} onClick={prevImage} />
        <NextIcon className={styles.nextIcon} onClick={nextImage} />
        <Image
          className={styles.homeBox}
          src={images[currentImageIndex].big}
          alt=""
        />
        <div className={styles.images} ref={ref}>
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
    </div>
  );
}

export default ZoomIn;
