import React from "react";
import ToDoList from "./components/ToDoList";
import FuncComp from "./components/FuncComp";
import "./App.css";

class App extends React.Component {
  render() {
    return (
      <div>
        <ToDoList></ToDoList>
        <ToDoList></ToDoList>
        <ToDoList></ToDoList>
        <ToDoList></ToDoList>
        <ToDoList></ToDoList>
        <FuncComp />
      </div>
    );
  }
}

export default App;
