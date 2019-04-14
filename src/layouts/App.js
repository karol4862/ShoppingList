import React, { Component } from 'react';
import AddFoodItem from './AddFoodItem';
import ShoppingList from './ShoppingList';
import Filter from './Filter';
import '../styles/App.css';

class App extends Component {
  state = {
    itemList: [],
    filter: ""
  }

  handleAddButton = (item) => {
    this.setState( prevState => ({
      itemList: prevState.itemList.concat(item)
    }))
  }

  handleRemoveItem = (id) => {
    const itemList = [...this.state.itemList].filter( item => item.id !== id);
    this.setState({
      itemList
    })
  }

  handleFilter = (e) => {
    this.setState({
      filter: e.target.value
    })
  }
  render() {
    let filteredList = [...this.state.itemList];
    if(this.state.filter){
      filteredList = filteredList.filter( item => item.group === this.state.filter);
    }
    
    return (
      <div className="App">
        <AddFoodItem handleButton = {this.handleAddButton}/>
        <Filter handleFilter = {this.handleFilter}/>
        <ShoppingList filteredList = {filteredList} handleRemoveItem = {this.handleRemoveItem} />
      </div>
    );
  }
}

export default App;
