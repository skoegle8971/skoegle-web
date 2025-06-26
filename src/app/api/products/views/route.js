import { NextResponse } from 'next/server';
import { connectToDatabase } from '@/ServerCopmonents/lib/mongodb';
import Product from '@/ServerCopmonents/models/ProductView';

// POST: Create a product
export async function POST(request) {
  await connectToDatabase();
  try {
    const body = await request.json();
    const product = await Product.create(body);
    return NextResponse.json({ success: true, data: product }, { status: 201 });
  } catch (err) {
    return NextResponse.json({ success: false, error: err.message }, { status: 400 });
  }
}

// GET: Get product by productId
export async function GET(request) {
  await connectToDatabase();
  const { searchParams } = new URL(request.url);
  const productId = searchParams.get('productId');

  if (!productId) {
    return NextResponse.json({ success: false, message: 'Missing productId' }, { status: 400 });
  }

  try {
    const product = await Product.findOne({ productId });
    if (!product) {
      return NextResponse.json({ success: false, message: 'Product not found' }, { status: 404 });
    }
    return NextResponse.json({ success: true, data: product }, { status: 200 });
  } catch (err) {
    return NextResponse.json({ success: false, error: err.message }, { status: 500 });
  }
}
