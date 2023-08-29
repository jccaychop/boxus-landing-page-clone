import React from "react";

export interface CardProps {
  name: string;
  position: string;
  content: string;
}

export const CarouselCard: React.FC<CardProps> = ({
  name,
  position,
  content,
}) => {
  return (
    <div className="p-[5%] pt-[10%] font-Roboto sm:flex-1">
      <div>
        <h4 className="font-bold text-base leading-[1.625rem]">{name}</h4>
        <p className="text-sm leading-4 tracking-[0.25rem] p-0 pb-[3.125rem] text-dark-pink uppercase">
          {position}
        </p>
      </div>
      <div>
        <p className="text-base leading-[1.625rem]">{content}</p>
      </div>
    </div>
  );
};
