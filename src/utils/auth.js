export const isAuthenticated = () => {
  return !!getUser();
};

export const getUser = () => {
  return (
    sessionStorage.getItem('user') || localStorage.getItem('user')
  );
};
