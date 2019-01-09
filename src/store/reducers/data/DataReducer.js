const initialState = {
  dataLoaded: false,
  mapLoaded: false,
  rhomisData: null,
  activeCountry: null
};

export const dataReducer = (state = initialState, action) => {
  switch (action.type) {
    case "SET_DATA_LOADED":
      return {
        ...state,
        dataLoaded: action.value
      };
    case "SET_MAP_LOADED":
      return {
        ...state,
        mapLoaded: action.value
      };
    case "SET_RHOMIS_DATA":
      return {
        ...state,
        rhomisData: action.value
      };
    case "SET_ACTIVE_COUNTRY":
      return {
        ...state,
        activeCountry: action.value
      };
    default:
      return state;
  }
};
