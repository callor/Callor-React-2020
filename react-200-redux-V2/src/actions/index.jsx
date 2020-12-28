export const INCREMENT = "counter/INCREMENT";
export const DECREMENT = "counter/DECREMENT";
export const SET_DIFF = "counter/SET_DIFF";

export const increment = () => {
  return {
    type: INCREMENT,
  };
};
export const decrement = () => {
  return {
    type: DECREMENT,
  };
};
export const setDiff = (value) => {
  return {
    type: SET_DIFF,
    diff: value,
  };
};
