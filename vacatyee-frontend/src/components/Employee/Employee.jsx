import React, { useState, useEffect } from "react";
import AddEmployeeForm from './AddEmployeeForm';
import EmployeeList from './EmployeeList';
import { getColaboradores } from '../../services/EmployeesService';

const Employee = () => {
  const [employees, setEmployees] = useState([]);

  useEffect(() => {
    fetchEmployees();
  }, []);

  const fetchEmployees = async () => {
    try {
      const response = await getColaboradores();
        setEmployees(response);
        console.log("Colaborador List:", response);
    } catch (error) {
      console.error("Erro ao obter informacoes dos colaboradores:", error);
    }
  };

  const handleEmployeeAdded = (colaborador) => {
    setEmployees([...employees, colaborador]);
  };
  return (
    <div className='flex items-center justify-around'>
      <AddEmployeeForm onEmployeeAdded={handleEmployeeAdded} />
      <EmployeeList employees={employees}/>
    </div>
  )
}

export default Employee