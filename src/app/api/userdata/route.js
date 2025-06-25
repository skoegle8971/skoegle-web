import User from '@/models/User';
import { NextResponse } from 'next/server';
import { connectToDatabase } from '@/lib/mongodb';

export async function POST(req) {
    const data = await req.json();

    try {
        // Await the DB connection
        await connectToDatabase();


        const existingUser = await User.findOne({ userid: data.userid });

        if (existingUser) {
            return NextResponse.json({ message: "User already exists" }, { status: 200 });
        }

        await User.create(data);
        return NextResponse.json({ message: "User data saved successfully" }, { status: 200 });

    } catch (error) {
        console.error("Error in POST /api/userdata:", error);
        return new NextResponse("Internal Server Error", { status: 500 });
    }
}
