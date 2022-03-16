import React from "react";
import { exercises } from "../../constants";
import GroupFilter from "./GroupFilter";
import './Group.scss'

const Groups = ({ agendaSets }) => {
  if (!agendaSets) return null;
  const getMuscle = (group) =>
    exercises.find((item) => item.id === group.group);

  return (
    <>
      {agendaSets.map((group, index) => (
        <GroupFilter
          key={`${index}${group.id}`}
          muscle={getMuscle(group)}
          group={group}
        />
      ))}
    </>
  );
};

export default Groups;
