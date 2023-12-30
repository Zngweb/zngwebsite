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
			class="px-8 py-2 ml-1 flex hover:bg-yellow-200 text-white items-center justify-center  bg-main ring-red-400
			transition-all hover:ring-2"
	
		>
		Hire US
	</a>
	</div>
</nav>
</div>