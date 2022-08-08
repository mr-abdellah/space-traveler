/* eslint-disable jsx-a11y/control-has-associated-label */
import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Table from 'react-bootstrap/Table';
import { loadMission } from '../../redux/missions';
import Mission from './Mission';
import '../styles/mission.css';

export default function MissionsContainer() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(loadMission());
  }, []);
  const { missions, pending } = useSelector((state) => state.missions);
  return (
    <div className="mission-container">
      <Table striped bordered hover size="sm">
        <thead>
          <tr>
            <th>Mission</th>
            <th>Description</th>
            <th>Status</th>
            <th />
          </tr>
        </thead>
        <tbody>
          {pending ? (
            <h3>pending</h3>
          ) : (
            missions.map((mission) => (
              <Mission
                key={mission.id}
                id={mission.id}
                name={mission.name}
                description={mission.description}
                reserved={mission.reserved}
              />
            ))
          )}
        </tbody>
      </Table>
    </div>
  );
}
