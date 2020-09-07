import axios from "axios";
import { setLaunchDetails } from "../launchDetails";
import { setLoadingState } from "../loader";
// import { buildQueryParam } from "../../../utils";

export function applyFilter(type, selectedFilter) {
  return {
    type: type,
    selectedFilter
  };
}

export function setLaunchDataWithFilter(queryData) {
  return dispatch => {
    dispatch(setLoadingState(true));
    const queryParam = buildQueryParam(queryData);
    return axios
      .get(`https://api.spaceXdata.com/v3/launches?${queryParam}`)
      .then(launches => {
        dispatch(setLoadingState(false));
        dispatch(setLaunchDetails(launches.data));
      })
      .catch(() => {
        dispatch(setLoadingState(false));
        dispatch(setLaunchDetails([]));
      });
  };
}

function buildQueryParam(queryData) {
  let queryParam = "limit=100";
  if (queryData.launchYear !== null) {
    queryParam = queryParam.concat(`&launch_year=${queryData.launchYear}`);
  }
  if (queryData.successLanding !== null) {
    queryParam = queryParam.concat(`&land_success=${queryData.successLanding}`);
  }
  if (queryData.successLaunch !== null) {
    queryParam = queryParam.concat(
      `&launch_success=${queryData.successLaunch}`
    );
  }
  return queryParam;
}
