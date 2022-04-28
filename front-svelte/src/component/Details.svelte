<script>
     import { onMount } from 'svelte'
    import 'bootstrap/dist/css/bootstrap.min.css';
    import axios from 'axios'
    import { useParams } from 'svelte-navigator';
    import { Link } from 'svelte-navigator';
    
  
   const  params  = useParams();
   let fields = { employee_id:"", name: "", job_role:"", salary:"", birth:"",employee_registration:""};
   
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
   
  </script>
  
  <section> 
    <div>
        <hr />
        <br />
        <h1>{fields.name}<br /><small> Job Role {fields.job_role}</small></h1>
        <p>R$ {fields.salary}</p>
        <div class="btn-group">
            <Link to='/' class="btn btn-outline-primary">
                 <i class="fa fa-arrow-left">Voltar</i>
            </Link>
        </div>
    </div>
  </section>