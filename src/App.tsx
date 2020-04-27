import classes from "./App.module.css";
import React, { Component } from "react";
import Person from "./Person/Person";

interface ButtonProps {
  readonly alt: boolean;
}

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
    let persons = null;
    let btnClass = [classes.Button];
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
      btnClass.push(classes.Red);
    }

    const assignedClasses = [];
    if (this.state.persons.length <= 2) {
      assignedClasses.push("red");
    }
    if (this.state.persons.length <= 1) {
      assignedClasses.push("bold");
    }

    return (
      <div className={classes.App}>
        <h1>Hi I'm a react app</h1>
        <p className={assignedClasses.join(" ")}>This is really working</p>
        <button
          className={btnClass.join(" ")}
          onClick={this.togglePersonsHandler}
        >
          Switch Name
        </button>
        {persons}
      </div>
    );
  }
}

export default App;
