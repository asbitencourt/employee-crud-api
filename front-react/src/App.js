
import React from "react";
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import List from './components/list';

import Create from "./components/create";
import Navigation from "./components/Navigation";
import DeleteEmployee from "./components/DeleteEmployee";
import EditEmployee from "./components/employees/EditEmployee";
import DetailsEmployee from "./components/DetailsEmployee";

export default function App() {
 

 
  
 
  return (
    <div className="App">
       <div className="container">
         <Navigation />
       <Router>
        <Routes>
          <Route exact path="/list" element={<List />} />
          <Route exact path="/create" element={<Create />} />
          <Route exact path="/edit/:id"  element={<EditEmployee />}></Route>
          <Route exact path="/delete/:id"  element={<DeleteEmployee/>}></Route>
          <Route exact path="/details/:id" element={<DetailsEmployee />}></Route>
        </Routes>
        
      </Router>
    
    </div> 
   </div>
  
  );
  }

