import React, { useState, useEffect } from "react";
import AddEmployeeForm from './AddEmployeeForm';
import EmployeeList from './EmployeeList';
import { getEmployees } from '../../services/EmployeesService';

const Employee = () => {
  const [employees, setEmployees] = useState([]);

  useEffect(() => {
    fetchEmployees();
  }, []);

  const fetchEmployees = async () => {
    try {
      const response = await getEmployees();
        setEmployees(response.data);
    } catch (error) {
      console.error("Erro ao obter informacoes dos colaboradores:", error);
    }
  };

  const handleEmployeeAdded = (employee) => {
    setEmployees([...employees, employee]);
    console.log("handleEmployeeAdded");
  };

  const handleEmployeeRemoved = (id) => {
    let afterRemove = employees.filter((employee) => employee.id !== id);
    setEmployees(afterRemove);
  };

  return (
    <div className='flex items-center justify-around'>
      <AddEmployeeForm onEmployeeAdded={handleEmployeeAdded} />
      <EmployeeList onEmployeeRemoved={handleEmployeeRemoved} employees={employees}/>
    </div>
  )
}

export default Employee