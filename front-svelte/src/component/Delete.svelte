<script>
  import 'bootstrap/dist/css/bootstrap.min.css';
  import Swal from 'sweetalert2';
  import axios from 'axios'
import { useParams } from 'svelte-navigator';
import { Link } from 'svelte-navigator';

 const  params  = useParams();
 

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
              window.location.href = '/'
            } else { 
            axios.delete(`http://localhost:3001/api/employees/${$params.id}`).then(result => {
            Swal.fire({
                title: 'Deleted it!',
                text: 'Employee was deleted it!',
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
        });
    }
</script>

<section> <div>
    <hr />
    <br />
    <h2>Deseja excluir o Employee <strong>{$params.id}</strong>?</h2>
    <br />
    <div class="btn-group">
        <Link to="/" class="btn btn-primary">
            <i class="fa fa-arrow-left"></i> Cancelar
        </Link>
        <button on:click={handleRemoveEmployee} class="btn btn-danger">
            Excluir <i class="fa fa-trash"></i>
        </button>
    </div>
</div></section>