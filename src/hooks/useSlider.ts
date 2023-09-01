import { useState } from "react";

interface Hook {
  slider: number;
  nextSlider: () => void;
}

export const useSlider = (totalItems: number): Hook => {
  const [slider, setSlider] = useState(0);

  const nextSlider = () => {
    const num = Math.min(slider + 1, totalItems);
    num === totalItems ? setSlider(0) : setSlider(num);
  };

  return {
    slider,
    nextSlider,
  };
};
