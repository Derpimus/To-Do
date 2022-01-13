import React, { Component } from "react";

import "./App.css";
// import Task from "./Task";
import AddTask from "./AddTask";
import TaskList from "./TaskList";

class App extends Component {
  state = {
    tasks: [
      {
        id: 0,
        text: "Play Witcher III",
        date: "15.02.2022",
        important: false,
        active: true,
        finishDate: null,
      },
      {
        id: 1,
        text: "Finish reading advanced JS",
        date: "17.02.2022",
        important: true,
        active: true,
        finishDate: null,
      },
      {
        id: 2,
        text: "Do laundry",
        date: "03.02.2022",
        important: false,
        active: true,
        finishDate: null,
      },
      {
        id: 3,
        text: "Buy groceries",
        date: "11.02.2022",
        important: false,
        active: true,
        finishDate: null,
      },
      {
        id: 4,
        text: "Clean apartment",
        date: "28.02.2022",
        important: false,
        active: true,
        finishDate: null,
      },
      {
        id: 5,
        text: "Heal back injury",
        date: "23.02.2022",
        important: true,
        active: true,
        finishDate: null,
      },
      {
        id: 6,
        text: "Eat your vegetables",
        date: "02.02.2022",
        important: false,
        active: true,
        finishDate: null,
      },
    ],
  };
  //Delete task after clicking 'X'
  deleteTask = (id) => {
    const tasks = [...this.state.tasks];
    const index = tasks.findIndex((task) => task.id === id);
    tasks.splice(index, 1);
    this.setState({
      tasks,
    });
  };
  //Change status of task when done is clicked
  changeTaskStatus = (id) => {
    const tasks = Array.from(this.state.tasks);
    tasks.forEach((task) => {
      if (task.id === id) {
        task.active = false;
        task.finishDate = new Date().getTime();
      }
    });
    this.setState({
      tasks,
    });
  };

  render() {
    return (
      <>
        <div className="AddTask">
          <AddTask />
          <TaskList
            tasks={this.state.tasks}
            delete={this.deleteTask}
            change={this.changeTaskStatus}
          />
        </div>
      </>
    );
  }
}

export default App;
