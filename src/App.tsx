import "./App.css";
import React, { Component } from "react";
import Person from "./Person/Person";

class App extends Component {
  state = {
    persons: [
      { id: "asdf", name: "Yuki", age: 34 },
      { id: "zdf", name: "Kana", age: 3 },
      { id: "adlksjfk", name: "Hisae", age: 35 },
    ],
    showPersons: false,
  };

  nameChangeHandler = (
    event: React.FormEvent<HTMLInputElement>,
    id: string
  ) => {
    const personIndex = this.state.persons.findIndex((p) => {
      return p.id === id;
    });
    const person = { ...this.state.persons[personIndex] };

    person.name = event.currentTarget.value;
    const persons = [...this.state.persons];
    persons[personIndex] = person;
    this.setState({
      persons: persons,
    });
  };

  deletePersonHandler = (personIndex: number) => {
    // const persons = this.state.persons.slice();
    const persons = [...this.state.persons];
    persons.splice(personIndex, 1);
    this.setState({ persons: persons });
  };

  togglePersonsHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({ showPersons: !doesShow });
  };

  render() {
    let style = {
      backgroundColor: "green",
      color: "white",
      font: "inherit",
      border: "1px solid blue",
      padding: "8px",
      cursor: "pointer",
    };

    let persons = null;
    if (this.state.showPersons) {
      persons = (
        <div>
          {this.state.persons.map((person, index) => {
            return (
              <Person
                name={person.name}
                age={person.age}
                click={() => this.deletePersonHandler(index)}
                key={person.id}
                changed={(event: React.FormEvent<HTMLInputElement>) =>
                  this.nameChangeHandler(event, person.id)
                }
              />
            );
          })}
        </div>
      );
      style.backgroundColor = "red";
    }

    const classes = [];
    if (this.state.persons.length <= 2) {
      classes.push("red");
    }
    if (this.state.persons.length <= 1) {
      classes.push("bold");
    }

    return (
      <div className="App">
        <h1>Hi I'm a react app</h1>
        <p className={classes.join(" ")}>This is really working</p>
        <button style={style} onClick={this.togglePersonsHandler}>
          Switch Name
        </button>
        {persons}
      </div>
    );
  }
}

export default App;
