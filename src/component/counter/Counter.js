import React, { Component } from 'react'
import './style.css'
export default class Counter extends Component {
    state = {
        counter: 0
    }

    onIncrement = (num) => {
        this.setState(prevState => ({ counter: prevState.counter + 1 }))
    }
    onDecrement = (num) => {
        if(this.state.counter > 0){
            this.setState(prevState => ({ counter: prevState.counter - 1 }))
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
