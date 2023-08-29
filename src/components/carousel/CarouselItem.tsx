import React, { ReactNode, useContext } from "react";
import { CardProps } from "./CarouselCard";
import { CarouselContext } from "./Carousel";

interface Props {
  dataItem: { srcImage: string; cardContent?: CardProps };
  children?: ReactNode;
  sliderNumber: number;
  classNameCard?: string;
  classNameImg?: string;
}

export const CarouselItem: React.FC<Props> = (props) => {
  const { slider } = useContext(CarouselContext);
  const {
    children,
    dataItem,
    sliderNumber,
    classNameCard = "",
    classNameImg = "",
  } = props;

  return (
    <div
      className={`flex-1 min-w-full ${
        slider === sliderNumber ? "order-0" : "order-1 opacity-0"
      } transition-order-opacity duration-[950ms] ease-in-out ${classNameCard}`}
    >
      {children}
      <img
        src={dataItem.srcImage}
        alt="about"
        className={`min-w-full ${classNameImg}`}
      />
    </div>
  );
};
