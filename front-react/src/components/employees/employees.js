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
      <div className="container" onClick={() => setOpen(true)}>
      <div className="card">
      <div className="card-body">
        <h5 className="card-header">{props.name}</h5>
        <p className="card-text">{props.employee_id}</p>
        <p className="card-text">{props.job_role}</p>
        <p className="card-cost">R${props.salary}</p>
        <p className="card-text">{props.birth}</p>
        <p className="card-text">{props.employee_registration}</p>
        </div>
        </div>
      </div>
    </>
  );
}