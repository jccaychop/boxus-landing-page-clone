import React, { ReactNode, createContext, useState } from "react";
import { ArrowButton } from "../ui";

interface Props {
  children: ReactNode;
  className?: string;
}

type Context = {
  slider: number;
};

export const CarouselContext = createContext({} as Context);

export const Carousel: React.FC<Props> = ({ className = "", children }) => {
  const [slider, setSlider] = useState(0);

  const nextSlider = () => {
    const num = Math.min(slider + 1, 3);
    num === 3 ? setSlider(0) : setSlider(num);
  };

  return (
    <CarouselContext.Provider value={{ slider }}>
      <div className="relative min-w-full">
        <ArrowButton
          className={`bottom-[30px] left-[30px] z-10 ${className}`}
          onClick={nextSlider}
        />
        <div className="flex flex-nowrap overflow-hidden">
          {children}
        </div>
      </div>
    </CarouselContext.Provider>
  );
};
