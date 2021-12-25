import React from "react";

export const TaskItem = (p) => {
  const {
    taskName,
    taskId,
    isImportant,
    isActive,
    isCompleted,
    deleteTask,
    activeTasks,
    importantTasks,
    completedTasks
  } = p;
  const boldText = {
    fontWeight: "bold"
  };

  const taskNameStyle = {
    fontSize: "25px",
    paddingBottom: "20px"
  };

  const del = () => {
    deleteTask(taskId);
  };

  const important = () => {
    importantTasks(taskId);
  };

  const active = () => {
    activeTasks(taskId);
  };

  const completed = () => {
    completedTasks(taskId);
  };
  return (
    <div className={"box"}>
      <p style={taskNameStyle}>{taskName}</p>
      <p style={boldText}>Важна ли задача: {isImportant.toString()}</p>
      <p>Задача активна: {isActive.toString()}</p>
      <p>Задача завершена: {isCompleted.toString()}</p>
      <div className={"buttons"}>
        <button onClick={del} className={"delete"}>
          Удалить
        </button>
        <button onClick={important} className={"importantBtn"}>
          Важно?
        </button>
        <button onClick={active} className={"activeBtn"}>
          Активно?
        </button>
        <button onClick={completed} className={"completedBtn"}>
          Завершение задачи
        </button>
      </div>
    </div>
  );
};
