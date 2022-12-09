import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import './App.css';

import Main from './Main';

import { ToastContainer, toast } from 'react-toastify';

import 'react-toastify/dist/ReactToastify.css';




function App() {

  

  return (
    <React.Fragment>
      <div className='container overall-div' >
        <Main />
        <ToastContainer />
      </div>

    </React.Fragment>
  );
}

export default App;
