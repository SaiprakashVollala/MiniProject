import React, { Component } from 'react';
import axios from 'axios';
import './App.css';

function App() {
  return (
    <div className='App'>
      <header className='App-header'>
        <h1>💻 Remote Laptop Control</h1>
        <Control />
      </header>
    </div>
  );
}

class Control extends Component {
  constructor(props) {
    super(props);
    this.actions = [
      { label: '🔊 Increase Volume', value: 'increase' },
      { label: '🔈 Decrease Volume', value: 'decrease' },
      { label: '🔕 Mute Sound', value: 'mute' },
      { label: '🔔 Unmute Sound', value: 'unmute' },
      { label: '🔒 Lock Laptop', value: 'lock' },
      { label: '⏻ Shutdown Laptop', value: 'shutdown' },
      { label: '🔄 Restart Laptop', value: 'restart' },
      { label: '🌞 Increase Brightness', value: 'brightness_up' },
      { label: '🌚 Decrease Brightness', value: 'brightness_down' },
    ];
  }

  callServer(value) {
    axios.get(`http://192.168.238.75:8082/laptopcontrol/${value}`) // removed extra slash at the end
      .then(response => {
        if (response.data.startsWith('Success')) {
          alert(`✅ ${value} successful`);
        } else {
          alert(`⚠️ ${response.data}`);
        }
      })
      .catch(error => {
        console.error(error);
        alert(`❌ ${value} failed`);
      });
  }

  render() {
    return (
      <div className='LaptopControl'>
        {this.actions.map((action, index) => (
          <button key={index} onClick={() => this.callServer(action.value)}>
            {action.label}
          </button>
        ))}
      </div>
    );
  }
}

export default App;
