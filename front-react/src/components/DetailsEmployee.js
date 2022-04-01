import React, { useState, useEffect } from 'react';
import { useParams } from "react-router-dom";
import { Link } from 'react-router-dom';
import axios from 'axios';

const DetailsEmployee = () => {
    const { id } = useParams();
    const [employee, setEmployee] = useState();

    useEffect(() => {
        axios.get(`http://localhost:3001/api/employees/${id}`).then(result => {
            setEmployee(result.data);
        })
    }, [id]);

    return (
        <div>
            <hr />
            <br />
            <h1>{employee?.name}<br /><small> Job Role {employee?.job_role}</small></h1>
            <p>R$ {employee?.salary}</p>
            <div className="btn-group">
                <Link to={`/edit/${employee?.employee_id}`} className="btn btn-primary">
                    Editar <i className="fa fa-edit"></i>
                </Link>
                <Link to={`/delete/${employee?.employee_id}`} className="btn btn-danger">
                    Excluir <i className="fa fa-trash"></i>
                </Link>
            </div>
        </div>
    );
}

export default DetailsEmployee;