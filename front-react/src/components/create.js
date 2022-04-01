import React from "react";
import 'bootstrap/dist/css/bootstrap.css';
import axios from "axios";
import { useForm } from  'react-hook-form';
import { ErrorMessage } from '@hookform/error-message';
import Swal from 'sweetalert2';
import 'font-awesome/css/font-awesome.min.css';



const Create = (props) => {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const onSubmit = data => {
      axios.post('http://localhost:3001/api/employees', data).then(result => {
        Swal.fire({
          title: 'Employee created successfully!',
          icon: 'success',
          showConfirmButton: true,
          allowOutsideClick: false,
          allowEnterKey: true,
          allowEscapeKey: false,
        }).then((data) => {
          window.location.href = '/list'
        });
  });
 
};



      
     
    return (
       
        <div className="container">
        <br />
        <br />
        <hr />
        <div className="card">
  <div className="card-header">
    <h3>Add Employee</h3>
  </div>
  <div className="card-body">
<form onSubmit={handleSubmit(onSubmit)}>
<div className="form-group">
<label htmlFor="name">Name</label>
<input type="text" className="form-control" name="name" {...register("name", { required: "This field is required." })} />
                            <ErrorMessage
        errors={errors}
        name="name"
        render={({ message }) => <p className="alert alert-danger">{message}</p>}
      />
</div>
<div className="form-group">
<label htmlFor="job_role">Job Role</label>
<input type="text" className="form-control" name="job_role" {...register('job_role',{ required: "This field is required." })} />
                            <ErrorMessage
        errors={errors}
        name="job_role"
        render={({ message }) => <p className="alert alert-danger">{message}</p>}
      />

</div>
<div className="form-group">
<label htmlFor="salary">Salary</label>
<input type="number" className="form-control"  name="salary" {...register('salary',{required: "This field is required.",pattern: {
              value: /^[0-9]/,
              message:
                "Sorry this CodeSandbox can only handle names with characters"
            }})} />
                            <ErrorMessage
        errors={errors}
        name="salary"
        render={({ message }) => <p className="alert alert-danger">{message}</p>}
      />
</div>
<div className="form-group">
<label htmlFor="birth">Birth</label>
<input type="date" className="form-control" name="birth" {...register('birth',{required: "This field is required."})} />
                            <ErrorMessage
        errors={errors}
        name="birth"
        render={({ message }) => <p className="alert alert-danger">{message}</p>}
      />
</div>
<div className="form-group">
<label htmlFor="employee_registration">Employee Registration</label>
<input type="number" className="form-control" name="employee_registration" {...register('employee_registration',{required: "This field is required."})} />
                            <ErrorMessage
        errors={errors}
        name="employee_registration"
        render={({ message }) => <p className="alert alert-danger">{message}</p>}
      />
</div>
<button type="submit" className="btn btn-primary">Salvar <i className="fa fa-save"></i></button>
 </form>
  </div>
  </div>
</div>
    )   
}
 
export default Create;