import adapter from '@sveltejs/adapter-netlify';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	kit: {
		adapter: adapter(),
		prerender: {
			crawl: true,
			entries: ['*'],
			handleHttpError: async ({ request, error }) => {
				if (error.status === 404) {
				  // Handle 404 errors, for example, by redirecting to a custom error page
				  return {
					status: 404,
					body: 'Not Found',
				  };
				}
		
				// For other errors, you can customize the response accordingly
				return {
				  status: 500,
				  body: 'Internal Server Error',
				};
			  },
		},
		
		
	},
	
};
export default config;