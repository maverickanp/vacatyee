import React, { useState, useEffect } from 'react';
import api from '../../providers/api'
import AddEmployeeForm from './AddEmployeeForm';
import Layout from '../Layout/Layout';

const Employee = () => {
  const [employees, setEmployees] = useState([]);

  useEffect(() => {
    fetchEmployees();
  }, []);

  const fetchEmployees = async () => {
    try {
      const response = await api.get('/api/employees');
      setEmployees(response.data);
    } catch (error) {
      console.error('Erro ao obter colaboradores:', error);
    }
  };

  const handleEmployeeAdded = (colaborador) => {
    setEmployees([...employees, colaborador]);
  };
  return (
    <Layout>
      <AddEmployeeForm onEmployeeAdded={handleEmployeeAdded} />
      <h2>Colaboradores</h2>
      <ul>
        {employees.map((employee) => (
          <li key={employee.id}>
            <strong>{employee.name}</strong> - Cargo: {employee.position}
            <br />
            Data de Contratação: {employee.hire_date}
          </li>
        ))}
      </ul>

    </Layout>
  )
}

export default Employee