import React, { useState, useEffect } from 'react';
import api from '../../providers/api'
import Layout from "../Layout/Layout";
import VacationList from './VacationList';

function Vacation() {
  const [vacations, setVacations] = useState([]);

  useEffect(() => {
    fetchVacations();
  }, []);

  const fetchVacations = async () => {
    try {
      const response = await api.get('/api/vacations');
      setVacations(response.data);
      console.log('vacations:',vacations)
    } catch (error) {
      console.error('Erro ao obter as ferias dos colaboradores:', error);
    }
  };
  return (
    <Layout>
      <h2>Ferias</h2>
    <VacationList/>
    </Layout>
  );
}

export default Vacation;
