<script>

	import '../tailwind.css';
	import Footer from '../components/Footer.svelte';
	import { SITE_TITLE } from '$lib/siteConfig';
	import Header from '../components/Header.svelte';
	
</script>

<svelte:head>
	<link
		rel="alternate"
		type="application/rss+xml"
		title={'RSS Feed for ' + SITE_TITLE}
		href="/rss.xml"
	/>
</svelte:head>

<Header/>

<main class="flex flex-col justify-center bg-gray-50  dark:bg-gray-900 ">
	<slot />
</main>
<Footer/>