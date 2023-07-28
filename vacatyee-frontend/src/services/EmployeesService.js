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

// export const getProjetoById = (id: string, relation: boolean) => {
//   const populate: string = relation
//     ? `/api/projetos/${id}?populate=plantas.imagem,comodos.acabamentos.acabamento_items`
//     : `/api/projetos/${id}`;
//   Api.get<IProjetoResponse>(populate);
// };

// export const getProjetos2 = async (): Promise<any> => {
//   const response = await Api.get<IProjetoResponse>(
//     '/api/projetos?populate=plantas.imagem,comodos.acabamentos.acabamento_items'
//   );
//   return response;
// };

// export const getProjetoByUser = async (relation: boolean) => {
//   const { status, data } = await getUserData();
//   if (status === 200) {
//     const userData: IUserData = data;
//     const populate: string = relation
//       ? `/api/projetos/${userData.id}?populate=plantas.imagem,comodos.acabamentos.acabamento_items`
//       : `/api/projetos/${userData.id}`;
//     const response = await Api.get<IProjetoResponse>(populate);
//     return response;
//   }
//   return status;
// };
