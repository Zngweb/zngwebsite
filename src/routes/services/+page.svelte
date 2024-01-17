<script>
    import { SITE_URL, SITE_TITLE, SITE_DESCRIPTION, DEFAULT_OG_IMAGE } from '$lib/siteConfig';
    import hero1 from '$lib/assets/hero-image.png';

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
    
   <title>Services | {SITE_TITLE} </title>
  <meta name="Description" content={SITE_DESCRIPTION} />
  <meta name="robots" content="follow, index, max-snippet:-1, max-video-preview:-1, max-image-preview:large" />
  <link rel="canonical" href={`${SITE_URL}/contact`} />
	<meta property="og:locale" content="en_US" />
  <meta property="og:type" content="website" />
	<meta property="og:title" content={`Services | ${SITE_TITLE}`} />
	<meta property="og:description" content={SITE_DESCRIPTION} />
  <meta property="og:url" content={`${SITE_URL}/contact`} />
  <meta property="og:site_name" content={SITE_TITLE}/>
	<meta property="og:image" content={DEFAULT_OG_IMAGE} />
  <meta property="og:image:secure_url" content={DEFAULT_OG_IMAGE} />
  <meta property="og:image:width" content="1024" />
<meta property="og:image:height" content="577" />
<meta property="og:image:alt" content="zngweb" />
<meta property="og:image:type" content="image/png" />
	<meta name="twitter:card" content="summary" />
    <meta name="twitter:title" content={`Services | ${SITE_TITLE}`}  />
    <meta name="twitter:description" content={SITE_DESCRIPTION} />
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

<div class="flex flex-col items-center justify-center max-w-7xl mx-auto lg:px-8 border-t border-gray-300">
  <div class="flex flex-col lg:flex-row w-full px-4 py-8 lg:py-16 border-gray-200  sm:px-8">
    <!-- Left Column for Text -->
    <div class="lg:w-1/2 lg:pr-8">
     
      <h1 class="font-medium lowercases border-s-4 pl-4 border-primary  text-3xl md:text-4xl lg:text-5xl leading-none lg:leading-tight text-gray-700">
        our <span class="text-primary p-1">services. </span>
      </h1>
      <h2 class="max-w-xl pb-4 pt-6 text-lg lg:text-xl leading-7 lg:leading-9 text-colorary">
        Explore the range of services offered by Zngweb | Transformative Web Development. From web design to development, we've got you covered.
      </h2>
      <p class="text-gray-700 pb-10">
        At Zngweb, we embark on a mission to redefine the digital frontier through the delivery of avant-garde web development solutions. Our unwavering commitment is rooted in surpassing expectations, nurturing innovation, and cultivating enduring partnerships with our esteemed clients.
      </p>
    </div>
    <!-- Right Column for Image -->
    
    <div class="lg:w-1/2">
      <!-- Replace 'your-image-path.jpg' with the actual path to your image -->
      <img src={hero1} alt="zngweb hero section" class=" w-full h-auto">
    </div>
  </div>
