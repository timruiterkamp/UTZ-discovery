const initialState = {
  dataLoaded: false,
  mapLoaded: false,
  rhomisData: null,
  activeCountry: null,
  activeCounty: null,
  countyData: null,
  map: null,
  svg: null,
  compareItems: [],
  filters: []
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
    case "SET_COMPARE_ITEMS":
      return {
        ...state,
        compareItems: [...state.compareItems, action.value]
      };
    case "SET_FILTER":
      return {
        ...state,
        filters: [...state.filters, action.value]
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
    case "SET_ACTIVE_COUNTY":
      return {
        ...state,
        activeCounty: action.value
      };
    case "SET_COUNTY_DATA":
      return {
        ...state,
        countyData: action.value
      };
    case "SET_MAP":
      return {
        ...state,
        map: action.value
      };
    case "SET_SVG":
      return {
        ...state,
        svg: action.value
      };
    default:
      return state;
  }
};
