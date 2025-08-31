import clientPromise from '../../lib/mongodb';
import { NextResponse } from 'next/server';

export const revalidate = 10;

export async function GET(req) {
  try {
    const client = await clientPromise;
    const db = client.db('test');
    const collection = db.collection('Product');

    const { searchParams } = new URL(req.url);
    const page = parseInt(searchParams.get('page')) || 1;
    const limit = parseInt(searchParams.get('limit')) || 10;

    const skip = (page - 1) * limit;

    // No filtering, just fetch all products with pagination
    const total = await collection.countDocuments({});
    const data = await collection.find({})
      .skip(skip)
      .limit(limit)
      .toArray();

    return NextResponse.json({
      currentPage: page,
      totalPages: Math.ceil(total / limit),
      totalItems: total,
      products: data,
    });

  } catch (error) {
    console.error('Error fetching data from MongoDB:', error);
    return NextResponse.json({ error: 'Failed to fetch data' }, { status: 500 });
  }
}
