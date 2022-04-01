import React, { useEffect } from 'react';
import { useParams } from "react-router-dom";
import { Link } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import 'bootstrap/dist/css/bootstrap.css';
import axios from 'axios';
import { ErrorMessage } from '@hookform/error-message';
import Swal from 'sweetalert2';
import 'font-awesome/css/font-awesome.min.css';

const EditEmployee = (props) => {
    const { id } = useParams();
    const { register, handleSubmit, formState: { errors }, setValue } = useForm();

    useEffect(() => {
        axios.get(`http://localhost:3001/api/employees/${id}`).then(result => {
            setValue("id", result.data.employee_id);
            setValue("name", result.data.name);
            setValue("job_role", result.data.job_role);
            setValue("salary", result.data.salary);
            setValue("birth", result.data.birth);
            setValue("employee_registration", result.data.employee_registration);
        })
    }, [id, setValue]);

    const onSubmit = data => {
        axios.put(`http://localhost:3001/api/employees/${id}`, data).then(result => {
            Swal.fire({
                title: 'Employee updated successfully!',
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
        <div className="card">
            <div className="card-body">
                <br />
                <h5 className="card-title">Edit Employee</h5>
                <hr />
                <div className="card-text">
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <div className="form-group">
                            <label>Código</label>
                            <input type="text" disabled className="form-control" name="id" {...register('id',{ required: "This field is required." })} />
                            <ErrorMessage
        errors={errors}
        name="id"
        render={({ message }) => <p className="alert alert-danger">{message}</p>}
      />
                        </div>
                       
                        <div className="form-group">
                            <label>Name</label>
                            <input type="text" className="form-control" name="name" {...register("name", { required: "This field is required." })} />
                            <ErrorMessage
        errors={errors}
        name="name"
        render={({ message }) => <p className="alert alert-danger">{message}</p>}
      />
                        </div>
                        <div className="form-group">
                            <label>Job Role</label>
                            <input type="text" className="form-control" name="job_role" {...register('job_role',{ required: "This field is required." })} />
                            <ErrorMessage
        errors={errors}
        name="job_role"
        render={({ message }) => <p className="alert alert-danger">{message}</p>}
      />
                        </div>
                        <div className="form-group">
                            <label>Salary</label>
                            <input type="number" className="form-control" name="salary" {...register('salary',{required: "This field is required."})} />
                            <ErrorMessage
        errors={errors}
        name="salary"
        render={({ message }) => <p className="alert alert-danger">{message}</p>}
      />
                        </div>
                        <div className="form-group">
                            <label>Birth</label>
                            <input type="date" className="form-control" name="birth" {...register('birth')} />
                            <small className="form-text text-danger">{errors.birth?.message}</small>
                        </div>
                        <div className="form-group">
                            <label>Employee Registration</label>
                            <input type="number" className="form-control" name="employee_registration" {...register('employee_registration')} />
                            <small className="form-text text-danger">{errors.employee_registration?.message}</small>
                        </div>

                        <Link to="/list" className="btn btn-primary">
                            <i className="fa fa-arrow-left"></i> Cancelar
                        </Link>
                        &nbsp;
                        <button type="submit" className="btn btn-primary">Salvar <i className="fa fa-save"></i></button>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default EditEmployee;