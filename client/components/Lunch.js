import React from 'react';
import Row from './Row';

const Lunch = (props) => {
  //prettier-ignore
  return (
    <>
    <h2>Lunch</h2>
    <table>
        <thead>
            <tr>
                <th>Food Name</th>
                <th>Protein</th>
                <th>Carbs</th>
                <th>Fat</th>
                <th>Calories</th>
            </tr>
        </thead>
        <tbody>
            <Row />
        </tbody>
    </table>

</>
)
};

export default Lunch;
