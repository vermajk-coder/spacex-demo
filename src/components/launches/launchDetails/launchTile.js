import launchStyles from "./launchTile.module.css";
export default function LaunchTile(props) {
  return (
    <div className={launchStyles.launchTile}>
      <div>
        <div className={launchStyles["mission-logo-wrapper"]}>
          <img
            src={props.launchData.links.mission_patch_small}
            alt="mission patch"
            className={launchStyles.missionLogo}
          />
        </div>
        <div className={launchStyles["flight-details"]}>
          <a href="#">
            {props.launchData.mission_name} # {props.launchData.flight_number}
          </a>
        </div>
        <h6>Mission Ids</h6>
        <ul>
          {props.launchData.mission_id.map((id, index) => (
            <li key={props.launchData.flight_number + index}>{id}</li>
          ))}
        </ul>
        <div className={launchStyles.content}>
          <h6>Launch Year:</h6>
          <span>{props.launchData.launch_year}</span>
        </div>
        <div className={launchStyles.content}>
          <h6>Successful Launch:</h6>
          <span>{props.launchData.launch_success ? "true" : "false"}</span>
        </div>
        <div className={launchStyles.content}>
          <h6>Successful Landing:</h6>
          <span>
            {props.launchData.rocket.first_stage.cores[0].landing_intent
              ? "true"
              : "false"}
          </span>
        </div>
      </div>
    </div>
  );
}
