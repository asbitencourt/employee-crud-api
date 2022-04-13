
<script>
    import { Link } from 'svelte-navigator';
    import 'bootstrap/dist/css/bootstrap.min.css';
  </script>
  <svelte:head>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-BmbxuPwQa2lc/FVzBcNJ7UAyJxM6wuqIj61tLrc4wSX0szH/Ev+nYRRuWlolflfl" crossorigin="anonymous">
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
          <li class="nav-item">
            <Link class="nav-link" to="sobre">Sobre</Link>
          </li>
          <li class="nav-item">
            <Link class="nav-link disabled" to="/">Disabled</Link>
          </li>
        </ul>
      </div>
    </nav>
  </header>
  <style>
  </style>
  
  
 