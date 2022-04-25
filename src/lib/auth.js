export function getLoggedInUserId() {
  const token = sessionStorage.getItem('token');
  if (!token) return false; // safety in case no token

  const userObject = JSON.parse(window.atob(token.split('.')[1]));
  return userObject.sub;
}
export const removeToken = () => {
  window.sessionStorage.removeItem('token');
};

export const removeUserId = () => {
  window.sessionStorage.removeItem('userId');
};
