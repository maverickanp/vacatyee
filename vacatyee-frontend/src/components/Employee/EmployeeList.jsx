import React, { useState, useEffect } from "react";
import { getColaboradores } from "../../services/EmployeesService";

function EmployeeList() {
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
            <th className="border p-2">Excluir</th>
          </tr>
        </thead>
        <tbody>
          {employees !== 'undefined'
            ? employees.map((employee, index) => (
                <tr key={index}>
                  <td className="border p-2">{index + 1}</td>
                  <td className="border p-2">{employee.name}</td>
                  <td className="border p-2">{employee.position}</td>
                  <td className="border p-2">{employee.hire_date}</td>
                  <td className="border p-2">Remover</td>
                </tr>
              ))
            : ""}
        </tbody>
      </table>
    </div>
  );
}

export default EmployeeList;
