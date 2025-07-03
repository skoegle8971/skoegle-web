// app/robots.js

export default function robots() {
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        disallow: ['/dashboard', '/admin'],
      },
    ],
    sitemap: [
      'https://skoegle.com/sitemap.xml'
    ],
  }
}
