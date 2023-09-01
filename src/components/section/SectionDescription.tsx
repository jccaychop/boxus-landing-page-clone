import React from "react";
import DOMPurify from "dompurify";

type List = {
  years: string;
  desc: string;
};

type Bars = {
  name: string;
  value: number;
  bgColor: string;
  color: string;
};

interface Props {
  title: string;
  description: string;
  list?: List[];
  bars?: Bars[];
  classColorText?: string;
}

export const SectionDescription: React.FC<Props> = ({
  title,
  description,
  list = [],
  bars = [],
  classColorText = "",
}) => {
  return (
    <div
      className={`p-0 px-[5%] lg:px-[3.75rem] xl:${
        bars.length > 1 ? "h-auto" : "h-[370px]"
      } pt-8 pb-20 lg:pb-8 overflow-hidden`}
    >
      <div className="relative lg:-top-[5.375rem] xl:-top-[6.7rem]">
        <h2 className="text-[19vw] lg:text-[8.75rem] xl:text-[11.25rem] leading-none uppercase text-center font-bold">
          {title}
        </h2>
      </div>
      <div
        className={`relative xl:-top-14 font-Roboto lg:${
          bars.length > 1 ? "block" : "flex"
        } gap-12 xl:gap-24`}
      >
        <p
          dangerouslySetInnerHTML={{
            __html: DOMPurify.sanitize(description),
          }}
          className="flex-1 leading-[1.625rem] m-0 mb-9"
        />
        {list.length > 0 ? (
          <ul className="flex-1 lg:leading-[1.625rem]">
            {list?.map(({ years, desc }, index) => (
              <li key={index} className="m-0 p-0">
                <strong className={classColorText}>{years}</strong>
                <em className="">{desc}</em>
              </li>
            ))}
          </ul>
        ) : (
          ""
        )}

        {bars.length > 0 ? (
          <ul className="lg:leading-[1.625rem] overflow-hidden">
            {bars?.map(({ name, value, bgColor, color }, index) => (
              <li key={index} className={`group m-0 mb-3 p-0`}>
                <div
                  style={{ maxWidth: `${value}%` }}
                  className={`${bgColor} ${color} group-hover:text-white font-bold uppercase flex items-center justify-between h-[59px] overflow-hidden transition-colors`}
                >
                  <span className="text-[45px] relative -left-3 group-hover:left-2 transition-all duration-300">
                    {name}
                  </span>{" "}
                  <span className="text-[35px] relative -right-9 group-hover:right-2 transition-all duration-300">
                    {value}%
                  </span>
                </div>
              </li>
            ))}
          </ul>
        ) : (
          ""
        )}
      </div>
    </div>
  );
};
