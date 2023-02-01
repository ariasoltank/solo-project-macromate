import React from 'react';

const Table = (props) => {
  const { tableData } = props;
  //prettier-ignore
  return (
    <>
      <h2>Table</h2>
      <table 
        style={{width: '100%', border: '1px solid purple', padding: '8px'}}
      >
        <thead >
          <tr style={{color: 'red'}}>
            <th>Food Name</th>
            <th>Protein</th>
            <th>Carbohydrates</th>
            <th>Fat</th>
            <th>Calories</th>
          </tr>
        </thead>
        <tbody 
          style={{width: '100%', textAlign: 'center'}}
        >
          {tableData.map((row, index) => (
            <tr key={index} >
              <td style={{border: '1px solid black', padding: '5px'}}>{row.foodName}</td>
              <td style={{border: '1px solid black', padding: '5px'}}>{row.protein}</td>
              <td style={{border: '1px solid black', padding: '5px'}}>{row.carbs}</td>
              <td style={{border: '1px solid black', padding: '5px'}}>{row.fat}</td>
              <td style={{border: '1px solid black', padding: '5px'}}>{row.cals}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
       
    
    )
};

export default Table;
