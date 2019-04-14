import React from 'react';

const FoodItem = (props) => {
    const {id, name, amount, group} = props.item;
    return ( 
        <div className={`item ${group}`}><span>{name} {1 * amount!== 1 && `x ${amount}`}</span> <button onClick = {() => props.handleRemoveItem(id)}> Taken </button></div>
    );
}

export default FoodItem;