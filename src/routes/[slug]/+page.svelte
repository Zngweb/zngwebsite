<script>
  import { page } from '$app/stores';
    import { SITE_URL, SITE_TITLE, DEFAULT_OG_IMAGE } from '$lib/siteConfig';
	let services = [
    {
      title: "WordPress Website Design",
      shortTitle: "Design",
      description: "Crafting visually stunning and user-friendly websites tailored to your unique business needs using WordPress.",
      shortDescription: "Stunning WordPress websites tailored to your needs.",
      icon: "🎨",
      link: "wordpress-website-design",
      metaDescription: 'Elevate your online presence with our WordPress Website Design service. We create visually stunning, user-friendly websites tailored to your business needs for a lasting impression.',

    },
    {
      title: "Custom WordPress Theme Development",
      shortTitle: "Theme Dev",
      description: "Building bespoke WordPress themes that align with your brand identity and provide a seamless user experience.",
      shortDescription: "Bespoke themes aligned with your brand identity.",
      icon: "🛠️",
      link: "custom-wordpress-theme-development",
      metaDescription: 'Transform your online presence with our Custom WordPress Theme Development. We craft bespoke themes aligned with your brand identity, providing a seamless, engaging user experience.',

    },
    {
      title: "Plugin Development and Integration",
      shortTitle: "Plugin Dev",
      description: "Creating custom WordPress plugins to enhance functionality and integrate third-party tools for optimal performance.",
      shortDescription: "Custom plugins for enhanced functionality.",
      icon: "🔌",
      link: "plugin-development-and-integration",
      metaDescription: 'Empower your WordPress website with our Plugin Development and Integration service. Tailored plugins enhance functionality and seamlessly integrate third-party tools for optimal performance.',

    },
    {
      title: "WordPress Maintenance and Support",
      shortTitle: "Maintenance",
      description: "Offering ongoing maintenance and support services to ensure your WordPress website runs smoothly and stays secure.",
      shortDescription: "Ongoing support for a secure and smooth website.",
      icon: "🛡️",
      link: "wordpress-maintenance-and-support",
      metaDescription: 'Ensure stability and security with our WordPress Maintenance and Support. Proactive maintenance, robust security measures, and 24/7 support for a smooth and secure online experience.',

    },
    {
      title: "API Integration with WordPress",
      shortTitle: "API Integration",
      description: "Integrating APIs into your WordPress website to connect with external services, streamline processes, and enhance functionality.",
      shortDescription: "Enhancing functionality with API integration.",
      icon: "🔄",
      link: "api-integration-with-wordpress",
      metaDescription: 'Unlock the full potential of your WordPress website with our API Integration service. Seamlessly integrate external services, streamline processes, and enhance overall functionality.',
    },
    {
      title: "E-commerce Development with WooCommerce",
      shortTitle: "E-commerce",
      description: "Setting up robust e-commerce solutions using WooCommerce, the powerful WordPress plugin, for seamless online shopping experiences.",
      shortDescription: "Robust e-commerce solutions with WooCommerce.",
      icon: "💳",
      link: "e-commerce-development-with-woocommerce",
      metaDescription: 'Launch or enhance your e-commerce presence with our E-commerce Development using WooCommerce. Showcase and sell your products or services in a user-friendly and secure online store.',
    },
    {
      title: "Headless WordPress Development",
      shortTitle: "Headless Dev",
      description: "Implementing headless architecture for WordPress to decouple the front end from the back end, providing flexibility and improved performance.",
      shortDescription: "Flexibility and improved performance with headless architecture.",
      icon: "🔗",
      link: "headless-wordpress-development",
      metaDescription: 'Experience unparalleled flexibility and performance with our Headless WordPress Development service. Decouple the front end for enhanced flexibility and improved website performance.',
    },
    {
      title: "Custom Gutenberg Block Development",
      shortTitle: "Block Dev",
      description: "Designing and developing custom Gutenberg blocks to extend the functionality of the WordPress editor and enhance content creation capabilities.",
      shortDescription: "Enhancing content creation with custom Gutenberg blocks.",
      icon: "🧱",
      link: "custom-gutenberg-block-development",
      metaDescription: 'Unleash the full potential of content creation with our Custom Gutenberg Block Development service. Designing blocks to enhance content creation capabilities within the WordPress editor.',
    },
  ];
    /** @type {import('./$types').PageData} */
    export let data;
  
    // technically this is a slightly different type because it doesn't have 'content' but we'll let it slide
    /** @type {import('$lib/types').ContentItem[]} */
    $: items = data.items;
</script>

