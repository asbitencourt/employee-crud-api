<script>
	import { Router, Route } from 'svelte-navigator';
  
	import Header from './Header.svelte';
	import Footer from './Footer.svelte';
	import Create from './component/Create.svelte'
  
	import Home from './Home.svelte';
	import About from './About.svelte';
	import Delete from './component/Delete.svelte';
	import Update from './component/Editar.svelte';
	

  </script>
  
  
  <Router>
	<Header />
	<body>
	<main>
	
	  <Route path="/">
		<Home />
	  </Route>
	  <Route path="create" component={Create} />
	  <Route path="sobre" component={About} />
	  <Route path="delete/:id" component={Delete} />
	  <Route path="edit/:id" component={Update} />
		
	</main>
	</body>
	<Footer />
  </Router>
  
  
  