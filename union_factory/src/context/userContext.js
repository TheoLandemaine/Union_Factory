import {createContext, useEffect, useState} from 'react';

export const UserContext = createContext();

export function UserContextProvider(props) {
  const [modalState, setModalState] = useState({
    heartField: false,
    heartUnField: true
  });

  const toggleModals = (modal) => {
    if (modal === 'heartField') {
      setModalState({
        heartField: true,
        heartUnField: false
      });
    } else if (modal === 'heartUnField') {
      setModalState({
        heartField: false,
        heartUnField: true
      });
    }
  }


  return (
    <UserContext.Provider value={{modalState, toggleModals}}>
      {props.children}
    </UserContext.Provider>
  );
}