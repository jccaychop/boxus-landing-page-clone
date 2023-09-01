import React, { ReactNode, createContext } from "react";
import { ArrowButton } from "../ui";
import { useSlider } from "../../hooks";

interface Props {
  children: ReactNode;
  className?: string;
  totalItems: number;
}

type Context = {
  slider: number;
};

export const CarouselContext = createContext({} as Context);

export const Carousel: React.FC<Props> = ({
  className = "",
  totalItems,
  children,
}) => {
  const { slider, nextSlider } = useSlider(totalItems);

  return (
    <CarouselContext.Provider value={{ slider }}>
      <div className="relative min-w-full">
        <ArrowButton
          className={`bottom-[30px] left-[30px] z-10 ${className}`}
          onClick={nextSlider}
        />
        <div className="flex flex-nowrap overflow-hidden">{children}</div>
      </div>
    </CarouselContext.Provider>
  );
};
