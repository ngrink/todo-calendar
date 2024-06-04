import { makeAutoObservable } from "mobx"
import { makePersistable } from "mobx-persist-store";
import { v4 as uuidv4 } from 'uuid';

import { Task } from "./calendar.types";
import { format } from "date-fns";


export class CalendarStore {
  calendar: {[key: string]: string[]} = {}
  tasks: {[key: string]: Task} = {}
  selectedDay: Date | null = null;

  constructor() {
    makeAutoObservable(this);
    makePersistable(this, {
      name: 'CalendarStore',
      properties: [
        'calendar',
        'tasks',
      ],
      storage: window.localStorage
    })
  }

  get selectedDayFormatted() {
    if (!this.selectedDay) {
      return ''
    }

    return format(this.selectedDay, 'yyyy-mm-dd')
  }

  get selectedTasks() {
    if (!this.selectedDay) {
      return []
    }
    
    const ids = this.calendar[this.selectedDayFormatted] || []
    const tasks = ids.map(id => this.tasks[id])

    return tasks
  }

  addTask(title: string, date: string) {
    const id = uuidv4()
    const task = {id, title, date, completed: false, createdAt: new Date()}

    if (this.calendar[date]) {
      this.calendar[date].push(id)
    } else {
      this.calendar[date] = [id]
    }

    this.tasks[id] = task

    return task
  }

  completeTask(id: string) {
    this.tasks[id].completed = true
  }

  uncomleteTask(id: string) {
    this.tasks[id].completed = false
  }

  toggleTask(id: string) {
    this.tasks[id].completed = !this.tasks[id].completed
  }

  changeTask(id: string, title: string) {
    this.tasks[id].title = title
  }

  removeTask(id: string) {
    const date = this.tasks[id].date
    delete this.tasks[id]

    this.calendar[date] = this.calendar[date].filter(taskId => taskId !== id)
  }

  setSelectedDay(date: Date) {
    this.selectedDay = date
  }

  unsetSelectedDay() { 
    this.selectedDay = null
  }
}

