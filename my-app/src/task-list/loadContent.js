export const loadTasks = () =>
  new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(tasks);
    }, 2000);
  });

const tasks = [
  {
    taskName: "Сделать ДЗ",
    taskId: 1,
    isImportant: true,
    isActive: true,
    isCompleted: false
  },
  {
    taskName: "Посмотреть фильм",
    taskId: 2,
    isImportant: false,
    isActive: false,
    isCompleted: true
  },
  {
    taskName: "Погулять с друзьями",
    taskId: 3,
    isImportant: true,
    isActive: true,
    isCompleted: false
  }
];
