import { createContext } from "react";
import { Color } from "./interfaces";

export type ColorContextProps = {
  colorState: Color;
  setColor: (color: string, idActive: string) => void;
};

const ColorContext = createContext<ColorContextProps>({} as ColorContextProps);

export default ColorContext;
