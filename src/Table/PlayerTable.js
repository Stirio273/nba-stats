import React from "react";

import "./PlayerTable.css";

const PlayerStatsTable = ({ players }) => {
  return (
    <div className="player-stats-table">
      <h2>Player Statistics</h2>
      <table>
        <thead>
          <tr>
            <th>Classement</th>
            <th>Joueur</th>
            <th>Equipe</th>
            <th>M</th>
            <th>MJ</th>
            <th>PPM</th>
            <th>RPM</th>
            <th>PDPM</th>
            <th>MPM</th>
            <th>EFF</th>
            <th>FG%</th>
            <th>3P%</th>
          </tr>
        </thead>
        <tbody>
          {players.map((player, index) => (
            <tr key={index}>
              <td>{player.rank}</td>
              <td>{player.playerName}</td>
              <td>{player.team}</td>
              <td>{player.matches}</td>
              <td>{player.minutesPlayed}</td>
              <td>{player.pointsPerMatch}</td>
              <td>{player.reboundsPerMatch}</td>
              <td>{player.assistsPerMatch}</td>
              <td>{player.fieldGoalPercentage}</td>
              <td>{player.threePointPercentage}</td>
              <td>{player.freeThrowPercentage}</td>
              <td>{player.efficiency}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default PlayerStatsTable;
