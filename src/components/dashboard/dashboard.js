import { Container, Col, Row } from "react-bootstrap";
import Filter from "../launches/filter/filter";
import LaunchDetails from "../launches/launchDetails/launchDetails";
import dashboardStyle from "./dashboard.module.css";

export default function Dashboard() {
  return (
    <div>
      <h5>SpaceX Launch Programs</h5>
      <Container>
        <Row>
          <Col xs={12} md={4} xl={2}>
            <Filter />
          </Col>
          <Col xs={12} md={8} xl={10}>
            <LaunchDetails />
          </Col>
        </Row>
      </Container>
      <div className={dashboardStyle.author}>
        <strong>Developed by: </strong>
        {process.env.author}
      </div>
    </div>
  );
}
