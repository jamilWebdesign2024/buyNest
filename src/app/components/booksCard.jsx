
import { Card, CardContent, CardHeader, CardTitle, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Star, BookOpen, ShoppingCart } from "lucide-react";
import Image from "next/image";
import Link from "next/link";


export default function BookCard({ book }) {
    return (
        <Card className="w-full h-full overflow-hidden transition-all duration-300 hover:shadow-lg flex flex-col">
            {/* Book Image */}
            <div className="relative h-48 w-full overflow-hidden">
                {book.image && (
                    <Image
                        src={book.image}
                        alt={book.title}
                        fill
                        className="object-cover"
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    />
                )}
                <div className="absolute top-2 left-2">
                    <Badge variant="secondary" className="text-xs">
                        {book.format}
                    </Badge>
                </div>
                <div className="absolute top-2 right-2 flex items-center bg-background/80 backdrop-blur-sm rounded-full px-2 py-1">
                    <Star className="h-3 w-3 fill-yellow-400 text-yellow-400" />
                    <span className="ml-1 text-xs font-medium">{book.rating}</span>
                </div>
            </div>

            <CardHeader className="pb-3">
                <CardTitle className="text-xl leading-tight line-clamp-2 h-14">
                    {book.title}
                </CardTitle>
                <p className="text-sm text-muted-foreground">by {book.author}</p>
            </CardHeader>

            <CardContent className="pb-3 flex-grow">
                <div className="flex items-center mb-3 text-sm text-muted-foreground">
                    <BookOpen className="h-4 w-4 mr-1" />
                    <span>{book.pages} pages</span>
                </div>

                <p className="text-sm line-clamp-3 h-16 mb-3">
                    {book.description}
                </p>

                <div className="flex flex-wrap gap-1 mb-3">
                    {book.genre.slice(0, 3).map((genre, index) => (
                        <Badge key={index} variant="outline" className="text-xs">
                            {genre}
                        </Badge>
                    ))}
                    {book.genre.length > 3 && (
                        <Badge variant="outline" className="text-xs">
                            +{book.genre.length - 3}
                        </Badge>
                    )}
                </div>
            </CardContent>

            <CardFooter className="flex justify-between items-center pt-3 border-t">
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
                {/* // Inside BookCard footer button */}
                <Link href={`/books/${book._id}`} passHref>
                    <Button size="sm" className="gap-1" disabled={book.stock === 0}>
                        <ShoppingCart className="h-4 w-4" />
                        View Details
                    </Button>
                </Link>
            </CardFooter>
        </Card>
    );
}
