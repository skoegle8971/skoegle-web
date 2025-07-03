import User from '@/ServerCopmonents/models/User';
import { NextResponse } from 'next/server';
import { connectToDatabase } from '@/ServerCopmonents/lib/mongodb';

export async function POST(req) {
  const data = await req.json();

  try {
    // Connect to the database
    await connectToDatabase();

    // Check if a user with the same email already exists
    const existingUser = await User.findOne({ email: data?.email });

    if (existingUser) {
      return NextResponse.json({ message: "User already exists" }, { status: 200 });
    }

    // Create the user
    await User.create(data);

    return NextResponse.json({ message: "User data saved successfully" }, { status: 200 });
  } catch (error) {
    // Duplicate key error (usually from unique email constraint)
    if (error.code === 11000) {
      return NextResponse.json({ message: "Duplicate email not allowed" }, { status: 400 });
    }

    console.error("Error in POST /api/userdata:", error);
    return new NextResponse("Internal Server Error", { status: 500 });
  }
}
