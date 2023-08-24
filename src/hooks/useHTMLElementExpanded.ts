import { useState } from "react";

interface Props {
  idParentElement: string;
  classNameGrowElement: string;
}

export interface HTMLHook {
  isExpanded: boolean;
  toggleElement: () => void;
}

export const useHTMLElementExpanded = ({
  idParentElement,
  classNameGrowElement,
}: Props): HTMLHook => {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleElement = () => {
    const growDiv = document.getElementById(idParentElement);
    const wrapper = document.querySelector(`.${classNameGrowElement}`);

    if (growDiv && growDiv.clientHeight) {
      growDiv.style.height = "0";
      setIsExpanded(false);
    } else if (growDiv && wrapper) {
      growDiv.style.height = `${wrapper.clientHeight}px`;
      setIsExpanded(true);
    }
  };

  return {
    isExpanded,
    toggleElement,
  };
};
