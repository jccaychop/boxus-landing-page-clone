import React from "react";
import { NavLink } from "react-router-dom";

interface Props {
  idActive: string;
  to: string;
}

export const NavbarItem = React.forwardRef<HTMLAnchorElement, Props>(
  (props, ref) => {
    const { idActive, to } = props;

    return (
      <li className="md:h-full md:inline-flex md:items-center text-[13px] leading-6 tracking-[0.07rem] py-3 px-0 border-b md:border-none last:border-none">
        <NavLink
          ref={ref}
          to={`/#${to}`}
          className={`block md:p-3 md:mx-1 ${
            idActive === to ? "text-white font-bold" : ""
          }`}
        >
          {to}
        </NavLink>
      </li>
    );
  }
);
