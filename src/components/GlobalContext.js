import React, { createContext, useState, useContext } from 'react';

// Create the GlobalContext
export const GlobalContext = createContext();

// Define the GlobalContextProvider component
export const GlobalContextProvider = ({ children }) => {
  // Define state variables for jobdes and resume
  const [jobdes, setJobdes] = useState('');
  const [resume, setResume] = useState('');

  // Define the value object to be provided to the context consumers
  const value = {
    jobdes,
    setJobdes,
    resume,
    setResume,
  };

  // Render the GlobalContext.Provider with the value object
  return (
    <GlobalContext.Provider value={value}>
      {children}
    </GlobalContext.Provider>
  );
};

// Export the GlobalContext and GlobalContextProvider
export const useGlobalContext = () => useContext(GlobalContext);
