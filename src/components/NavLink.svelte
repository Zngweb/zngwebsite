<script>
	import { page } from '$app/stores';
	$: isActive = $page.url.pathname === $$props.href;
	export let href;
</script>

<a
  class="inline-block px-4 py-2 font-semibold text-gray-700 border-b-2 border-transparent transition-all hover:border-primary hover:text-primary md:px-2 md:py-2 "
  class:font-semibold={isActive}
  {href}
>
  <span class="capitalize"><slot /></span>
</a>
