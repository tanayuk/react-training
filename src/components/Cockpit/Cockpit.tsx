import React from "react";
import classes from "./Cockpit.module.css";

interface CockpitProps {
  persons: { name: string; age: number }[];
  showPersons: boolean;
  clicked: any;
}

const cockpit = (props: CockpitProps) => {
  let btnClass = "";
  if (props.showPersons) {
    btnClass = classes.Red;
  }
  const assignedClasses = [];
  if (props.persons.length <= 2) {
    assignedClasses.push(classes.red);
  }
  if (props.persons.length <= 1) {
    assignedClasses.push(classes.bold);
  }

  return (
    <div className="Cockpit">
      <h1>Hi I'm a react app</h1>
      <p className={assignedClasses.join(" ")}>This is really working</p>
      <button className={btnClass} onClick={props.clicked}>
        Switch Name
      </button>
    </div>
  );
};
export default cockpit;
