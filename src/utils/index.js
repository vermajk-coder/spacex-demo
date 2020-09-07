export const buildQueryParam = queryData => {
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
};
