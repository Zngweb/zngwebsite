<script>
    import { SITE_URL, SITE_TITLE, SITE_DESCRIPTION, DEFAULT_OG_IMAGE } from '$lib/siteConfig';
    import hero1 from '$lib/assets/hero-image.png';
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

<div class="flex flex-col items-center justify-center max-w-7xl mx-auto lg:px-8">
  <div class="flex flex-col lg:flex-row w-full px-4 py-8 lg:py-16 border-gray-200  sm:px-8">
    <!-- Left Column for Text -->
    <div class="lg:w-1/2 lg:pr-8">
      <h1 class="font-medium lowercases pb-4 text-3xl lg:text-5xl leading-none md:text-4xl">
        <span class="relative inline-block ml-2 before:absolute before:-inset-1 before:block before:-skew-y-3 before:bg-red-500">
          <span class="relative text-white skew-y-3">our</span>
        </span> services.
      </h1>
      <h2 class="max-w-xl pb-4 text-lg lg:text-xl leading-7 lg:leading-9 text-colorary">
        Explore the range of services offered by Zngweb | Transformative Web Development. From web design to development, we've got you covered.
      </h2>
      <p class="text-gray-700 pb-10">
        At Zngweb, we embark on a mission to redefine the digital frontier through the delivery of avant-garde web development solutions. Our unwavering commitment is rooted in surpassing expectations, nurturing innovation, and cultivating enduring partnerships with our esteemed clients.
      </p>
    </div>
    <!-- Right Column for Image -->
    
    <div class="lg:w-1/2 transform  ">
      <!-- Replace 'your-image-path.jpg' with the actual path to your image -->
      <img src={hero1} alt="zngweb hero section" class=" w-full h-auto">
    </div>
  </div>
</div>



<!-- Add more sections or content as needed -->

<section class="container mx-auto px-4 py-20">
    <div class="flex items-center justify-center mb-4">
      <svg xmlns="http://www.w3.org/2000/svg" width="100" height="100" viewBox="0 0 200 200">
        <!-- Background Circle -->
        <circle cx="100" cy="100" r="100" fill="#EF4444" />
        <!-- Cloud Icon -->
        <circle cx="60" cy="110" r="30" fill="#ecf0f1" />
        <circle cx="100" cy="90" r="40" fill="#ecf0f1" />
        <circle cx="140" cy="110" r="30" fill="#ecf0f1" />
      </svg>
    </div>
  
    <div class="text-center">
      <h2 class="text-4xl md:text-5xl font-medium ">
        <span class="relative inline-block ml-2 before:absolute before:-inset-1 before:block before:-skew-y-3 before:bg-red-500">
          <span class="relative text-white skew-y-3">custom</span>
        </span> web development and design
      </h2>
      <p class="pb-10 text-xl leading-9 text-colorary">Specialized services tailored for small and mid-sized businesses, fostering growth through creativity and expertise.</p>
    </div>
  
    <div class="flex flex-wrap -mx-4">
      <!-- Web Development -->
      <div class="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 px-4 mb-8">
        <div class="bg-white p-6 border-b-4 border-primary rounded-md shadow-lg flex flex-col items-center text-center relative">
          <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 200 200">
            <circle cx="100" cy="100" r="75" fill="#EF4444" />
            <rect x="70" y="60" width="60" height="80" fill="#ecf0f1" />
            <line x1="70" y1="80" x2="130" y2="80" stroke="#2c3e50" stroke-width="5" />
            <line x1="70" y1="95" x2="130" y2="95" stroke="#2c3e50" stroke-width="5" />
            <line x1="70" y1="110" x2="130" y2="110" stroke="#2c3e50" stroke-width="5" />
          </svg>
          <h3 class="text-xl font-bold mb-4 ">Web Development</h3>
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
        <div class="bg-white p-6 border-b-4 border-primary rounded-md shadow-lg flex flex-col items-center text-center relative">
          <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 200 200">
            <circle cx="100" cy="100" r="75" fill="#EF4444" />
            <rect x="50" y="50" width="100" height="100" fill="#ecf0f1" />
            <line x1="50" y1="50" x2="150" y2="150" stroke="#2c3e50" stroke-width="5" />
            <line x1="150" y1="50" x2="50" y2="150" stroke="#2c3e50" stroke-width="5" />
          </svg>
          <h3 class="text-xl font-bold mb-4 ">Design Services</h3>
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
        <div class="bg-white p-6 border-b-4 border-primary rounded-md shadow-lg flex flex-col items-center text-center relative">
          <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 200 200">
            <circle cx="100" cy="100" r="75" fill="#EF4444" />
            <rect x="70" y="60" width="60" height="80" fill="#ecf0f1" />
            <rect x="50" y="95" width="100" height="10" fill="#bdc3c7" />
          </svg>
          <h3 class="text-xl font-bold mb-4 ">WordPress Expertise</h3>
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
        <div class="bg-white p-6 border-b-4 border-primary rounded-md shadow-lg flex flex-col items-center text-center relative">
          <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 200 200">
            <circle cx="100" cy="100" r="75" fill="#EF4444" />
            <rect x="50" y="50" width="100" height="100" fill="#ecf0f1" />
            <line x1="50" y1="100" x2="150" y2="100" stroke="#2c3e50" stroke-width="5" />
            <line x1="100" y1="50" x2="100" y2="150" stroke="#2c3e50" stroke-width="5" />
          </svg>
          <h3 class="text-xl font-bold mb-4 ">Business Growth</h3>
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




