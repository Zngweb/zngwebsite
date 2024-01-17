<script>
  import { page } from '$app/stores';

  $: isActive = $page.url.pathname === $$props.href;

  // Define a function to conditionally apply the 'text-primary' class
  $: textClass = isActive ? 'text-primary' : 'text-gray-700';

  export let href;
</script>

<a
  class="inline-block px-4 py-2 font-semibold border-b-2 border-transparent transition-all hover:border-primary md:px-2 md:py-2 {textClass}"
  class:font-semibold={isActive}
  {href}
>
  <span class="capitalize"><slot /></span>
</a>
