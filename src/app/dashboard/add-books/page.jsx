'use client'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Loader2, Plus, Upload } from 'lucide-react';
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
// import { useForm } from 'react-hook-form';
// import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
// import { Button } from '@/components/ui/button';
// import { Input } from '@/components/ui/input';
// import { Label } from '@/components/ui/label';
// import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Button } from '@/components/ui/button';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
// import { Textarea } from '@/components/ui/textarea';
// import { Loader2, Plus, Upload } from 'lucide-react';

const AddBook = () => {
    const [isLoading, setIsLoading] = useState(false);
    const {
        register,
        handleSubmit,
        setValue,
        watch,
        reset,
        formState: { errors }
    } = useForm({
        defaultValues: {
            brand: '',
            model: '',
            processor: '',
            ram: '',
            storage: '',
            graphics: '',
            display: '',
            condition: '',
            battery: '',
            weight: '',
            os: '',
            price: '',
            currency: 'USD',
            year: new Date().getFullYear(),
            warranty: '',
            image: ''
        }
    });

    const onSubmit = async (data) => {
        setIsLoading(true);
        try {
            await new Promise(resolve => setTimeout(resolve, 2000));
            console.log('Product data:', data);
            reset();
            alert('Product added successfully!');
        } catch (error) {
            console.error('Error adding product:', error);
            alert('Error adding product. Please try again.');
        } finally {
            setIsLoading(false);
        }
    };

    const handleSelectChange = (field, value) => {
        setValue(field, value);
    };

    return (
        <div className="min-h-screen bg-gradient-to-br from-background to-muted/30 p-4 md:p-6">
            <div className="max-w-4xl mx-auto">
                <div className="text-center mb-8">
                    <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-2">Add New Product</h1>
                    <p className="text-muted-foreground">Add a new laptop to your inventory</p>
                </div>

                <Card className="shadow-xl border bg-card backdrop-blur-sm">
                    <CardHeader className="pb-6">
                        <CardTitle className="flex items-center gap-2 text-xl text-foreground">
                            <Plus className="h-5 w-5" />
                            Product Information
                        </CardTitle>
                        <CardDescription>
                            Fill in the details for the new laptop product
                        </CardDescription>
                    </CardHeader>

                    <CardContent>
                        <div className="space-y-6">
                            {/* Basic Information */}
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div className="space-y-2">
                                    <Label htmlFor="brand">Brand</Label>
                                    <Input
                                        id="brand"
                                        placeholder="e.g., Dell, HP, Lenovo"
                                        {...register('brand', { required: 'Brand is required' })}
                                        className="border-input focus:border-ring focus:ring-ring"
                                    />
                                    {errors.brand && <p className="text-sm text-destructive">{errors.brand.message}</p>}
                                </div>

                                <div className="space-y-2">
                                    <Label htmlFor="model">Model</Label>
                                    <Input
                                        id="model"
                                        placeholder="e.g., Latitude 7490"
                                        {...register('model', { required: 'Model is required' })}
                                        className="border-input focus:border-ring focus:ring-ring"
                                    />
                                    {errors.model && <p className="text-sm text-destructive">{errors.model.message}</p>}
                                </div>
                            </div>

                            {/* Processor and RAM */}
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div className="space-y-2">
                                    <Label htmlFor="processor">Processor</Label>
                                    <Input
                                        id="processor"
                                        placeholder="e.g., Intel Core i7-8650U"
                                        {...register('processor', { required: 'Processor is required' })}
                                        className="border-input focus:border-ring focus:ring-ring"
                                    />
                                    {errors.processor && <p className="text-sm text-destructive">{errors.processor.message}</p>}
                                </div>

                                <div className="space-y-2">
                                    <Label htmlFor="ram">RAM</Label>
                                    <Input
                                        id="ram"
                                        placeholder="e.g., 16GB DDR4"
                                        {...register('ram', { required: 'RAM is required' })}
                                        className="border-input focus:border-ring focus:ring-ring"
                                    />
                                    {errors.ram && <p className="text-sm text-destructive">{errors.ram.message}</p>}
                                </div>
                            </div>

                            {/* Storage and Graphics */}
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div className="space-y-2">
                                    <Label htmlFor="storage">Storage</Label>
                                    <Input
                                        id="storage"
                                        placeholder="e.g., 512GB SSD"
                                        {...register('storage', { required: 'Storage is required' })}
                                        className="border-input focus:border-ring focus:ring-ring"
                                    />
                                    {errors.storage && <p className="text-sm text-destructive">{errors.storage.message}</p>}
                                </div>

                                <div className="space-y-2">
                                    <Label htmlFor="graphics">Graphics</Label>
                                    <Input
                                        id="graphics"
                                        placeholder="e.g., Intel UHD Graphics 620"
                                        {...register('graphics', { required: 'Graphics is required' })}
                                        className="border-input focus:border-ring focus:ring-ring"
                                    />
                                    {errors.graphics && <p className="text-sm text-destructive">{errors.graphics.message}</p>}
                                </div>
                            </div>

                            {/* Display and Condition */}
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div className="space-y-2">
                                    <Label htmlFor="display">Display</Label>
                                    <Input
                                        id="display"
                                        placeholder="e.g., 14-inch FHD (1920x1080)"
                                        {...register('display', { required: 'Display is required' })}
                                        className="border-input focus:border-ring focus:ring-ring"
                                    />
                                    {errors.display && <p className="text-sm text-destructive">{errors.display.message}</p>}
                                </div>

                                <div className="space-y-2">
                                    <Label>Condition</Label>
                                    <Select onValueChange={(value) => handleSelectChange('condition', value)}>
                                        <SelectTrigger className="border-input focus:border-ring focus:ring-ring">
                                            <SelectValue placeholder="Select condition" />
                                        </SelectTrigger>
                                        <SelectContent>
                                            <SelectItem value="new">New</SelectItem>
                                            <SelectItem value="refurbished">Refurbished</SelectItem>
                                            <SelectItem value="used">Used</SelectItem>
                                            <SelectItem value="open-box">Open Box</SelectItem>
                                        </SelectContent>
                                    </Select>
                                    {errors.condition && <p className="text-sm text-destructive">{errors.condition.message}</p>}
                                </div>
                            </div>

                            {/* Battery and Weight */}
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div className="space-y-2">
                                    <Label htmlFor="battery">Battery Life</Label>
                                    <Input
                                        id="battery"
                                        placeholder="e.g., Up to 8 hours"
                                        {...register('battery', { required: 'Battery life is required' })}
                                        className="border-input focus:border-ring focus:ring-ring"
                                    />
                                    {errors.battery && <p className="text-sm text-destructive">{errors.battery.message}</p>}
                                </div>

                                <div className="space-y-2">
                                    <Label htmlFor="weight">Weight</Label>
                                    <Input
                                        id="weight"
                                        placeholder="e.g., 1.4kg"
                                        {...register('weight', { required: 'Weight is required' })}
                                        className="border-input focus:border-ring focus:ring-ring"
                                    />
                                    {errors.weight && <p className="text-sm text-destructive">{errors.weight.message}</p>}
                                </div>
                            </div>

                            {/* OS and Year */}
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div className="space-y-2">
                                    <Label htmlFor="os">Operating System</Label>
                                    <Input
                                        id="os"
                                        placeholder="e.g., Windows 11 Pro"
                                        {...register('os', { required: 'Operating system is required' })}
                                        className="border-input focus:border-ring focus:ring-ring"
                                    />
                                    {errors.os && <p className="text-sm text-destructive">{errors.os.message}</p>}
                                </div>

                                <div className="space-y-2">
                                    <Label htmlFor="year">Year</Label>
                                    <Input
                                        id="year"
                                        type="number"
                                        placeholder="2024"
                                        {...register('year', {
                                            required: 'Year is required',
                                            min: { value: 2000, message: 'Year must be 2000 or later' },
                                            max: { value: new Date().getFullYear(), message: 'Year cannot be in the future' }
                                        })}
                                        className="border-input focus:border-ring focus:ring-ring"
                                    />
                                    {errors.year && <p className="text-sm text-destructive">{errors.year.message}</p>}
                                </div>
                            </div>

                            {/* Price and Currency */}
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                                <div className="space-y-2 md:col-span-2">
                                    <Label htmlFor="price">Price</Label>
                                    <Input
                                        id="price"
                                        type="number"
                                        step="0.01"
                                        placeholder="550.00"
                                        {...register('price', {
                                            required: 'Price is required',
                                            min: { value: 0, message: 'Price must be positive' }
                                        })}
                                        className="border-input focus:border-ring focus:ring-ring"
                                    />
                                    {errors.price && <p className="text-sm text-destructive">{errors.price.message}</p>}
                                </div>

                                <div className="space-y-2">
                                    <Label>Currency</Label>
                                    <Select defaultValue="USD" onValueChange={(value) => handleSelectChange('currency', value)}>
                                        <SelectTrigger className="border-input focus:border-ring focus:ring-ring">
                                            <SelectValue />
                                        </SelectTrigger>
                                        <SelectContent>
                                            <SelectItem value="USD">USD</SelectItem>
                                            <SelectItem value="EUR">EUR</SelectItem>
                                            <SelectItem value="GBP">GBP</SelectItem>
                                            <SelectItem value="BDT">BDT</SelectItem>
                                        </SelectContent>
                                    </Select>
                                </div>
                            </div>

                            {/* Warranty */}
                            <div className="space-y-2">
                                <Label htmlFor="warranty">Warranty</Label>
                                <Input
                                    id="warranty"
                                    placeholder="e.g., 6 months"
                                    {...register('warranty', { required: 'Warranty information is required' })}
                                    className="border-input focus:border-ring focus:ring-ring"
                                />
                                {errors.warranty && <p className="text-sm text-destructive">{errors.warranty.message}</p>}
                            </div>

                            {/* Image URL */}
                            <div className="space-y-2">
                                <Label htmlFor="image">Product Image URL</Label>
                                <div className="flex gap-2">
                                    <Input
                                        id="image"
                                        placeholder="https://example.com/image.jpg"
                                        {...register('image', { required: 'Product image is required' })}
                                        className="border-input focus:border-ring focus:ring-ring"
                                    />
                                    <Button type="button" variant="outline" size="icon" className="shrink-0">
                                        <Upload className="h-4 w-4" />
                                    </Button>
                                </div>
                                {errors.image && <p className="text-sm text-destructive">{errors.image.message}</p>}
                            </div>

                            {/* Submit Button */}
                            <div className="pt-6">
                                <Button
                                    type="button"
                                    onClick={handleSubmit(onSubmit)}
                                    disabled={isLoading}
                                    className="w-full md:w-auto"
                                >
                                    {isLoading ? (
                                        <>
                                            <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                                            Adding Product...
                                        </>
                                    ) : (
                                        <>
                                            <Plus className="mr-2 h-4 w-4" />
                                            Add Product
                                        </>
                                    )}
                                </Button>
                            </div>
                        </div>
                    </CardContent>
                </Card>
            </div>
        </div>
    );
};

export default AddBook;
