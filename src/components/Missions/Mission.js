/* eslint-disable react/prop-types */
/* eslint-disable jsx-a11y/control-has-associated-label */
/* eslint-disable max-len */

import '../styles/mission.css';
import MissionBtn from './missionBtn';

const Mission = ({
  id, name, description, reserved,
}) => (
  <tr>
    <td>{name}</td>
    <td>{description}</td>
    <MissionBtn id={id} reserved={reserved} />
  </tr>
);

export default Mission;
