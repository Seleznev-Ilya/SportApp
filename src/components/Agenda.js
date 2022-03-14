import React from "react";
import { agenda } from "../utils";
import GroupList from "./GroupList";

const Agenda = () => {
  const { sets, weekday } = agenda;

  return (
    <>
      <h1>Agenda: {weekday}</h1>
      <GroupList sets={sets} />
    </>
  );
};

export default Agenda;
