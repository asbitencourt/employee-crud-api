
import React, { useEffect, useState } from "react";
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import Axios from "axios";
import Employee from "./components/employees/employees";

export default function App() {
  const [values, setValues] = useState();
  const [listCard, setListCard] = useState([]);
  console.log(listCard);

  const handleRegisterGame = () => {
    Axios.post("http://localhost:3001/api", {
      name: values.name,
      job_role: values.job_role,
      salary: values.salary,
      birth: values.birth,
      employee_registration: values.employee_registration,
    }).then(() => {
      Axios.post("http://localhost:3001/api", {
        name: values.name,
        job_role: values.job_role,
        salary: values.salary,
        birth: values.birth,
        employee_registration: values.employee_registration,
      }).then((response) => {
        setListCard([
          ...listCard,
          {
            employee_id: response.data[0].employee_id,
             name: values.name,
             job_role: values.job_role,
             salary: values.salary,
             birth: values.birth,
             employee_registration: values.employee_registration,
          },
        ]);
      });
    });
  };

  useEffect(() => {
    Axios.get("http://localhost:3001/api/employees").then((response) => {
      setListCard(response.data);
    });
  }, []);

  const handleaddValues = (value) => {
    setValues((prevValues) => ({
      ...prevValues,
      [value.target.name]: value.target.value,
    }));
  };


  return (
    <div className="App">
       <div className="container">
            <div className="card">
      <div className="card-header">
        <h3>Add Employee</h3>
      </div>
      <div className="card-body">
    
  <div className="form-group">
    <label htmlFor="name">Name</label>
    <input type="text"
     className="form-control"
      id="name"
      placeholder="Enter your name"
      onChange={handleaddValues}
       />
   
  </div>
  <div className="form-group">
    <label htmlFor="job_role">Job Role</label>
    <input type="text"
     className="form-control"
      id="job_role"
      placeholder="Enter your Job Role"
      onChange={handleaddValues}
       />
   
  </div>
  <div className="form-group">
    <label htmlFor="salary">Salary</label>
    <input type="number"
     className="form-control"
      id="salary"
      placeholder="Enter your Salary"
      onChange={handleaddValues}
       />
   
  </div>
  <div className="form-group">
    <label htmlFor="birth">Birth</label>
    <input type="date"
     className="form-control"
      id="birth"
      placeholder="Enter your Birth"
      onChange={handleaddValues}
       />
   
  </div>
  <div className="form-group">
    <label htmlFor="employee_registration">Employee Registration</label>
    <input type="number"
     className="form-control"
      id="employee_registration"
      placeholder="Enter your Employee Registration"
      onChange={handleaddValues}
       />
   
  </div>
 
  <button type="submit" onClick={handleRegisterGame} className="btn btn-primary">Submit</button>

      </div>
      </div>
    </div>
  );

{listCard.map((val) => (
  <Employee
    listCard={listCard}
    setListCard={setListCard}
    key={val.employee_id}
    employee_id={val.employee_id}
    name={val.name}
    job_role={val.job_role}
    salary={val.salary}
    birth={val.birth}
    employee_registration = {val.employee_registration}
  />
))}
</div>
);
}
