import axios from 'axios';

export const createMeal = async (podcast) => {
  const options = {
    method: 'POST',
    url: 'http://127.0.0.1:8000/create/',
    data: podcast,
    headers: {
      authorization: `Bearer ${window.sessionStorage.getItem('token')}`,
    },
  };
  const { data } = await axios.request(options);
  return data;
};
