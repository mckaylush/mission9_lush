import React from "react";
import "./App.css";

interface TeamCard {
  name: string;
  mascot: string;
  location: string;
}

const teamName = [
  {
    name: "The Chicago Bulls",
    mascot: "Bull",
    location: "Chicago",
  },
];

class Teams extends React.Component<TeamCard> {
  render() {
    const oneTeam = this.props;

    return (
      <div>
        <h2>{oneTeam.name}</h2>
        <h3>Members: {oneTeam.mascot}</h3>
        <h3>Formed: {oneTeam.location}</h3>
      </div>
    );
  }
}

function TeamList() {
  return (
    <div>
      {teamName.map((teamNum) => (
        <Teams {...teamNum} />
      ))}
    </div>
  );
}

function Welcome() {
  return <h1>Welcome to March Madness!!</h1>;
}

function App() {
  return (
    <div className="App">
      <Welcome />
      <TeamList />
    </div>
  );
}

export default App;
