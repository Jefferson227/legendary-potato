import React, { Component } from 'react';
import './App.css';
import Item from './Item/Item';

class App extends Component {
  render() {
    return (
      <div className="flex-container">
        <Item />
        <Item />
        <Item />
        <Item />
        <Item />
        <Item />
        <Item />
      </div>
    );
  }
}

export default App;
