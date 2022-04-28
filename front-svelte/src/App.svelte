<script>
	import { Router, Route } from 'svelte-navigator';
  
	import Header from './Header.svelte';
	import Footer from './Footer.svelte';
	import Create from './component/Create.svelte'
  
	import Home from './Home.svelte';
	import About from './About.svelte';
	import Delete from './component/Delete.svelte';
	import Update from './component/Editar.svelte';
	import Detais from './component/Details.svelte';
	

  </script>
  
  
  <Router>
	<Header />
	<main>
	
	  <Route path="/">
		<Home />
	  </Route>
	  <Route path="create" component={Create} />
	  <Route path="sobre" component={About} />
	  <Route path="delete/:id" component={Delete} />
	  <Route path="edit/:id" component={Update} />
	  <Route path="details/:id" component={Detais} />
		
	</main>
	<Footer />
  </Router>
  
  
  