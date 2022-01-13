import React from "react";
import Task from "./Task";
const TaskList = (props) => {
  const active = props.tasks.filter((task) => task.active);
  const done = props.tasks.filter((task) => !task.active);

  const activeTasks = active.map((task) => (
    <Task
      key={task.id}
      task={task}
      delete={props.delete}
      change={props.change}
    />
  ));

  const doneTasks = done.map((task) => (
    <Task
      key={task.id}
      task={task}
      delete={props.delete}
      change={props.change}
    />
  ));
  return (
    <>
      <div className="active">
        <h1>Tasks to do</h1>
        {activeTasks}
      </div>
      <hr />
      <div className="done-container">
        <div className="done">
          <h1>Done tasks ({done.length})</h1>
          {doneTasks.reverse().slice(0, 3)}
        </div>
      </div>
    </>
  );
};

export default TaskList;
