<script>
    import { SITE_URL, SITE_TITLE, SITE_DESCRIPTION, DEFAULT_OG_IMAGE } from '$lib/siteConfig';
  
    /** @type {import('./$types').PageData} */
    export let data;
  
    // technically this is a slightly different type because it doesn't have 'content' but we'll let it slide
    /** @type {import('$lib/types').ContentItem[]} */
    $: items = data.items;
</script>

<svelte:head>
    <title>{SITE_TITLE} - Contact Us</title>
    <link rel="canonical" href={`${SITE_URL}/contact`} />
    <meta property="og:url" content={`${SITE_URL}/contact`} />
    <meta property="og:type" content="article" />
    <meta property="og:title" content={`${SITE_TITLE} - Contact Us`} />
    <meta name="Description" content={`Get in touch with ${SITE_TITLE}.`} />
    <meta property="og:description" content={`Get in touch with ${SITE_TITLE}.`} />
    <meta property="og:image" content={DEFAULT_OG_IMAGE} />
    <meta name="twitter:card" content="summary" />
    <meta name="twitter:title" content={`${SITE_TITLE} - Contact Us`} />
    <meta name="twitter:description" content={`Get in touch with ${SITE_TITLE}.`} />
    <meta name="twitter:image" content={DEFAULT_OG_IMAGE} />
</svelte:head>

<div class="flex flex-col items-center justify-center max-w-7xl mx-auto lg:px-8">
    <div class="flex flex-col lg:flex-row w-full px-4 py-16 border-gray-200 dark:border-gray-700 sm:px-8">
        <!-- Left Column for Text -->
        <div class="lg:w-1/2 lg:pr-8">
            <h1 class="font-medium lowercases pb-10 text-5xl leading-none md:text-6xl lg:text-6xl">
                <span class="relative inline-block ml-2 before:absolute before:-inset-1 before:block before:-skew-y-3 before:bg-red-500">
                    <span class="relative text-white skew-y-3"> contact</span>
                </span> us.
            </h1>
            <h2 class="max-w-xl pb-10 text-xl leading-9 text-secondary">
                Reach out to Zngweb | Transformative Web Development. We're here to assist you!
            </h2>
        </div>
        <!-- Right Column for Image -->
        <div class="lg:w-1/2 transform rounded-xl bg-gradient-to-r from-green-400 via-blue-500 to-purple-500 p-1 transition-all hover:scale-[1.01]">
            <svg xmlns="http://www.w3.org/2000/svg" class="bg-white rounded-xl" width="550" height="550" viewBox="0 0 200 200">
                <!-- Contact Icon -->
                <!-- Example: An envelope for contact -->
                <rect x="80" y="40" width="40" height="80" fill="#f39c12" />
                <rect x="70" y="60" width="60" height="50" fill="#ecf0f1" />
                <line x1="70" y1="110" x2="130" y2="110" stroke="#2c3e50" stroke-width="5" />
            </svg>
        </div>
    </div>
</div>

<!-- Contact Section -->
<section class="container mx-auto px-4 py-20">
    <div class="flex items-center justify-center mb-4">
        <svg xmlns="http://www.w3.org/2000/svg" width="100" height="100" viewBox="0 0 200 200">
            <!-- Background Circle -->
            <circle cx="100" cy="100" r="100" fill="#EF4444" />
            <!-- Envelope Icon -->
            <rect x="80" y="60" width="40" height="40" fill="#ecf0f1" />
            <line x1="80" y1="100" x2="120" y2="100" stroke="#2c3e50" stroke-width="5" />
            <line x1="80" y1="120" x2="120" y2="120" stroke="#2c3e50" stroke-width="5" />
        </svg>
    </div>

    <div class="text-center">
        <h2 class="text-4xl md:text-5xl font-medium ">
            <span class="relative inline-block ml-2 before:absolute before:-inset-1 before:block before:-skew-y-3 before:bg-red-500">
                <span class="relative text-white skew-y-3">get in</span>
            </span> touch.
        </h2>
        <p class="pb-10 text-xl leading-9 text-secondary">Have questions or want to discuss a project? Drop us a message below!</p>
    </div>

    <!-- Contact Form (Add your form component or embed your form code here) -->
    <!-- Example: Replace the content of the div below with your contact form -->
    <div class="max-w-3xl mx-auto">
        <!-- Your contact form goes here -->
        <form name="contact" netlify>
            <!-- Form fields go here -->
            <div class="mb-4">
                <label for="name" class="block text-sm font-medium text-gray-700">Your Name</label>
                <input type="text" id="name" name="name" class="mt-1 p-2 w-full border rounded-md" />
            </div>

            <div class="mb-4">
                <label for="email" class="block text-sm font-medium text-gray-700">Your Email</label>
                <input type="email" id="email" name="email" class="mt-1 p-2 w-full border rounded-md" />
            </div>

            <div class="mb-4">
                <label for="message" class="block text-sm font-medium text-gray-700">Your Message</label>
                <textarea id="message" name="message" rows="4" class="mt-1 p-2 w-full border rounded-md"></textarea>
            </div>

            <button type="submit" class="bg-blue-500 text-white p-2 rounded-md hover:bg-blue-600">Send Message</button>
        </form>
    </div>
</section>
