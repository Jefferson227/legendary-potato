import React, { Component } from 'react';
import './App.css';
import Item from './Item/Item';

class App extends Component {
  render() {
    return (
      <div className="flex-container">
        <Item
          name="Sofás"
          value="25,00"
          stores="Freitas Varejo" />

        <Item
          name="Sofás"
          value="25,00"
          stores="Freitas Varejo" />

        <Item
          name="Sofás"
          value="25,00"
          stores="Freitas Varejo" />

        <Item
          name="Sofás"
          value="25,00"
          stores="Freitas Varejo" />

        <Item
          name="Sofás"
          value="25,00"
          stores="Freitas Varejo" />

        <Item
          name="Sofás"
          value="25,00"
          stores="Freitas Varejo" />

        <Item
          name="Sofás"
          value="25,00"
          stores="Freitas Varejo" />
      </div>
    );
  }
}

export default App;
