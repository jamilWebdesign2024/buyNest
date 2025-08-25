import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Star, BookOpen, ShoppingCart, Eye, Bookmark } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function BookCard({ book }) {
    // ✅ genre কে সবসময় array বানিয়ে নিলাম
    const genres = Array.isArray(book.genre)
        ? book.genre
        : typeof book.genre === "string"
            ? book.genre.split(",").map(g => g.trim())
            : [];

    return (
        <Card className="group h-full overflow-hidden transition-all duration-300 hover:shadow-md flex flex-col">
            {/* Book Image with Overlay */}
            <div className="relative h-52 w-full overflow-hidden">
                {book.image && (
                    <Image
                        src={book.image}
                        alt={book.title}
                        fill
                        className="object-cover transition-transform duration-500 group-hover:scale-105"
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    />
                )}

                {/* Format Badge */}
                <div className="absolute top-3 left-3">
                    <Badge
                        variant="secondary"
                        className="text-xs font-medium px-2 py-1 backdrop-blur-sm bg-background/80"
                    >
                        {book.format}
                    </Badge>
                </div>

                {/* Rating Badge */}
                <div className="absolute top-3 right-3 flex items-center bg-background/90 backdrop-blur-sm rounded-full px-2 py-1">
                    <Star className="h-3 w-3 fill-primary text-primary mr-1" />
                    <span className="text-xs font-medium">{book.rating}</span>
                </div>

                {/* Hover Overlay with Quick Actions */}
                <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-2">
                    <Button size="sm" className="rounded-full h-10 w-10 p-0">
                        <Bookmark className="h-4 w-4" />
                    </Button>
                    <Button size="sm" className="rounded-full">
                        <Eye className="h-4 w-4 mr-1" />
                        Preview
                    </Button>
                </div>
            </div>

            <CardHeader className="pb-3 px-5 pt-5">
                <h3 className="font-semibold leading-tight line-clamp-2 text-foreground group-hover:text-primary transition-colors">
                    {book.title}
                </h3>
                <p className="text-sm text-muted-foreground">by {book.author}</p>
            </CardHeader>

            <CardContent className="pb-3 px-5 flex-grow">
                <div className="flex items-center mb-3 text-sm text-muted-foreground">
                    <BookOpen className="h-4 w-4 mr-1" />
                    <span>{book.pages} pages • {book.published_year}</span>
                </div>

                <p className="text-sm text-muted-foreground line-clamp-3 mb-4">
                    {book.description}
                </p>

                {/* ✅ Safe genre rendering */}
                <div className="flex flex-wrap gap-1 mb-4">
                    {genres.slice(0, 2).map((genre, index) => (
                        <Badge
                            key={index}
                            variant="secondary"
                            className="text-xs font-normal"
                        >
                            {genre}
                        </Badge>
                    ))}
                    {genres.length > 2 && (
                        <Badge variant="outline" className="text-xs">
                            +{genres.length - 2}
                        </Badge>
                    )}
                </div>
            </CardContent>

            <CardFooter className="flex justify-between items-center pt-3 px-5 pb-5 border-t bg-muted/30">
                <div>
                    <span className="text-lg font-bold text-foreground">
                        {book.currency} {book.price}
                    </span>
                    {book.stock > 0 ? (
                        <p className="text-xs text-green-600 font-medium">In stock ({book.stock})</p>
                    ) : (
                        <p className="text-xs text-destructive font-medium">Out of stock</p>
                    )}
                </div>

                <Link href={`/products/${book._id}`} passHref>
                    <Button
                        size="sm"
                        className="gap-1 font-medium"
                        disabled={book.stock === 0}
                    >
                        <ShoppingCart className="h-4 w-4" />
                        Details
                    </Button>
                </Link>
            </CardFooter>
        </Card>
    );
}
