import React from 'react';

const NewFoodEntry = (props) => {
  //prettier-ignore
  return (
        <form>
            <label for="meal-select">Choose a meal: </label>
            <select id="meal-select">
                <option>Choose One</option>
                <option>Breakfast</option>
                <option>Lunch</option>
                <option>Dinner</option>
                <option>Snack</option>
            </select> 
            <input type="text" placeholder='Add food...'/>
            <input type="text" placeholder='Add food...'/>
            <input type="text" placeholder='Protein (g)'/>
            <input type="text" placeholder='Carbohydrates (g)'/>
            <input type="text" placeholder='Fat (g)'/>
            <input type="text" placeholder='Calories'/>
            <button>Add Entry</button>
        </form>
    )
};

export default NewFoodEntry;
