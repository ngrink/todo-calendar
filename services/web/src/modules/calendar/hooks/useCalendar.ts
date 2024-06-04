import { useMemo, useState } from "react"
import { addDays, addMonths, endOfISOWeek, endOfMonth, startOfISOWeek, startOfMonth, subMonths } from "date-fns"

export const useCalendar = (date?: Date) => {
  let [selectedMonth, setSelectedMonth] = useState(
    date 
      ? startOfMonth(date) 
      : startOfMonth(new Date())
  )
  
  const tableFirstDay = useMemo(() => {
    return startOfISOWeek(startOfMonth(selectedMonth))
  }, [selectedMonth])

  const tableLastDay = useMemo(() => {
    return endOfISOWeek(endOfMonth(selectedMonth))
  }, [selectedMonth])

  const selectedDays = useMemo(() => {
    const days: Date[] = []
    let current = tableFirstDay

    for (let i = 0; i < 42; i++) {
      days.push(current);
      current = addDays(current, 1)
    }

    return days
  }, [selectedMonth])

  const goPreviousMonth = () => {
    setSelectedMonth(subMonths(selectedMonth, 1))
  };

  const goNextMonth = () => {
    setSelectedMonth(addMonths(selectedMonth, 1))
  };

  return {
    selectedMonth, 
    selectedDays,
    goPreviousMonth, 
    goNextMonth, 
  }
}