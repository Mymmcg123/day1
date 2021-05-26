import './App.css';
import React, {useState} from 'react'
import Example from "./Component/day1";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import ApiCovid from "./API/ApiCovid";


const  App =()=> {

  return (
    <div className="App">
        <Example />
        <ApiCovid/>
    </div>
  );
}

export default App;
