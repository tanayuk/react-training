import React, { Component, Fragment } from "react";
import Person from "./Person/Person";

interface PersonsProps {
  persons: any[];
  clicked?: any;
  changed?: any;
}

const persons: any = (props: PersonsProps) => {
  return props.persons.map((person: any, index: number) => {
    return (
      <Fragment>
        <Person
          name={person.name}
          age={person.age}
          click={() => props.clicked(index)}
          changed={(event: React.FormEvent<HTMLInputElement>) =>
            props.changed(event, person.id)
          }
        />
      </Fragment>
    );
  });
};

export default persons;
