import React, { useState } from "react";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogTitle from "@material-ui/core/DialogTitle";
import Axios from "axios";
import Swal from 'sweetalert2'
import 'bootstrap/dist/css/bootstrap.css';
// eslint-disable-next-line no-unused-vars
import produce from "immer";

export default function FormDialog(props) {
  const [editValues, setEditValues] = useState({
    employee_id: props.employee_id,
    name: props.name,
    job_role: props.job_role,
    salary: props.salary,
    birth: props.birth,
    employee_registration: props.employee_registration,

  });

  const handleChangeValues = (values) => {
    setEditValues((prevValues) => ({
      ...prevValues,
      [values.target.id]: values.target.value,
    
    }));
  };

  const handleClose = () => {
    props.setOpen(false);
  };

  const handleEditGame = () => {
    Axios.put(`http://localhost:3001/api/employees/${editValues.employee_id}`, {
      id: editValues.employee_id,
      name: editValues.name,
      job_role: editValues.job_role,
      salary: editValues.salary,
      birth: editValues.birth,
      employee_registration: editValues.employee_registration,
    }).then(() => {
      props.setListCard(
        props.listCard.map((value) => {
          // eslint-disable-next-line eqeqeq
          return value.employee_id == editValues.employee_id
            ? {
                employee_id: editValues.employee_id,
                name: editValues.name,
                job_role: editValues.job_role,
                salary: editValues.salary,
                birth: editValues.birth,
                employee_registration: editValues.employee_registration,
              }
            : value;
        })
      );
    });
    handleClose();
  };

  const handleDeleteGame = () => {
    
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
      } else { 
    Axios.delete(`http://localhost:3001/api/employees/${editValues.employee_id}`).then(() => {
      Swal.fire({
        title: 'Deleted it!',
        text: 'Employee was deleted it!',
        icon: 'success',
        showConfirmButton: true,
        allowOutsideClick: false,
        allowEnterKey: true,
        allowEscapeKey: false,
      });
      window.location.reload(false);
        props.setListCard(
        props.listCard.filter((value) => {
          // eslint-disable-next-line eqeqeq
          return value.employee_id != editValues.employee_id;
        })
      
      );
    
    });
   
    
  }
 
});

handleClose();
};

  return (
    <div>
      <Dialog
        open={props.open}
        onClose={handleClose}
        aria-labelledby="form-dialog-title"
      >
        <DialogTitle id="form-dialog-title">Editar</DialogTitle>
        <DialogContent>
        <div className="form-control">
          <TextField
            disabled
            margin="dense"
            id="id"
            label="employee_id"
            defaultValue={props.employee_id}
            type="text"
            fullWidth
          />
          </div>
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="Name Employee"
            defaultValue={props.name}
            type="text"
            onChange={handleChangeValues}
            fullWidth
          />
          <TextField
            autoFocus
            margin="dense"
            id="job_role"
            label="Job Role"
            defaultValue={props.job_role}
            type="text"
            onChange={handleChangeValues}
            fullWidth
          />
          <TextField
            autoFocus
            margin="dense"
            id="salary"
            label="Salary"
            defaultValue={props.salary}
            type="text"
            onChange={handleChangeValues}
            fullWidth
          />
           <TextField
            autoFocus
            margin="dense"
            id="birth"
            label="Birth"
            defaultValue={props.birth}
            type="date"
            onChange={handleChangeValues}
            fullWidth
          />
           <TextField
            autoFocus
            margin="dense"
            id="employee_registration"
            label="Employee Registration"
            defaultValue={props.employee_registration}
            type="text"
            onChange={handleChangeValues}
            fullWidth
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Cancelar
          </Button>
          <Button color="primary" onClick={() => handleDeleteGame()}>
            Excluir
          </Button>
          <Button color="primary" onClick={() => handleEditGame()}>
            Salvar
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}