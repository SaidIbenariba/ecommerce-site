import { MouseEventHandler } from "react";

interface NextIconProps {
  className: string;
  onClick: MouseEventHandler;
}
const NextIcon = ({ className, onClick }: NextIconProps) => {
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
      <svg width="13" height="18" xmlns="http://www.w3.org/2000/svg">
        <path
          d="m2 1 8 8-8 8"
          stroke="#1D2026"
          stroke-width="3"
          fill="none"
          fill-rule="evenodd"
        />
      </svg>
    </button>
  );
};
export default NextIcon;
