import React from "react";
import "./employees.css";
import 'bootstrap/dist/css/bootstrap.css';
import FormDialog from "../dialog/dialog";



export default function Employee(props) {
  const [open, setOpen] = React.useState(false);

 
  return (
    <>
      <FormDialog
        open={open}
        setOpen={setOpen}
        name={props.name}
        job_role={props.job_role}
        salary={props.salary}
        birth={props.birth}
        employee_registration={props.employee_registration}
        listCard={props.listCard}
        setListCard={props.setListCard}
        employee_id={props.employee_id}
      />
     
    
               <tr key={props.employee_id} onClick={() => setOpen(true)}>
                <td>{props.employee_id}</td>
                <td>{props.name}</td>
                <td>{props.job_role}</td>
              </tr> 
    </>
  );
}