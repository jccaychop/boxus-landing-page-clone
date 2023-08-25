import React, { ReactNode } from "react";
import { Color } from "../../context/interfaces";
import { HTMLHook } from "../../hooks/useHTMLElementExpanded";
import { ColorText } from "../../interfaces";

interface Props extends Color, HTMLHook {
  id?: string | undefined;
  colorText: ColorText;
  children: ReactNode;
}

export const NavbarContent = React.forwardRef<HTMLDivElement, Props>(
  (props, ref) => {
    const { children, idActive, isExpanded, toggleElement, colorText, color } =
      props;

    return (
      <div
        ref={ref}
        style={{ backgroundColor: color }}
        className=" sticky top-0 w-full z-20 md:h-16 min-h-[4rem]"
      >
        <div className="h-full min-h-[4rem]">
          <nav
            className={`relative bg-transparent m-0 mx-auto flex flex-col max-w-[73.125rem] uppercase font-Roboto ${colorText[idActive]}`}
          >
            <div
              style={{ backgroundColor: color }}
              className=" md:hidden font-bold text-3xl cursor-pointer z-30"
              onClick={toggleElement}
            >
              <p className="min-h-[4rem] text-center leading-[1.625rem] py-4 px-0">menu</p>
            </div>

            <div
              style={{ backgroundColor: color }}
              id="grow-parent"
              className={`absolute bg-space-cadet w-full top-16 md:top-0 md:block h-0 md:h-16 ${
                isExpanded ? "transition-[height] " : ""
              } duration-700 md:duration-0 overflow-hidden`}
            >
              <ul className="grow-child bg-transparent md:h-16 max-w-xs md:max-w-none w-full m-0 mx-auto text-center">
                {children}
              </ul>
            </div>
          </nav>
        </div>
      </div>
    );
  }
);
