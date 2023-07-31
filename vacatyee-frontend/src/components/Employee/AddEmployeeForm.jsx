import React, { useState } from 'react';
import { addEmployee } from '../../services/EmployeesService';

const AddEmployeeForm = ({onEmployeeAdded}) => {
  const [employee, setEmployeeData] = useState({
    name: '',
    position: '',
    hire_date: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEmployeeData({ ...employee, [name]: value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await addEmployee(employee)
      
      onEmployeeAdded(response.data);
    } catch (error) {
      console.error('Erro ao adicionar colaborador:', error);
    }
  };

  return (
    <div className="p-4">
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label htmlFor="name" className="block font-medium text-gray-700">
            Nome
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={employee.name}
            onChange={handleChange}
            className="mt-1 p-2 border border-gray-300 w-full rounded-md"
            required
          />
        </div>

        <div>
          <label htmlFor="position" className="block font-medium text-gray-700">
            Cargo
          </label>
          <input
            type="text"
            id="position"
            name="position"
            value={employee.position}
            onChange={handleChange}
            className="mt-1 p-2 border border-gray-300 w-full rounded-md"
            required
          />
        </div>

        <div>
          <label htmlFor="hire_date" className="block font-medium text-gray-700">
            Data de contratacao
          </label>
          <input
            type="date"
            id="hire_date"
            name="hire_date"
            value={employee.hire_date}
            onChange={handleChange}
            className="mt-1 p-2 border border-gray-300 w-full rounded-md"
            required
          />
        </div>

        <button
          type="submit"
          className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-md"
        >
          Adicionar
        </button>
      </form>
    </div>
  );
};

export default AddEmployeeForm;
