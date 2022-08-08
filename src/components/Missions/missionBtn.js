import { useDispatch } from 'react-redux';
import { Button } from 'react-bootstrap';
import { reserveMission } from '../../redux/missions';

const missionBtn = ({ id, reserved }) => {
  const dispatch = useDispatch();

  const handleJoinMission = (e) => {
    e.preventDefault();
    dispatch(reserveMission({ id, reserved: !reserved }));
  };

  return (
    <>
      <td>
        {!reserved ? (
          <Button className="table-btns" variant="secondary" disabled>
            NOT A MEMBER
          </Button>
        ) : (
          <Button className="table-btns" variant="info" disabled>
            Active Member
          </Button>
        )}
      </td>
      <td>
        {reserved ? (
          <Button
            className="table-btns"
            variant="outline-danger"
            onClick={(e) => handleJoinMission(e)}
          >
            Leave Mission
          </Button>
        ) : (
          <Button
            className="table-btns"
            variant="outline-secondary"
            onClick={(e) => handleJoinMission(e)}
          >
            Join Mission
          </Button>
        )}
      </td>
    </>
  );
};

export default missionBtn;
