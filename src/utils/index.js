import { agendaList, days, exercises } from "../constants";

export const today = new Date().getDay();

export const agenda = agendaList.find((item) => item.weekday === days[today]);



