// RegisterContext.js
'use client'
import React, { createContext, useContext, useState } from 'react';

const RegisterContext = createContext();

export const RegisterProvider = ({ children }) => {
  const [regData, setRegData] = useState(true);

  return (
    <RegisterContext.Provider value={{ regData, setRegData }}>
      {children}
    </RegisterContext.Provider>
  );
};

export const useRegisterContext = () => useContext(RegisterContext);
