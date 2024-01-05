import { c as create_ssr_component, e as escape, d as add_attribute, f as each } from "../../../chunks/ssr.js";
import { S as SITE_URL, a as SITE_TITLE, D as DEFAULT_OG_IMAGE } from "../../../chunks/siteConfig.js";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let keyFactors = [
    {
      id: 1,
      title: "Effective",
      description: "Our small team comprises experienced and talented individuals dedicated to delivering top-notch web solutions."
    },
    {
      id: 2,
      title: "Efficient",
      description: "We take the time to understand your unique business needs, delivering bespoke solutions aligned with your goals."
    },
    {
      id: 3,
      title: "Collaborative",
      description: "Our collaborative approach ensures seamless communication and teamwork throughout the project lifecycle."
    },
    {
      id: 4,
      title: "Result-Driven",
      description: "Our focus is on delivering results that contribute to the growth and success of our clients' businesses."
    },
    {
      id: 5,
      title: "Attention to Detail",
      description: "We pride ourselves on meticulous attention to detail, ensuring precision in every aspect of our work."
    },
    {
      id: 6,
      title: "Responsibility",
      description: "Taking responsibility for our projects, we prioritize accountability and reliability in meeting client expectations."
    },
    {
      id: 7,
      title: "Innovative Solutions",
      description: "We consistently explore innovative approaches to problem-solving, providing unique solutions tailored to our clients' needs."
    },
    {
      id: 8,
      title: "Customer Satisfaction",
      description: "Our commitment to customer satisfaction is reflected in our responsive communication and dedication to exceeding expectations."
    }
  ];
  let { data } = $$props;
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  data.items;
  return `${$$result.head += `<!-- HEAD_svelte-1w1rcrz_START -->${$$result.title = `<title>${escape(SITE_TITLE)} - About Us</title>`, ""}<link rel="canonical"${add_attribute("href", `${SITE_URL}/about`, 0)}><meta property="og:url"${add_attribute("content", `${SITE_URL}/about`, 0)}><meta property="og:type" content="article"><meta property="og:title"${add_attribute("content", `${SITE_TITLE} - About Us`, 0)}><meta name="Description"${add_attribute("content", `Learn more about ${SITE_TITLE} and our 12 years of expertise in web development.`, 0)}><meta property="og:description"${add_attribute("content", `Learn more about ${SITE_TITLE} and our 12 years of expertise in web development.`, 0)}><meta property="og:image"${add_attribute("content", DEFAULT_OG_IMAGE, 0)}><meta name="twitter:card" content="summary"><meta name="twitter:title"${add_attribute("content", `${SITE_TITLE} - About Us`, 0)}><meta name="twitter:description"${add_attribute("content", `Learn more about ${SITE_TITLE} and our 12 years of expertise in web development.`, 0)}><meta name="twitter:image"${add_attribute("content", DEFAULT_OG_IMAGE, 0)}><!-- HEAD_svelte-1w1rcrz_END -->`, ""} <div class="flex flex-col items-center justify-center max-w-7xl mx-auto lg:px-8" data-svelte-h="svelte-16fwgbt"><div class="flex flex-col lg:flex-row w-full px-4 py-16 border-gray-200 dark:border-gray-700 sm:px-8"> <div class="lg:w-1/2 lg:pr-8"><h1 class="font-medium lowercases pb-10 text-5xl leading-none md:text-6xl lg:text-6xl"><span class="relative inline-block ml-2 before:absolute before:-inset-1 before:block before:-skew-y-3 before:bg-red-500"><span class="relative text-white skew-y-3">about</span></span> us.</h1> <p class="text-gray-700 pb-10">At Zngweb, we firmly believe in empowering every business with a robust online presence. Our commitment is reflected in the exceptional web development and design services we offer to small and mid-sized enterprises, aiding in their growth. Passion drives our team, and we are dedicated to providing our clients with bespoke solutions that blend creativity and technical excellence at an enterprise level.</p> <p class="text-gray-700 pb-10">Comprising a small yet proficient team, our experienced and talented individuals collaborate to craft distinctive websites that not only boast visually appealing designs but also excel in performance. Taking the time to comprehend our clients&#39; businesses and unique requirements, we deliver tailor-made solutions that align with their objectives and surpass expectations.</p> <p class="text-gray-700 pb-10">Setting ourselves apart with meticulous attention to detail and an unwavering commitment to excellence, we engage closely with our clients throughout the entire process – from the initial consultation to the final website launch. This ensures that every aspect of their vision is seamlessly integrated into their online presence.</p> <p class="text-gray-700 pb-10">Our pride in workmanship fuels our constant quest for innovation. Staying abreast of the latest industry trends and technologies, we offer cutting-edge solutions that position our clients ahead of the competition.</p> <p class="text-gray-700 pb-10">Whether you seek to revamp an existing website, build one from scratch, or require ongoing support and maintenance, Zngweb is here to assist. More than just a web development agency, we consider ourselves a strategic partner in your business&#39;s journey to success.&quot;</p></div>  <div class="lg:w-1/2 transform rounded-xl bg-gradient-to-r from-yellow-400 via-red-500 to-pink-500 p-1 transition-all hover:scale-[1.01] max-h-screen"><svg xmlns="http://www.w3.org/2000/svg" class="bg-white rounded-xl" width="550" viewBox="0 0 200 200"><circle cx="100" cy="60" r="30" fill="#FFD700"></circle><rect x="90" y="60" width="20" height="40" fill="#3498db"></rect><circle cx="95" cy="50" r="3" fill="#000"></circle><circle cx="105" cy="50" r="3" fill="#000"></circle><path d="M 95 65 Q 100 70 105 65" fill="none" stroke="#000" stroke-width="2"></path><rect x="90" y="45" width="20" height="15" fill="#000"></rect><rect x="85" y="100" width="30" height="30" fill="#e74c3c"></rect><rect x="90" y="130" width="10" height="20" fill="#2ecc71"></rect><rect x="100" y="130" width="10" height="20" fill="#2ecc71"></rect></svg></div></div></div> <section class="container mx-auto py-8"><div class="text-center" data-svelte-h="svelte-1uqnmgc"><h2 class="text-4xl md:text-5xl font-medium "><span class="relative inline-block ml-2 before:absolute before:-inset-1 before:block before:-skew-y-3 before:bg-red-500"><span class="relative text-white skew-y-3">key</span></span> success factors</h2> <p class="pb-10 text-xl leading-9 text-colorary"></p></div>  <div class="flex flex-wrap justify-around">${each(keyFactors, (factor) => {
    return `<div class="w-full sm:w-1/2 md:w-1/2 lg:w-1/3 xl:w-1/4 px-4 mb-8"><div class="bg-white p-6 rounded-md shadow-lg flex flex-col items-center text-center relative min-h-96"><svg fill="#EF4444" width="40px" height="40px" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><g stroke-width="0"></g><g stroke-linecap="round" stroke-linejoin="round"></g><g><path d="M19.965 8.521C19.988 8.347 20 8.173 20 8c0-2.379-2.143-4.288-4.521-3.965C14.786 2.802 13.466 2 12 2s-2.786.802-3.479 2.035C6.138 3.712 4 5.621 4 8c0 .173.012.347.035.521C2.802 9.215 2 10.535 2 12s.802 2.785 2.035 3.479A3.976 3.976 0 0 0 4 16c0 2.379 2.138 4.283 4.521 3.965C9.214 21.198 10.534 22 12 22s2.786-.802 3.479-2.035C17.857 20.283 20 18.379 20 16c0-.173-.012-.347-.035-.521C21.198 14.785 22 13.465 22 12s-.802-2.785-2.035-3.479zm-9.01 7.895-3.667-3.714 1.424-1.404 2.257 2.286 4.327-4.294 1.408 1.42-5.749 5.706z"></path></g></svg> <h3 class="text-xl font-bold mb-4 overflow-hidden">${escape(factor.title)}</h3> <p class="text-gray-700 h-32 overflow-hidden">${escape(factor.description)}</p></div> </div>`;
  })}</div></section>  <div class="flex flex-col lg:flex-roww-full items-center justify-center px-4 py-16 border-gray-200 dark:border-gray-700 sm:px-8" data-svelte-h="svelte-rjzs2v"> <div class="lg:w-1/2 lg:pr-8"><h2 class="font-medium lowercases pb-10 text-4xl leading-none md:text-5xl lg:text-5xl">our 
      
      <span class="relative inline-block ml-2 before:absolute before:-inset-1 before:block before:-skew-y-3 before:bg-red-500"><span class="relative text-white skew-y-3">mission</span></span></h2> <p class="text-gray-700 pb-10">At Zngweb, we embark on a mission to redefine the digital frontier through the delivery of avant-garde web development solutions. Our unwavering commitment is rooted in surpassing expectations, nurturing innovation, and cultivating enduring partnerships with our esteemed clients.
</p><p class="text-gray-700 pb-10">Driven by a passion for excellence, we employ cutting-edge technologies and industry best practices to craft solutions that not only meet but exceed the evolving needs of businesses in the digital era. Our dedicated team of professionals is committed to staying at the forefront of technological advancements, ensuring that our clients benefit from state-of-the-art, future-proof solutions.</p> <p class="text-gray-700 pb-10">In our pursuit of excellence, we emphasize collaboration and understanding our clients&#39; unique goals and challenges. This client-centric approach enables us to tailor our services, providing bespoke solutions that resonate with the distinctive identity and vision of each business we engage with.</p> <p class="text-gray-700 pb-10">At Zngweb, innovation is not just a goal; it&#39;s a way of life. We foster a culture that encourages creativity, continuous learning, and pushing the boundaries of what is possible. This mindset empowers us to tackle complex challenges and transform ambitious ideas into tangible, successful digital experiences.</p> <p class="text-gray-700 pb-10">Our commitment extends beyond project delivery – we are invested in building lasting relationships. We believe that mutual success is built on trust, transparency, and open communication. Our clients aren&#39;t just collaborators; they are valued partners on a shared journey towards digital excellence.</p> <p class="text-gray-700 pb-10">Discover the Zngweb difference – where innovation meets dedication, and digital transformation becomes a reality.</p></div></div> <section class="flex items-center justify-center bg-gray-100 " data-svelte-h="svelte-1biw76n"><div class="w-full max-w-2xl rounded-xl py-16 px-6 sm:pb-24 lg:px-8 text-center space-y-10 text-primary mx-auto "><h3 class="text-4xl lg:text-5xl">Is there a project within your scope of focus?
      <span class="relative inline-block ml-2 before:absolute before:-inset-1 before:block before:-skew-y-3 before:bg-red-500"><span class="relative text-white skew-y-3">Brief us in</span></span></h3> <p class="text-xl lg:text-2xl max-w-2xl mx-auto text-colorary leading-relaxed">Let us establish a connection to explore how the expertise of the

      <span class="relative inline-block ml-2 before:absolute before:-inset-1 before:block before:-skew-y-3 before:bg-red-500"><span class="relative text-white skew-y-3">zngweb</span></span> 
      team can transform your business vision into tangible reality.</p> <div class="relative"><a href="/contact" class="flex sm:inline-flex rounded-md px-10 py-4 font-semibold shadow-sm hover:scale-105 focus-visible:outline focus-visible:outline-2 bg-primary text-white hover:bg-secondary dark:hover:bg-yellow-800 focus-visible:outline-offset-2 focus-visible:outline-white ring-red-400 transition-all hover:ring-2 dark:bg-yellow-800 w-full text-center md:w-auto transition justify-center"><span>Let&#39;s chat</span> <svg class="h-6 w-6 ml-3 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true"><path stroke-linecap="round" stroke-linejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"></path></svg></a></div></div></section>`;
});
export {
  Page as default
};
