import { Api } from '../providers/api';

export const getEmployees = async () => {
    return Api.get('/api/employees');    
};

export const addEmployee = (employee) => {
    return Api.post('/api/employees', employee);
};

export const removeEmployee = async (id) => {    
    return Api.delete(`/api/employees/${id}`);    
};