import axios from 'axios';

const baseURL =
  process.env.NODE_ENV === 'development'
    ? 'http://localhost:3000/'
    : process.env.BASE_URL;

export const Api = axios.create({
  baseURL
});

export default Api;



// export const getUserData = async (user: ILogin): Promise<any> => {
//   const customConfig: any = {
//     headers: {
//       'Content-Type': 'application/json',
//       Authorization: `Bearer ${user.jwt}`,
//     },
//   };
//   const response = await Api.get<IUserData>(
//     '/api/users/me?populate=*',
//     customConfig
//   );
//   return response.data;
// };