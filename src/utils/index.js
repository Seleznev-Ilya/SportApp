import { days } from "../constants";

export const today = days[new Date().getDay()];

export const agenda = (agendaList) => agendaList.find((item) => item.weekday === today);



