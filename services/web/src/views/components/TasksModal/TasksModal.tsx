import { FC } from "react";
import { observer } from "mobx-react-lite";
import { format } from "date-fns";
import { IoIosClose } from "react-icons/io";
import cn from "classnames";

import { useStore } from "@/config";
import { Modal } from "../ui/Modal";
import cl from "./TasksModal.module.scss";

export const TasksModal: FC = observer(() => {
  const { calendarStore } = useStore();

  if (!calendarStore.selectedDay) {
    return null;
  }

  return (
    <Modal
      active={!!calendarStore.selectedDay}
      close={() => calendarStore.unsetSelectedDay()}
    >
      <div className={cl.content}>
        <div className={cl.contentHeader}>
          <div className={cl.heading}>
            Задачи на {format(calendarStore.selectedDay, "dd.MM.yyyy")}
          </div>
          <button
            className={cl.addTaskBtn}
            onClick={() =>
              calendarStore.addTask("", calendarStore.selectedDayFormatted)
            }
          >
            Добавить задачу
          </button>
        </div>
        <div className={cl.contentBody}>
          {!calendarStore.selectedTasks.length && (
            <div className={cl.noTasksLabel}>Нет задач</div>
          )}
          {calendarStore.selectedTasks.length > 0 && (
            <ul className={cl.taskList}>
              {calendarStore.selectedTasks.map((task) => (
                <Task
                  key={task.id}
                  title={task.title}
                  completed={task.completed}
                  onToggle={() => calendarStore.toggleTask(task.id)}
                  onChange={(title) => calendarStore.changeTask(task.id, title)}
                  onDelete={() => calendarStore.removeTask(task.id)}
                />
              ))}
            </ul>
          )}
        </div>
      </div>
    </Modal>
  );
});

type TaskProps = {
  title: string;
  completed: boolean;
  onToggle: () => void;
  onChange: (title: string) => void;
  onDelete: () => void;
};

const Task: FC<TaskProps> = ({
  title,
  completed,
  onToggle,
  onChange,
  onDelete,
}) => {
  return (
    <div
      className={cn(cl.task, {
        [cl.taskCompleted]: completed,
      })}
    >
      <input type="checkbox" checked={completed} onChange={onToggle} />
      <input
        className={cl.taskInputTitle}
        placeholder="..."
        value={title}
        onChange={(e) => onChange(e.target.value)}
      />
      <button className={cl.taskDeleteBtn} onClick={onDelete}>
        <IoIosClose size={24} color="#ccc" />
      </button>
    </div>
  );
};
