
import dbConnect, { collectionName } from "@/lib/dbConnect";
import { ObjectId } from "mongodb";
import { NextResponse } from "next/server";

export const GET = async (req, { params }) => {
    const p = await params;
    const productCollection = await dbConnect(collectionName.PRODUCTS);
    const data = await productCollection.findOne({ _id: new ObjectId(p.id) });
    // console.log(data);
    return NextResponse.json(data)
}