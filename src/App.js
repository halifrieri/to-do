//<img src={logo} className="App-logo" alt="logo" />
import React, { useState } from "react";
import logo from './logo.jpg';
import './App.css';
import Form from "./components/Form";
import Header from "./components/Header";
import TODOHero from "./components/TODOHero";
import TODOList from "./components/TODOList";

function App() {
  const [todos, setTodos] = React.useState([]);
  const todos_completed = todos.filter(todo => todo.is_completed).length;
  const total_todos = todos.length;

  return (
    <div className="wrapper">
      <Header />
      <TODOHero todos_completed={todos_completed} total_todos={total_todos} />
      <Form setTodos={setTodos} />
      <TODOList todos={todos} setTodos={setTodos} />
    </div>
  );
}

export default App;
