import React from "react";
import { iconPost } from "../../assets/images";

interface Props {
  className: string;
  to: string;
  imgSrc: string;
}

export const GridItem = React.forwardRef<HTMLDivElement, Props>(
  (props, ref) => {
    const { className, to, imgSrc } = props;

    return (
      <div ref={ref} className={`group relative ${className}`}>
        <a href={to}>
          <img src={imgSrc} alt="portfolio" className="w-full" />
          <div className="max-sm:hidden opacity-0 absolute top-0 left-0 bottom-0 right-0 w-full group-hover:opacity-100 transition-opacity duration-300">
            <div className="mx-8 mt-8 h-[calc(100%-4rem)] flex flex-col justify-center items-center bg-white">
              <p className="p-0 pb-5">
                <img src={iconPost} alt="icon-post" />
              </p>
              <p className="m-0 mb-2.5 text-eerie-black text-xl leading-[1.125rem] font-bold tracking-[0.25rem] uppercase">
                psd mockup
              </p>
              <p className="text-cool-grey font-bold leading-4">Smart Watch</p>
            </div>
          </div>
        </a>
      </div>
    );
  }
);
