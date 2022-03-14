import React from "react";
import { exercises } from "../constants";
import Group from "./Group";

const GroupList = ({ sets }) => {
  const getMuscle = (group) =>
    exercises.find((item) => item.id === group.group);
  return (
    <>
      {sets.map((group, index) => (
        <Group key={`${index}${group.id}`} muscle={getMuscle(group)} group={group} />
      ))}
    </>
  );
};

export default GroupList;
  