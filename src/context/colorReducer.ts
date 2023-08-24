import { Color } from "./interfaces";

type ColorAction = { type: "setColor"; payload: Color };

export const colorReducer = (state: Color, action: ColorAction) => {
  switch (action.type) {
    case "setColor":
      return {
        ...state,
        color: action.payload.color,
        idActive: action.payload.idActive,
      };

    default:
      return state;
  }
};
