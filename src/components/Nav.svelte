<script>
	import NavLink from './NavLink.svelte';
</script>
<div class="hidden lg:flex lg:items-center">
<nav
	class="flex items-center space-x-10 lg:ml-10"
>
<NavLink href="/">Home</NavLink>
<NavLink href="/about">About</NavLink>
<NavLink href="/services">Services</NavLink>

	<div class="flex items-center space-x-4">
		<a
  href="/contact"
  class="px-6 py-2 ml-1 flex items-center justify-center bg-primary text-white rounded-md shadow-md transition-all hover:shadow-lg hover:bg-secondary"
>
  Hire Us
</a>

	</div>
</nav>
</div>