import { Button } from '@mui/material';
import React, { useEffect, useState } from 'react'
import './App.css';
import Column from './component/Column';


function App() {

  return (
    <div className="App">
        <div className="wrap">
        <h1>Регистрация</h1>
        <Column/>
        <div className='bot'>
             <input type="file"/>
              <Button variant="contained">Регистрация</Button>
        </div>
        </div>
    </div>
  );
}

export default App;
