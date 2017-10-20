import React, { Component } from 'react';

class Task extends Component {
  render() {

    const spanStyle = {
      textDecoration: this.props.todo.done ? 'line-through' : 'none'
    }

    return (
      <div className="Task">
        <span style={spanStyle}>
          {this.props.todo.value}
        </span>
        <button
          onClick={() => this.props.handleClick(this.props.index)}>
          {this.props.todo.done ? 'Undo' : 'Complete'}
        </button>
      </div>
    )
  }
}

export default Task;
