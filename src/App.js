import { Component } from 'react';
import './App.css';
import Counter from './component/counter/Counter';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className='divflex'>
          <Counter increment ={1}/>
          <Counter increment={2} />
          <Counter increment={5} />
        </div>
      </div>
    );
  }
}

export default App;
