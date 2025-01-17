import styles from "./Header.module.css";
import NavItem from "./navItem/NavItem";
import avatar from "../../../../images/image-avatar.png";
import Image, { StaticImageData } from "next/image";
import CartIcon from "../Icon/CartIcon";
import Cart from "../Cart/Cart";
import { MouseEventHandler, useState } from "react";
const NavMenu = () => {
  return (
    <div className={styles.navMenu}>
      <NavItem text="collections" />
      <NavItem text="Men" />
      <NavItem text="Woman" />
      <NavItem text="About" />
      <NavItem text="Contact" />
    </div>
  );
};
const Logo = () => {
  return (
    <div className={styles.logo}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="138"
        height="20"
        viewBox="0 0 138 20"
        fill="none"
      >
        <path
          d="M8.217 20C12.978 20 15.736 19.247 15.736 15.394C15.736 11.994 12.356 11.222 9.076 10.712L8.516 10.627L8.237 10.586L7.887 10.533C5.187 10.128 4.707 9.745 4.707 9.062C4.707 8.584 5.197 7.731 7.55 7.731C10.005 7.731 11.043 8.378 11.043 9.601V9.735H15.324V9.602C15.324 7.213 13.974 4.364 7.55 4.364C1.598 4.364 0.349 6.948 0.349 9.116C0.349 12.213 3.112 13.202 7.572 13.791C7.782 13.819 8.005 13.845 8.231 13.872C9.9 14.069 11.403 14.292 11.403 15.457C11.403 16.467 9.788 16.679 8.105 16.679C5.308 16.679 4.321 16.086 4.321 14.759V14.625H0.002L0 14.926V15.243C0.008 16.033 0.118 17.156 1.057 18.105C2.303 19.362 4.712 20 8.217 20ZM21.427 20V12.51C21.427 10.406 21.974 8.087 25.603 8.087C29.518 8.087 29.381 10.864 29.371 12.129V20H33.551V12.232C33.551 9.968 33.375 4.466 26.819 4.466C24.041 4.466 22.627 5.377 21.624 6.746H21.427V4.467H17.22V20H21.427ZM43.386 20C48.48 20 51.173 17.93 51.603 14.595H47.53C47.144 15.615 45.9 16.315 43.387 16.315C40.666 16.315 39.425 15.285 39.137 13.209H51.664C51.904 11.079 51.635 7.792 48.638 5.769V5.774C47.326 4.859 45.582 4.309 43.387 4.309C38.147 4.309 35.051 7.081 35.051 12.154C35.051 17.324 38.07 20 43.386 20ZM47.485 10.426H39.297C39.783 8.852 41.061 7.995 43.386 7.995C46.38 7.995 47.141 9.262 47.485 10.426ZM70.499 20V4.457H66.29V6.74H66.114C65.061 5.363 63.305 4.457 60.437 4.457C54.004 4.457 53.212 9.75 53.184 12.092V12.229C53.184 14.321 53.916 20 60.425 20C63.339 20 65.109 19.182 66.159 17.831H66.29V20H70.499ZM61.645 16.377C57.649 16.377 57.198 13.345 57.198 12.229C57.198 11.019 57.624 8.081 61.653 8.081C65.284 8.081 66.027 10.125 66.027 12.229C66.027 14.579 65.285 16.377 61.645 16.377ZM88.826 20L82.297 10.955L88.885 4.467H83.058L76.222 11.223V0H72.035V19.954H76.222V16.94L79.242 13.964L83.6 20H88.826ZM98.726 20C103.82 20 106.512 17.93 106.943 14.595H102.869C102.482 15.615 101.239 16.315 98.726 16.315C96.005 16.315 94.764 15.285 94.476 13.209H107.003C107.243 11.079 106.974 7.792 103.977 5.769V5.774C102.665 4.859 100.92 4.309 98.726 4.309C93.486 4.309 90.39 7.081 90.39 12.154C90.39 17.324 93.41 20 98.726 20ZM102.824 10.426H94.637C95.122 8.852 96.4 7.995 98.726 7.995C101.72 7.995 102.481 9.262 102.824 10.426ZM112.76 20V13.03C112.76 10.927 113.691 8.488 116.81 8.488C118.14 8.488 119.203 8.724 119.595 8.834L120.265 4.858C119.537 4.698 118.639 4.466 117.508 4.466C114.843 4.466 113.886 5.26 113.022 6.748H112.76V4.466H108.55V20H112.76ZM129.981 20C134.742 20 137.5 19.247 137.5 15.394C137.5 11.994 134.12 11.222 130.84 10.712L130.28 10.627L130.001 10.586L129.652 10.533C126.951 10.128 126.471 9.745 126.471 9.062C126.471 8.584 126.961 7.731 129.314 7.731C131.769 7.731 132.807 8.378 132.807 9.601V9.735H137.089V9.602C137.089 7.213 135.739 4.364 129.314 4.364C123.362 4.364 122.113 6.948 122.113 9.116C122.113 12.213 124.876 13.202 129.337 13.791C129.547 13.819 129.769 13.845 129.995 13.872C131.664 14.069 133.167 14.292 133.167 15.457C133.167 16.467 131.552 16.679 129.869 16.679C127.073 16.679 126.085 16.086 126.085 14.759V14.625H121.766L121.765 14.926V15.243C121.773 16.033 121.882 17.156 122.821 18.105C124.067 19.362 126.476 20 129.981 20Z"
          fill="#1D2026"
        />
      </svg>
    </div>
  );
};
const Avatar = (url: StaticImageData) => {
  return <Image className={styles.img} src={url} alt="" />;
};
interface HeaderProps {
  onClickCart: MouseEventHandler;
  numberOfItems: number;
}
function Header({ onClickCart, numberOfItems }: HeaderProps) {
  // const [isShowCart, setIsShowCart] = useState(false);
  // const showCart = () => {
  //   let cartDisplay = document.getElementById("cart")?.style.display;
  //   cartDisplay != "flex" ? (cartDisplay = "flex") : (cartDisplay = "none");
  //   console.log(cartDisplay);
  //   console.log(`cartIcon clicked`);
  // };

  return (
    <>
      <div className={styles.header}>
        <div className={styles.links}>
          <Logo />
          <NavMenu />
        </div>
        <div className={styles.leftPart}>
          {CartIcon && (
            <CartIcon
              fill="#69707D"
              // handleClick={showCart}
              handleClick={onClickCart}
              numberOfItems={numberOfItems}
            />
          )}
          <div className="leftPart">{Avatar(avatar)}</div>
        </div>
      </div>
    </>
  );
}
export default Header;
