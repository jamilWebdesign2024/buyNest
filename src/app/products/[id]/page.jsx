// app/books/[id]/page.js
import booksData from "@/data/books.json";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Star, BookOpen, LibraryBig } from "lucide-react";
import Image from "next/image";
import dbConnect, { collectionName } from "@/lib/dbConnect";
import { ObjectId } from "mongodb";

export default async function BookDetailsPage({ params }) {

    const p = await params;
    // Fetch product directly from MongoDB
    const book = await dbConnect(collectionName.PRODUCTS).findOne({ _id: new ObjectId(p.id) });

    if (!book) {
        return (
            <div className="container mx-auto py-20 text-center">
                <h2 className="text-2xl font-bold">Book not found</h2>
            </div>
        );
    }

    return (
        <div className="container mx-auto py-10 px-4">
            <Card className="overflow-hidden shadow-md">
                {/* Top Section */}
                <div className="grid md:grid-cols-2 gap-6">
                    {/* Image */}
                    <div className="relative h-96 w-full">
                        <Image
                            src={book.image}
                            alt={book.title}
                            fill
                            className="object-cover rounded-t-lg md:rounded-l-lg"
                            sizes="(max-width: 768px) 100vw, 50vw"
                        />
                        <div className="absolute top-3 left-3">
                            <Badge variant="secondary">{book.format}</Badge>
                        </div>
                    </div>

                    {/* Info */}
                    <div className="p-6 flex flex-col justify-between">
                        <div>
                            <CardHeader className="p-0 mb-4">
                                <CardTitle className="text-3xl">{book.title}</CardTitle>
                                <p className="text-muted-foreground">by {book.author}</p>
                            </CardHeader>

                            <div className="flex items-center gap-3 mb-4">
                                <Star className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                                <span className="font-medium">{book.rating}</span>
                                <Badge variant="outline">{book.language}</Badge>
                            </div>

                            <p className="text-sm text-muted-foreground mb-4 leading-relaxed">
                                {book.description}
                            </p>

                            <div className="flex flex-wrap gap-2 mb-4">
                                {book.genre.map((g, i) => (
                                    <Badge key={i} variant="outline">
                                        {g}
                                    </Badge>
                                ))}
                            </div>

                            <div className="flex items-center gap-3 text-sm text-muted-foreground mb-2">
                                <BookOpen className="h-4 w-4" /> {book.pages} pages
                            </div>
                            <div className="flex items-center gap-3 text-sm text-muted-foreground">
                                <LibraryBig className="h-4 w-4" /> {book.publisher} ({book.published_year})
                            </div>
                        </div>

                        <div className="mt-6 flex justify-between items-center">
                            <div>
                                <span className="text-2xl font-bold">
                                    {book.currency} {book.price}
                                </span>
                                {book.stock > 0 ? (
                                    <p className="text-xs text-green-600">In stock ({book.stock})</p>
                                ) : (
                                    <p className="text-xs text-destructive">Out of stock</p>
                                )}
                            </div>
                            <Button size="lg" disabled={book.stock === 0}>
                                Add to Cart
                            </Button>
                        </div>
                    </div>
                </div>
            </Card>
        </div>
    );
}

