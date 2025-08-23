import clientPromise from "@/lib/dbConnect";

export async function GET() {
    const client = await clientPromise;
    const db = client.db("buyNest"); // তোমার DB নাম
    const products = await db.collection("products").find({}).toArray();
    return new Response(JSON.stringify(products), { status: 200 });
}

export async function POST(req) {
    const client = await clientPromise;
    const db = client.db("nextjsdb");

    const body = await req.json();
    const result = await db.collection("products").insertOne(body);

    return new Response(JSON.stringify(result), { status: 201 });
}
