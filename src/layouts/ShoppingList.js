import React from 'react';
import FoodItem from '../components/FoodItem';
import "../styles/ShoppingList.css";

const ShoppingList = (props) => {
    const list = props.filteredList.map(item => <FoodItem key={item.id}item = {item} handleRemoveItem = {props.handleRemoveItem} />)
    return ( 
        <div className="foodsList">{list}</div>
    );
}
 
export default ShoppingList;