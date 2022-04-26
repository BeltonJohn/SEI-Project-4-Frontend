import axios from 'axios';

export const createMeal = async (podcast) => {
  const options = {
    method: 'POST',
    url: 'https://carbon-food-tracker.herokuapp.com/create/',
    data: podcast,
    headers: {
      authorization: `Bearer ${window.sessionStorage.getItem('token')}`,
    },
  };
  const { data } = await axios.request(options);
  return data;
};
