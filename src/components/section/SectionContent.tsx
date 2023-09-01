import React from "react";
import { ReactNode } from "react";

type Position = "left" | "right";

interface Props {
  position?: Position;
  className?: string;
  style?: React.CSSProperties;
  children: ReactNode;
}

export const SectionContent = React.forwardRef<HTMLDivElement, Props>(
  (props, ref) => {
    const { position = "left", className = "", style, children } = props;

    return (
      <div
        ref={ref}
        style={style}
        className={`bg-white w-full lg:w-[710px] xl:w-[800px] m-0 p-0 text-space-cadet ${
          position === "left"
            ? "lg:ml-[250px] xl:ml-[370px]"
            : "lg:mr-[250px] xl:mr-[370px]"
        } ${className}`}
      >
        {children}
      </div>
    );
  }
);
