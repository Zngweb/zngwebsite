<script>
    import { onMount } from 'svelte';
	import {
		SITE_URL,
		SITE_TITLE,
		SITE_DESCRIPTION,
		DEFAULT_OG_IMAGE,
	} from '$lib/siteConfig';

  import hero from '$lib/assets/hero-image-zngweb.png';
  import hero1 from '$lib/assets/hero-image.png';
  import portfolio from '$lib/assets/zngweb-creative-portfolio.png';
  import zngwebDevelopment from '$lib/assets/zngweb-mobile-development.png';


  let activeSlide = 0;

  const slides = [
  {
    id: 1,
    heading: "Elevate Your Business with Custom IT Solutions",
    description:
      "Empower your business with a modern and user-friendly e-commerce website. We ensure a seamless shopping experience and a secure payment gateway.",
    image: hero,
    link: "#",
    slideName: "E-Commerce Solutions",
  },
  {
    id: 2,
    heading: "Transform Your Corporate Presence",
    description:
      "Establish a strong and professional corporate presence online. Our websites showcase company information, services, and client testimonials with a sleek design.",
    image: hero1,
    link: "#",
    slideName: "Corporate Websites",
  },
  {
    id: 3,
    heading: "Showcase Your Creativity with Our Portfolios",
    description:
      "Present your work and creative projects with a visually appealing portfolio website. Let your designs speak for themselves and captivate your audience.",
    image: portfolio,
    link: "#",
    slideName: "Creative Portfolios",
  },
  {
    id: 4,
    heading: "Optimize Business Processes with SaaS Platforms",
    description:
      "Experience the efficiency of a cloud-based SaaS platform. Our solutions provide powerful tools and analytics, streamlining business processes for enhanced productivity.",
    image: hero1,
    link: "#",
    slideName: "SaaS Solutions",
  },
  {
    id: 5,
    heading: "Mobile App Development for Next-Gen Experiences",
    description:
      "Stay ahead in the digital landscape with our cutting-edge mobile app development services. We craft innovative and user-friendly applications for various platforms.",
    image: zngwebDevelopment,
    link: "#",
    slideName: "Mobile App Development",
  },
 
];


onMount(() => {
    const container = document.querySelector(".slider-container");

    container.addEventListener("wheel", (e) => {
      if (e.deltaY > 0 && activeSlide < slides.length - 1) {
        // scrolling down and not at the last item
        setActiveSlide((prev) => prev + 1);
      } else if (e.deltaY < 0 && activeSlide > 0) {
        // scrolling up and not at the first item
        setActiveSlide((prev) => prev - 1);
      }
    });
  });
  function setActiveSlide(index) {
    activeSlide = index;
  }
  function toggleAccordion(index) {
    const accordionContent = document.getElementById(`mobileAccordionContent${index}`);
    accordionContent.classList.toggle('hidden');
  }

	/** @type {import('./$types').PageData} */
	export let data;
	// technically this is a slighlty different type because doesnt have 'content' but we'll let it slide
	/** @type {import('$lib/types').ContentItem[]} */
	$: items = data.items;
</script>

<svelte:head>
	<title>{SITE_TITLE} | A digital agency expert on WordPress</title>
  <meta name="Description" content={SITE_DESCRIPTION} />
  <meta name="robots" content="follow, index, max-snippet:-1, max-video-preview:-1, max-image-preview:large" />
  <link rel="canonical" href={SITE_URL} />
	<meta property="og:locale" content="en_US" />
  <meta property="og:type" content="website" />
	<meta property="og:title" content={`${SITE_TITLE} | A digital agency expert on WordPress `} />
	<meta property="og:description" content={SITE_DESCRIPTION} />
  <meta property="og:url" content={SITE_URL} />
  <meta property="og:site_name" content={SITE_TITLE}/>
	<meta property="og:image" content={DEFAULT_OG_IMAGE} />
  <meta property="og:image:secure_url" content={DEFAULT_OG_IMAGE} />
  <meta property="og:image:width" content="1024" />
<meta property="og:image:height" content="577" />
<meta property="og:image:alt" content="zngweb" />
<meta property="og:image:type" content="image/png" />
	<meta name="twitter:card" content="summary" />
  <meta name="twitter:title" content={`${SITE_TITLE} | A digital agency expert on WordPress `}  />
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

