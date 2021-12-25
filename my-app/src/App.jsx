import React from "react";
import { TaskList } from "./task-list/TaskList";
// import { ControlBar } from "./control-bar/ControlBar";
import { InpFilter, Form, ControlBar } from "./control-bar/InpControl";
import { loadTasks } from "./task-list/loadContent";
import "./task-list/styles/main.css";

console.clear();

export class App extends React.Component {
  constructor(p) {
    super(p);

    this.state = {
      tasks: [],
      displayedList: "all",
      filterInput: "",
      addInput: ""
    };
  }

  componentDidMount() {
    loadTasks().then((data) => {
      this.setState({
        tasks: data
      });
    });
  }

  changeDisplayedList = (displayedList) => {
    this.setState({
      displayedList
    });
  };

  deleteTask = (taskId) => {
    const cb = (prevState) => {
      const { tasks } = prevState;
      const newArrTask = tasks.filter((item) => item.taskId !== taskId);

      return {
        tasks: newArrTask
      };
    };

    this.setState(cb);
  };

  importantTasks = (taskId) => {
    this.setState((prevState) => ({
      tasks: prevState.tasks.map((item) =>
        item.taskId === taskId
          ? { ...item, isImportant: !item.isImportant }
          : item
      )
    }));
  };

  activeTasks = (taskId) => {
    this.setState((prevState) => ({
      tasks: prevState.tasks.map((item) =>
        item.taskId === taskId ? { ...item, isActive: !item.isActive } : item
      )
    }));
  };

  completedTasks = (taskId) => {
    this.setState((prevState) => ({
      tasks: prevState.tasks.map((item) =>
        item.taskId === taskId
          ? { ...item, isCompleted: !item.isCompleted }
          : item
      )
    }));
  };

  inputFilterHandler = (filterInput) => {
    this.setState({
      filterInput
    });
  };

  addNewTasks = (taskName) => {
    const cb = (state) => {
      const { tasks } = state;

      const newTasks = [...tasks];

      newTasks.push(taskName);

      return {
        tasks: newTasks
      };
    };

    this.setState(cb);
  };

  render() {
    const { tasks, displayedList, filterInput } = this.state;
    if (tasks.length === 0) {
      return <div>load...</div>;
    }

    const finalTasks =
      displayedList === "all"
        ? tasks
        : displayedList === "active"
        ? tasks.filter((item) => item.isActive)
        : tasks.filter((item) => item.isCompleted);

    const filteredTasks = filterTasks(finalTasks, filterInput);

    return (
      <div>
        <div className={"app"}>
          <div className={"controlBar"}>
            <InpFilter
              filterInput={filterInput}
              inputFilterHandler={this.inputFilterHandler}
            />
            <ControlBar
              filterInput={this.filterInput}
              inputFilterHandler={this.inputFilterHandler}
              activeTasks={this.activeTasks}
              changeDisplayedList={this.changeDisplayedList}
            />
          </div>
          <TaskList
            tasks={filteredTasks}
            deleteTask={this.deleteTask}
            importantTasks={this.importantTasks}
            activeTasks={this.activeTasks}
            completedTasks={this.completedTasks}
          />
        </div>
        <div className={"addTasks"}>
          <Form addInput={this.addInput} addNewTasks={this.addNewTasks} />
        </div>
      </div>
    );
  }
}

const filterTasks = (finalTasks, filterInput) => {
  if (filterInput === "") {
    return finalTasks;
  }

  return finalTasks.filter(({ taskName }) =>
    taskName.toLowerCase().includes(filterInput.toLowerCase())
  );
};
