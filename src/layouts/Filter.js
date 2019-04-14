import React from 'react';
import '../styles/Filter.css'

const Filter = (props) => {
    return ( 
        <div className="filter">
            <label>
                Filter by: 
                <select onChange={props.handleFilter}>
                    <option value=""> ALL </option>
                    <option value="breakfast">Breakfast</option>
                    <option value="dinner">Dinner</option>
                    <option value="supper">Supper</option>
                    <option value="snack">Snack</option>
                </select>
            </label>
        </div>
    );
}
 
export default Filter;