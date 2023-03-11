import React, { Component } from "react";
import Content from "./Content";

export class Counter extends Component {
  constructor() {
    super();
    this.state = {
      count: 0,
    };
  }

  handleIncrement = () => {
    this.setState({ count: this.state.count + 1 });
  };

  render() {
    console.log(`re-render counter`);
    const { count } = this.state;
    return (
      <div>
        <Content count={1} />
        <h1>Count: {count}</h1>
        <button onClick={this.handleIncrement}>Increment</button>
      </div>
    );
  }
}

export default Counter;
