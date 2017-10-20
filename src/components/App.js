import React, { Component } from 'react';
import '../App.css';

import Form from './Form';
import List from './List';

class App extends Component {

  constructor() {
    super();

    this.state = {
      errorMessage: null,
      inputValue: "",
      todos: [
        { value: 'Wash the car', done: false },
        { value: 'Clean the kitchen', done: true }
      ]
    }

  }

  handleChange = (evt) => {
    this.setState({ inputValue: evt.target.value });
  }

  handleClick = (index) => {
    const todos = this.state.todos;
    todos[index].done = !todos[index].done;
    this.setState({ todos });
  }

  handleSubmit = (evt) => {
    evt.preventDefault();
    const todos = this.state.todos;
    todos.push({ value: this.state.inputValue, done: false });
    this.setState({ todos, inputValue: '' });
  }

  render() {
    return (
      <div className="App">
        <Form
          handleChange={this.handleChange}
          handleSubmit={this.handleSubmit}
          inputValue={this.state.inputValue}
        />
        <List
          handleClick={this.handleClick}
          todos={this.state.todos}
        />
        {this.state.errorMessage}
      </div>
    );
  }
}

export default App;
