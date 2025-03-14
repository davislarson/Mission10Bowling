import { bowlerInfo } from '../types/bowlerInfo';
import { useState, useEffect } from 'react';

function TeamList() {
  // Keep state for all the bowlers in the league
  const [bowlers, setBowlers] = useState<bowlerInfo[]>([]);

  // This will call the backend to get all the bowlers
  useEffect(() => {
    const fetchTeams = async () => {
      const res = await fetch('https://localhost:5000/BowlingLeague');
      const data = await res.json();
      setBowlers(data);
    };
    fetchTeams();
  }, []);

  // This will filter the bowlers to only show the Marlins and Sharks
  const filteredBowlers = bowlers.filter((bowler) => bowler.teamName === 'Marlins' || bowler.teamName === 'Sharks');

  return (
    <div className="container mt-4">
      <table className="table table-striped table-bordered">
        <thead className="thead-dark">
          <tr>
            <th>Full Name</th>
            <th>Team Name</th>
            <th>Address</th>
            <th>City</th>
            <th>State</th>
            <th>Zip</th>
            <th>Phone Number</th>
          </tr>
        </thead>
        <tbody>
          {filteredBowlers.map((bowler) => (
            <tr key={bowler.id}>
              <td>
                {bowler.bowlerFirstName} {bowler.bowlerMiddleInit} {bowler.bowlerLastName}
              </td>
              <td>{bowler.teamName}</td>
              <td>{bowler.bowlerAddress}</td>
              <td>{bowler.bowlerCity}</td>
              <td>{bowler.bowlerState}</td>
              <td>{bowler.bowlerZip}</td>
              <td>{bowler.bowlerPhoneNumber}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default TeamList;
