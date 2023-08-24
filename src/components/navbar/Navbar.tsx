import React, { useContext } from "react";
import { useHTMLElementExpanded } from "../../hooks";
import ColorContext from "../../context/ColorContext";
import { ColorText } from "../../interfaces";
import { NavbarContent, NavbarItem } from ".";

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

interface Props {
  id?: string | undefined;
}

export const Navbar = React.forwardRef<HTMLDivElement, Props>((props, ref) => {
  const {
    colorState: { color, idActive },
  } = useContext(ColorContext);

  const { isExpanded, toggleElement } = useHTMLElementExpanded({
    idParentElement: "grow-parent",
    classNameGrowElement: "grow-child",
  });

  return (
    <NavbarContent
      id={props.id}
      ref={ref}
      colorText={colorText}
      color={color}
      idActive={idActive}
      isExpanded={isExpanded}
      toggleElement={toggleElement}
    >
      {Object.keys(colorText).map((key) => (
        <NavbarItem key={key} idActive={idActive} to={key} />
      ))}
    </NavbarContent>
  );
});
