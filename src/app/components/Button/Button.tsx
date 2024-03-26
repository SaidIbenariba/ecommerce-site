"use client";
import { JSX, MouseEvent, MouseEventHandler, useRef } from "react";
import styles from "./Button.module.css";
import { handleClientScriptLoad } from "next/script";

interface Content {
  Icon?: JSX.ElementType;
  text: string;
  handleClick?: MouseEventHandler;
  //enableHover?: boolean; // New prop to indicate whether hover functionality should be enabled
}

function Button({ Icon, text, handleClick }: Content) {
  const ItemWithId = useRef(null);
  // const handleHover = () => {
  //   const element = ItemWithId.current;
  //   element.classList.toggle("hover");
  //   console.log(element.classList);
  // };

  return (
    <button className={styles.button} ref={ItemWithId} onClick={handleClick}>
      {Icon && <Icon fill="#fff" />}
      {text}
    </button>
  );
}

export default Button;
// import React, { Component, MouseEvent } from "react";

// export class Button extends Component {
//   handleMouseOver(event: MouseEvent) {
//     event.preventDefault();
//     console.log("mouse over");
//   }

//   render() {
//     return (
//       <button onClick={this.handleMouseOver}>{this}</button>
//     );
//   }
// }
