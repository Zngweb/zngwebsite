<script>
	import { page } from '$app/stores';
	$: isActive = $page.url.pathname === $$props.href;
	export let href;
</script>

<a
	class="hidden  p-1 text-gray-800 transition-all hover:bg-main hover:text-white sm:px-3 sm:py-2 md:inline-block"
	class:font-semibold={isActive}
	{href}
	><span class="capsize"><slot /> </span>
</a>
