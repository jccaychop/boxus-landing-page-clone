import { MutableRefObject, useContext, useEffect, useRef } from "react";

import ColorContext from "../context/ColorContext";
import { spliter } from "../helpers";

interface Hook {
  myRef: MutableRefObject<HTMLDivElement>;
}

export const useNavbarStyles = (): Hook => {
  const { setColor } = useContext(ColorContext);

  const myRef = useRef() as MutableRefObject<HTMLDivElement>;

  useEffect(() => {
    const handleScroll = () => {
      const refElement = myRef.current;
      const idElement = spliter(refElement.id, "sticky-");
      const refStyles = window.getComputedStyle(refElement, null);
      const DOMRect = refElement?.getBoundingClientRect();

      if (DOMRect.top >= 0 && DOMRect.top <= 65) {
        setColor(refStyles.backgroundColor, idElement);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [setColor]);

  return {
    myRef,
  };
};
