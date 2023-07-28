import React, { useState } from 'react';
import api from '../../providers/api';
import Dropdown from '../Layout/Dropdown';

const AddVacationForm = ({onVacationAdded}) => {
  const [employees, setEmployees] = useState([]);

  const [vacations, setVacationData] = useState({
    employee_id: '',
    start_date: '',
    end_date: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setVacationData({ ...vacations, [name]: value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await api.post('/api/vacations', {        
        vacations
      });
      
      onVacationAdded(response.data);
    } catch (error) {
      console.error('Erro ao adicionar ferias:', error);
    }
  };

  const handleEmployees = async () => {
    try {
      const response = await api.post('/api/employees');

      const dropdownOptions = () => {
        response.data.map((item) => {
          return ({
            value: item.id,
            label: item.name
          });
        })
      }
      return dropdownOptions;
    } catch (error) {
      console.error('Erro ao adicionar ferias:', error);
    }
  }

  return (
    <div className="p-4">
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label htmlFor="employee_id" className="block font-medium text-gray-700">
            Colaborador
          </label>
          <Dropdown placeHolder={'select'} options={[]}/>
          <input
            type="text"
            id="employee_id"
            name="employee_id"
            value={vacations.employee_id}
            onChange={handleChange}
            className="mt-1 p-2 border border-gray-300 w-full rounded-md"
            required
          />
        </div>

        <div>
          <label htmlFor="start_date" className="block font-medium text-gray-700">
            Data de Inicio
          </label>
          <input
            type="date"
            id="start_date"
            name="start_date"
            value={vacations.start_date}
            onChange={handleChange}
            className="mt-1 p-2 border border-gray-300 w-full rounded-md"
            required
          />
        </div>

        <div>
          <label htmlFor="end_date" className="block font-medium text-gray-700">
            Data de Termino
          </label>
          <input
            type="date"
            id="end_date"
            name="end_date"
            value={vacations.end_date}
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

export default AddVacationForm;
