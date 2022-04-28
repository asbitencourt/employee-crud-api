
<script>
    import { Link } from 'svelte-navigator';
    import 'bootstrap/dist/css/bootstrap.min.css';
  </script>
  <svelte:head>
    <link rel="stylesheet" href="http://maxcdn.bootstrapcdn.com/font-awesome/latest/css/font-awesome.min.css">
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet">
  </svelte:head>
  
  <header>
     
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
     
      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav">
          <li class="nav-item active">
            <Link class="nav-link" to="/">Home <span class="sr-only"></span></Link>
          </li>
          <li class="nav-item">
            <Link class="nav-link" to="create">Create</Link>
          </li>
         
        </ul>
      </div>
    </nav>
  </header>
  <style>
  </style>
  
  
 