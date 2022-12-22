import React, { Component } from "react";
import Counter from "../../component/counter/Counter";

const data = [
  { id: 1, count: 0, steps: 1 },
  { id: 2, count: 0, steps: 1 },
  { id: 3, count: 0, steps: 1 },
];
export default class Counters extends Component {
  state = {
    data,
  };

  onIncrement = (id) => {
    this.setState((prevState) => {
      return {
        data: prevState.data.map((item) => {
          if (item.id === id) {
            return { ...item, count: item.count + item.steps };
          }
          return item;
        }),
      };
    });
  };

  onDecrement = (id) => {
    this.setState((prevState) => {
      return {
        data: prevState.data.map((item) => {
          if (item.id === id) {
            if (item.count > 0) {
              return { ...item, count: item.count - item.steps };
            }
          }
          return item;
        }),
      };
    });
  };

  render() {
    return (
      <div>
        {this.state.data.map((item) => (
          <Counter
            key={item.id}
            id={item.id}
            count={item.count}
            onIncrement={this.onIncrement}
            onDecrement={this.onDecrement}
          />
        ))}
      </div>
    );
  }
}
