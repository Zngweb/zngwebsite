<script>
    import Nav from './Nav.svelte';
    import MobileMenu from './MobileMenu.svelte';
    import logo from '$lib/assets/zngweb-logo.png';
</script>
<header class="max-w-7xl px-6 lg:px-8 mx-auto bg-gray-50">
    <div class="mx-auto max-w-7xl" >
    <div class="flex py-4 items-center justify-between">
    <div>
    <a href="/" class="flex">
        <img alt="zngweb" src={logo} class="h-14 bg-transparent" />
    </a>
  
    </div>
    <MobileMenu />
    <Nav/>
    </div>
</div>
</header>