import { FC } from "react";
import { format } from "date-fns";
import { FaChevronLeft, FaChevronRight, FaUser } from "react-icons/fa";

import cl from "./CalendarMonitor.module.scss";

type CalendarMonitorProps = {
  selectedMonth: Date;
  goPreviousMonth: () => void;
  goNextMonth: () => void;
};

export const CalendarMonitor: FC<CalendarMonitorProps> = ({
  selectedMonth,
  goPreviousMonth,
  goNextMonth,
}) => {
  return (
    <div className={cl.header}>
      <div className={cl.headerLeft}>
        <div className={cl.heading}>{format(selectedMonth, "LLLL yyyy")}</div>
      </div>
      <div className={cl.headerRight}>
        <div className={cl.controls}>
          <button className={cl.controlsItem} onClick={goPreviousMonth}>
            <FaChevronLeft />
          </button>
          <button className={cl.controlsItem} onClick={goNextMonth}>
            <FaChevronRight />
          </button>
        </div>
        <button className={cl.userButton}>
          <FaUser />
        </button>
      </div>
    </div>
  );
};
