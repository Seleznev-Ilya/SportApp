import React from "react";

const Group = ({ muscle, group }) => {
  //   console.log(muscle);
  //   console.log(group.set);
  const headTitle = (exercise, nodeTitle, title = "") => (
    <div key={`${nodeTitle}${title}`}>
      <h3>{`${nodeTitle}${title && `, ${title}`}:`}</h3>
      <ul>{getSubExercises(exercise)}</ul>
    </div>
  );

  const getSubExercises = (list) =>
    list.map((item, index) => (
      <li key={`${index}${item.title}`}>{item.title}</li>
    ));

  const filteredList = (list, setList) => {
    if (!setList) {
      return list;
    }
    const sortList = group.set[setList.id - 1];

    return list.filter((item) => sortList.find((num) => num === item.id));
  };

  return (
    <>
      {!muscle.node
        ? headTitle(filteredList(muscle.exercise), muscle.title)
        : muscle.node.map((item) =>
            headTitle(
              filteredList(item.exercise, item),
              muscle.title,
              item.title
            )
          )}
    </>
  );
};

export default Group;
