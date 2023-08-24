import { useContext } from "react";
import { NavLink } from "react-router-dom";
import { useHTMLElementExpanded } from "../../hooks";
import ColorContext from "../../context/ColorContext";
import { ColorText } from "../../interfaces";

const colorText: ColorText = {
  home: "text-white",
  services: "text-ufo-green-2",
  portfolio: "text-pastel-orange-2",
  about: "text-dark-pink-2",
  news: "text-ufo-green-2",
  video: "text-pastel-orange-2",
  skills: "text-ufo-green-2",
  contact: "text-dark-pink-2",
};

export const Navbar = () => {
  const {
    colorState: { color, idActive },
  } = useContext(ColorContext);

  const { isExpanded, toggleElement } = useHTMLElementExpanded({
    idParentElement: "grow-parent",
    classNameGrowElement: "grow-child",
  });

  return (
    <div
      style={{ backgroundColor: color }}
      className=" sticky top-0 w-full z-20 md:h-16"
    >
      <div className="h-full">
        <nav
          className={`relative bg-transparent md:h-full m-0 mx-auto flex flex-col max-w-[73.125rem] uppercase font-Roboto ${colorText[idActive]}`}
        >
          <div
            style={{ backgroundColor: color }}
            className=" md:hidden font-bold text-3xl cursor-pointer z-30"
            onClick={toggleElement}
          >
            <p className="text-center leading-[1.625rem] py-4 px-0">menu</p>
          </div>

          <div
            style={{ backgroundColor: color }}
            id="grow-parent"
            className={`absolute bg-space-cadet w-full top-14 md:top-0 md:block h-0 md:h-16 ${
              isExpanded ? "transition-[height] " : ""
            } duration-700 md:duration-0 overflow-hidden`}
          >
            <ul className="grow-child bg-transparent md:h-16 max-w-xs md:max-w-none w-full m-0 mx-auto text-center">
              <li className="md:h-full md:inline-flex md:items-center text-[13px] leading-6 tracking-[0.07rem] py-3 px-0 border-b md:border-none last:border-none">
                <NavLink
                  to="/#home"
                  className={`block md:p-3 md:mx-1 ${
                    idActive === "home" ? "text-white font-bold" : ""
                  }`}
                >
                  home
                </NavLink>
              </li>
              <li className="md:h-full md:inline-flex md:items-center text-[13px] leading-6 tracking-[0.07rem] py-3 px-0 border-b md:border-none last:border-none">
                <NavLink
                  to="/#services"
                  className={`block md:p-3 md:mx-1 ${
                    idActive === "services" ? "text-white font-bold" : ""
                  }`}
                >
                  services
                </NavLink>
              </li>
              <li className="md:h-full md:inline-flex md:items-center text-[13px] leading-6 tracking-[0.07rem] py-3 px-0 border-b md:border-none last:border-none">
                <NavLink
                  to="/#portfolio"
                  className={`block md:p-3 md:mx-1 ${
                    idActive === "portfolio" ? "text-white font-bold" : ""
                  }`}
                >
                  portfolio
                </NavLink>
              </li>
              <li className="md:h-full md:inline-flex md:items-center text-[13px] leading-6 tracking-[0.07rem] py-3 px-0 border-b md:border-none last:border-none">
                <NavLink
                  to="/#about"
                  className={`block md:p-3 md:mx-1 ${
                    idActive === "about" ? "text-white font-bold" : ""
                  }`}
                >
                  about
                </NavLink>
              </li>
              <li className="md:h-full md:inline-flex md:items-center text-[13px] leading-6 tracking-[0.07rem] py-3 px-0 border-b md:border-none last:border-none">
                <NavLink
                  to="/#news"
                  className={`block md:p-3 md:mx-1 ${
                    idActive === "news" ? "text-white font-bold" : ""
                  }`}
                >
                  news
                </NavLink>
              </li>
              <li className="md:h-full md:inline-flex md:items-center text-[13px] leading-6 tracking-[0.07rem] py-3 px-0 border-b md:border-none last:border-none">
                <NavLink
                  to="/#video"
                  className={`block md:p-3 md:mx-1 ${
                    idActive === "video" ? "text-white font-bold" : ""
                  }`}
                >
                  video
                </NavLink>
              </li>
              <li className="md:h-full md:inline-flex md:items-center text-[13px] leading-6 tracking-[0.07rem] py-3 px-0 border-b md:border-none last:border-none">
                <NavLink
                  to="/#skills"
                  className={`block md:p-3 md:mx-1 ${
                    idActive === "skills" ? "text-white font-bold" : ""
                  }`}
                >
                  skills
                </NavLink>
              </li>
              <li className="md:h-full md:inline-flex md:items-center text-[13px] leading-6 tracking-[0.07rem] py-3 px-0 border-b md:border-none last:border-none">
                <NavLink
                  to="/#contact"
                  className={`block md:p-3 md:mx-1 ${
                    idActive === "contact" ? "text-white font-bold" : ""
                  }`}
                >
                  contact
                </NavLink>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    </div>
  );
};
