import React from "react";
import "./Group.scss";

const SubGroup = ({ exercise, nodeTitle, title = "" }) => {
  console.log();
  const getExercises = (list) =>
    list.map((item, index) => {
      const id = `${nodeTitle}${title && `${title}`}:${item.id}`;
      return (
        <li className="exercise" key={id}>
          <form>
            <label>
              <input className="exercise__checkbox" id={id} type="checkbox" />
              <span>{item.title}</span>
            </label>
          </form>
        </li>
      );
    });
  return (
    <div className="muscle_group" key={`${nodeTitle}${title}`}>
      <h3>{`${nodeTitle}${title && `, ${title}`}:`}</h3>
      <ul>{getExercises(exercise)}</ul>
    </div>
  );
};

export default SubGroup;
