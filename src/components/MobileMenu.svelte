<script>
	let isOpen = false;
	let isMenuRendered;
	$: {
	  if (isOpen) {
		setTimeout(() => {
		  isMenuRendered = true;
		}, 20);
	  } else {
		setTimeout(() => {
		  isMenuRendered = false;
		}, 300);
	  }
	}
  </script>
  
  <div class="-my-2 -mr-2 lg:hidden">
	<button
	  class="inline-flex items-center justify-center rounded-md border bg-white p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500"
	  aria-label="Toggle menu"
	  type="button"
	  on:click={() => (isOpen = !isOpen)}
	>
	  {#if !isOpen}
		<span class="sr-only">Open menu</span>
		<svg class="text-primary w-6 h-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true">
		  <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"></path>
		</svg>
	  {:else}
		<svg class="absolute h-5 w-5 text-gray-900 dark:text-gray-100" viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" fill="none" shape-rendering="geometricPrecision" data-hide="true">
		  <path d="M18 6L6 18" />
		  <path d="M6 6l12 12" />
		</svg>
	  {/if}
	</button>
	{#if isOpen}
	  <ul class="menu absolute flex flex-col bg-gray-50 text-2xl uppercase dark:bg-gray-900" class:menuRendered={isMenuRendered}>
		<li class="border-b border-gray-300 font-semibold text-gray-900 dark:border-gray-700 dark:text-gray-100" style="transition-delay: 150ms;">
		  <a class="flex w-auto pb-4" on:click={() => setTimeout(() => (isOpen = false), 300)} href="/">Home</a>
		</li>
		<li class="border-b border-gray-300 font-semibold text-gray-900 dark:border-gray-700 dark:text-gray-100" style="transition-delay: 250ms;">
		  <a class="flex w-auto pb-4" on:click={() => setTimeout(() => (isOpen = false), 300)} href="/about">About</a>
		</li>
		<li class="border-b border-gray-300 font-semibold text-gray-900 dark:border-gray-700 dark:text-gray-100" style="transition-delay: 350ms;">
		  <a class="flex w-auto pb-4" on:click={() => setTimeout(() => (isOpen = false), 300)} href="/services">Services</a>
		</li>
		<li class="border-b border-gray-300 font-semibold text-gray-900 dark:border-gray-700 dark:text-gray-100" style="transition-delay: 400ms;">
		  <a class="flex w-auto pb-4" on:click={() => setTimeout(() => (isOpen = false), 300)} href="/contact">Contact Us</a>
		</li>
	  </ul>
	{/if}
  </div>
  
  <style lang="postcss">
	.menu {
	  padding: 0 30px;
	  padding-top:30px;
	  width: 100%;
	  height: 100vh;
	  z-index: 1000;
	  opacity: 0;
	  left: 0;
	  transition: opacity 300ms ease, transform 300ms ease;
	  transform: translateY(-100%);
	  margin-top: 40px;
	}
  
	.menu li {
	  transform: translateX(-16px);
	  opacity: 0;
	  transition: opacity 300ms ease, transform 300ms ease, width 300ms ease, border-color 300ms ease;
	  width: 0px;
	  white-space: nowrap;
	  text-align: center; /* Center the text */
	  margin: 10px 0; /* Added margin for spacing between li elements */
	}
  
	.menuRendered {
	  opacity: 1;
	  transform: translateY(0);
	}
  
	.menuRendered li {
	  transform: translateX(0);
	  opacity: 1;
	}
  
	.menu > * + * {
	  margin-top: 24px;
	}
  
	@keyframes grow {
	  0% {
		height: 0px;
	  }
	  100% {
		height: 24px;
	  }
	}
  </style>
  