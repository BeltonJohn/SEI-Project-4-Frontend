import axios from 'axios';

export const getMeal = async () => {
  const options = {
    method: 'GET',
    url: 'https://carbon-food-tracker.herokuapp.com/meals/',

    headers: {
      authorization: `Bearer ${window.sessionStorage.getItem('token')}`,
    },
  };
  const { data } = await axios.request(options);
  return data;
};
export default getMeal;
