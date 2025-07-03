export default function sitemap() {
  const lastModified = new Date();

  const baseUrls = ['https://skoegle.com', 'https://skoegle.in'];

  const paths = [
    '/', // home
    '/pages/products',
    '/pages/products/view/PRDssDS001', // Pet Tracker
    '/pages/products/view/o0xezbau',   // Bag Tracker
    '/pages/products/view/0f5msiw6',   // Vehicle Tracker
    '/pages/products/view/9iclen0u',   // Shoe Tracker
    '/pages/products/view/cmttlxuz',   // ID Card Tracker
    '/pages/products/view/9dfclen0u',  // Smart Bangle Tracker
    '/pages/products/checkout/PRDssDS001',

    '/services',
    '/support',
    '/about',
    '/careers',
    '/contact',
    '/invite',
    '/privacypolicy',
    '/termsandconditions',
    '/auth/signin',
    '/auth/signup',

    // Added new pages
    '/vmarg',
    '/dmarg',
    '/geocam',
  ];

  const dynamicEntries = [];

  for (const base of baseUrls) {
    for (const path of paths) {
      dynamicEntries.push({
        url: `${base}${path}`,
        lastModified,
        changeFrequency: path.startsWith('/pages/products/view') ? 'monthly' : 'yearly',
        priority: path === '/' ? 1.0 : 0.5,
      });
    }
  }

  // External subdomains / blogs (included once)
  dynamicEntries.push(
    {
      url: 'https://skoegle.blogspot.com/?m=1',
      lastModified,
      changeFrequency: 'monthly',
      priority: 0.2,
    },
    {
      url: 'https://vmarg.skoegle.com/',
      lastModified,
      changeFrequency: 'monthly',
      priority: 0.2,
    },
    {
      url: 'https://geocam.skoegle.com/login',
      lastModified,
      changeFrequency: 'monthly',
      priority: 0.2,
    }
  );

  return dynamicEntries;
}
