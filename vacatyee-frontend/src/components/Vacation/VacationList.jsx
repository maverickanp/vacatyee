import React, { useState, useEffect } from 'react';
import api from '../../providers/api'

function VacationList() {
    const [vacations, setVacations] = useState([]);

    useEffect(() => {
        fetchVacations();
      }, []);

    const fetchVacations = async () => {
        try {
            const response = await api.get('/api/vacations');
            setVacations(response.data);
        } catch (error) {
            console.error('Erro ao obter as ferias dos colaboradores:', error);
        }
    };

    const calcDays = (start, end) => {
      let days = 0;
      //var s = new Date(1504095567183).toLocaleDateString("pt-BR")
      let dtStart = new Date(start);
      let dtend = new Date(end);
      days = dtend.getTime() - dtStart.getTime();
      return Math.ceil(days / (1000*3600*24));
    }
  return (
    <div className="p-4">
      <h2 className="text-xl font-bold mb-4">Lista de Ferias dos colaboradores</h2>
      <table className="w-full border-collapse">
        <thead>
          <tr>
            <th className="border p-2">#</th>
            <th className="border p-2">Colaborador</th>
            <th className="border p-2">Data de Inicio</th>
            <th className="border p-2">Data de Termino</th>
            <th className="border p-2">Dias</th>

          </tr>
        </thead>
        <tbody>
          {vacations.map((vacation, index) => (
            <tr key={index}>
              <td className="border p-2">{index + 1}</td>
              <td className="border p-2">{vacation.employee_id}</td>
              <td className="border p-2">{vacation.start_date}</td>
              <td className="border p-2">{vacation.end_date}</td>
              <td className="border p-2">{calcDays(vacation.start_date, vacation.end_date)}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default VacationList