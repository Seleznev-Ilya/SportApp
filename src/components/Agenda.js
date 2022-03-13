import React from "react";
import { exercises } from "../constants";
import { agenda } from "../utils";

const Agenda = () => {
  const { sets, weekday } = agenda;
  const getMuscle = (set) => exercises.find((item) => item.id === set.group);

  const renderSubMuscleLi = (node, nodeTitle) => {
    return node?.map((item) => {
      const { title, exercise } = item;
      return (
        <div>
          <h2>{`${nodeTitle}, ${title}:`}</h2>
          <ul>{getSubExercises(exercise)}</ul>
        </div>
      );
    });
  };

  const getExercises = (exercise, nodeTitle) => {
    return (
      <div>
        <h2>{`${nodeTitle}:`}</h2>
        <ul>{getSubExercises(exercise)}</ul>
      </div>
    );
  };

  const getSubExercises = (list) => {
    return list.map((item) => {
      return <li>{item.title}</li>;
    });
  };
  return (
    <>
      <h1>Agenda: {weekday}</h1>
      {sets.map((set) => {
        const { node, title, exercise } = getMuscle(set);
        return (
          <div>
            <div>
              {node
                ? renderSubMuscleLi(node, title)
                : getExercises(exercise, title)}
            </div>
          </div>
        );
      })}
    </>
  );
};

export default Agenda;
