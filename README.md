
This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev

```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.js`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.

## ADD Product Views

curl --location 'http://localhost:3000/api/products/view' \
--header 'Content-Type: application/json' \
--data '{
  "productId": "PRDssDS001",
  "name": "Smart Tracker X1",
  "subheading": "Advanced GPS Security",
  "productImages": ["/img1.jpg", "/img2.jpg"],
  "video": "https://www.youtube.com/watch?v=demo",
  "productFeatures": [
    {
      "image": "/feature1.png",
      "title": "Live Tracking",
      "subheading": "Real-time location updates"
    }
  ],
  "specifications": [
    {
      "category": "GNSS",
      "data": {
        "satellites": "GPS, GLONASS",
        "accuracy": "2.5m"
      }
    }
  ],
  "downloads": {
    "android": "https://play.google.com/store/apps/details?id=app",
    "ios": "https://apps.apple.com/app/id123456789",
    "pdfManual": "/downloads/manual.pdf"
  }
}
' 

dsfsdf

## Get Product ID


curl --location --request GET 'http://localhost:3000/api/products/view?productId=PRDssDS001' \
--header 'Content-Type: application/json' \

'
dsf

## set Products 

curl --location 'http://localhost:3000/api/products' \
--header 'Content-Type: application/json' \
--data '{
    "productName": "ID Csard Tracker",
    "productSubheading": "The future of mobile",
    "productFeatures": ["Face ID", "5G Support", "OLED Display"],
    "productImages": ["https://example.com/image1.jpg", "https://example.com/image2.jpg"]
  }'


  ## 
