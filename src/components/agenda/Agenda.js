import React from "react";
import { agendaList } from "../../constants";
import { agenda as getAgenda, today } from "../../utils";
import Groups from "../group/Groups";
import "./Agenda.scss";

const Agenda = () => {
  const agenda = getAgenda(agendaList);

  return (
    <div className="agenda">
      <h1>Agenda: {today}</h1>
      {agenda?.sets ? <Groups agendaSets={agenda.sets} /> : <h2>Отдых</h2>}
    </div>
  );
};

export default Agenda;
