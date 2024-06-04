import { FC } from "react";
import { format, getDate, getMonth, isToday, isWeekend } from "date-fns";
import cn from "classnames";

import cl from "./CelendarCell.module.scss";

type CalendarCellProps = {
  selectedMonth: Date;
  date: Date;
};

export const CalendarCell: FC<CalendarCellProps> = ({
  selectedMonth,
  date,
}) => {
  const day = getDate(date);

  return (
    <div
      className={cn(cl.cell, {
        [cl.cellActive]: isToday(date),
        [cl.cellWeekend]: isWeekend(date),
        [cl.cellOutward]: getMonth(selectedMonth) !== getMonth(date),
      })}
      onClick={() => console.log(format(date, "yyyy-MM-dd"))}
    >
      <div className={cl.cellHeader}>
        <span className={cl.cellDay}>{day}</span>
      </div>
      <ul className={cl.cellTasks}>
        <li className={cl.cellTask}>Some task</li>
        <li className={cl.cellTask}>Another task</li>
        <li className={cl.cellTask}>+2</li>
      </ul>
    </div>
  );
};
