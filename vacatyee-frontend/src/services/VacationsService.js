import { Api } from '../providers/api';

export const getVacations = async () => {
    return Api.get('/api/vacations');
};

export const addVacation = (vacation) => {
    return Api.post('/api/vacations', vacation);
};

export const removeVacation = async (id) => {    
    return Api.delete(`/api/vacations/${id}`);    
};