import React, { Component } from "react";
import Table from "./Table";
import Forms from "./Forms";
class App extends Component {
  removeCharacter = index => {
    const { characters } = this.state;

    this.setState({
      characters: characters.filter((character, i) => {
        return i !== index;
      })
    });
  };

  state = {
    characters: [
      {
        name: "Charlie",
        job: "Janitor"
      },
      {
        name: "Mac",
        job: "Bouncer"
      },
      {
        name: "Dee",
        job: "Aspring actress"
      },
      {
        name: "Dennis",
        job: "Bartender"
      }
    ]
  };

  handleSubmit = character => {
    this.setState({ characters: [...this.state.characters, character] });
  };

  render() {
    return (
      <div className="container">
        <h1>React Table</h1>
        <Table
          characterData={this.state.characters}
          removeCharacter={this.removeCharacter}
        />
        <Forms handleSubmit={this.handleSubmit} />
      </div>
    );
  }
}

export default App;