<!-- Section 4: Professional Consulting -->
<section class="container mx-auto px-4 py-20">
  <div class="flex items-center justify-center mb-4">
      <svg xmlns="http://www.w3.org/2000/svg" width="100" height="100" viewBox="0 0 200 200">
          <!-- Background Circle -->
          <circle cx="100" cy="100" r="100" fill="#10B981" />
          <!-- Briefcase Icon -->
          <rect x="75" y="65" width="50" height="50" fill="#F9FAFB" />
          <path d="M 60 120 L 80 120 L 80 145 L 120 145 L 120 120 L 140 120" fill="none" stroke="#F9FAFB" stroke-width="5" />
      </svg>
  </div>

  <div class="text-center">
      <h2 class="text-4xl md:text-5xl font-medium ">
          <span class="relative inline-block ml-2 before:absolute before:-inset-1 before:block before:-skew-y-3 before:bg-red-500">
              <span class="relative text-white skew-y-3">Professional</span>
          </span> Consulting
      </h2>
      <p class="pb-10 text-xl leading-9 text-colorary">
          Elevate your business strategy with our professional consulting services. We provide tailored guidance and solutions to help you overcome challenges, optimize processes, and achieve your business objectives.
      </p>
  </div>

  <div class="flex flex-wrap -mx-4">
      <!-- Business Strategy -->
      <div class="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 px-4 mb-8">
          <div class="bg-white p-6 border-b-4 border-primary rounded-md shadow-lg flex flex-col items-center text-center relative">
              <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 200 200">
                  <circle cx="100" cy="100" r="75" fill="#10B981" />
                  <rect x="70" y="60" width="60" height="80" fill="#F9FAFB" />
                  <line x1="70" y1="80" x2="130" y2="80" stroke="#4B5563" stroke-width="5" />
                  <line x1="70" y1="95" x2="130" y2="95" stroke="#4B5563" stroke-width="5" />
                  <line x1="70" y1="110" x2="130" y2="110" stroke="#4B5563" stroke-width="5" />
              </svg>
              <h3 class="text-xl font-bold mb-4 ">Business Strategy</h3>
              <p class="text-gray-700">Strategic planning and execution to drive business growth and profitability.</p>
          </div>
      </div>

      <!-- Market Research -->
      <div class="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 px-4 mb-8">
          <div class="bg-white p-6 border-b-4 border-primary rounded-md shadow-lg flex flex-col items-center text-center relative">
              <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 200 200">
                  <circle cx="100" cy="100" r="75" fill="#10B981" />
                  <rect x="50" y="50" width="100" height="100" fill="#F9FAFB" />
                  <line x1="50" y1="50" x2="150" y2="150" stroke="#4B5563" stroke-width="5" />
                  <line x1="150" y1="50" x2="50" y2="150" stroke="#4B5563" stroke-width="5" />
              </svg>
              <h3 class="text-xl font-bold mb-4 ">Market Research</h3>
              <p class="text-gray-700">In-depth analysis and insights to make informed business decisions.</p>
          </div>
      </div>

      <!-- Project Management -->
      <div class="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 px-4 mb-8">
          <div class="bg-white p-6 border-b-4 border-primary rounded-md shadow-lg flex flex-col items-center text-center relative">
              <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 200 200">
                  <circle cx="100" cy="100" r="75" fill="#10B981" />
                  <rect x="70" y="60" width="60" height="80" fill="#F9FAFB" />
                  <rect x="50" y="95" width="100" height="10" fill="#4B5563" />
              </svg>
              <h3 class="text-xl font-bold mb-4 ">Project Management</h3>
              <p class="text-gray-700">Efficient project planning, coordination, and execution for successful outcomes.</p>
          </div>
      </div>

      <!-- Risk Assessment -->
      <div class="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 px-4 mb-8">
          <div class="bg-white p-6 border-b-4 border-primary rounded-md shadow-lg flex flex-col items-center text-center relative">
              <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 200 200">
                  <circle cx="100" cy="100" r="75" fill="#10B981" />
                  <rect x="50" y="50" width="100" height="100" fill="#F9FAFB" />
                  <line x1="50" y1="100" x2="150" y2="100" stroke="#4B5563" stroke-width="5" />
                  <line x1="100" y1="50" x2="100" y2="150" stroke="#4B5563" stroke-width="5" />
              </svg>
              <h3 class="text-xl font-bold mb-4 ">Risk Assessment</h3>
              <p class="text-gray-700">Identifying and mitigating potential risks to ensure business continuity.</p>
          </div>
      </div>
  </div>
</section>


<section class="flex items-center  justify-center bg-white">
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

