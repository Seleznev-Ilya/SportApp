import React from "react";
import './Group.scss'

const SubGroup = ({ exercise, nodeTitle, title = '' }) => {
  const getExercises = (list) =>
    list.map((item, index) => (
      <li className="exercise" key={`${index}${item.title}`}>{item.title}</li>
    ));
  return (
    <div className="muscle_group" key={`${nodeTitle}${title}`}>
      <h3>{`${nodeTitle}${title && `, ${title}`}:`}</h3>
      <ul>{getExercises(exercise)}</ul>
    </div>
  );
};

export default SubGroup;
