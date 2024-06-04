import { FC } from "react";

import { weekdaysShort } from "@/modules/calendar";
import cl from "./CalendarHeader.module.scss";

export const CalendarHeader: FC = () => {
  return (
    <ul className={cl.header}>
      {weekdaysShort.map((weekday) => (
        <li key={weekday} className={cl.headerItem}>
          {weekday}
        </li>
      ))}
    </ul>
  );
};
