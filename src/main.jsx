import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './styles/index.css'
import { BrowserRouter } from 'react-router-dom'
import { createContext, useContext, useState } from 'react';

// const LoaderContext = createContext();
// export const LoaderProvider = ({ children }) => {
//   const [loader, setLoader] = useState(true);
//   return (
//     <LoaderContext.Provider value={{ loader, setLoader }}>
//       {children}
//     </LoaderContext.Provider>
//   );
// };
// export const useLoader = () => {
//   return useContext(LoaderContext);
// };

const SidebarToggledContext = createContext();
export const SidebarToggledProvider = ({ children }) => {
  const [sidebarToggled, setSidebarToggled] = useState(true);
  return (
    <SidebarToggledContext.Provider value={{ sidebarToggled, setSidebarToggled }}>
      {children}
    </SidebarToggledContext.Provider>
  );
};
export const useSidebarToggled = () => {
  return useContext(SidebarToggledContext);
};

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <SidebarToggledProvider>
        <App />
      </SidebarToggledProvider>
    </BrowserRouter>
  </React.StrictMode>,
)
