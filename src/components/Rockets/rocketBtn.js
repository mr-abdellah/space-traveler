import Button from 'react-bootstrap/Button';
import { useDispatch } from 'react-redux';
import { reserveRocket } from '../../redux/rockets';

const rocketBtn = ({ id, reserved }) => {
  const dispatch = useDispatch();
  const handleReserved = (e) => {
    e.preventDefault();
    dispatch(reserveRocket({ id, reserved: !reserved }));
  };
  return (
    <>
      {reserved ? (
        <Button variant="outline-secondary" onClick={(e) => handleReserved(e)}>
          Cancel Reservation
        </Button>
      ) : (
        <Button variant="primary" onClick={handleReserved}>
          Reserve Rocket
        </Button>
      )}
    </>
  );
};

export default rocketBtn;
