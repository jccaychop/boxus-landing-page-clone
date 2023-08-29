import React from "react";
import { SVGNavigationArrowRight } from "../svg/SVGNavigationArrowRight";

interface Props {
  className?: string;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
}

export const ArrowButton: React.FC<Props> = ({ className, onClick }) => {
  return (
    <button
      className={`w-12 bg-transparent border-none outline-none absolute ${className}`}
      onClick={onClick}
    >
      <SVGNavigationArrowRight className="w-12 h-12 fill-white hover:fill-platinum" />
    </button>
  );
};
