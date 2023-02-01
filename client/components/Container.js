import React, { useState, useEffect } from 'react';
import Table from './Table';
import NewFoodEntry from './NewFoodEntry';

const Container = () => {
  const [formData, setFormData] = useState({});
  const [tableData, setTableData] = useState([]);

  useEffect(() => {
    console.log('Getting tableData from local storage');
    const storedTableData = JSON.parse(
      localStorage.getItem('tableData') || '[]'
    );
    setTableData(storedTableData);
  }, []);

  useEffect(() => {
    console.log('Setting tableData in local storage');
    localStorage.setItem('tableData', JSON.stringify(tableData));
  }, [tableData]);

  const handleFormSubmit = (e) => {
    e.preventDefault();
    setTableData([...tableData, formData]);
    setFormData({});
  };

  const handleFormChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  //prettier-ignore
  return (
        <div id="main-container" style={{border: '1px solid red', padding: '20px'}}>
            <NewFoodEntry 
              formData={formData}
              handleFormSubmit={handleFormSubmit}
              handleFormChange={handleFormChange}
            />
            <Table tableData={tableData} />
        </div>
    );
};

export default Container;
