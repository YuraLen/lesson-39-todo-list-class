import React from "react";
import "../task-list/styles/main.css"
import {
  allTasksBtnFunc,
  activeTasksBtn,
  completedTasksBtn
} from "./changeBtnColor";

export const InpFilter = ({ filterInput, inputFilterHandler, addNewTasks }) => {
  const handler = (e) => {
    inputFilterHandler(e.target.value);
  };

  return (
    <div>
      <input
        type="text"
        value={filterInput}
        onChange={handler}
        placeholder={"Поиск..."}
      />
    </div>
  );
};

export const ControlBar = ({ changeDisplayedList }) => {
  return (
    <div>
      <br />
      <div className={"controlMainDiv"}>
        <button
          id={"allTasks"} className={("controlTwoButtons", "allTasks", "osnova-karkasa")}
          onClick={() => {
            changeDisplayedList("all");
            allTasksBtnFunc();
          }}
        >
          Все задачи
        </button>
        <button
          id={"activeTasks"} className={("controlTwoButtons", "onlyActiveTasks", "osnova-karkasa")}
          onClick={() => {
            changeDisplayedList("active");
            activeTasksBtn();
          }}
        >
          Активные задачи
        </button>
        <button
          id={"completedTasks"} className={("onlyClosedTasks", "osnova-karkasa")}
          onClick={() => {
            changeDisplayedList("closed");
            completedTasksBtn();
          }}
        >
          Завершенные задачи
        </button>
      </div>
    </div>
  );
};


export class Form extends React.Component {
  state = {
    taskName: "",
    isImportant: false
  };

  inputTaskName = (e) => {
    this.setState({
      taskName: e.target.value
    });
  };

  buttonHandler = () => {
    const { taskName } = this.state;
    if (taskName) {
      this.props.addNewTasks({
        taskName,
        taskId: Date.now(),
        isImportant: false,
        isActive: true,
        isCompleted: false
      });
    }
  };

  render() {
    const { taskName } = this.state;
    return (
      <div className={"firstInput"}>
        <input
          type={"text"}
          placeholder="Название задачи"
          value={taskName}
          onChange={this.inputTaskName}
        />
        <button className={"buttonForm"} onClick={this.buttonHandler} disabled={!taskName}>
          Добавить
        </button>
      </div>
    );
  }
}
