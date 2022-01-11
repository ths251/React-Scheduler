import './App.css';
import React, { useState } from "react";
import Modal from 'react-modal';
import Calendar from './Components/Calendar';



//Hlutir fyrir modal

Modal.setAppElement('#root');


function App() {



  return (
    <div className="App">
      <h2>Hér verður hægt að taka frá helgar fyrir Sigríðastaði</h2>
      <Calendar />
      
       
    </div>


  );
}

export default App;
