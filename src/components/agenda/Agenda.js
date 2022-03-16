import React from "react";
import { agenda, today } from "../../utils";
import Groups from "../group/Groups";
import "./Agenda.scss";

const Agenda = () => {
  const { sets } = agenda;

  return (
    <div className="agenda">
      <h1>Agenda: {today}</h1>
      {sets.length? <Groups agendaSets={sets} /> : <h2>Отдых</h2>}
    </div>
  );
};

export default Agenda;
