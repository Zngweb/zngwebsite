<script>
	import {
		SITE_URL,
		SITE_TITLE,
		SITE_DESCRIPTION,
		DEFAULT_OG_IMAGE,
	} from '$lib/siteConfig';


	/** @type {import('./$types').PageData} */
	export let data;
	// technically this is a slighlty different type because doesnt have 'content' but we'll let it slide
	/** @type {import('$lib/types').ContentItem[]} */
	$: items = data.items;
</script>

<svelte:head>
	<title>{SITE_TITLE}</title>
	<link rel="canonical" href={SITE_URL} />
	<link rel="alternate" type="application/rss+xml" href={SITE_URL + '/rss.xml'} />
	<meta property="og:url" content={SITE_URL} />
	<meta property="og:type" content="article" />
	<meta property="og:title" content={SITE_TITLE} />
	<meta name="Description" content={SITE_DESCRIPTION} />
	<meta property="og:description" content={SITE_DESCRIPTION} />
	<meta property="og:image" content={DEFAULT_OG_IMAGE} />
	<meta name="twitter:card" content="summary" />
	<meta name="twitter:title" content={SITE_TITLE} />
	<meta name="twitter:description" content={SITE_DESCRIPTION} />
	<meta name="twitter:image" content={DEFAULT_OG_IMAGE} />
</svelte:head>

<div class="flex flex-col items-center justify-center max-w-7xl mx-auto lg:px-8">
  <div class="flex flex-col lg:flex-row w-full px-4 py-16 border-gray-200 dark:border-gray-700 sm:px-8">
    <!-- Left Column for Text -->
    <div class="lg:w-1/2 lg:pr-8">
      <h1 class="font-medium lowercases pb-10 text-5xl leading-none md:text-6xl lg:text-6xl">
        a

        <span class="relative inline-block ml-2 before:absolute before:-inset-1 before:block before:-skew-y-3 before:bg-red-500"><span class="relative text-white skew-y-3">innovative</span></span>
        digital agency expert on wordpress.
      </h1>
      <h2 class="max-w-xl pb-10 text-xl leading-9 text-secondary">
        We specialize in delivering exceptional web development and design services tailored for small and mid-sized businesses, facilitating their growth through a harmonious blend of creativity and expertise. Our commitment is to provide enterprise-quality solutions that elevate your online presence and business success <span class="text-red">.</span>
      </h2>
    </div>
    <!-- Right Column for Image -->
    <div class="lg:w-1/2 transform rounded-xl bg-gradient-to-r from-yellow-400 via-red-500 to-pink-500 p-1 transition-all hover:scale-[1.01]">
      <svg xmlns="http://www.w3.org/2000/svg" class="bg-white rounded-xl" width="550" height="550" viewBox="0 0 200 200">
        <!-- Computer Monitor -->
        <rect x="40" y="40" width="120" height="80" fill="#2D2D2D" />
        <rect x="50" y="50" width="100" height="60" fill="#1E1E1E" />
      
      
        <!-- Keyboard -->
        <rect x="60" y="130" width="80" height="10" fill="#2D2D2D" />
      
        <!-- Code Text -->
        <text x="55" y="55" font-family="Courier New" font-size="4" fill="#FEF08A">{`console.log("Hello, World!");`}</text>
        <text x="55" y="65" font-family="Courier New" font-size="4" fill="#2ecc71">{`var x = 10;`}</text>
        <text x="55" y="75" font-family="Courier New" font-size="4" fill="#FF3E29">{`if (x > 5) {`}</text>
        <text x="60" y="85" font-family="Courier New" font-size="4" fill="#FF3E29">{`  console.log("x is greater than 5");`}</text>
        <text x="55" y="95" font-family="Courier New" font-size="4" fill="#FF3E29">{`}`}</text>
      </svg>
      
      
      
  
    </div>
  </div>
</div>






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
    <p class="pb-10 text-xl leading-9 text-secondary">Specialized services tailored for small and mid-sized businesses, fostering growth through creativity and expertise.</p>
  </div>

  <div class="flex flex-wrap -mx-4">
    <!-- Web Development -->
    <div class="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 px-4 mb-8">
      <div class="bg-white p-6 rounded-md shadow-lg flex flex-col items-center text-center relative">
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
      <div class="bg-white p-6 rounded-md shadow-lg flex flex-col items-center text-center relative">
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
      <div class="bg-white p-6 rounded-md shadow-lg flex flex-col items-center text-center relative">
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
      <div class="bg-white p-6 rounded-md shadow-lg flex flex-col items-center text-center relative">
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

<section class="flex items-center  justify-center bg-gray-100 ">
  <div class="w-full max-w-2xl rounded-xl py-16  px-6 sm:pb-24 lg:px-8 text-center space-y-10 text-primary mx-auto ">
    <h3 class="text-4xl lg:text-5xl">
      Is there a project within your scope of focus?
      <span class="relative inline-block ml-2 before:absolute before:-inset-1 before:block before:-skew-y-3 before:bg-red-500"><span class="relative text-white skew-y-3">  Brief us in</span></span> 

    </h3>
    <p class="text-xl lg:text-2xl max-w-2xl mx-auto text-secondary leading-relaxed">
      Let us establish a connection to explore how the expertise of the

      <span class="relative inline-block ml-2 before:absolute before:-inset-1 before:block before:-skew-y-3 before:bg-red-500"><span class="relative text-white skew-y-3">  zngweb</span></span> 
      team can transform your business vision into tangible reality.
    </p>
    <div class="relative">
      <a href="/contact" class="flex sm:inline-flex rounded-md px-10 py-4 font-semibold shadow-sm hover:scale-105 focus-visible:outline focus-visible:outline-2 bg-main text-white hover:bg-yellow-200 dark:hover:bg-yellow-800 focus-visible:outline-offset-2 focus-visible:outline-white ring-red-400 transition-all hover:ring-2 dark:bg-yellow-800 w-full text-center md:w-auto transition justify-center">
        <span>Let's chat</span>
        <svg class="h-6 w-6 ml-3 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true">
          <path stroke-linecap="round" stroke-linejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"></path>
        </svg>
      </a>
    </div>
  </div>
</section>
