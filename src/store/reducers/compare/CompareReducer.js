const initialState = {
  comparedItems: []
};
export const compareReducer = (state = initialState, action) => {
  switch (action.type) {
    case "SET_COMPARE_ITEM":
      return {
        ...state,
        comparedItems: [...state.comparedItems, action.value]
      };
    default:
      return state;
  }
};
