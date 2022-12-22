import React, { Component } from "react";
import "./style.css";
export default class Counter extends Component {
  render() {
    return (
      <div className="flex">
        <p className="pCounter">{this.props.count}</p>
        <button
          className="count count2"
          onClick={() =>
            this.props.onDecrement(this.props.id, this.props.steps)
          }
        >
          -
        </button>
        <button
          className="count count1"
          onClick={() =>
            this.props.onIncrement(this.props.id, this.props.steps)
          }
        >
          +
        </button>
      </div>
    );
  }
}
