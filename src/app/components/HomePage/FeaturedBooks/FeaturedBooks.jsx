import dbConnect, { collectionName } from '@/lib/dbConnect';
import React from 'react';
import BookCard from '../../booksCard';

const FeaturedBooks = async () => {
    const books = await dbConnect(collectionName.PRODUCTS).find().toArray();
    console.log(books);

    // শুধু প্রথম 6টা বই নাও
    const featuredBooks = books.slice(0, 6);

    return (
        <div className="container mx-auto py-10 px-4">
            <div className="text-center mb-12">
                <h1 className="text-4xl font-bold mb-4">📚 Featured Books</h1>
                <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                    Discover our curated collection of bestselling books across various genres
                </p>
            </div>

            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                {featuredBooks.map((book) => (
                    <BookCard key={book._id} book={book} />
                ))}
            </div>
        </div>
    );
};

export default FeaturedBooks;
