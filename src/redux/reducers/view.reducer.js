import { viewTypes } from "../types/view.stypes";

const initialState = {
  actual: "All",
};

export const viewReducer = (state = initialState, action) => {
  switch (action.type) {
    case viewTypes.ALL:
      return {
        ...state,
        actual: (state.actual = "All"),
      };
    case viewTypes.ACTIVE:
      return {
        ...state,
        actual: (state.actual = "Active"),
      };
    case viewTypes.COMPLETED:
      return {
        ...state,
        actual: (state.actual = "Completed"),
      };
    default:
      return state;
  }
};
