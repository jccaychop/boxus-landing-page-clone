import React from "react";
import { iconInfinity } from "../../assets/images";

export const LoadMore: React.FC = () => {
  return (
    <div className="w-full lg:w-[28.75rem] xl:w-[26.875rem] bg-dark-pink text-xl text-white font-bold text-center uppercase">
      <a href="" className="inline-block w-full p-0 pt-[1.875rem] pb-4">
        load more
      </a>
      <img
        src={iconInfinity}
        alt="icon infinity"
        className="m-0 mx-auto p-0 pb-5 max-w-full max-h-full w-auto h-auto"
      />
    </div>
  );
};
