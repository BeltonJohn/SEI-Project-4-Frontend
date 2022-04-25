import axios from 'axios';

export const getMeal = async () => {
  const options = {
    method: 'GET',
    url: 'http://127.0.0.1:8000/meals/',

    headers: {
      authorization: `Bearer ${window.sessionStorage.getItem('token')}`,
    },
  };
  const { data } = await axios.request(options);
  return data;
};
export default getMeal;
