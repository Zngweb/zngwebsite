<script>
	import { SITE_URL, SITE_TITLE, SITE_DESCRIPTION, DEFAULT_OG_IMAGE } from '$lib/siteConfig';

	/** @type {import('./$types').PageData} */
	export let data;

	let successMessage = '';
	// technically this is a slightly different type because it doesn't have 'content' but we'll let it slide
	/** @type {import('$lib/types').ContentItem[]} */

	const handleSubmit = (e) => {
    e.preventDefault();
    let contactform = document.getElementById('contactform');
    let formData = new FormData(contactform);
    fetch('/contact', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: new URLSearchParams(formData).toString(),
    })
      .then(() => {
        console.log('Form successfully submitted');
		successMessage = 'Form submitted successfully!';
		e.target.reset();
      })
      .catch((error) => alert(error));
  };
	$: items = data.items;
</script>

<svelte:head>
	<title>Contact Us | {SITE_TITLE}</title>
	<meta name="Description" content={SITE_DESCRIPTION} />
	<meta
		name="robots"
		content="follow, index, max-snippet:-1, max-video-preview:-1, max-image-preview:large"
	/>
	<link rel="canonical" href={`${SITE_URL}/contact`} />
	<meta property="og:locale" content="en_US" />
	<meta property="og:type" content="website" />
	<meta property="og:title" content={`Contact Us | ${SITE_TITLE}`} />
	<meta property="og:url" content={`${SITE_URL}/contact`} />
	<meta property="og:site_name" content={SITE_TITLE} />
	<meta property="og:image" content={DEFAULT_OG_IMAGE} />
	<meta property="og:image:secure_url" content={DEFAULT_OG_IMAGE} />
	<meta property="og:image:width" content="1024" />
	<meta property="og:image:height" content="577" />
	<meta property="og:image:alt" content="zngweb" />
	<meta property="og:image:type" content="image/png" />
	<meta name="twitter:card" content="summary" />
	<meta name="twitter:title" content={`Contact Us | ${SITE_TITLE}`} />
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
	<div
		class="flex flex-col lg:flex-row w-full px-4 py-16 border-gray-200 sm:px-8"
	>
		<!-- Left Column for Text -->
		<div class="lg:w-1/2 lg:pr-8 bg-white p-8 text-secondary border-l-2 border-t-2 border-b-2 border-primary">
			
			<h2 class="font-medium lowercases text-secondary text-3xl md:text-2xl lg:text-2xl leading-none lg:leading-tight text-accent">
				Contact Us
			</h2>
			<h1 class="font-medium lowercases py-6 text-3xl md:text-4xl lg:text-4xl leading-none lg:leading-tight ">Embark on a collaborative journey with us <span class="text-primary">!</span></h1>
			<p class="text-gray-700 pb-6">
				Whether you're exploring ideas, weighing options, or ready to dive in, we're eager to hear about your goals. Let's craft something remarkable together!
			</p>

			<h3 class="border-s-2 border-primary pl-2 text-xl font-medium mb-4 text-gray-700"><span class="text-accent ">Connect with us using the form.</span>.</h3>
			
		</div>
		
		<!-- Right Column for Image -->
		<div class="lg:w-1/2">
			
<div class="max-w-md mx-auto p-6 border-r-2 border-t-2 border-b-2 border-primary bg-white  shadow-md">
	{#if successMessage}
	<div class="text-center">
		<h2 class="text-4xl md:text-2xl font-medium">
		  <span
			class="relative inline-block ml-2 before:absolute before:-inset-1 before:block before:-skew-y-3 before:bg-green-500"
		  >
			<span class="relative text-white skew-y-3">Thank you</span>
		  </span> for reaching out!
		</h2>
		<p class="pb-10 text-xl leading-9 text-colorary">
		  We appreciate your message and will get back to you soon.
		</p>
	  </div>
{/if}
			<!-- Your contact form goes here -->
			<form
				id="contactform"
				on:submit={handleSubmit}
				name="contact"
				method="POST"
				data-netlify="true"
				
			>
				<div class="mb-4">
					<label for="name" class="block text-gray-600 text-sm font-semibold mb-1">Your Name:</label>
					<input
						type="text"
						id="name"
						name="name"
						class="w-full border border-gray-300 p-2 rounded-md"
						
					/>
				</div>
		
				<div class="mb-4">
					<label for="email" class="block text-gray-600 text-sm font-semibold mb-1">Your Email <span>*</span>:</label>
					<input
						type="email"
						id="email"
						name="email"
						class="w-full border border-gray-300 p-2 rounded-md"
						required
					/>
				</div>
		
				<div class="mb-4">
					<label for="message" class="block text-gray-600 text-sm font-semibold mb-1">Message <span>*</span>:</label>
					<textarea
						id="message"
						name="message"
						class="w-full border border-gray-300 p-2 rounded-md"
						required
					></textarea>
				</div>
		
				<div class="mb-4">
					<label for="how-heard" class="block text-gray-600 text-sm font-semibold mb-1">How did you hear about zngweb?</label>
					<select
						id="how-heard"
						name="how-heard"
						class="w-full border border-gray-300 p-2 rounded-md"
					>
						<option value="social-media">Social Media</option>
						<option value="search-engine">Search Engine</option>
						<option value="referral">Referral</option>
						<option value="other">Other</option>
					</select>
				</div>
		
				<div class="mb-4">
					<label for="subject" class="block text-gray-600 text-sm font-semibold mb-1">Subject:</label>
					<select
						id="subject"
						name="subject"
						class="w-full border border-gray-300 p-2 rounded-md"
					>
						<option value="general-inquiry">General Inquiry</option>
						<option value="proposal-request">Request for Proposal</option>
					</select>
				</div>
		
				<div class="mb-6">
					<button
						type="submit"
						class="w-full bg-red-500 text-white p-2 rounded-md hover:bg-red-600"
					>Send</button>
				</div>
		
				<input type="hidden" name="form-name" value="contact" />
			</form>
			<!-- Success message section -->

		</div>
	</div>
	</div>
</div>
