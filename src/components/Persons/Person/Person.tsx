import React from "react";
import classes from "./Person.module.css";

const person = (props: {
  name: string;
  age: number;
  click?: any;
  changed?: any;
  children?: string;
}) => {
  return (
    <div className={classes.Person}>
      <p onClick={props.click}>
        I'm {props.name} and I am {props.age} years old!
      </p>
      <p>{props.children}</p>
      <input type="text" onChange={props.changed} value={props.name} />
    </div>
    // </div>
  );
};

export default person;