<svelte:head>
<title>{data.title} | {SITE_TITLE} </title>
<meta name="Description" content={data.metaDescription} />
<meta name="robots" content="follow, index, max-snippet:-1, max-video-preview:-1, max-image-preview:large" />
<link rel="canonical" href={`${SITE_URL}/contact`} />
<meta property="og:locale" content="en_US" />
<meta property="og:type" content="website" />
<meta property="og:title" content={`Services | ${SITE_TITLE}`} />
<meta property="og:description" content={data.metaDescription} />
<meta property="og:url" content={`${SITE_URL}/contact`} />
<meta property="og:site_name" content={SITE_TITLE}/>
<meta property="og:image" content={DEFAULT_OG_IMAGE} />
<meta property="og:image:secure_url" content={DEFAULT_OG_IMAGE} />
<meta property="og:image:width" content="1024" />
<meta property="og:image:height" content="577" />
<meta property="og:image:alt" content="zngweb" />
<meta property="og:image:type" content="image/png" />
<meta name="twitter:card" content="summary" />
<meta name="twitter:title" content={`Services | ${data.title}`}  />
<meta name="twitter:description" content={data.metaDescription} />
<meta name="twitter:image" content={DEFAULT_OG_IMAGE} />
<meta name="twitter:card" content="summary_large_image" />
<meta name="twitter:label1" content="Time to read" />
<meta name="twitter:data1" content="2 minutes" />
    <!-- Google tag (gtag.js) -->
<script async src="https://www.googletagmanager.com/gtag/js?id=G-LTJB966L7N"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());

  gtag('config', 'G-LTJB966L7N');
</script>
</svelte:head>
<div class="flex flex-col lg:flex-row items-start justify-center lg:px-8 border-t border-gray-300">
	<!-- Left Column for Text -->
	<div class="lg:w-2/3 px-4 py-8 lg:py-16 border-gray-200 sm:px-8">
	  <h1 class="font-light text-4xl  leading-tight text-primary border-l-4 border-primary pl-4 mb-8">
		{data.title}
	  </h1>
	  <h2 class="max-w-3xl pb-6 text-lg lg:text-xl leading-7 lg:leading-9 text-gray-700">
		{data.description}
	  </h2>
  
	  <div class="prose max-w-full text-gray-300">
		{@html data.content}
	  </div>
	</div>
  
	<!-- Right Column for Services Sidebar -->
	<div class="lg:w-1/3 px-4 py-8 lg:py-16 border-gray-200 sm:px-8">
		<h1 class="font-light text-4xl leading-tight text-gray-700 border-l-4 border-primary pl-4 mb-8">
			Our Services
		  </h1>
	  <div class="flex flex-col space-y-4">
		{#each services as service (service.title)}
		  <div class="flex items-center">
			<span class="text-lg border border-primary bg-primary rounded-full text-gray-700 p-2 mr-2" role="img">{service.icon}</span>
			<a href={service.link} class="text-gray-700 hover:text-primary transition-all" class:text-primary={$page.url.pathname ===`/${service.link}`}>{service.shortTitle}</a>
		  </div>
		{/each}
	  </div>
	</div>
  </div>

<section class="flex items-center  justify-center bg-white div-with-pattern">
	<div class="w-full max-w-2xl rounded-xl py-20  px-6 sm:pb-24 lg:px-8 text-center space-y-10 text-secondary mx-auto ">
	  <h2 class=" border-primary text-gray-700 text-4xl md:text-5xl font-medium leading-tight max-w-2xl mb-6 mb-0">
		<span class="text-accent lowercase">     Is there a project within your scope of focus?</span><span class="text-primary">Brief us in</span> 
	  </h2>
	  <p class="text-xl lg:text-2xl max-w-2xl mx-auto text-colorary leading-relaxed">
		Let us establish a connection to explore how the expertise of the
  
		<span class="relative inline-block ml-2 before:absolute before:-inset-1 before:block before:-skew-y-3 before:bg-primary"><span class="relative text-white skew-y-3">  zngweb</span></span> 
		team can transform your business vision into tangible reality.
	  </p>
	  <div class="relative">
		<a href="/contact" class="flex sm:inline-flex rounded-md px-10 py-4 font-medium shadow-sm hover:scale-105 focus-visible:outline focus-visible:outline-2 bg-primary text-white hover:bg-secondary focus-visible:outline-offset-2 focus-visible:outline-white ring-white transition-all hover:ring-2  w-full text-center md:w-auto transition justify-center">
		  <span>Let's chat</span>
		  <svg class="h-6 w-6 ml-3 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true">
			<path stroke-linecap="round" stroke-linejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"></path>
		  </svg>
		</a>
	  </div>
	</div>
  </section>