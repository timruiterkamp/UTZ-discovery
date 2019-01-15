const initialState = {
  activeMenuItem: null
};

export const menuReducer = (state = initialState, action) => {
  switch (action.type) {
    case "SET_MENU_ITEM":
      return {
        ...state,
        activeMenuItem: action.value
      };
    default:
      return state;
  }
};
