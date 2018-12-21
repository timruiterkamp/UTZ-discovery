const initialState = {
  dataLoaded: false
};

export const homeReducer = (state = initialState, action) => {
  switch (action.type) {
    case "SET_DATA_LOADED":
      return {
        ...state,
        dataLoaded: action.value
      };
    default:
      return state;
  }
};
