/* eslint-disable max-len */
import '../styles/myProfile.css';
import { useSelector } from 'react-redux';
import MissionBtn from '../Missions/missionBtn';
import RocketBtn from '../Rockets/rocketBtn';

const myProfile = () => {
  // missions filter
  const missions = useSelector((state) => state.missions.missions);
  const filteredMission = missions.filter(
    (mission) => mission.reserved === true,
  );

  //

  // rockets filter

  const rockets = useSelector((state) => state.rockets.rockets);

  const filteredRockets = rockets.filter((rocket) => rocket.reserved === true);

  return (
    <div className="containers">
      <div className="my-rockets">
        <h3>My Rockets</h3>
        <div className="my-mission">
          {filteredRockets.length <= 0 ? (
            <h4>No Reserved Rockets</h4>
          ) : (
            filteredRockets.map((rocket) => (
              <div className="myprofile-rocket" key={rocket.id}>
                <h4 key={rocket.id}>{rocket.rocket_name}</h4>
                <RocketBtn id={rocket.id} reserved={rocket.reserved} />
              </div>
            ))
          )}
        </div>
      </div>

      <div className="my-missions">
        <h3>My Missions</h3>
        <div className="my-mission">
          {filteredMission.length <= 0 ? (
            <h4>No Reserved Missions</h4>
          ) : (
            filteredMission.map((mission) => (
              <div className="myprofile-mission" key={mission.id}>
                <h4 key={mission.id}>{mission.name}</h4>
                <MissionBtn id={mission.id} reserved={mission.reserved} />
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
};

export default myProfile;
