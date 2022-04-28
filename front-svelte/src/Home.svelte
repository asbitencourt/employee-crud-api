
<script>
  import { onMount } from 'svelte'
  import axios from 'axios'
  import 'bootstrap/dist/css/bootstrap.min.css';
  import { Datatable } from 'svelte-simple-datatables'
  import { Link } from 'svelte-navigator';
  import 'font-awesome/css/font-awesome.min.css';
 

  
  let allCategories = [];

  const settings = {
        
       rowsPerPage: 10,
        scrollY: false
      
    }
    let rows
 
  onMount(async () => {
	try {
		const response = await axios.get('http://localhost:3001/api/employees');
		allCategories = response.data
	} catch(e) {
		error = e
	}
});
 

</script>
<section>
<div class="container">
  <br />
  <br />
<Datatable  settings={settings} data={allCategories} bind:dataRows={rows}>
  <thead>
      <th data-key="employee_id">ID</th>
      <th data-key="name">Name</th>
      <th data-key="job_role">Job Role</th>
      <th data-key="salary">Salary</th>
      <th data-key="actions">#</th>
  </thead>
  <tbody>
  {#if rows}
      {#each $rows as row}
          <tr>
              <td>{row.employee_id}</td>
              <td>{row.name}</td>
              <td>{row.job_role}</td>
              <td>{row.salary}</td>
              <td>
                  <div class="btn-group">
                      <Link to={`/edit/${row.employee_id}`} class="btn btn-outline-primary">
                          <i class="fa fa-edit"> Edit</i>
                      </Link>
                      <Link to={`/details/${row.employee_id}`} class="btn btn-outline-info">
                          <i class="fa fa-eye"> Details</i>
                      </Link>
                      <Link to={`/delete/${row.employee_id}`} class="btn btn-outline-danger">
                        <i class="fa fa-trash" aria-hidden="true"> Delete</i>
                      </Link>
                  </div>
              </td>
          </tr>
      {/each}
  {/if}
  </tbody>
</Datatable>
</div>
</section>

 
<style>
    td{text-align:center;padding:4px 0}
</style>
