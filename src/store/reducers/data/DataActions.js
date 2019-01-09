function dataLoaded(value) {
  return {
    type: "SET_DATA_LOADED",
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