'use client'

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Textarea } from "@/components/ui/textarea"
import { Loader2, Plus, Upload } from "lucide-react"
import { useState } from "react"
import { useForm } from "react-hook-form"

// import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
// import { Input } from '@/components/ui/input'
// import { Label } from '@/components/ui/label'
// import { Loader2, Plus, Upload } from 'lucide-react'
// import { Button } from '@/components/ui/button'
// import { Textarea } from '@/components/ui/textarea'
// import React, { useState } from 'react'
// import { useForm } from 'react-hook-form'
// import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'

const AddBook = () => {
  const [isLoading, setIsLoading] = useState(false)

  const {
    register,
    handleSubmit,
    setValue,
    reset,
    formState: { errors },
  } = useForm({
    defaultValues: {
      title: '',
      author: '',
      publisher: '',
      published_year: new Date().getFullYear(),
      isbn: '',
      genre: '',
      language: '',
      pages: '',
      price: '',
      currency: 'USD',
      stock: '',
      rating: '',
      format: '',
      description: '',
      image: '',
    },
  })

  const onSubmit = async (data) => {
  setIsLoading(true);
  try {
    const res = await fetch("/api/products", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });

    const result = await res.json();

    if (result.success) {
      reset();
      alert("Book added successfully!");
      console.log("Inserted book:", result);
    } else {
      alert("Error: " + result.message);
    }
  } catch (error) {
    console.error("Error adding book:", error);
    alert("Error adding book. Please try again.");
  } finally {
    setIsLoading(false);
  }
};


  const handleSelectChange = (field, value) => {
    setValue(field, value)
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-background to-muted/30 p-4 md:p-6">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-8">
          <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-2">Add New Book</h1>
          <p className="text-muted-foreground">Add a new book to your collection</p>
        </div>

        <Card className="shadow-xl border bg-card backdrop-blur-sm">
          <CardHeader className="pb-6">
            <CardTitle className="flex items-center gap-2 text-xl text-foreground">
              <Plus className="h-5 w-5" />
              Book Information
            </CardTitle>
            <CardDescription>Fill in the details for the new book</CardDescription>
          </CardHeader>

          <CardContent>
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
              {/* Title and Author */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="title">Title</Label>
                  <Input
                    id="title"
                    placeholder="e.g., Atomic Habits"
                    {...register('title', { required: 'Title is required' })}
                  />
                  {errors.title && <p className="text-sm text-destructive">{errors.title.message}</p>}
                </div>
                <div className="space-y-2">
                  <Label htmlFor="author">Author</Label>
                  <Input
                    id="author"
                    placeholder="e.g., James Clear"
                    {...register('author', { required: 'Author is required' })}
                  />
                  {errors.author && <p className="text-sm text-destructive">{errors.author.message}</p>}
                </div>
              </div>

              {/* Publisher and Year */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="publisher">Publisher</Label>
                  <Input
                    id="publisher"
                    placeholder="e.g., Penguin Random House"
                    {...register('publisher', { required: 'Publisher is required' })}
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="published_year">Published Year</Label>
                  <Input
                    id="published_year"
                    type="number"
                    {...register('published_year', {
                      required: 'Published year is required',
                      min: { value: 1500, message: 'Year must be valid' },
                      max: { value: new Date().getFullYear(), message: 'Year cannot be in the future' },
                    })}
                  />
                </div>
              </div>

              {/* ISBN and Language */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="isbn">ISBN</Label>
                  <Input id="isbn" placeholder="e.g., 9780735211292" {...register('isbn', { required: 'ISBN is required' })} />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="language">Language</Label>
                  <Input id="language" placeholder="e.g., English" {...register('language', { required: 'Language is required' })} />
                </div>
              </div>

              {/* Genre and Format */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label>Genre</Label>
                  <Input id="genre" placeholder="e.g., Self-help, Psychology" {...register('genre', { required: 'Genre is required' })} />
                </div>
                <div className="space-y-2">
                  <Label>Format</Label>
                  <Select onValueChange={(value) => handleSelectChange('format', value)}>
                    <SelectTrigger>
                      <SelectValue placeholder="Select format" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="paperback">Paperback</SelectItem>
                      <SelectItem value="hardcover">Hardcover</SelectItem>
                      <SelectItem value="ebook">eBook</SelectItem>
                      <SelectItem value="audiobook">Audiobook</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>

              {/* Pages, Price, Stock */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="pages">Pages</Label>
                  <Input type="number" id="pages" placeholder="320" {...register('pages', { required: 'Pages are required' })} />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="price">Price</Label>
                  <Input type="number" step="0.01" id="price" placeholder="18.99" {...register('price', { required: 'Price is required' })} />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="stock">Stock</Label>
                  <Input type="number" id="stock" placeholder="42" {...register('stock', { required: 'Stock is required' })} />
                </div>
              </div>

              {/* Rating */}
              <div className="space-y-2">
                <Label htmlFor="rating">Rating</Label>
                <Input type="number" step="0.1" id="rating" placeholder="4.8" {...register('rating', { required: 'Rating is required' })} />
              </div>

              {/* Description */}
              <div className="space-y-2">
                <Label htmlFor="description">Description</Label>
                <Textarea id="description" placeholder="Write a short description..." {...register('description', { required: 'Description is required' })} />
              </div>

              {/* Image URL */}
              <div className="space-y-2">
                <Label htmlFor="image">Book Cover URL</Label>
                <div className="flex gap-2">
                  <Input id="image" placeholder="https://example.com/book.jpg" {...register('image', { required: 'Book image is required' })} />
                  <Button type="button" variant="outline" size="icon">
                    <Upload className="h-4 w-4" />
                  </Button>
                </div>
              </div>

              {/* Submit */}
              <div className="pt-6">
                <Button type="submit" disabled={isLoading} className="w-full md:w-auto">
                  {isLoading ? (
                    <>
                      <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                      Adding Book...
                    </>
                  ) : (
                    <>
                      <Plus className="mr-2 h-4 w-4" />
                      Add Book
                    </>
                  )}
                </Button>
              </div>
            </form>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}

export default AddBook
