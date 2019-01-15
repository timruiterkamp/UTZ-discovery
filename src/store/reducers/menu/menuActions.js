function activeMenuItem(value) {
  return {
    type: "SET_MENU_ITEM",
    value
  };
}

export const setSidebarMenu = menuItem => dispatch => {
  dispatch(activeMenuItem(menuItem));
};
