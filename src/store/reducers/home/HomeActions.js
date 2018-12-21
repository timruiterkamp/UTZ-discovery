function dataLoaded(value) {
  return {
    type: "SET_DATA_LOADED",
    value
  };
}

export const setDataLoaded = dataStatus => dispatch => {
  dispatch(dataLoaded(dataStatus));
};
