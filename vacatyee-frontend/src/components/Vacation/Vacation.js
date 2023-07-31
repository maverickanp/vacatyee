import React, { useState, useEffect } from 'react';
import api from '../../providers/api'
import VacationList from './VacationList';
import AddVacationForm from './AddVacationForm';
import { getColaboradores } from '../../services/EmployeesService';
import { getVacations } from '../../services/VacationsService';

function Vacation() {
  const [vacations, setVacations] = useState([]);
  const [employees, setEmployees] = useState([]);


  useEffect(() => {
    fetchEmployees();
    fetchVacations();
  },[]);

  const fetchEmployees = async () => {
    try {
      const response = await getColaboradores();
        setEmployees(response.data);
        console.log("Colaborador List:", response);
    } catch (error) {
      console.error("Erro ao obter informacoes dos colaboradores:", error);
    }
  };

  const fetchVacations = async () => {
    try {
      const response = await getVacations();
      setVacations(response.data);
      console.log('vacations:',vacations)
    } catch (error) {
      console.error('Erro ao obter as ferias dos colaboradores:', error);
    }
  };
  const handleVacationAdded = (vacation) => {
    setVacations([...vacations, vacation]);
  };
  const handleVacationRemoved = (id) => {
    setVacations((prevVacations) => prevVacations.filter((vacation) => vacation.id !== id));
  };
  return (
    
    <div className='flex items-center justify-around border'>
      <AddVacationForm handleVacationAdded={handleVacationAdded} employees={employees}/>
      <VacationList handleVacationRemoved={handleVacationRemoved} vacations={vacations}/>
    </div>
  );
}

export default Vacation;
