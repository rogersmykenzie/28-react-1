import React from "react";

class ToDoList extends React.Component {
  constructor() {
    super();
    this.state = {
      userInput: ""
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    this.setState({
      userInput: e.target.value
    });

    // this.state.userInput = e.target.value;
  }

  render() {
    return (
      <div>
        <h1>{this.state.userInput}</h1>
        <ul></ul>
        {/* <input onChange={this.handleChange} /> */}
        <input onChange={e => this.handleChange(e)} />
        <button>Add</button>
      </div>
    );
  }
}

export default ToDoList;
