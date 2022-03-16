import { agendaList, days, exercises } from "../constants";

export const today = days[new Date().getDay()];

export const agenda = agendaList.find((item) => item.weekday === today);



