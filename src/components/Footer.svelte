<script>
	import { page } from '$app/stores';
	// make dynamic date to be added to footer
	let date = new Date().getFullYear();
  
	export let absolute = false;
  </script>


  <footer
	class="pb-6 {absolute ? 'absolute w-full bottom-0 bg-blueGray-800' : 'relative'}"
  >
	<div class="container mx-auto px-4">
	  <hr class="mb-6 border-b-1 border-blueGray-600" />
	  <div class="flex flex-wrap items-center md:justify-between justify-center">
		<div class="w-full md:w-4/12 px-4">
		  <div
			class="text-sm text-blueGray-500 font-semibold py-1 text-center md:text-left"
		  >
		
			Copyright © {date} <a class="text-primary" href="/">Zngweb</a>
		  </div>
		</div>
		<div class="w-full md:w-8/12 px-4">
		  <ul class="flex flex-wrap list-none md:justify-end justify-center">
			<li>
			  <a
				href="/"
				class="text-gray-800 hover:text-primary text-sm font-semibold block py-1 px-3"
				class:text-primary={$page.url.pathname ===`/`}
			  >
				Home
			  </a>
			</li>
			<li>
			  <a
				href="/about"
				class="text-gray-800 hover:text-primary text-sm font-semibold block py-1 px-3"
				class:text-primary={$page.url.pathname ===`/about`}
			  >
				About Us
			  </a>
			</li>
			<li>
			  <a
				href="/services"
				class="text-gray-800 hover:text-primary text-sm font-semibold block py-1 px-3"
				class:text-primary={$page.url.pathname ===`/services`}
			  >
				Services
			  </a>
			</li>
			<li>
			  <a
				href="/contact"
				class="text-gray-800 hover:text-primary text-sm font-semibold block py-1 px-3"
				class:text-primary={$page.url.pathname ===`/contact`}
			  >
				Contact
			  </a>
			</li>
		  </ul>
		</div>
	  </div>
	</div>
  </footer>
  