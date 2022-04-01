import React, {useEffect, useState } from "react";
import Axios from "axios";
import 'bootstrap/dist/css/bootstrap.css';
import 'jquery/dist/jquery.min.js';
import { Link } from 'react-router-dom';
 
//Datatable Modules
import "datatables.net-dt/js/dataTables.dataTables"
import "datatables.net-dt/css/jquery.dataTables.min.css"
import $ from 'jquery';

function List(){
    const [listCard, setListCard] = useState([]);
 
  console.log(listCard);
  
 

  useEffect(() => {
    Axios.get("http://localhost:3001/api/employees").then((response) => {
      setListCard(response.data);
    });
  }, []);

  $(document).ready(function () {
    setTimeout(function(){
    $('#example').DataTable();
     } ,1000);
});


    return (
        <div>
    <hr />
    <br />
    <div className="MainDiv">
    <div className="jumbotron text-center">
        <h3>List Employees</h3>
    </div>
     
    <div className="container">
         
        <table id="example" className="table table-striped">
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Job Role</th>
            <th>#</th>
          </tr>
        </thead>
        <tbody>
{listCard.map((val) => (
   <tr key={val.employee_id}>
    <td>{val.employee_id}</td>
   <td>{val.name}</td>
   <td>{val.job_role}</td>
   <td>
       <div className="btn-group">
           <Link to={`/edit/${val.employee_id}`} className="btn btn-primary">
               <i className="fa fa-edit">Edit</i>
           </Link>
           <Link to={`/details/${val.employee_id}`} className="btn btn-secondary">
               <i className="fa fa-eye">Details</i>
           </Link>
           <Link to={`/delete/${val.employee_id}`} className="btn btn-danger">
               <i className="fa fa-trash">Delete</i>
           </Link>
       </div>
   </td>
</tr>
))
}      
        </tbody>
      </table>
         
      </div>
    </div>
       
        </div>
    )   
}
 
export default List;