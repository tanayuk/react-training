import React, {Component} from "react";
import Person from "./Person/Person";

interface PersonsProps {
  persons: any[];
  clicked?: any;
  changed?: any;
}

class Persons extends Component<PersonsProps> {
  render(){
    this.props.persons.map((person: any, index: number) => {
    return (
      <div>
        <Person
          name={person.name}
          age={person.age}
          click={() => this.props.clicked(index)}
          changed={(event: React.FormEvent<HTMLInputElement>) =>
            this.props.changed(event, person.id)
          }
        />
      </div>
    )}}
    
}

export default Persons;
