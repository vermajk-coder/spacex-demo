import axios from "axios";
import { useEffect, useState } from "react";
import { connect } from "react-redux";
import { Container, Row, Col, Spinner } from "react-bootstrap";
import LauchTile from "./launchTile";
import { setLaunchDetails } from "../../../store/actions/launchDetails";
import { setLoadingState } from "../../../store/actions/loader";
import launchDetailStyles from "./launchDetails.module.css";

function LaunchDetails(props) {
  const [error, setError] = useState(false);

  useEffect(() => {
    let isMounted = true;
    props.setLoadingState(true);
    setError(false);
    axios
      .get("https://api.spaceXdata.com/v3/launches?limit=100")
      .then(launches => {
        if (isMounted) {
          props.setLoadingState(false);
          props.setLaunchDetails(launches.data);
        }
      })
      .catch(err => {
        props.setLoadingState(false);
        setError(true);
      });
    return () => {
      isMounted = false;
    };
  }, []);

  if (props.loading) {
    return (
      <div className={launchDetailStyles["loading-wrapper"]}>
        <Spinner animation="grow" variant="primary"></Spinner>
      </div>
    );
  } else if (error) {
    return (
      <div className={launchDetailStyles["loading-wrapper"]}>
        Something went wrong.Please try again later.
      </div>
    );
  } else if (props.launchData.length === 0) {
    return (
      <div className={launchDetailStyles["loading-wrapper"]}>
        No data available
      </div>
    );
  } else {
    return (
      <Container fluid="xs">
        <Row>
          {props.launchData.map((data, index) => (
            <Col key={"title_wrapper_" + index} sm={4} md={6} lg={3}>
              <div className={launchDetailStyles["tile-wrapper"]}>
                <LauchTile key={"tile_" + index} launchData={data} />
              </div>
            </Col>
          ))}
        </Row>
      </Container>
    );
  }
}

const mapStateToProps = state => {
  return {
    selectedLaunchYear: state.filterReducer.selectedFilter.launchYear,
    launchData: state.launchDetailReducer.launchData,
    loading: state.loadingReducer.loadingState
  };
};

const mapDispatchToProps = dispatch => {
  return {
    setLaunchDetails: value => dispatch(setLaunchDetails(value)),
    setLoadingState: value => dispatch(setLoadingState(value))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(LaunchDetails);
