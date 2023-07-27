import React, { useState } from 'react';
import AddEmployeeForm from './AddEmployeeForm';
import Layout from '../Layout/Layout';
import EmployeeList from './EmployeeList';

const Employee = () => {
  const [employees, setEmployees] = useState([]);

  const handleEmployeeAdded = (colaborador) => {
    setEmployees([...employees, colaborador]);
  };
  return (
    <Layout>
      <div className='flex items-center justify-around border border-blue-600'>
        <AddEmployeeForm onEmployeeAdded={handleEmployeeAdded} />
        <EmployeeList/>
      </div>
    </Layout>
  )
}

export default Employee