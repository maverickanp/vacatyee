import { Api } from '../providers/api';

export const getColaboradores = async () => {
    try {
        const response = await Api.get('/api/employees');
        console.log('Colaboradores Service:',response)
        return (response.data);
    } catch (error) {
        console.error('Erro ao obter informacoes dos colaboradores:', error);
    }
};
