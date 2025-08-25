// import dbConnect, { collectionName } from "@/lib/dbConnect";
// import { ObjectId } from "mongodb";
// import { NextResponse } from "next/server";
// // import { NextResponse } from "next/server";

// export const GET = async (req, { params }) => {
//     const p = await params;
//     const booksCollection = await dbConnect(collectionName.PRODUCTS);
//     const data = await booksCollection.findOne({ _id: new ObjectId(p.id) });
//     // console.log(data);
//     return NextResponse.json(data)
// }



// import dbConnect, { collectionName } from "@/lib/dbConnect";
import dbConnect, { collectionName } from "@/lib/dbConnect";
import { NextResponse } from "next/server";

export const POST = async (req) => {
  try {
    const body = await req.json(); // ফর্ম থেকে আসা ডাটা
    const booksCollection = await dbConnect(collectionName.PRODUCTS);

    const result = await booksCollection.insertOne(body);

    return NextResponse.json({
      success: true,
      message: "Book added successfully!",
      insertedId: result.insertedId,
    });
  } catch (error) {
    console.error("Error inserting book:", error);
    return NextResponse.json(
      { success: false, message: "Failed to add book" },
      { status: 500 }
    );
  }
};

export const GET = async () => {
  try {
    const booksCollection = await dbConnect(collectionName.PRODUCTS);
    const books = await booksCollection.find().toArray();

    return NextResponse.json(books);
  } catch (error) {
    console.error("Error fetching books:", error);
    return NextResponse.json(
      { success: false, message: "Failed to fetch books" },
      { status: 500 }
    );
  }
};
