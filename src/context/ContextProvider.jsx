import { createContext, useEffect, useMemo, useState } from 'react';

export const UserContext = createContext('default');

export const UserProvider = (props) => {
  const [user, setUser] = useState(null);

  //   useMemo(() => {
  //     if (isLogin) {
  //       console.log('login now');
  //     }
  //   }, [isLogin]);

  useEffect(() => {
    if (user) {
      console.log('You are logged in now');
    }
  }, [user]);

  return (
    <UserContext.Provider value={{ user, setUser }}>
      {props.children}
    </UserContext.Provider>
  );
};
