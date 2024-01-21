
import './App.css';

import React,{ useState, useEffect } from 'react';
import axios from 'axios';
import PlanTable from './Components/PlanTable';

import { Link } from 'react-router-dom';
import {
  BrowserRouter, Routes, Route,
} from 'react-router-dom';

import SearchPlan from './Components/SearchPlan';
import AddPlan from './Components/AddPlan';

import PlanInfo from './Components/Testing';
import Testing from './Components/Testing';
import Home from './Components/Home';
import SetUp from './Components/SetUp';




function App() {

  
  
  return (
    
    <div className="App">
     
     <Routes>
       <Route path="/" element={<SearchPlan/>}></Route>
       <Route path="/planTable" element={<PlanTable/>}/>
       <Route path="/addPlan" element={<AddPlan/>}/>
       <Route path="/Home" element={<Home/>}/>
       <Route path='/PlanInfo' element={<Testing/>}/>
       <Route path='/SetUp' element={<SetUp/>}/>
       
     </Routes>
    
    </div>
  );
}

export default App;
