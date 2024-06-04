import { FC } from "react";

import { CalendarCell } from "@/components/CalendarCell";
import cl from "./CalendarGrid.module.scss";

type CalendarProps = {
  selectedMonth: Date;
  dates: Date[];
};

export const CalendarGrid: FC<CalendarProps> = ({ selectedMonth, dates }) => {
  return (
    <ul className={cl.grid}>
      {dates.map((date) => (
        <li className={cl.gridItem} key={date.getTime()}>
          <CalendarCell selectedMonth={selectedMonth} date={date} />
        </li>
      ))}
    </ul>
  );
};
