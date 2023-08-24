import React from "react";
import { ReactNode } from "react";

type Position = "left" | "right";

interface Props {
  position?: Position;
  children: ReactNode;
}

export const SectionContent = React.forwardRef<HTMLDivElement, Props>(
  (props, ref) => {
    const { position = "left", children } = props;

    return (
      <div
        ref={ref}
        className={`bg-white w-full lg:w-[710px] xl:w-[800px] m-0 p-0 py-[1.875rem] lg:pt-[3.75rem] text-space-cadet ${
          position === "left"
            ? "lg:ml-[250px] xl:ml-[370px]"
            : "lg:float-left lg:mr-[250px] xl:mr-[370px]"
        }`}
      >
        {children}
      </div>
    );
  }
);
