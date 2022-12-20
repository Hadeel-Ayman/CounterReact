import { Component } from 'react';
import './App.css';
import Counter from './component/counter/Counter';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className='divflex'>
          <Counter />
          <Counter />
          <Counter />
        </div>
      </div>
    );
  }
}

export default App;
