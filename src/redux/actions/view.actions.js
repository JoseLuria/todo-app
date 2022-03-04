import { viewTypes } from "../types/view.stypes";

export const setViewAll = () => {
  return {
    type: viewTypes.ALL,
  };
};

export const setViewActive = () => {
  return {
    type: viewTypes.ACTIVE,
  };
};

export const setViewCompleted = () => {
  return {
    type: viewTypes.COMPLETED,
  };
};
