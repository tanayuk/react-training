import classes from "./App.module.css";
import React, { Component } from "react";
import Persons from "../components/Persons/Persons";
import Cockpit from "../components/Cockpit/Cockpit";

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
        <>
          <Persons
            persons={this.state.persons}
            clicked={this.deletePersonHandler}
            changed={this.nameChangeHandler}
          />
        </>
      );
      btnClass.push(classes.Red);
    }
    return (
      <div className={classes.App}>
        <Cockpit
          showPersons={this.state.showPersons}
          persons={this.state.persons}
          clicked={this.togglePersonsHandler}
        />
        {persons}
      </div>
    );
  }
}

export default App;
