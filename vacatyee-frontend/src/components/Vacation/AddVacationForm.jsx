import React, { useState } from 'react';
import {Modal} from '../Layout/Modal';
import { addVacation } from '../../services/VacationsService';

const AddVacationForm = ({onVacationAdded, employees}) => {
  const [modal, setModal] = useState();
  const [modalData, setModalData] = useState();  
  const [modalError, setModalError] = useState();

  const [vacation, setVacationData] = useState({
    employee_id: '',
    start_date: '',
    end_date: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setVacationData({ ...vacation, [name]: value });
    console.log('VACATION - FERIAS:', vacation)
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
        const response = await addVacation(vacation)
        onVacationAdded(response.data);
      } catch (error) {
        // Handle error response here
        if(error.response !== undefined){
          setModalData(error.response.data)
          setModalError('Erro ao adicionar ferias');
          setModal(true);
        }
      }
    
  };

  return (
    <>
      <Modal id={'medium-modal'} 
      title={modalError} 
      content={modalData}
      modal={modal}
      setModal={setModal}
      />
    <div className="p-4">
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
        <label htmlFor="employee_id" className="block font-medium text-gray-700">
          Colaborador
        </label>
        <select id="employee_id" name="employee_id" 
        className="mt-1 p-2 border border-gray-300 w-full rounded-md"
        onChange={handleChange}
        >
            <option>Selecione:</option>

          {employees?.map((option) => (
            <option key={option.id} value={option.id}>{option.name}</option>
          ))}
        </select>          
        </div>

        <div>
          <label htmlFor="start_date" className="block font-medium text-gray-700">
            Data de Inicio
          </label>
          <input
            type="date"
            id="start_date"
            name="start_date"
            value={vacation.start_date}
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
            value={vacation.end_date}
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
    </>
  );
};

export default AddVacationForm;
