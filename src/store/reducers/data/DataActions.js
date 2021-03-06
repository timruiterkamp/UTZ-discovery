function dataLoaded(value) {
  return {
    type: "SET_DATA_LOADED",
    value
  };
}

function introMessage(value) {
  return {
    type: "SET_INTRO_MESSAGE",
    value
  };
}

function mapLoaded(value) {
  return {
    type: "SET_MAP_LOADED",
    value
  };
}

function setRhomisData(value) {
  return {
    type: "SET_RHOMIS_DATA",
    value
  };
}

function activeCountry(value) {
  return {
    type: "SET_ACTIVE_COUNTRY",
    value
  };
}

function activeCounty(value) {
  return {
    type: "SET_ACTIVE_COUNTY",
    value
  };
}

function countyData(value) {
  return {
    type: "SET_ACTIVE_COUNTY",
    value
  };
}

function initMap(value) {
  return {
    type: "SET_MAP",
    value
  };
}

function setSVG(value) {
  return {
    type: "SET_SVG",
    value
  };
}

function setCompareItem(value) {
  return {
    type: "SET_COMPARE_ITEMS",
    value
  };
}

function deleteCompareItem(value) {
  return {
    type: "DELETE_COMPARE_ITEMS",
    value
  };
}

function setFilter(value) {
  return {
    type: "SET_FILTER",
    value
  };
}

export const setDataLoaded = dataStatus => dispatch => {
  dispatch(dataLoaded(dataStatus));
};

export const setMapLoaded = mapStatus => dispatch => {
  dispatch(mapLoaded(mapStatus));
};

export const setGlobalRhomisData = data => dispatch => {
  dispatch(setRhomisData(data));
};

export const setActiveCountry = data => dispatch => {
  dispatch(activeCountry(data));
};

export const setActiveCounty = data => dispatch => {
  dispatch(activeCounty(data));
};

export const setCountyData = data => dispatch => {
  dispatch(countyData(data));
};

export const setMap = data => dispatch => {
  dispatch(initMap(data));
};

export const setBaseSVG = data => dispatch => {
  dispatch(setSVG(data));
};

export const setCompareItems = data => dispatch => {
  dispatch(setCompareItem(data));
};

export const deleteCompareItems = data => dispatch => {
  dispatch(deleteCompareItem(data));
};

export const setGlobalFilters = data => dispatch => {
  dispatch(setFilter(data));
};

export const setIntroMessageStatus = data => dispatch => {
  dispatch(introMessage(data));
};
