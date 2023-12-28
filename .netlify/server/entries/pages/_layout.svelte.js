import { c as create_ssr_component, e as escape, b as subscribe, d as add_attribute, v as validate_component } from "../../chunks/ssr.js";
import { S as SITE_TITLE } from "../../chunks/siteConfig.js";
import { p as page } from "../../chunks/stores.js";
const Footer = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let date = (/* @__PURE__ */ new Date()).getFullYear();
  let { absolute = false } = $$props;
  if ($$props.absolute === void 0 && $$bindings.absolute && absolute !== void 0)
    $$bindings.absolute(absolute);
  return `<footer class="${"pb-6 " + escape(
    absolute ? "absolute w-full bottom-0 bg-blueGray-800" : "relative",
    true
  )}"><div class="container mx-auto px-4"><hr class="mb-6 border-b-1 border-blueGray-600"> <div class="flex flex-wrap items-center md:justify-between justify-center"><div class="w-full md:w-4/12 px-4"><div class="text-sm text-blueGray-500 font-semibold py-1 text-center md:text-left">Copyright © ${escape(date)} <a class="" href="/" data-svelte-h="svelte-rlgnrt">Zngweb</a></div></div> <div class="w-full md:w-8/12 px-4" data-svelte-h="svelte-15ykaq2"><ul class="flex flex-wrap list-none md:justify-end justify-center"><li><a href="/" class="text-gray-800 hover:text-blueGray-300 text-sm font-semibold block py-1 px-3">Home</a></li> <li><a href="/about" class="text-gray-800 hover:text-blueGray-300 text-sm font-semibold block py-1 px-3">About Us</a></li> <li><a href="/services" class="text-gray-800 hover:text-blueGray-300 text-sm font-semibold block py-1 px-3">Services</a></li> <li><a href="/contact" class="text-gray-800 hover:text-blueGray-300 text-sm font-semibold block py-1 px-3">Contact</a></li></ul></div></div></div></footer>`;
});
const NavLink = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let isActive;
  let $page, $$unsubscribe_page;
  $$unsubscribe_page = subscribe(page, (value) => $page = value);
  let { href } = $$props;
  if ($$props.href === void 0 && $$bindings.href && href !== void 0)
    $$bindings.href(href);
  isActive = $page.url.pathname === $$props.href;
  $$unsubscribe_page();
  return `<a class="${[
    "hidden p-1 text-gray-800 transition-all hover:bg-main hover:text-white sm:px-3 sm:py-2 md:inline-block",
    isActive ? "font-semibold" : ""
  ].join(" ").trim()}"${add_attribute("href", href, 0)}><span class="capsize">${slots.default ? slots.default({}) : ``}</span></a>`;
});
const Nav = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  if (typeof localStorage !== "undefined") {
    if (localStorage.theme === "dark" || !("theme" in localStorage) && window.matchMedia("(prefers-color-scheme: dark)").matches)
      ;
  }
  return `<div class="hidden lg:flex lg:items-center"><nav class="flex items-center space-x-10 lg:ml-10">${validate_component(NavLink, "NavLink").$$render($$result, { href: "/" }, {}, {
    default: () => {
      return `Home`;
    }
  })} ${validate_component(NavLink, "NavLink").$$render($$result, { href: "/about" }, {}, {
    default: () => {
      return `About`;
    }
  })} ${validate_component(NavLink, "NavLink").$$render($$result, { href: "/services" }, {}, {
    default: () => {
      return `Services`;
    }
  })} <div class="flex items-center space-x-4" data-svelte-h="svelte-1dp7p1c"><a href="/contact" class="px-8 py-2 ml-1 flex hover:bg-yellow-200 dark:hover:bg-yellow-800 text-white items-center justify-center bg-main ring-red-400 transition-all hover:ring-2 dark:bg-yellow-800">Hire US</a></div></nav></div>`;
});
const css = {
  code: ".menu.svelte-19potqi.svelte-19potqi.svelte-19potqi{padding:0 28px 0 4px;margin:0;padding-top:24px;width:100%;height:100vh;z-index:1000;opacity:0;left:0;transition:opacity 300ms ease, transform 300ms ease}.menu.svelte-19potqi li.svelte-19potqi.svelte-19potqi{transform:translateX(-16px);opacity:0;transition:opacity 300ms ease, transform 300ms ease, width 300ms ease, border-color 300ms ease;width:0px;white-space:nowrap}.menuRendered.svelte-19potqi.svelte-19potqi.svelte-19potqi{opacity:1}.menuRendered.svelte-19potqi li.svelte-19potqi.svelte-19potqi{transform:translateX(0);opacity:1}.menu.svelte-19potqi>.svelte-19potqi+.svelte-19potqi{margin-top:24px}@keyframes svelte-19potqi-grow{0%{height:0px}100%{height:24px}}",
  map: null
};
const MobileMenu = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css);
  {
    {
      {
        setTimeout(
          () => {
          },
          300
        );
      }
    }
  }
  return `<div class="-my-2 -mr-2 lg:hidden"><button class="inline-flex items-center justify-center rounded-md border bg-white p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500" aria-label="Toggle menu" type="button">${`<span class="sr-only" data-svelte-h="svelte-rsbkxi">Open menu</span> <svg class="text-primary w-6 h-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true"><path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"></path></svg>`}</button> ${``} </div>`;
});
const Header = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<header class="max-w-7xl px-6 lg:px-8 mx-auto bg-gray-50 dark:bg-gray-900"><div class="mx-auto max-w-7xl"><div class="flex py-4 items-center justify-between"><div data-svelte-h="svelte-1at04p"><a href="/" class="flex"><span class="sr-only">Zngweb</span> <svg xmlns="http://www.w3.org/2000/svg" version="1.1" width="300px" height="60px" style=""><path fill="#ff3e29" d="M96.544921875,46.7890625l-14.875,0l0-2.748046875l9.583984375-13.740234375l-9.32421875,0l0-3.5l14.35546875,0l0,2.734375l-9.5703125,13.75390625l9.830078125,0l0,3.5z M119.38748046875,46.7890625l-5.38671875,0l-8.6953125-15.12109375l-0.123046875,0q0.259765625,4.005859375,0.259765625,5.71484375l0,9.40625l-3.787109375,0l0-19.98828125l5.345703125,0l8.681640625,14.970703125l0.095703125,0q-0.205078125-3.896484375-0.205078125-5.509765625l0-9.4609375l3.814453125,0l0,19.98828125z M133.9312109375,35.564453125l7.9296875,0l0,10.36328125q-1.927734375,0.62890625-3.6298828125,0.8818359375t-3.4794921875,0.2529296875q-4.525390625,0-6.9111328125-2.6591796875t-2.3857421875-7.6357421875q0-4.83984375,2.7685546875-7.546875t7.6767578125-2.70703125q3.076171875,0,5.93359375,1.23046875l-1.408203125,3.390625q-2.1875-1.09375-4.552734375-1.09375q-2.748046875,0-4.40234375,1.845703125t-1.654296875,4.962890625q0,3.25390625,1.3330078125,4.9697265625t3.8759765625,1.7158203125q1.326171875,0,2.693359375-0.2734375l0-4.169921875l-3.787109375,0l0-3.52734375z"></path><path fill="#" d="M177.156,27.2l-1.764,0l0,11.9q0,2.352-1.792,4.144t-4.144,1.792t-4.144-1.792t-1.792-4.144l0-11.9l-1.764,0l0,11.9q0,2.352-1.792,4.144q-1.848,1.792-4.172,1.792q-2.352,0-4.144-1.792t-1.792-4.144l0-11.9l-1.764,0l0,11.9q0,3.108,2.296,5.404t5.404,2.296q2.128,0,4.004-1.176q1.848-1.148,2.66-2.996q1.008,1.792,2.968,2.996q1.904,1.176,4.032,1.176q3.136,0,5.432-2.296q2.268-2.268,2.268-5.404l0-11.9z M183.14352,41.424q0-1.344,0.952-2.436q0.952-1.148,2.296-1.148l0.364,0l5.236,0l0-1.736l-5.236,0l-0.364,0q-1.428-0.28-2.338-1.232t-0.91-2.268q0-1.652,0.966-2.618t2.646-0.966l9.52,0l0-1.764l-9.52,0q-2.156,0-3.752,1.596q-1.596,1.54-1.596,3.752q0,1.4,0.532,2.548t1.568,1.652q-1.036,0.756-1.568,1.988t-0.532,2.632q0,2.184,1.596,3.724q1.624,1.624,3.752,1.624l9.52,0l0-1.848l-9.52,0q-1.68,0-2.646-0.952t-0.966-2.548z M212.79104,36.804q1.092-0.532,1.792-1.764q0.7-1.176,0.7-2.52q0-2.408-1.624-3.892q-1.624-1.456-4.088-1.456l-7.868,0l-0.336,0l-1.428,0l0,19.628l1.428,0l0.336,0l7.868,0q2.464,0,4.088-1.456q1.624-1.484,1.624-3.892q0-1.316-0.686-2.562t-1.806-2.086z M201.70304,28.6l7.868,0q1.68,0,2.772,1.148q1.176,1.232,1.176,2.772q0,1.26-0.924,2.324q-0.868,0.952-2.296,1.26l-0.728,0l-7.868,0l0-7.504z M209.57104,45.372l-7.868,0l0-7.504l7.868,0l0.728,0q1.428,0.308,2.296,1.26q0.924,1.064,0.924,2.324q0,1.512-1.176,2.744q-1.12,1.176-2.772,1.176z"></path></svg></a></div> ${validate_component(MobileMenu, "MobileMenu").$$render($$result, {}, {}, {})} ${validate_component(Nav, "Nav").$$render($$result, {}, {}, {})}</div></div></header>`;
});
const Layout = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  const prerender = true;
  if ($$props.prerender === void 0 && $$bindings.prerender && prerender !== void 0)
    $$bindings.prerender(prerender);
  return `${$$result.head += `<!-- HEAD_svelte-1pgte2o_START --><link rel="alternate" type="application/rss+xml"${add_attribute("title", "RSS Feed for " + SITE_TITLE, 0)} href="/rss.xml"><!-- HEAD_svelte-1pgte2o_END -->`, ""} ${validate_component(Header, "Header").$$render($$result, {}, {}, {})} <main class="flex flex-col justify-center bg-gray-50 dark:bg-gray-900 ">${slots.default ? slots.default({}) : ``}</main> ${validate_component(Footer, "Footer").$$render($$result, {}, {}, {})}`;
});
export {
  Layout as default
};
