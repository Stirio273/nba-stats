import logo from "./logo.svg";
import "./App.css";
import PlayerStatsTable from "./Table/PlayerTable";

function App() {
  const players = [
    {
      rank: 1,
      playerName: "LeBron James",
      team: "Los Angeles Lakers",
      matches: 82,
      minutesPlayed: 35.2,
      pointsPerMatch: 27.4,
      reboundsPerMatch: 8.5,
      assistsPerMatch: 8.3,
      fieldGoalPercentage: 51.6,
      threePointPercentage: 34.6,
      freeThrowPercentage: 73.1,
      efficiency: 28.6,
    },
    {
      rank: 2,
      playerName: "Kevin Durant",
      team: "Brooklyn Nets",
      matches: 68,
      minutesPlayed: 33.8,
      pointsPerMatch: 26.9,
      reboundsPerMatch: 7.1,
      assistsPerMatch: 5.6,
      fieldGoalPercentage: 52.3,
      threePointPercentage: 45.0,
      freeThrowPercentage: 86.3,
      efficiency: 27.5,
    },
    // Add more players as needed
  ];
  return (
    <div className="app">
      <h1>Basketball Player Statistics</h1>
      <PlayerStatsTable players={players} />
    </div>
  );
}

export default App;
