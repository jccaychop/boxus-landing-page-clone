import React from "react";

interface Props {
  id: string | undefined;
  number: string;
  title: string;
  bgClass: string;
  numberColorClass: string;
}

export const SectionTitle = React.forwardRef<HTMLDivElement, Props>(
  (props, ref) => {
    const { id, number, title, bgClass, numberColorClass } = props;

    return (
      <div
        id={`sticky-${id}`}
        ref={ref}
        className={`lg:sticky lg:top-16 w-full lg:w-[250px] lg:h-[250px] xl:w-[370px] xl:h-[370px] text-[2.1875rem] xs:text-[3.125rem] font-bold uppercase z-10 ${bgClass}`}
      >
        <div className="inline-block lg:block lg:text-[6.25rem] xl:text-[11.25rem] lg:h-28 xl:h-52 lg:overflow-hidden">
          <span
            className={`m-0 -ml-2.5 lg:-ml-9 xl:-ml-16 tracking-[-5px] xs:-ml-4 ${numberColorClass}`}
          >
            {number}
          </span>
        </div>

        <h2 className="inline-block lg:w-[185px] xl:w-[252px] lg:text-[5rem] xl:text-[6.8125rem] lg:leading-[4.125rem] xl:leading-[5.3rem] break-all p-0 pl-2 lg:mt-9 xl:mt-5 lg:ml-[65px] xl:ml-28 tracking-[-3px]">
          {title}
        </h2>
      </div>
    );
  }
);
