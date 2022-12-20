import React, { Component } from 'react'
import './style.css'
export default class Counter extends Component {
    state = {
        counter: 0
    }

    onIncrement = () => {
        this.setState((prevState, props) => ({ counter: prevState.counter + props.increment }))
    }
    onDecrement = () => {
        if (this.state.counter > 0) {
            this.setState((prevState, props) => ({ counter: prevState.counter - props.increment }))
        }
    }

    render() {
        return (
            <div className='flex'>
                <p className='pCounter'>{this.state.counter}</p>
                <button className='count count2' onClick={this.onDecrement}>-</button>
                <button className='count count1' onClick={this.onIncrement}>+</button>
            </div>
        )
    }
}
