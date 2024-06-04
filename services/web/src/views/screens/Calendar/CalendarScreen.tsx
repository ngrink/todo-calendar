import { useCalendar } from "@/modules/calendar";
import { CalendarMonitor } from "@/components/CalendarMonitor";
import { Calendar } from "@/components/Calendar";
import cl from "./CalendarScreen.module.scss";

export const CalendarScreen = () => {
  const { selectedMonth, selectedDays, goPreviousMonth, goNextMonth } =
    useCalendar();

  return (
    <div className={cl.page}>
      <CalendarMonitor
        selectedMonth={selectedMonth}
        goPreviousMonth={goPreviousMonth}
        goNextMonth={goNextMonth}
      />

      <div className={cl.calendarWrapper}>
        <Calendar selectedMonth={selectedMonth} dates={selectedDays} />
      </div>
    </div>
  );
};
