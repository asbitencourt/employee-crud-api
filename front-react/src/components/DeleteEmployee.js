import React, { useState, useEffect } from 'react';
import { useParams } from "react-router-dom";
import { Link } from 'react-router-dom';
import axios from 'axios';
import Swal from 'sweetalert2';

const DeleteEmployee = (props) => {
    const { id } = useParams();
    const [employee, setEmployee] = useState();

    useEffect(() => {
        axios.get(`http://localhost:3001/api/employees/${id}`).then(result => {
            setEmployee(result.data);
        })
    }, [id]);

    const handleRemoveEmployee = () => {
        Swal.fire({
            title: 'Are you sure you want to delete the employee?',
            text: 'Watch out! This Employee will be deleted!',
            icon: 'warning',
            showConfirmButton: true,
            allowOutsideClick: false,
            allowEnterKey: true,
            allowEscapeKey: false,
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes! Please, delete it!'
          }).then((result) => {
            if (result.dismiss === Swal.DismissReason.cancel) { // ==> Detectar se a pergunta acima foi recusada
              Swal.fire({
                title: 'Cancel!',
                text: 'Returning to the Employees List',
                icon: 'error',
                showConfirmButton: true,
                allowOutsideClick: false,
                allowEnterKey: true,
                allowEscapeKey: false,
              });
              window.location.href = '/list'
            } else { 
            axios.delete(`http://localhost:3001/api/employees/${id}`).then(result => {
            Swal.fire({
                title: 'Deleted it!',
                text: 'Employee was deleted it!',
                icon: 'success',
                showConfirmButton: true,
                allowOutsideClick: false,
                allowEnterKey: true,
                allowEscapeKey: false,
              });
              window.location.href = '/list'
            });
          }
        });
    }

    return (
        <div>
            <hr />
            <br />
            <h2>Deseja excluir o Employee <strong>{employee?.name}</strong>?</h2>
            <br />
            <div className="btn-group">
                <Link to="/" className="btn btn-primary">
                    <i className="fa fa-arrow-left"></i> Cancelar
                </Link>
                <button onClick={handleRemoveEmployee} className="btn btn-danger">
                    Excluir <i className="fa fa-trash"></i>
                </button>
            </div>
        </div>
    );
}

export default DeleteEmployee;