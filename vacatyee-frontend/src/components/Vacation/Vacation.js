import React, { useState, useEffect } from 'react';
import VacationList from './VacationList';
import AddVacationForm from './AddVacationForm';
import { getEmployees } from '../../services/EmployeesService';
import { getVacations } from '../../services/VacationsService';

function Vacation() {
  const [vacations, setVacations] = useState([]);
  const [employees, setEmployees] = useState([]);


  useEffect(() => {
    fetchEmployees();
    fetchVacations();
  }, []);

  const fetchEmployees = async () => {
    try {
      const response = await getEmployees();
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
    let afterRemove = vacations.filter((vacation) => vacation.id !== id);
    setVacations(afterRemove);
  };
  return (
    
    <div className='flex items-center justify-around border'>
      <AddVacationForm onVacationAdded={handleVacationAdded} employees={employees}/>
      <VacationList onVacationRemoved={handleVacationRemoved} employees={employees} vacations={vacations}/>
    </div>
  );
}

export default Vacation;
