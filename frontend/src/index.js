// src/index.js
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, useLocation } from "react-router-dom";
import AppHeader from './components/AppHeader';
import AppFooter from './components/AppFooter';
import App from './app';

import { useEffect, useState } from 'react';
import axios from 'axios';
const serverUrl = process.env.REACT_APP_SERVER_URL;

const Root = () => {

  const [validUser, setValidUser] = useState({});
  const location = useLocation();

  const dashboardValidation = async () => {
    let token = localStorage.getItem("usersToken");
    try {
      let response = await axios.get(`${serverUrl}/api/validate-user`, {
        headers: {
          "Content-Type": "application/json",
          "authorization": token
        }
      });

      if (response.status === 401) {
        console.log('not verified');
      } else {
        console.log('verified');
        setValidUser(response.data);
      }
    } catch (error) {
      console.error('Error validating user:', error);
    }
  };

  useEffect(() => {
    dashboardValidation();
    console.log("Validation triggered");
  }, [location.pathname]);

  useEffect(() => {
    if(validUser.name){
      console.log(validUser.name)
    }else{
      console.log("user not found")
    }
  }, [validUser]);


  const hideFooter = location.pathname === '/register' || location.pathname === '/login' || location.pathname.includes("/pg") || location.pathname === '/addRoom';



  return (
    <>
      <AppHeader validUser={validUser} setValidUser={setValidUser} />
      <App validUser={validUser} setValidUser={setValidUser}/>
      {!hideFooter && <AppFooter />}
    </>
  );
};

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Root key={window.location.pathname} /> {/* Ensure remounting on navigation */}
    </BrowserRouter>
  </React.StrictMode>
);

reportWebVitals();