</div>
<div class="grid grid-cols-1 px-12 md:grid-cols-2 lg:grid-cols-3 gap-4">
  {#each services as service (service.title)}
    <div class="flex items-center p-4 border border-primary bg-white rounded-lg">
      <span class="text-lg border border-primary bg-primary rounded-full text-gray-700 p-2 mr-2" role="img">{service.icon}</span>
      <a href={service.link} class="text-gray-700 hover:text-primary transition-all">{service.shortTitle}</a>
    </div>
  {/each}
</div>

<section class="container mx-auto md:px-4 md:py-20 ">
  <div class="md:p-6 p-4 w-full">
    <h2 class="border-s-4 pl-4 border-primary text-gray-700 text-4xl md:text-5xl font-medium leading-tight max-w-2xl mb-6 mb-0">
      <span class="text-accent lowercase">Custom Web Development and Design</span><span class="text-primary">.</span> 
    </h2>
    
    <p class="pl-4 md:pl-6 pb-6 md:pb-10 text-base md:text-xl leading-6 md:leading-9 text-gray-700">
      Specialized services tailored for small and mid-sized businesses, fostering growth through creativity and expertise.
    </p>
  </div>
  

  <div class="flex flex-wrap ">
    <!-- Web Development -->
    <div class="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 px-4 mb-8">
      <div class="bg-white p-6 border-b-4  border-primary   shadow-lg flex flex-col   relative">
        
        <h3 class="border-s-2 border-primary pl-2 text-xl font-medium mb-4 text-gray-700"><span class="text-accent  ">Web Development</span></h3>
        <p class="text-gray-700">Crafting dynamic and responsive websites with the latest technologies.</p>
        <!-- Sub-Services -->
        <div class="border-t mt-4 pt-4 text-sm text-gray-500">
          <div class="flex items-center">
 <svg xmlns="http://www.w3.org/2000/svg" class="w-4 h-4 text-green-500 mr-2" viewBox="0 0 20 20" fill="currentColor">
              <path fill-rule="evenodd" d="M17.707 5.293a1 1 0 0 1 0 1.414l-8 8a1 1 0 0 1-1.414 0l-4-4a1 1 0 0 1 1.414-1.414L9 12.586l7.293-7.293a1 1 0 0 1 1.414 0z" clip-rule="evenodd" />
            </svg>
            <div>Web Design</div>
          </div>
          <div class="flex items-center mt-2">
 <svg xmlns="http://www.w3.org/2000/svg" class="w-4 h-4 text-green-500 mr-2" viewBox="0 0 20 20" fill="currentColor">
              <path fill-rule="evenodd" d="M17.707 5.293a1 1 0 0 1 0 1.414l-8 8a1 1 0 0 1-1.414 0l-4-4a1 1 0 0 1 1.414-1.414L9 12.586l7.293-7.293a1 1 0 0 1 1.414 0z" clip-rule="evenodd" />
            </svg>
            <div>Web Maintenance</div>
          </div>
          <div class="flex items-center mt-2">
 <svg xmlns="http://www.w3.org/2000/svg" class="w-4 h-4 text-green-500 mr-2" viewBox="0 0 20 20" fill="currentColor">
              <path fill-rule="evenodd" d="M17.707 5.293a1 1 0 0 1 0 1.414l-8 8a1 1 0 0 1-1.414 0l-4-4a1 1 0 0 1 1.414-1.414L9 12.586l7.293-7.293a1 1 0 0 1 1.414 0z" clip-rule="evenodd" />
            </svg>
            <div>E-commerce Development</div>
          </div>
        </div>
      </div>
    </div>

    <!-- Design Services -->
    <div class="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 px-4 mb-8">
      <div class="bg-white p-6 border-b-4 border-secondary   shadow-lg flex flex-col  relative">
        <h3 class="border-s-2 border-primary pl-2 text-xl font-medium mb-4 text-gray-700"><span class="text-accent ">Design Services</span></h3>
       
        <p class="text-gray-700">Creating visually stunning designs that captivate your audience.</p>
        <!-- Sub-Services -->
        <div class="border-t mt-4 pt-4 text-sm text-gray-500">
          <div class="flex items-center">
 <svg xmlns="http://www.w3.org/2000/svg" class="w-4 h-4 text-green-500 mr-2" viewBox="0 0 20 20" fill="currentColor">
              <path fill-rule="evenodd" d="M17.707 5.293a1 1 0 0 1 0 1.414l-8 8a1 1 0 0 1-1.414 0l-4-4a1 1 0 0 1 1.414-1.414L9 12.586l7.293-7.293a1 1 0 0 1 1.414 0z" clip-rule="evenodd" />
            </svg>
            <div>Graphic Design</div>
          </div>
          <div class="flex items-center mt-2">
 <svg xmlns="http://www.w3.org/2000/svg" class="w-4 h-4 text-green-500 mr-2" viewBox="0 0 20 20" fill="currentColor">
              <path fill-rule="evenodd" d="M17.707 5.293a1 1 0 0 1 0 1.414l-8 8a1 1 0 0 1-1.414 0l-4-4a1 1 0 0 1 1.414-1.414L9 12.586l7.293-7.293a1 1 0 0 1 1.414 0z" clip-rule="evenodd" />
            </svg>
            <div>UI/UX Design</div>
          </div>
          <div class="flex items-center mt-2">
 <svg xmlns="http://www.w3.org/2000/svg" class="w-4 h-4 text-green-500 mr-2" viewBox="0 0 20 20" fill="currentColor">
              <path fill-rule="evenodd" d="M17.707 5.293a1 1 0 0 1 0 1.414l-8 8a1 1 0 0 1-1.414 0l-4-4a1 1 0 0 1 1.414-1.414L9 12.586l7.293-7.293a1 1 0 0 1 1.414 0z" clip-rule="evenodd" />
            </svg>
            <div>Branding</div>
          </div>
        </div>
      </div>
    </div>

    <!-- WordPress Expertise -->
    <div class="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 px-4 mb-8">
      <div class="bg-white p-6 border-b-4 border-primary   shadow-lg flex flex-col  relative">

        <h3 class="border-s-2 border-primary pl-2 text-xl font-medium mb-4 text-gray-700"><span class="text-accent ">WordPress Expertise</span></h3>
        <p class="text-gray-700">Specializing in WordPress development for a seamless online experience.</p>
        <!-- Sub-Services -->
        <div class="border-t mt-4 pt-4 text-sm text-gray-500">
          <div class="flex items-center">
 <svg xmlns="http://www.w3.org/2000/svg" class="w-4 h-4 text-green-500 mr-2" viewBox="0 0 20 20" fill="currentColor">
              <path fill-rule="evenodd" d="M17.707 5.293a1 1 0 0 1 0 1.414l-8 8a1 1 0 0 1-1.414 0l-4-4a1 1 0 0 1 1.414-1.414L9 12.586l7.293-7.293a1 1 0 0 1 1.414 0z" clip-rule="evenodd" />
            </svg>
            <div>Custom Themes</div>
          </div>
          <div class="flex items-center mt-2">
 <svg xmlns="http://www.w3.org/2000/svg" class="w-4 h-4 text-green-500 mr-2" viewBox="0 0 20 20" fill="currentColor">
              <path fill-rule="evenodd" d="M17.707 5.293a1 1 0 0 1 0 1.414l-8 8a1 1 0 0 1-1.414 0l-4-4a1 1 0 0 1 1.414-1.414L9 12.586l7.293-7.293a1 1 0 0 1 1.414 0z" clip-rule="evenodd" />
            </svg>
            <div>Plugin Development</div>
          </div>
          <div class="flex items-center mt-2">
 <svg xmlns="http://www.w3.org/2000/svg" class="w-4 h-4 text-green-500 mr-2" viewBox="0 0 20 20" fill="currentColor">
              <path fill-rule="evenodd" d="M17.707 5.293a1 1 0 0 1 0 1.414l-8 8a1 1 0 0 1-1.414 0l-4-4a1 1 0 0 1 1.414-1.414L9 12.586l7.293-7.293a1 1 0 0 1 1.414 0z" clip-rule="evenodd" />
            </svg>
            <div>WordPress Maintenance</div>
          </div>
        </div>
      </div>
    </div>

    <!-- Business Growth -->
    <div class="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 px-4 mb-8">
      <div class="bg-white p-6 border-b-4 border-secondary  shadow-lg flex flex-col  relative">
        <h3 class="border-s-2 border-primary pl-2 text-xl font-medium mb-4 text-gray-700"><span class="text-accent ">Business Growth</span></h3>
        <p class="text-gray-700">Facilitating your business growth through innovative digital solutions.</p>
        <!-- Sub-Services -->
        <div class="border-t mt-4 pt-4 text-sm text-gray-500">
          <div class="flex items-center">
 <svg xmlns="http://www.w3.org/2000/svg" class="w-4 h-4 text-green-500 mr-2" viewBox="0 0 20 20" fill="currentColor">
              <path fill-rule="evenodd" d="M17.707 5.293a1 1 0 0 1 0 1.414l-8 8a1 1 0 0 1-1.414 0l-4-4a1 1 0 0 1 1.414-1.414L9 12.586l7.293-7.293a1 1 0 0 1 1.414 0z" clip-rule="evenodd" />
            </svg>
            
            <div>Digital Marketing</div>
          </div>
          <div class="flex items-center mt-2">
 <svg xmlns="http://www.w3.org/2000/svg" class="w-4 h-4 text-green-500 mr-2" viewBox="0 0 20 20" fill="currentColor">
              <path fill-rule="evenodd" d="M17.707 5.293a1 1 0 0 1 0 1.414l-8 8a1 1 0 0 1-1.414 0l-4-4a1 1 0 0 1 1.414-1.414L9 12.586l7.293-7.293a1 1 0 0 1 1.414 0z" clip-rule="evenodd" />
            </svg>
            <div>SEO Strategies</div>
          </div>
          <div class="flex items-center mt-2">
 <svg xmlns="http://www.w3.org/2000/svg" class="w-4 h-4 text-green-500 mr-2" viewBox="0 0 20 20" fill="currentColor">
              <path fill-rule="evenodd" d="M17.707 5.293a1 1 0 0 1 0 1.414l-8 8a1 1 0 0 1-1.414 0l-4-4a1 1 0 0 1 1.414-1.414L9 12.586l7.293-7.293a1 1 0 0 1 1.414 0z" clip-rule="evenodd" />
            </svg>
            <div>Analytics and Reporting</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>


<section class="container mx-auto md:px-4 md:py-20 ">
  <div class="md:p-6 p-4 w-full">
    <h2 class="border-s-4 pl-4 border-primary text-gray-700 text-4xl md:text-5xl font-medium leading-tight max-w-2xl mb-6 mb-0">
      <span class="text-accent lowercase">Professional Consulting</span><span class="text-primary">.</span> 
    </h2>
    
    <p class="pl-4 md:pl-6 pb-6 md:pb-10 text-base md:text-xl leading-6 md:leading-9 text-gray-700">
      Elevate your business strategy with our professional consulting services. We provide tailored guidance and solutions to help you overcome challenges, optimize processes, and achieve your business objectives.  
    </p>
  </div>
  

  <div class="flex flex-wrap ">
    <!-- Web Development -->
    <div class="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 px-4 mb-8">
      <div class="bg-white p-6 border-b-4  border-primary   shadow-lg flex flex-col   relative">
        
        <h3 class="border-s-2 border-primary pl-2 text-xl font-medium mb-4 text-gray-700"><span class="text-accent  ">Business Strategy</span></h3>
        <p class="text-gray-700">Crafting dynamic and responsive websites with the latest technologies.</p>
     
      </div>
    </div>

    <!-- Design Services -->
    <div class="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 px-4 mb-8">
      <div class="bg-white p-6 border-b-4 border-secondary   shadow-lg flex flex-col  relative">
        <h3 class="border-s-2 border-primary pl-2 text-xl font-medium mb-4 text-gray-700"><span class="text-accent ">Market Research</span></h3>
       
        <p class="text-gray-700">In-depth analysis and insights to make informed business decisions.</p>
    
      </div>
    </div>

    <!-- WordPress Expertise -->
    <div class="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 px-4 mb-8">
      <div class="bg-white p-6 border-b-4 border-primary   shadow-lg flex flex-col  relative">

        <h3 class="border-s-2 border-primary pl-2 text-xl font-medium mb-4 text-gray-700"><span class="text-accent ">Project Management</span></h3>
        <p class="text-gray-700">Efficient project planning, coordination, and execution for successful outcomes.</p>
     
      </div>
    </div>

    <!-- Business Growth -->
    <div class="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 px-4 mb-8">
      <div class="bg-white p-6 border-b-4 border-secondary  shadow-lg flex flex-col  relative">
        <h3 class="border-s-2 border-primary pl-2 text-xl font-medium mb-4 text-gray-700"><span class="text-accent ">Risk Assessment</span></h3>
        <p class="text-gray-700">Identifying and mitigating potential risks to ensure business continuity.</p>
    
      </div>
    </div>
  </div>
</section>

<section class="flex items-center  justify-center bg-white div-with-pattern">
	<div class="w-full max-w-2xl rounded-xl py-20  px-6 sm:pb-24 lg:px-8 text-center space-y-10 text-secondary mx-auto ">
	  <h2 class=" border-primary text-gray-700 text-4xl md:text-5xl font-medium leading-tight max-w-2xl mb-6 mb-0">
		<span class="text-accent lowercase">     Is there a project within your scope of focus?</span><span class="text-primary">Brief us in</span> 
	  </h2>
	  <p class="text-xl lg:text-2xl max-w-2xl mx-auto text-colorary leading-relaxed">
		Let us establish a connection to explore how the expertise of the
  
		<span class="relative inline-block ml-2 before:absolute before:-inset-1 before:block before:-skew-y-3 before:bg-red-500"><span class="relative text-white skew-y-3">  zngweb</span></span> 
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