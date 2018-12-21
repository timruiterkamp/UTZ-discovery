// import ValidationController from "../../../controllers/ValidationController";

function dataLoaded(value) {
  return {
    type: "SET_DATA_LOADED",
    value
  };
}

export const changeHomeInterface = dataStatus => dispatch => {
  dispatch(dataLoaded(dataStatus));
};
