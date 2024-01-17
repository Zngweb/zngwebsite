<script>
	import NavLink from './NavLink.svelte';
  
	let services = [
    {
      title: "WordPress Website Design",
      shortTitle: "Design",
      description: "Crafting visually stunning and user-friendly websites tailored to your unique business needs using WordPress.",
      shortDescription: "Stunning WordPress websites tailored to your needs.",
      icon: "🎨",
      link: "wordpress-website-design",
    },
    {
      title: "Custom WordPress Theme Development",
      shortTitle: "Theme Dev",
      description: "Building bespoke WordPress themes that align with your brand identity and provide a seamless user experience.",
      shortDescription: "Bespoke themes aligned with your brand identity.",
      icon: "🛠️",
      link: "custom-wordpress-theme-development",
    },
    {
      title: "Plugin Development and Integration",
      shortTitle: "Plugin Dev",
      description: "Creating custom WordPress plugins to enhance functionality and integrate third-party tools for optimal performance.",
      shortDescription: "Custom plugins for enhanced functionality.",
      icon: "🔌",
      link: "plugin-development-and-integration",
    },
    {
      title: "WordPress Maintenance and Support",
      shortTitle: "Maintenance",
      description: "Offering ongoing maintenance and support services to ensure your WordPress website runs smoothly and stays secure.",
      shortDescription: "Ongoing support for a secure and smooth website.",
      icon: "🛡️",
      link: "wordpress-maintenance-and-support",
    },
    {
      title: "API Integration with WordPress",
      shortTitle: "API Integration",
      description: "Integrating APIs into your WordPress website to connect with external services, streamline processes, and enhance functionality.",
      shortDescription: "Enhancing functionality with API integration.",
      icon: "🔄",
      link: "api-integration-with-wordpress",
    },
    {
      title: "E-commerce Development with WooCommerce",
      shortTitle: "E-commerce",
      description: "Setting up robust e-commerce solutions using WooCommerce, the powerful WordPress plugin, for seamless online shopping experiences.",
      shortDescription: "Robust e-commerce solutions with WooCommerce.",
      icon: "💳",
      link: "e-commerce-development-with-woocommerce",
    },
    {
      title: "Headless WordPress Development",
      shortTitle: "Headless Dev",
      description: "Implementing headless architecture for WordPress to decouple the front end from the back end, providing flexibility and improved performance.",
      shortDescription: "Flexibility and improved performance with headless architecture.",
      icon: "🔗",
      link: "headless-wordpress-development",
    },
    {
      title: "Custom Gutenberg Block Development",
      shortTitle: "Block Dev",
      description: "Designing and developing custom Gutenberg blocks to extend the functionality of the WordPress editor and enhance content creation capabilities.",
      shortDescription: "Enhancing content creation with custom Gutenberg blocks.",
      icon: "🧱",
      link: "custom-gutenberg-block-development",
    },
  ];

let dropdownOpen = false;

  function toggleDropdown() {
    dropdownOpen = !dropdownOpen;
  }
  </script>
  
  <div class="hidden lg:flex lg:items-center">
	<nav class="flex items-center space-x-10 lg:ml-10">
	  <NavLink href="/">Home</NavLink>
    <div class="relative group" role="presentation" on:mouseenter={() => (dropdownOpen = true)} on:mouseleave={() => (dropdownOpen = false)}>
      <div class="flex items-center cursor-pointer">
        <NavLink href="/services">Services</NavLink>
        <svg class="w-4 h-4 ml-1 fill-current text-gray-700 group-hover:text-primary transition-all" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M10 12.44l-7-7-1.42 1.42L10 15.28l8.42-8.42-1.42-1.42z"/></svg>
      </div>
      {#if dropdownOpen}
      <div style="position: absolute; left: -90px;" class="w-96 bg-white border rounded-md border-gray-200 border-t-1 border-t-primary shadow-lg overflow-hidden">
        <div class="grid grid-cols-2 gap-1">
            {#each services as service (service.title)}
            <div class="px-4 py-3">
                <a href={service.link} class="block mb-4 font-medium   text-gray-700 hover:text-primary transition-all">
                    <span class="text-sm border p-1 mr-1  bg-primary rounded-full" role="img">{service.icon}</span>{service.shortTitle}
                </a>
                <p class="text-sm text-gray-600 mt-1">{service.shortDescription}</p>
            </div>
            {/each}
        </div>
    </div>
    
      {/if}
      </div>
	  <NavLink href="/about">About</NavLink>
	  
	  <div class="flex items-center space-x-4">
		<a href="/contact" class="px-6 py-2 ml-1 flex items-center justify-center bg-primary text-white rounded-md shadow-md transition-all hover:shadow-lg hover:bg-secondary">Hire Us</a>
	  </div>
	</nav>
  </div>