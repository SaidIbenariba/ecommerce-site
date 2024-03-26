import { MouseEventHandler } from "react";

interface CloseIconProps {
  fill: string;
  onClick: MouseEventHandler;
}
export const CloseIcon = ({ fill, onClick }: CloseIconProps) => {
  return (
    <button
      onClick={onClick}
      aria-label="close"
      style={{
        border: "none",
        backgroundColor: "transparent",
        display: "flex",
        justifyContent: "flex-end",
      }}
    >
      <svg width={14} height={15} xmlns="http://www.w3.org/2000/svg">
        <path
          d="m11.596.782 2.122 2.122L9.12 7.499l4.597 4.597-2.122 2.122L7 9.62l-4.595 4.597-2.122-2.122L4.878 7.5.282 2.904 2.404.782l4.595 4.596L11.596.782Z"
          fill={fill}
          fillRule="evenodd"
        />
      </svg>
    </button>
  );
};