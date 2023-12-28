import { c as create_ssr_component, e as escape, d as add_attribute } from "../../../chunks/ssr.js";
import { a as SITE_URL, S as SITE_TITLE, D as DEFAULT_OG_IMAGE } from "../../../chunks/siteConfig.js";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { data } = $$props;
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  data.items;
  return `${$$result.head += `<!-- HEAD_svelte-286kb8_START -->${$$result.title = `<title>${escape(SITE_TITLE)} - Contact Us</title>`, ""}<link rel="canonical"${add_attribute("href", `${SITE_URL}/contact`, 0)}><meta property="og:url"${add_attribute("content", `${SITE_URL}/contact`, 0)}><meta property="og:type" content="article"><meta property="og:title"${add_attribute("content", `${SITE_TITLE} - Contact Us`, 0)}><meta name="Description"${add_attribute("content", `Get in touch with ${SITE_TITLE}.`, 0)}><meta property="og:description"${add_attribute("content", `Get in touch with ${SITE_TITLE}.`, 0)}><meta property="og:image"${add_attribute("content", DEFAULT_OG_IMAGE, 0)}><meta name="twitter:card" content="summary"><meta name="twitter:title"${add_attribute("content", `${SITE_TITLE} - Contact Us`, 0)}><meta name="twitter:description"${add_attribute("content", `Get in touch with ${SITE_TITLE}.`, 0)}><meta name="twitter:image"${add_attribute("content", DEFAULT_OG_IMAGE, 0)}><!-- HEAD_svelte-286kb8_END -->`, ""} <div class="flex flex-col items-center justify-center max-w-7xl mx-auto lg:px-8" data-svelte-h="svelte-hrs0to"><div class="flex flex-col lg:flex-row w-full px-4 py-16 border-gray-200 dark:border-gray-700 sm:px-8"> <div class="lg:w-1/2 lg:pr-8"><h1 class="font-medium lowercases pb-10 text-5xl leading-none md:text-6xl lg:text-6xl"><span class="relative inline-block ml-2 before:absolute before:-inset-1 before:block before:-skew-y-3 before:bg-red-500"><span class="relative text-white skew-y-3">contact</span></span> us.</h1> <h2 class="max-w-xl pb-10 text-xl leading-9 text-secondary">Reach out to Zngweb | Transformative Web Development. We&#39;re here to assist you!</h2></div>  <div class="lg:w-1/2 transform rounded-xl bg-gradient-to-r from-green-400 via-blue-500 to-purple-500 p-1 transition-all hover:scale-[1.01]"><svg xmlns="http://www.w3.org/2000/svg" class="bg-white rounded-xl" width="550" height="550" viewBox="0 0 200 200"><rect x="80" y="40" width="40" height="80" fill="#f39c12"></rect><rect x="70" y="60" width="60" height="50" fill="#ecf0f1"></rect><line x1="70" y1="110" x2="130" y2="110" stroke="#2c3e50" stroke-width="5"></line></svg></div></div></div>  <section class="container mx-auto px-4 py-20" data-svelte-h="svelte-1gjm7hs"><div class="flex items-center justify-center mb-4"><svg xmlns="http://www.w3.org/2000/svg" width="100" height="100" viewBox="0 0 200 200"><circle cx="100" cy="100" r="100" fill="#EF4444"></circle><rect x="80" y="60" width="40" height="40" fill="#ecf0f1"></rect><line x1="80" y1="100" x2="120" y2="100" stroke="#2c3e50" stroke-width="5"></line><line x1="80" y1="120" x2="120" y2="120" stroke="#2c3e50" stroke-width="5"></line></svg></div> <div class="text-center"><h2 class="text-4xl md:text-5xl font-medium "><span class="relative inline-block ml-2 before:absolute before:-inset-1 before:block before:-skew-y-3 before:bg-red-500"><span class="relative text-white skew-y-3">get in</span></span> touch.</h2> <p class="pb-10 text-xl leading-9 text-secondary">Have questions or want to discuss a project? Drop us a message below!</p></div>   <div class="max-w-3xl mx-auto"> <form name="contact" method="POST" netlify> <div class="mb-4"><label for="name" class="block text-sm font-medium text-gray-700">Your Name</label> <input type="text" id="name" name="name" class="mt-1 p-2 w-full border rounded-md"></div> <div class="mb-4"><label for="email" class="block text-sm font-medium text-gray-700">Your Email</label> <input type="email" id="email" name="email" class="mt-1 p-2 w-full border rounded-md"></div> <div class="mb-4"><label for="message" class="block text-sm font-medium text-gray-700">Your Message</label> <textarea id="message" name="message" rows="4" class="mt-1 p-2 w-full border rounded-md"></textarea></div> <input type="hidden" name="form-name" value="contact"> <button type="submit" class="bg-blue-500 text-white p-2 rounded-md hover:bg-blue-600">Send Message</button></form></div></section>`;
});
export {
  Page as default
};
