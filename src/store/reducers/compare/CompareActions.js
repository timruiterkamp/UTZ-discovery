function addCompareItem(value) {
  return {
    type: "SET_COMPARE_ITEM",
    value
  };
}

export const setCompareItem = country => dispatch => {
  dispatch(addCompareItem(country));
};
