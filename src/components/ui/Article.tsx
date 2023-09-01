import React from "react";

type Info = {
  autor: string;
  category: string;
  link: string;
  title: string;
};

interface Props {
  num: string;
  info: Info;
}

export const Article: React.FC<Props> = ({ num, info }) => {
  return (
    <article
      key={num}
      className="relative p-0 py-8 border-b-2 border-cultured last-of-type:border-none"
    >
      <div className="inline-block w-28 text-5xl font-black text-ufo-green">
        {num}
      </div>

      <div className="inline-block w-auto lg:w-[15rem]">
        <div className="text-space-cadet-2">{info.autor}</div>
        <div>
          <ul>
            <li>
              <a
                href={info.link}
                className="text-xs font-bold text-[#ee87a4] uppercase"
              >
                {info.category}
              </a>
            </li>
          </ul>
        </div>
      </div>

      <h3 className="w-full pt-5 lg:pt-1 leading-none lg:inline-block lg:w-[45%]">
        <a
          href={info.link}
          className="text-lg leading-5 font-bold hover:text-[#ee87a4] transition-colors duration-500"
        >
          {info.title}
        </a>
      </h3>
    </article>
  );
};
