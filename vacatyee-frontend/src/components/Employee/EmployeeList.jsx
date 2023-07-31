import { removeEmployee } from '../../services/EmployeesService';

function EmployeeList({onEmployeeRemoved, employees}) {

  const handleRemoveEmployee = async (id) => {
    try {
      const response = await removeEmployee(id)
      onEmployeeRemoved(id);
      alert("removido com sucesso!")
    } catch (error) {
        console.error('Erro ao excluir o colaborador',error)      
    }

  }

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
            ? employees?.map((employee, index) => (
                <tr key={index}>
                  <td className="border p-2">{index + 1}</td>
                  <td className="border p-2">{employee.name}</td>
                  <td className="border p-2">{employee.position}</td>
                  <td className="border p-2">{employee.hire_date}</td>
                  <td className="border p-2"><button onClick={() => handleRemoveEmployee(employee.id)} className='hover:text-red-600'>Remove</button></td>
                </tr>
              ))
            : ""}
        </tbody>
      </table>
    </div>
  );
}

export default EmployeeList;
