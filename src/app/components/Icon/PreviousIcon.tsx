import Module from "module";
import { MouseEventHandler } from "react";

interface PreviousIconProps {
  className: string;
  onClick: MouseEventHandler;
}
const PreviousIcon = ({ className, onClick }: PreviousIconProps) => {
  return (
    <button
      style={{
        border: 0,
        backgroundColor: "transparent",
        display: "flex",
        width: "58.5px",
        height: "58.5px",
        justifyContent: "center",
        alignItems: "center",
        borderRadius: "75px",
        background: "#FFf",
      }}
      className={className}
      onClick={onClick}
    >
      <svg width="12" height="18" xmlns="http://www.w3.org/2000/svg">
        <path
          d="M11 1 3 9l8 8"
          stroke="#1D2026"
          stroke-width="3"
          fill="none"
          fill-rule="evenodd"
        />
      </svg>
    </button>
  );
};
export default PreviousIcon;
