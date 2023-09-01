import React from "react";

type Info = {
  autor: string;
  text: string;
};

interface Props {
  slider: number;
  idSlider: number;
  info: Info;
}

export const Testimonial: React.FC<Props> = ({ slider, idSlider, info }) => {
  return (
    <li
      className={`top-0 w-full ${
        slider === idSlider ? "relative" : "opacity-0 absolute"
      } transition-all duration-1000`}
    >
      <div>
        <p className="text-[1.375rem] leading-10">{info.text}</p>

        <p className="pt-[5.625rem] tracking-[3px] uppercase">{info.autor}</p>
      </div>
    </li>
  );
};
