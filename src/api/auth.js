import axios from 'axios';

export const registerUser = async (user) => {
  const options = {
    method: 'POST',
    url: 'https://carbon-food-tracker.herokuapp.com/authentication/register/',
    data: user,
  };
  const { data } = await axios.request(options);
  return data;
};

export const loginUser = async (credentials) => {
  const options = {
    method: 'POST',
    url: 'https://carbon-food-tracker.herokuapp.com/authentication/login/',
    data: credentials,
  };

  const { data } = await axios.request(options);
  if (data.token) {
    window.sessionStorage.setItem('token', data.token);
  } else {
    window.sessionStorage.removeItem('token');
  }
  return data.message;
};