<div class="flex flex-col items-center justify-center max-w-7xl mx-auto lg:px-8 div-with-pattern">
  <div class="flex flex-col lg:flex-row w-full px-4 py-8 lg:py-16 border-gray-200  sm:px-8">
    <!-- Left Column for Text -->
    <div class="lg:w-1/2 lg:pr-8">
      <h1 class="font-medium lowercases border-s-4 pl-4 border-primary  text-3xl md:text-4xl lg:text-5xl leading-none lg:leading-tight text-gray-700">
        a  <span class="text-primary p-1">innovative </span>
      </h1>
      <h1 class="font-medium lowercases  pl-4 border-primary  pb-6 text-3xl md:text-4xl lg:text-5xl leading-none lg:leading-tight text-gray-700">
        digital agency expert on WordPress<span class="text-primary">.</span> 
      </h1>
      <h2 class="max-w-xl pb-6 text-lg lg:text-xl leading-7 lg:leading-9 text-colorary text-gray-700 pl-4">
        We specialize in delivering exceptional web development and design services tailored for small and mid-sized businesses, facilitating their growth through a harmonious blend of creativity and expertise. Our commitment is to provide enterprise-quality solutions that elevate your online presence and business success <span class="text-red">.</span>
      </h2>
    </div>

<div class="lg:w-1/2">
  <!-- Replace 'your-image-path.jpg' with the actual path to your image -->
  <img src={hero} alt="zngweb hero section" class=" w-full h-auto ">
</div>
  </div>
</div>
<!-- Desktop Section -->
<div class="hidden md:flex w-full bg-gray-50  slider-container">
  <div class="w-1/2 relative overflow-hidden">
    {#each slides as slide, index (slide.id)}
      <div
        key={slide.id}
        class="h-full absolute top-0 left-0 transition-transform duration-500"
        style={`transform: translateY(${(index - activeSlide) * 100}%);`}
      >
        <div
          class="h-full bg-cover bg-center"
          style={`background-image: linear-gradient(rgba(12, 42, 49, 0.7), rgba(12, 42, 49, 0.7)), url(${slide.image})`}
        >
          <div class="py-20 px-24 text-white">
            <h1 class="font-medium border-s-4 pl-4 border-primary text-4xl">
              {slide.heading}
            </h1>
            <p class="py-8 text-lg text-gray-100 ">{slide.description}</p>
          
          </div>
        </div>
      </div>
    {/each}
  </div>
  <div class="w-1/2 py-20 px-24">
    <h2 class="border-s-4 pl-4 border-primary text-gray-700 text-4xl md:text-5xl font-medium leading-tight max-w-2xl mb-6 mb-0">
      <span class="text-accent lowercase">Who we help</span><span class="text-primary">.</span> 
    </h2>
    <ul class="pt-4">
      {#each slides as slide, index (slide.id)}
        <li key={slide.id} class="py-4">
          <button
    on:click={() => setActiveSlide(index)}
    class={`cursor-pointer font-medium pl-4 border-primary text-lg ${
      index === activeSlide ? "text-primary border-s-2" : "text-gray-700"
    }`}
  >
    {slide.slideName}
  </button>
        </li>
      {/each}
    </ul>
  </div>
</div>

<!-- Mobile Section -->
<div class="md:hidden">
  <div class="p-4">
    <h2 class="border-s-4 pl-4 border-primary text-gray-700 text-4xl md:text-5xl font-medium leading-tight max-w-2xl mb-6 mb-0">
      <span class="text-accent lowercase">Who we help</span><span class="text-primary">.</span> 
    </h2>
    <div class="py-8">
    <!-- Accordion Items -->
    {#each slides as slide, index (slide.id)}
      <div class="mb-4">
        <button
          class="bg-gray-700 text-white font-medium py-2 px-4 w-full"
          onclick={() => toggleAccordion(index)}
        >
          {slide.slideName}
        </button>
        <div
          id={`mobileAccordionContent${index}`}
          class={`accordion-content hidden p-4 ${
            index === activeSlide ? 'block' : ''
          }`}
        >
          <!-- Your mobile content goes here -->
          <p class="text-gray-700">{slide.description}</p>
        </div>
      </div>
    {/each}
  </div>
</div>
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

<style>
   .slider-container {
    display: flex;
    overflow: hidden;
  }
  /* For screens smaller than medium (md) */
@media (max-width: 767px) {
  .slider-container {
    display: none;
  }
}

  


  .slide {
    min-width: 100%;
    transition: opacity 0.5s ease;
  }

  img {
    width: 100%;
    height: auto;
  }
</style>