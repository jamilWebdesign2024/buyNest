'use client';

import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Eye, EyeOff, User, Mail, Lock, LogIn } from 'lucide-react';
import Link from 'next/link';
import { toast } from 'react-toastify';
import { useRouter } from 'next/navigation';
import { registerUser } from '@/app/actions/auth/registerUser';
import SocialLogin from '../../socialLogin/socialLogin';




const RegisterForm = () => {
    const [showPassword, setShowPassword] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const router = useRouter();
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        password: '',
        terms: false,
    });


    const handleInputChange = (e) => {
        const { name, value, type, checked } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: type === 'checkbox' ? checked : value,
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsLoading(true);

        // Simulate API call
        // await new Promise(resolve => setTimeout(resolve, 1000));
        const { name, email, password } = formData;
        const payload = { name, email, password }
        // console.log(name, email, password);
        const response = await registerUser(payload);
        console.log(response);
        setIsLoading(false)


        if (response.success === true) {
            toast.success('Registered in successfully')
            // setFormData({ email: "", password: '' })
            // setFormErrors({});
            setShowPassword(false);
            router.push('/')
        }
        else {
            toast.warn('Authentication failed')
            setIsLoading(false);
            return
        }



        // setIsLoading(false);
        // console.log('Register attempt:', formData);
    };


    return (
        <>
            {/* Form */}
            <form onSubmit={handleSubmit} className="space-y-4">
                {/* Name Input */}
                <div className="relative">
                    <User className="absolute left-4 top-1/2 transform -translate-y-1/2 h-5 w-5 text-muted-foreground" />
                    <Input
                        name="name"
                        type="text"
                        placeholder="Full Name"
                        className="pl-12 h-12 bg-muted/30 border-0 text-base placeholder:text-muted-foreground/70"
                        value={formData.name}
                        onChange={handleInputChange}
                        required
                        disabled={isLoading}
                    />
                </div>

                {/* Email Input */}
                <div className="relative">
                    <Mail className="absolute left-4 top-1/2 transform -translate-y-1/2 h-5 w-5 text-muted-foreground" />
                    <Input
                        name="email"
                        type="email"
                        placeholder="Email"
                        className="pl-12 h-12 bg-muted/30 border-0 text-base placeholder:text-muted-foreground/70"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                        disabled={isLoading}
                    />
                </div>

                {/* Password Input */}
                <div className="relative">
                    <Lock className="absolute left-4 top-1/2 transform -translate-y-1/2 h-5 w-5 text-muted-foreground" />
                    <Input
                        name="password"
                        type={showPassword ? 'text' : 'password'}
                        placeholder="Password"
                        className="pl-12 pr-12 h-12 bg-muted/30 border-0 text-base placeholder:text-muted-foreground/70"
                        value={formData.password}
                        onChange={handleInputChange}
                        required
                        disabled={isLoading}
                    />
                    <Button
                        type="button"
                        variant="ghost"
                        size="sm"
                        className="absolute right-2 top-1/2 transform -translate-y-1/2 h-8 w-8 p-0 hover:bg-transparent"
                        onClick={() => setShowPassword(!showPassword)}
                        disabled={isLoading}
                    >
                        {showPassword ? (
                            <EyeOff className="h-4 w-4 text-muted-foreground" />
                        ) : (
                            <Eye className="h-4 w-4 text-muted-foreground" />
                        )}
                    </Button>
                </div>

                {/* Terms & Conditions */}
                <div className="flex items-center space-x-2">
                    <input
                        type="checkbox"
                        name="terms"
                        checked={formData.terms}
                        onChange={handleInputChange}
                        disabled={isLoading}
                        required
                        className="w-4 h-4 accent-foreground"
                    />
                    <label className="text-sm text-muted-foreground">
                        I agree to the{' '}
                        <Link href="/terms" className="text-foreground hover:underline">
                            Terms & Conditions
                        </Link>
                    </label>
                </div>

                {/* Submit Button */}
                <Button
                    type="submit"
                    className="w-full h-12 bg-foreground text-background hover:bg-foreground/90 text-base font-medium"
                    disabled={isLoading}
                >
                    {isLoading ? (
                        <div className="flex items-center gap-2">
                            <div className="h-4 w-4 animate-spin rounded-full border-2 border-current border-t-transparent" />
                            Creating account...
                        </div>
                    ) : (
                        'Sign Up'
                    )}
                </Button>
            </form>

            {/* Google Sign Up */}
            <SocialLogin></SocialLogin>
        </>
    );
};

export default RegisterForm;