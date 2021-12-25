import "./InpControl";

export const allTasksBtnFunc = () => {
  const allButton = document.querySelector("#allTasks");
  const activeTasksButton = document.querySelector("#activeTasks");
  const completedTasksButton = document.querySelector("#completedTasks");
  allButton.style.fontSize = "19px";
  activeTasksButton.style.fontSize = "15px";
  completedTasksButton.style.fontSize = "15px";
};

export const activeTasksBtn = () => {
  const allButton = document.querySelector("#allTasks");
  const activeTasksButton = document.querySelector("#activeTasks");
  const completedTasksButton = document.querySelector("#completedTasks");
  allButton.style.fontSize = "15px";
  activeTasksButton.style.fontSize = "19px";
  completedTasksButton.style.fontSize = "15px";
};

export const completedTasksBtn = () => {
  const allButton = document.querySelector("#allTasks");
  const activeTasksButton = document.querySelector("#activeTasks");
  const completedTasksButton = document.querySelector("#completedTasks");
  allButton.style.fontSize = "15px";
  activeTasksButton.style.fontSize = "15px";
  completedTasksButton.style.fontSize = "19px";
};
