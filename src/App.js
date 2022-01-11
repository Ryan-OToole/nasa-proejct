import React, { Component, Fragment } from 'react'
import PictureContainer from './PictureContainer';
import './App.css'
import SearchBar from './SearchBar'

class App extends Component {
  render() {
    return (
      <div>
        <SearchBar />
        <PictureContainer />
      </div>
    );
  }
}

export default App;
