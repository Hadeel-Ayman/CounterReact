import { Component } from 'react';
import './App.css';
import Counters from './pages/Counters';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className='divflex'>
          <Counters/>
        </div>
      </div>
    );
  }
}

export default App;