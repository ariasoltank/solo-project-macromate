import React, { useState } from 'react';
import Table from './Table';
import NewFoodEntry from './NewFoodEntry';

const Container = () => {
  const [entries, setEntries] = useState([]);
  //prettier-ignore
  return (
        <div id="main-container">
            <NewFoodEntry />
            <Table />
        </div>
    );
};

export default Container;
