import { lauchYears } from "../../../config/filterConfig";
import { Button } from "react-bootstrap";
import { useState } from "react";
import { connect } from "react-redux";
import { filterReducer } from "../../../store/reducers/filter";
import {
  applyFilter,
  setLaunchDataWithFilter
} from "../../../store/actions/filters";

import filterStyles from "./filter.module.css";
function filter(props) {
  const [filterValue, setFilterValue] = useState(null);
  let updatedFilterData = props.currentState.filterReducer;
  const setFilter = (type, value) => {
    props.setFilter(type, value);
    updatedFilterData = filterReducer(props.currentState.filterReducer, {
      type,
      selectedFilter: value
    });
    props.setLaunchDataWithFilter(updatedFilterData.selectedFilter);
    setFilterValue(value);
  };

  return (
    <div className={filterStyles.filters}>
      <strong className={filterStyles.label}>Filters</strong>
      <div className={filterStyles["launch-year"]}>Launch Year</div>
      <div className={filterStyles["buttons-wrapper"]}>
        {lauchYears.map((year, index) => (
          <Button
            key={"button_" + index}
            className={filterStyles["filter-options"]}
            variant={
              updatedFilterData.selectedFilter.launchYear === year
                ? "success"
                : "outline-success"
            }
            onClick={() => setFilter("LAUNCH_YEAR_FILTER", year)}
          >
            {year}
          </Button>
        ))}
      </div>
      <div className={filterStyles["successful-launch"]}>Successful Launch</div>
      <div className={filterStyles["buttons-wrapper"]}>
        <Button
          className={filterStyles["filter-options"]}
          variant={
            updatedFilterData.selectedFilter.successLaunch !== null &&
            updatedFilterData.selectedFilter.successLaunch
              ? "success"
              : "outline-success"
          }
          onClick={() => setFilter("SUCCESS_LAUNCH", true)}
        >
          True
        </Button>
        <Button
          className={filterStyles["filter-options"]}
          variant={
            updatedFilterData.selectedFilter.successLaunch !== null &&
            !updatedFilterData.selectedFilter.successLaunch
              ? "success"
              : "outline-success"
          }
          onClick={() => setFilter("SUCCESS_LAUNCH", false)}
        >
          False
        </Button>
      </div>
      <div className={filterStyles["successful-launch"]}>
        Successful Landing
      </div>
      <div className={filterStyles["buttons-wrapper"]}>
        <Button
          className={filterStyles["filter-options"]}
          variant={
            updatedFilterData.selectedFilter.successLanding !== null &&
            updatedFilterData.selectedFilter.successLanding
              ? "success"
              : "outline-success"
          }
          onClick={() => setFilter("SUCCESS_LANDING", true)}
        >
          True
        </Button>
        <Button
          className={filterStyles["filter-options"]}
          variant={
            updatedFilterData.selectedFilter.successLanding !== null &&
            !updatedFilterData.selectedFilter.successLanding
              ? "success"
              : "outline-success"
          }
          onClick={() => setFilter("SUCCESS_LANDING", false)}
        >
          False
        </Button>
      </div>
    </div>
  );
}

const mapStateToProps = state => {
  return {
    selectedFilter: state.filterReducer.selectedFilter,
    currentState: state
  };
};

const mapDispatchToProps = dispatch => {
  return {
    setFilter: (type, value) => dispatch(applyFilter(type, value)),
    setLaunchDataWithFilter: selectedFilter =>
      dispatch(setLaunchDataWithFilter(selectedFilter))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(filter);
