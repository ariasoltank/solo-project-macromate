import React from 'react';
import Breakfast from './Breakfast';
import Lunch from './Lunch';
import Dinner from './Dinner';
import Snacks from './Snacks';

const Table = (props) => {
  //prettier-ignore
  return (
    <>
        <Breakfast />
        <Lunch />
        <Dinner />
        <Snacks />
    </>
    )
};

export default Table;
