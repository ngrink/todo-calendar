import { FC } from "react";

import { CalendarHeader } from "../CalendarHeader";
import { CalendarGrid } from "../CalendarGrid";
import cl from "./Calendar.module.scss";

type CalendarProps = {
  selectedMonth: Date;
  dates: Date[];
};

export const Calendar: FC<CalendarProps> = ({ selectedMonth, dates }) => {
  return (
    <div className={cl.calendar}>
      <CalendarHeader />
      <CalendarGrid selectedMonth={selectedMonth} dates={dates} />
    </div>
  );
};
