import { FC } from "react";
import { observer } from "mobx-react-lite";
import { getDate, getMonth, isToday, isWeekend } from "date-fns";
import cn from "classnames";

import { useStore } from "@/config";
import cl from "./CelendarCell.module.scss";

type CalendarCellProps = {
  selectedMonth: Date;
  date: Date;
};

export const CalendarCell: FC<CalendarCellProps> = observer(
  ({ selectedMonth, date }) => {
    const { calendarStore } = useStore();
    const day = getDate(date);

    return (
      <div
        className={cn(cl.cell, {
          [cl.cellActive]: isToday(date),
          [cl.cellWeekend]: isWeekend(date),
          [cl.cellOutward]: getMonth(selectedMonth) !== getMonth(date),
          [cl.cellDayoff]: calendarStore.isDayOff(date),
        })}
        onClick={() => calendarStore.setSelectedDay(date)}
      >
        <div className={cl.cellHeader}>
          <span className={cl.cellDay}>{day}</span>
        </div>
      </div>
    );
  }
);
