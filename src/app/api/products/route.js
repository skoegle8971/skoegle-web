import { connectToDatabase } from '@/ServerCopmonents/lib/mongodb';
import Product from '@/ServerCopmonents/models/Product';

function generateRandomId() {
  return Math.random().toString(36).substring(2, 10);
}

export async function POST(req) {
  try {
    const body = await req.json();
    const { productName, productSubheading, productFeatures, productImages } = body;

    await connectToDatabase();

    const product = await Product.create({
      productId: generateRandomId(),
      productName,
      productSubheading,
      productFeatures,
      productImages,
    });

    return Response.json({ success: true, product });
  } catch (err) {
    return Response.json({ success: false, error: err.message }, { status: 500 });
  }
}

export async function GET() {
  try {
    await connectToDatabase();
    const products = await Product.find({});
    return Response.json({ success: true, products });
  } catch (err) {
    return Response.json({ success: false, error: err.message }, { status: 500 });
  }
}
