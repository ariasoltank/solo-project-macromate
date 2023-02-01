import React, { useEffect, useRef } from 'react';

const NewFoodEntry = ({ formData, handleFormSubmit, handleFormChange }) => {
  // const inputRef = useRef(null);

  // useEffect(() => {
  //   inputRef.current.focus();
  // }, [formData]);

  //prettier-ignore
  return (

        <form 
          onSubmit={handleFormSubmit}
          style={{border: '1px solid black', padding: '10px'}}
        >            
            <input 
              name='foodName' 
            
              type="text" 
              value={formData.foodName}
              onChange={handleFormChange}
              placeholder='Add food...'
              // key={formData.foodName}
              // ref={inputRef}
            />
            <input 

              name='protein' 
            
              type="text" 
              value={formData.protein}
              onChange={handleFormChange}
              placeholder='Protein (g)'
              // key={formData.protein}
              // ref={inputRef}
            />
            <input 
              name='carbs' 
            //   ref={carbRef} 
              type="text" 
              value={formData.carbs}
              onChange={handleFormChange}
              placeholder='Carbohydrates (g)'
              // key={formData.carbs}
              // ref={inputRef}
            />
            <input 
              name='fat' 
            //   ref={fatRef} 
              type="text" 
              value={formData.fat}
              onChange={handleFormChange}
              placeholder='Fat (g)'
              // key={formData.fat}
              // ref={inputRef}
            />
            <input 
              name='cals' 
            //   ref={calRef} 
              type="text" 
              value={formData.cals}
              onChange={handleFormChange}
              placeholder='Calories'
              // key={formData.cals}
              // ref={inputRef}
            />
            <button type="submit">Add Entry</button>
        </form>
    )
};

export default NewFoodEntry;
