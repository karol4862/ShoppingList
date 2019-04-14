import React, { Component } from 'react';
import '../styles/AddFoodItem.css'

class AddFoodItem extends Component {

    itemIndex = 0;

    state = {
        id: this.itemIndex,
        name: "",
        amount: 1,
        group: ""
    }

    handleChange = (e) => {
        if(e.target.type === "text"){
            this.setState({
                name: e.target.value
            })
        }
        else if(e.target.type === "number"){
            this.setState({
                amount: e.target.value
            })
        }
        else {
            this.setState({
                group: e.target.value
            })
        }
    }

    handleButton = () => {
        if(this.state.name){
            this.props.handleButton(this.state)
            this.itemIndex++
            this.setState({
                id: this.itemIndex,
                name: "",
                amount: 1,
                group: ""
            })
        }
        else{
            alert("Insert name of your food");
        }
    }
    render() {
        return (
            <div className="header">
                <label htmlFor="text">Name: 
                    <input type="text" name="text" placeholder="Chicken" value={this.state.name} onChange={this.handleChange}/>
                </label>
                <label htmlFor="number"> Amount:  
                    <input type="number" name="number" value={this.state.amount} onChange={this.handleChange} min="1"/>
                </label>
                <label htmlFor="select">Group: 
                    <select name="select" value = {this.state.group} onChange={this.handleChange}>
                        <option value=""> </option>
                        <option value="breakfast">Breakfast</option>
                        <option value="dinner">Dinner</option>
                        <option value="supper">Supper</option>
                        <option value="snack">Snack</option>
                    </select>
                </label>
                <button onClick = {this.handleButton}> +Add </button>
            </div>
        );
    }
}

export default AddFoodItem;
