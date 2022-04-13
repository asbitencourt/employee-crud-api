<script>
    import { onMount } from 'svelte'
    import 'bootstrap/dist/css/bootstrap.min.css';
    import Swal from 'sweetalert2';
    import axios from 'axios';
    import { useParams } from 'svelte-navigator';


 const  params  = useParams();

    import * as yup from 'yup';
      import {Form, Message} from 'svelte-yup';
      let schema = yup.object().shape({
          employee_id: yup.string().required().label("Employee ID"),
          name: yup.string().required().max(30).label("Name"),
          job_role: yup.string().required().max(50).label("Job Role"),
          salary: yup.string().required().label("Salary"),
          birth: yup.string().required().label("Birth"),
          employee_registration: yup.string().required().label("Employee Registration")
      });
      let fields = { employee_id:"", name: "", job_role:"", salary:0, birth:"",employee_registration:0};
      let submitted = false;
      let isValid;

      onMount(async () => {
	try {
        await axios.get(`http://localhost:3001/api/employees/${$params.id}`).then(result => {
            fields.employee_id = result.data.employee_id;
            fields.name =  result.data.name;
            fields.job_role = result.data.job_role;
            fields.salary = result.data.salary;
            fields.birth = result.data.birth;
            fields.employee_registration = result.data.employee_registration;
        })
	} catch(e) {
		error = e
	}
});
      function formSubmit(){
          submitted = true;
          isValid = schema.isValidSync(fields);
          if(isValid){
            axios.put(`http://localhost:3001/api/employees/${fields.employee_id}`, {
              name: fields.name,
              job_role: fields.job_role,
              salary: fields.salary,
              birth: fields.birth,
              employee_registration: fields.employee_registration,
            }).then(result => {
          Swal.fire({
            title: 'Employee Update successfully!',
            icon: 'success',
            showConfirmButton: true,
            allowOutsideClick: false,
            allowEnterKey: true,
            allowEscapeKey: false,
          }).then((data) => {
            window.location.href = '/'
          });
        });
          }
      }
  </script>
  
  
  <section>
    <div class="container">
      <div class="card">
  <div class="card-header">
  <h3>Update Employee</h3>
  </div>
  <div class="card-body">
  <!-- svelte-ignore component-name-lowercase -->
  <Form {schema} {fields} submitHandler={formSubmit} {submitted}>
    <div class="form-group">
        <label for="name">Name</label>
        <input type="text" class="form-control" name="employee_id" id="employee_id" bind:value={fields.employee_id} placeholder="ID"/>  
         <Message name="employee_id" />
        </div>
  <div class="form-group">
  <label for="name">Name</label>
  <input type="text" class="form-control" name="name" id="name" bind:value={fields.name} placeholder="Name"/>
  <Message name="name" />
  </div>
  <div class="form-group">
  <label for="job_role">Job Role</label>
  <input type="text" class="form-control" name="job_role" bind:value={fields.job_role} placeholder="Job Role" id="job_role"  />
  <Message name="job_role"  />                  
  
  </div>
  <div class="form-group">
  <label for="salary">Salary</label>
  <input type="number" class="form-control"  name="salary" bind:value={fields.salary} placeholder="Salary" id="salary" />
  <Message name="salary"  />       
  </div>
  <div class="form-group">
  <label for="birth">Birth</label>
  <input type="date" class="form-control" name="birth" bind:value={fields.birth} placeholder="Birth" id="birth" />
  <Message name="birth"  />               
  </div>
  <div class="form-group">
  <label for="employee_registration">Employee Registration</label>
  <input type="number" class="form-control" name="employee_registration" bind:value={fields.employee_registration} placeholder="Employee Registratio" id="employee_registration" />
  <Message name="employee_registration"  />                
  </div>
  <button type="submit" class="btn btn-primary">Salvar <i class="fa fa-save"></i></button>
  </Form>
  </div>
  </div>
  </div>
  </section>
  
  
  <style>
  </style>