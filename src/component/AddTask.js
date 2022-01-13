import React, { Component } from "react";

class AddTask extends Component {
  state = {
    text: "Add Task",
    checked: false,
  };
  handleChange = () => {
    let check = !this.state.checked;
    this.setState({ checked: check });
  };
  handleTextChange = (e) => {
    this.setState({ text: e.target.value });
  };
  render() {
    return (
      <>
        <div className="form">
          <input
            onChange={this.handleTextChange}
            type="text"
            placeholder="Add task"
            value={this.state.text}
          />
          <input
            onClick={this.handleChange}
            type="checkbox"
            checked={this.state.checked}
          ></input>
        </div>
        <hr />
      </>
    );
  }
}

export default AddTask;
