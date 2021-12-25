import React from "react";
import { TaskItem } from "./TaskItem";

export const TaskList = ({
  tasks,
  deleteTask,
  importantTasks,
  activeTasks,
  completedTasks
}) => (
  <div className={"noteBorder"}>
    {tasks.map((task) => (
      <TaskItem
        key={task.id}
        {...task}
        importantTasks={importantTasks}
        deleteTask={deleteTask}
        activeTasks={activeTasks}
        completedTasks={completedTasks}
      />
    ))}
  </div>
);
