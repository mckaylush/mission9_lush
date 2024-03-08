//McKay Lush
//Sec. 2

//All the needed imports like the JSON file is imported here
import React from "react";
import teamData from "./CollegeBasketballTeams.json";
import "./App.css";

//interface that establishes names used throughout the entire app
interface TeamCard {
  name: string;
  mascot: string;
  location: string;
}

const teamName = teamData.teams;

//Calls upon the JSON file and dynamically puts the file into the react website
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
      {teamName.map((team) => (
        <div key={team.tid}>
          <Teams
            name={team.school}
            mascot={team.name}
            location={`${team.city}, ${team.state}`}
          />
        </div>
      ))}
    </div>
  );
}

//The header of the app
function Welcome() {
  return (
    <div>
      <h1>Welcome to March Madness!!</h1>
      <h3>
        Look through the following list and see if you can find your college
        team!
      </h3>
      ;
    </div>
  );
}

//Puts everything together to be put on the react
function App() {
  return (
    <div className="App">
      <Welcome />
      <TeamList />
    </div>
  );
}

export default App;
