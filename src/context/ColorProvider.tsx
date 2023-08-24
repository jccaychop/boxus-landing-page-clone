import { useReducer } from "react";
import { colorReducer } from "./colorReducer";
import { Color, Props } from "./interfaces";
import ColorContext from "./ColorContext";

const INITIAL_STATE: Color = {
  color: "#221C5A",
  idActive: "home",
};

const ColorProvider = ({ children }: Props) => {
  const [colorState, dispatch] = useReducer(colorReducer, INITIAL_STATE);

  const setColor = (color: string, idActive: string) => {
    dispatch({ type: "setColor", payload: { color, idActive } });
  };

  return (
    <ColorContext.Provider value={{ colorState, setColor }}>
      {children}
    </ColorContext.Provider>
  );
};

export default ColorProvider;
