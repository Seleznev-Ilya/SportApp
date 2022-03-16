import React from "react";
import SubGroup from "./SubGroup";

const GroupFilter = ({ muscle, group }) => {
  const filteredList = (set) => {
    const { exercise, id } = set;
    const sortList = group.set[id - 1];
    return exercise.filter((item) => sortList.find((num) => num === item.id));
  };

  return (
    <>
      {!muscle?.node ? (
        <SubGroup exercise={filteredList(muscle)} nodeTitle={muscle.title} />
      ) : (
        muscle.node.map((subMuscle, index) => (
          <SubGroup
            key={subMuscle.id + index}
            exercise={filteredList(subMuscle)}
            nodeTitle={muscle.title}
            title={subMuscle.title}
          />
        ))
      )}
    </>
  );
};

export default GroupFilter;
