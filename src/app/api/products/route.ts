import { NextResponse } from 'next/server';
import { getPool } from '@/lib/db/db';

export async function GET() {
  try {
    const pool = getPool();

    // fetch first 10 products
    const res = await pool.query(`
      SELECT id, title, description, price, currency, image, rating
      FROM public.products
      ORDER BY title ASC
      LIMIT 10
    `);

    return NextResponse.json(res.rows);
  } catch (error) {
    console.error('Error fetching data: ', error);
    return NextResponse.json({ error: error }, { status: 500 });
    // return NextResponse.json({ error: 'Failed to fetch products. Try again later.' }, { status: 500 });
  }
}
