export const isAuthenticated = () => {
  return !!getUser();
};

export const getUser = () => {
  return localStorage.getItem('user');
};
