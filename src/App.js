import React, { Component } from 'react';
import './App.css';

class App extends Component {

  componentDidMount() {
    fetch('https://apidojo-adidas-v1.p.rapidapi.com/categories/list?lang=en-US')
      .then( respones => console.log(respones))
  }
  render() {
    return (
      <div className="App">
        
      </div>
    );
  }
}

export default App;
