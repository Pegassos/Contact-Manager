import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import ContactManager from './Components/ContactManager';
import './index.css';

class App extends Component {
  render() {
    const contacts = []

    return (
      <div className="App">
        <h1>Contact Manager</h1>
        <ContactManager data={contacts} />
      </div>
    )
  }
}

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
