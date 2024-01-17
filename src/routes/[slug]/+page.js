// src/routes/[slug]/page.js
import { error } from '@sveltejs/kit';

// Simulated data for all services
const servicesData = {
  'wordpress-website-design': {
    title: 'WordPress Website Design',
    description: 'Crafting visually stunning and user-friendly websites tailored to your unique business needs using WordPress.',
    keywords: ['WordPress', 'website design', 'user-friendly', 'custom websites'],
    metaDescription: 'Elevate your online presence with our WordPress Website Design service. We create visually stunning, user-friendly websites tailored to your business needs for a lasting impression.',
	content: `
      <h3 class="border-s-2 border-primary pl-2 text-xl font-medium mb-4 text-gray-700">Welcome to our WordPress Website Design service!</h3>

      <p class="text-gray-700 pb-7 text-lg">At zngweb, we are passionate about creating websites that not only look amazing but also meet the specific needs of your business. Our WordPress Website Design service is tailored to deliver visually stunning and user-friendly websites that leave a lasting impression on your audience.</p>

      <h3 class="border-s-2 border-primary pl-2 text-xl font-medium mb-4 text-gray-700">Why Choose Our WordPress Website Design Service?</h3>

      <p class="text-gray-700 pb-7 text-lg">1. <strong>Customized Solutions:</strong> We understand that every business is unique. Our team works closely with you to create a website that reflects your brand identity and resonates with your target audience.</p>

      <p class="text-gray-700 pb-7 text-lg">2. <strong>User-Friendly Design:</strong> We prioritize the user experience. Our websites are designed to be intuitive and easy to navigate, ensuring a seamless experience for your visitors.</p>

      <p class="text-gray-700 pb-7 text-lg">3. <strong>Responsive Design:</strong> In today's digital age, it's crucial to have a website that looks great on all devices. Our responsive design approach ensures your website is accessible and functional across desktops, tablets, and smartphones.</p>

      <h3 class="border-s-2 border-primary pl-2 text-xl font-medium mb-4 text-gray-700">Key Features of Our WordPress Website Design:</h3>

      <ul class='text-gray-700 pb-6 '>
        <li><strong>Modern Design:</strong> Stay ahead of the curve with a modern and visually appealing website design.</li>
        <li><strong>Custom Development:</strong> We go beyond templates, providing custom solutions tailored to your business requirements.</li>
        <li><strong>SEO Optimization:</strong> Improve your online visibility with SEO-friendly website design and development.</li>
        <li><strong>Scalability:</strong> Our websites are built to grow with your business, ensuring scalability and adaptability.</li>
      </ul>


      <p class="text-gray-700 pb-7 text-lg">Ready to elevate your online presence? Contact us today for a consultation and let us bring your vision to life with our WordPress Website Design service!</p>
    `,
  },
  'custom-wordpress-theme-development': {
    title: 'Custom WordPress Theme Development',
    description: 'Building bespoke WordPress themes that align with your brand identity and provide a seamless user experience.',
    keywords: ['WordPress', 'theme development', 'bespoke themes', 'brand identity'],
    metaDescription: 'Transform your online presence with our Custom WordPress Theme Development. We craft bespoke themes aligned with your brand identity, providing a seamless, engaging user experience.',
	content: `
    <p class="text-gray-700 pb-7 text-lg">Discover the power of a unique online presence with our Custom WordPress Theme Development service!</p>

    <p class="text-gray-700 pb-7 text-lg">At zngweb, we specialize in creating custom WordPress themes that not only reflect your brand identity but also provide a seamless and enjoyable user experience. Our team of experienced developers and designers is dedicated to crafting bespoke themes that set your website apart from the competition.</p>

    <h3 class="border-s-2 border-primary pl-2 text-xl font-medium mb-4 text-gray-700">Why Choose Our Custom WordPress Theme Development Service?</h3>

    <p class="text-gray-700 pb-7 text-lg">1. <strong>Bespoke Designs:</strong> Our themes are tailored to your brand identity and business goals, ensuring a unique and captivating design that resonates with your audience.</p>

    <p class="text-gray-700 pb-7 text-lg">2. <strong>User-Centric Approach:</strong> We prioritize user experience, creating themes that are intuitive, easy to navigate, and deliver an engaging experience for your visitors.</p>

    <p class="text-gray-700 pb-7 text-lg">3. <strong>Responsive and Scalable:</strong> Our themes are built to be responsive across devices, providing a consistent and beautiful experience on desktops, tablets, and smartphones. Plus, they are scalable to grow with your business.</p>

    <h3 class="border-s-2 border-primary pl-2 text-xl font-medium mb-4 text-gray-700">Key Features of Our Custom WordPress Theme Development:</h3>

    <ul class='text-gray-700 pb-6'>
      <li><strong>Brand Alignment:</strong> Ensure your website reflects your brand values, colors, and messaging.</li>
      <li><strong>Custom Features:</strong> We integrate custom features and functionalities to meet your specific business requirements.</li>
      <li><strong>SEO Optimization:</strong> Enhance your website's visibility with SEO-friendly theme development.</li>
      <li><strong>Performance:</strong> Our themes are optimized for speed and performance, providing a smooth browsing experience.</li>
    </ul>

    <p class="text-gray-700 pb-7 text-lg">Ready to elevate your website with a custom theme? Contact us today to discuss your vision and let us bring it to life with our Custom WordPress Theme Development service!</p>
  `,
  },
  'plugin-development-and-integration': {
    title: 'Plugin Development and Integration',
    description: 'Creating custom WordPress plugins to enhance functionality and integrate third-party tools for optimal performance.',
    keywords: ['WordPress', 'plugin development', 'third-party integration', 'custom plugins'],
    metaDescription: 'Empower your WordPress website with our Plugin Development and Integration service. Tailored plugins enhance functionality and seamlessly integrate third-party tools for optimal performance.',
	content: `
    <p class="text-gray-700 pb-7 text-lg">Empower your WordPress website with our Plugin Development and Integration service!</p>

    <p class="text-gray-700 pb-7 text-lg">At zngweb, we specialize in creating custom WordPress plugins to enhance the functionality of your website and seamlessly integrate third-party tools for optimal performance. Our team of skilled developers understands the importance of tailored solutions, and we are committed to delivering plugins that cater to your specific business needs.</p>

    <h3 class="border-s-2 border-primary pl-2 text-xl font-medium mb-4 text-gray-700">Why Choose Our Plugin Development and Integration Service?</h3>

    <p class="text-gray-700 pb-7 text-lg">1. <strong>Custom Functionality:</strong> Our plugins are designed to provide unique and custom functionalities that align with your business processes and objectives.</p>

    <p class="text-gray-700 pb-7 text-lg">2. <strong>Seamless Integration:</strong> We ensure seamless integration of third-party tools, allowing your website to leverage external services without compromising performance.</p>

    <p class="text-gray-700 pb-7 text-lg">3. <strong>Optimal Performance:</strong> Our plugins are optimized for speed and efficiency, enhancing the overall performance of your WordPress website.</p>

    <h3 class="border-s-2 border-primary pl-2 text-xl font-medium mb-4 text-gray-700">Key Features of Our Plugin Development and Integration:</h3>

    <ul class='text-gray-700 pb-6'>
      <li><strong>Custom Features:</strong> Tailor plugins to meet your specific requirements and enhance the capabilities of your website.</li>
      <li><strong>Third-Party Integration:</strong> Seamlessly integrate external tools and services for a more robust and feature-rich website.</li>
      <li><strong>Scalability:</strong> Our plugins are built to scale with your business, ensuring compatibility with future updates and expansions.</li>
      <li><strong>Security:</strong> We prioritize the security of your website, implementing best practices for plugin development and integration.</li>
    </ul>

    <p class="text-gray-700 pb-7 text-lg">Ready to take your WordPress website to the next level? Contact us today to discuss your plugin development and integration needs!</p>
  `,
  },
  'wordpress-maintenance-and-support': {
    title: 'WordPress Maintenance and Support',
    description: 'Offering ongoing maintenance and support services to ensure your WordPress website runs smoothly and stays secure.',
    keywords: ['WordPress', 'maintenance', 'support services', 'website security'],
    metaDescription: 'Ensure stability and security with our WordPress Maintenance and Support. Proactive maintenance, robust security measures, and 24/7 support for a smooth and secure online experience.',
	content: `
    <p class="text-gray-700 pb-7 text-lg">Ensure the longevity and security of your online presence with our WordPress Maintenance and Support services!</p>

    <p class="text-gray-700 pb-7 text-lg">At zngweb, we understand the importance of a well-maintained and secure WordPress website. Our dedicated team provides ongoing maintenance and support services to keep your website running smoothly, enhance its performance, and safeguard it against potential threats.</p>

    <h3 class="border-s-2 border-primary pl-2 text-xl font-medium mb-4 text-gray-700">Why Choose Our WordPress Maintenance and Support Service?</h3>

    <p class="text-gray-700 pb-7 text-lg">1. <strong>Proactive Maintenance:</strong> We proactively monitor and maintain your WordPress website to identify and address issues before they impact your users.</p>

    <p class="text-gray-700 pb-7 text-lg">2. <strong>Security:</strong> Our team implements robust security measures to protect your website from potential threats, ensuring a safe online environment for your visitors.</p>

    <p class="text-gray-700 pb-7 text-lg">3. <strong>Performance Optimization:</strong> We optimize the performance of your website, ensuring fast loading times and a seamless user experience.</p>

    <h3 class="border-s-2 border-primary pl-2 text-xl font-medium mb-4 text-gray-700">Key Features of Our WordPress Maintenance and Support:</h3>

    <ul class='text-gray-700 pb-6'>
      <li><strong>Regular Updates:</strong> We keep your WordPress core, themes, and plugins up to date to ensure compatibility and security.</li>
      <li><strong>Backup and Recovery:</strong> Regular backups and a reliable recovery plan to safeguard your website data.</li>
      <li><strong>24/7 Support:</strong> Our support team is available around the clock to address any issues or concerns you may have.</li>
      <li><strong>Security Audits:</strong> Periodic security audits to identify and mitigate potential vulnerabilities.</li>
    </ul>

    <p class="text-gray-700 pb-7 text-lg">Ready to ensure the stability and security of your WordPress website? Contact us today to discuss your maintenance and support needs!</p>
  `,
  },
  'api-integration-with-wordpress': {
    title: 'API Integration with WordPress',
    description: 'Integrating APIs into your WordPress website to connect with external services, streamline processes, and enhance functionality.',
    keywords: ['WordPress', 'API integration', 'external services', 'functionality enhancement'],
    metaDescription: 'Unlock the full potential of your WordPress website with our API Integration service. Seamlessly integrate external services, streamline processes, and enhance overall functionality.',
	content: `
    <p class="text-gray-700 pb-7 text-lg">Unlock the full potential of your WordPress website with our API Integration service!</p>

    <p class="text-gray-700 pb-7 text-lg">At zngweb, we specialize in seamlessly integrating APIs into your WordPress website to connect with external services, streamline processes, and enhance overall functionality. Our experienced team understands the importance of a well-connected and feature-rich website, and we are dedicated to providing tailored solutions that meet your business requirements.</p>

    <h3 class="border-s-2 border-primary pl-2 text-xl font-medium mb-4 text-gray-700">Why Choose Our API Integration with WordPress Service?</h3>

    <p class="text-gray-700 pb-7 text-lg">1. <strong>Enhanced Functionality:</strong> Integrate external services and APIs to add advanced features and functionalities to your WordPress website.</p>

    <p class="text-gray-700 pb-7 text-lg">2. <strong>Streamlined Processes:</strong> Improve efficiency by automating processes through API integration, reducing manual workload and potential errors.</p>

    <p class="text-gray-700 pb-7 text-lg">3. <strong>Custom Solutions:</strong> We tailor API integrations to suit your specific business needs, ensuring a seamless and customized user experience.</p>

    <h3 class="border-s-2 border-primary pl-2 text-xl font-medium mb-4 text-gray-700">Key Features of Our API Integration with WordPress:</h3>

    <ul class='text-gray-700 pb-6'>
      <li><strong>API Compatibility:</strong> We integrate a variety of APIs, ensuring compatibility with popular services and tools.</li>
      <li><strong>Real-Time Data:</strong> Keep your website content and data up to date with real-time information from integrated APIs.</li>
      <li><strong>Scalability:</strong> Our API integrations are designed to scale with your business, accommodating future growth and changes.</li>
      <li><strong>Security:</strong> We prioritize the security of your website and data during API integration, implementing best practices for protection.</li>
    </ul>


    <p class="text-gray-700 pb-7 text-lg">Ready to elevate your WordPress website with seamless API integration? Contact us today to discuss your integration needs and take your online presence to the next level!</p>
  `,
  },
  'e-commerce-development-with-woocommerce': {
    title: 'E-commerce Development with WooCommerce',
    description: 'Setting up robust e-commerce solutions using WooCommerce, the powerful WordPress plugin, for seamless online shopping experiences.',
    keywords: ['WordPress', 'e-commerce development', 'WooCommerce', 'online shopping'],
    metaDescription: 'Launch or enhance your e-commerce presence with our E-commerce Development using WooCommerce. Showcase and sell your products or services in a user-friendly and secure online store.',
	content: `
    <p class="text-gray-700 pb-7 text-lg">Transform your WordPress website into a powerful online storefront with our E-commerce Development with WooCommerce service!</p>

    <p class="text-gray-700 pb-7 text-lg">At zngweb, we specialize in creating robust e-commerce solutions using WooCommerce, the powerful WordPress plugin. Our experienced team is dedicated to providing seamless online shopping experiences, helping you showcase and sell your products or services in a user-friendly and secure environment.</p>

    <h3 class="border-s-2 border-primary pl-2 text-xl font-medium mb-4 text-gray-700">Why Choose Our E-commerce Development with WooCommerce Service?</h3>

    <p class="text-gray-700 pb-7 text-lg">1. <strong>Powerful E-commerce Platform:</strong> WooCommerce is a feature-rich platform that provides the flexibility and functionality needed for successful online selling.</p>

    <p class="text-gray-700 pb-7 text-lg">2. <strong>Customizable Solutions:</strong> We tailor your e-commerce website to match your brand identity, ensuring a unique and memorable shopping experience for your customers.</p>

    <p class="text-gray-700 pb-7 text-lg">3. <strong>Secure Transactions:</strong> Our e-commerce solutions prioritize the security of online transactions, providing a safe and trustworthy environment for your customers.</p>

    <h3 class="border-s-2 border-primary pl-2 text-xl font-medium mb-4 text-gray-700">Key Features of Our E-commerce Development with WooCommerce:</h3>

    <ul class='text-gray-700 pb-6'>
      <li><strong>Product Showcase:</strong> Display your products or services with engaging visuals and detailed descriptions to attract potential customers.</li>
      <li><strong>Seamless Checkout Process:</strong> Ensure a smooth and user-friendly checkout process, reducing cart abandonment and increasing conversions.</li>
      <li><strong>Payment Gateway Integration:</strong> Integrate secure and popular payment gateways for hassle-free online transactions.</li>
      <li><strong>Inventory Management:</strong> Easily manage and track your inventory to ensure accurate product availability.</li>
    </ul>

    <p class="text-gray-700 pb-7 text-lg">Ready to launch or enhance your e-commerce presence? Contact us today to discuss your goals and let us create a powerful online store with our E-commerce Development with WooCommerce service!</p>
  `,
  },
  'headless-wordpress-development': {
    title: 'Headless WordPress Development',
    description: 'Implementing headless architecture for WordPress to decouple the front end from the back end, providing flexibility and improved performance.',
    keywords: ['WordPress', 'headless architecture', 'front-end decoupling', 'performance improvement'],
    metaDescription: 'Experience unparalleled flexibility and performance with our Headless WordPress Development service. Decouple the front end for enhanced flexibility and improved website performance.',
	content: `
    <p class="text-gray-700 pb-7 text-lg">Experience unparalleled flexibility and performance with our Headless WordPress Development service!</p>

    <p class="text-gray-700 pb-7 text-lg">At zngweb, we specialize in implementing headless architecture for WordPress, decoupling the front end from the back end to provide enhanced flexibility and improved performance. Our experienced team is dedicated to delivering cutting-edge solutions that empower your website with the latest technologies and ensure an exceptional user experience.</p>

    <h3 class="border-s-2 border-primary pl-2 text-xl font-medium mb-4 text-gray-700">Why Choose Our Headless WordPress Development Service?</h3>

    <p class="text-gray-700 pb-7 text-lg">1. <strong>Flexibility:</strong> Headless architecture allows for a more flexible and dynamic front-end development, enabling a highly customized and unique user interface.</p>

    <p class="text-gray-700 pb-7 text-lg">2. <strong>Improved Performance:</strong> By separating the front end and back end, our headless approach enhances overall website performance, providing faster load times and a smoother user experience.</p>

    <p class="text-gray-700 pb-7 text-lg">3. <strong>Future-Proof Technology:</strong> Stay ahead of the curve with the latest technologies. Headless WordPress development future-proofs your website, allowing easy adoption of emerging trends and technologies.</p>

    <h3 class="border-s-2 border-primary pl-2 text-xl font-medium mb-4 text-gray-700">Key Features of Our Headless WordPress Development:</h3>

    <ul class='text-gray-700 pb-6'>
      <li><strong>Decoupled Architecture:</strong> Separate the front end and back end, allowing for independent development and updates.</li>
      <li><strong>API Integration:</strong> Utilize APIs to connect the front end with the WordPress back end, facilitating seamless data exchange and dynamic content.</li>
      <li><strong>Scalability:</strong> Headless architecture provides scalability for your website, ensuring it can handle increased traffic and evolving business needs.</li>
      <li><strong>Content Management Flexibility:</strong> Enjoy the flexibility of choosing different front-end frameworks and technologies while still benefiting from WordPress as a powerful content management system.</li>
    </ul>


    <p class="text-gray-700 pb-7 text-lg">Ready to elevate your website with the latest in headless WordPress development? Contact us today to discuss your goals and embrace the future of web development!</p>
  `,
  },
  'custom-gutenberg-block-development': {
    title: 'Custom Gutenberg Block Development',
    description: 'Designing and developing custom Gutenberg blocks to extend the functionality of the WordPress editor and enhance content creation capabilities.',
    keywords: ['WordPress', 'Gutenberg block development', 'content creation', 'custom blocks'],
    metaDescription: 'Unleash the full potential of content creation with our Custom Gutenberg Block Development service. Designing blocks to enhance content creation capabilities within the WordPress editor.',
	content: `
    <p class="text-gray-700 pb-7 text-lg">Unleash the full potential of content creation with our Custom Gutenberg Block Development service!</p>

    <p class="text-gray-700 pb-7 text-lg">At zngweb, we specialize in designing and developing custom Gutenberg blocks to extend the functionality of the WordPress editor and enhance content creation capabilities. Our dedicated team is committed to providing you with unique and powerful blocks that streamline your content creation process and elevate the visual appeal of your website.</p>

    <h3 class="border-s-2 border-primary pl-2 text-xl font-medium mb-4 text-gray-700">Why Choose Our Custom Gutenberg Block Development Service?</h3>

    <p class="text-gray-700 pb-7 text-lg">1. <strong>Enhanced Content Creation:</strong> Our custom blocks are designed to provide additional functionalities, making it easier and more enjoyable for you to create diverse and engaging content.</p>

    <p class="text-gray-700 pb-7 text-lg">2. <strong>Tailored Solutions:</strong> We tailor each Gutenberg block to suit your specific content needs, ensuring a seamless integration with your website's design and layout.</p>

    <p class="text-gray-700 pb-7 text-lg">3. <strong>Improved Editor Experience:</strong> Our custom blocks enhance the overall editor experience, allowing for more dynamic and visually appealing content creation directly within the WordPress editor.</p>

    <h3 class="border-s-2 border-primary pl-2 text-xl font-medium mb-4 text-gray-700">Key Features of Our Custom Gutenberg Block Development:</h3>

    <ul class='text-gray-700 pb-6'>
      <li><strong>Diverse Block Types:</strong> Create a variety of content with custom blocks, including interactive elements, multimedia displays, and more.</li>
      <li><strong>Easy Integration:</strong> Our blocks seamlessly integrate into the WordPress editor, providing a user-friendly and intuitive experience.</li>
      <li><strong>Content Customization:</strong> Customize the appearance and behavior of each block to match your unique brand and content requirements.</li>
      <li><strong>Compatibility:</strong> Our custom blocks are developed to be fully compatible with the latest Gutenberg updates and WordPress versions.</li>
    </ul>


    <p class="text-gray-700 pb-7 text-lg">Ready to enhance your content creation capabilities with custom Gutenberg blocks? Contact us today to discuss your vision and let us bring it to life!</p>
  `,
  },
};

/** @type {import('@sveltejs/kit').Load} */
export function load({ params }) {
  const { slug } = params;

  // Check if the service slug exists in the data
  if (slug in servicesData) {
    const serviceData = servicesData[slug];

    return {
      title: serviceData.title,
      description: serviceData.description,
      keywords: serviceData.keywords,
	  content:serviceData.content,
    metaDescription: serviceData.metaDescription,
    };
  }

  // If the service slug is not found, return a 404 error
  error(404, 'Service not found');
}
