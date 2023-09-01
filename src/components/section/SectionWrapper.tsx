import React from "react";
import { ReactNode } from "react";

type Position = "left" | "right";

interface Props {
  className?: string;
  position?: Position;
  children: ReactNode;
}

export const SectionWrapper = React.forwardRef<HTMLDivElement, Props>(
  (props, ref) => {
    const { position = "left", className = "", children } = props;
    return (
      <div
        ref={ref}
        className={`relative lg:flex lg:flex-col text-white m-0 mx-auto max-[1020px]:w-full max-[1270px]:w-[60rem] w-[73.125rem] ${
          position === "right" ? "lg:items-end" : ""
        } ${className}`}
      >
        {children}
      </div>
    );
  }
);
