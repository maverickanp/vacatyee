import React, { useState, useEffect } from 'react';
import api from '../../providers/api'

function EmployeeList() {
  const [employees, setEmployees] = useState([]);

    useEffect(() => {
        fetchEmployees();
      }, []);

    const fetchEmployees = async () => {
        try {
            const response = await api.get('/api/employees');
            setEmployees(response.data);
        } catch (error) {
            console.error('Erro ao obter informacoes dos colaboradores:', error);
        }
    };
  return (
    <div className="p-4">
      <h2 className="text-xl font-bold mb-4">Lista dos colaboradores</h2>
      <table className="w-full border-collapse">
        <thead>
          <tr>
            <th className="border p-2">#</th>
            <th className="border p-2">Colaborador</th>
            <th className="border p-2">Cargo</th>
            <th className="border p-2">Data de Contratação</th>
          </tr>
        </thead>
        <tbody>
          {employees.map((employees, index) => (
            <tr key={index}>
              <td className="border p-2">{index + 1}</td>
              <td className="border p-2">{employees.name}</td>
              <td className="border p-2">{employees.position}</td>
              <td className="border p-2">{employees.hire_date}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default EmployeeList