'use client';

import React, { useState } from 'react';
// import { Button } from '@/components/ui/button';
// import { Card, CardContent } from '@/components/ui/card';
// import { Input } from '@/components/ui/input';
// import { Separator } from '@/components/ui/separator';
import {
    Eye,
    EyeOff,
    Mail,
    Lock,
   
} from 'lucide-react';
import Link from 'next/link';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
// import SocialLogin from '../../socialLogin/SocialLogin';
import { useRouter } from 'next/navigation';
import { signIn } from 'next-auth/react';
import { toast } from 'react-toastify';


const LoginForm = () => {
    const [showPassword, setShowPassword] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const router = useRouter()
    const [formData, setFormData] = useState({
        email: '',
        password: ''
    });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsLoading(true);

        // Simulate API call
        // await new Promise(resolve => setTimeout(resolve, 1000));

        try {
            const { email, password } = formData;
            const response = await signIn("credentials", {
                redirect: false,
                email,
                password,
            });

            if (response.ok) {
                toast.success('Logged in successfully')
                setFormData({ email: "", password: '' })
                // setFormErrors({});
                setIsLoading(false);
                setShowPassword(false);
                router.push('/')
            } else {
                toast.warn('Authentication failed')
                setIsLoading(false);
                return
            }


        } catch (error) {
            console.log(error);
            alert('Authentication failed')
        }

        // setIsLoading(false);
        // console.log('Login attempt:', formData);
    };


    return (
        <>
            {/* Form */}
            <form onSubmit={handleSubmit} className="space-y-4">
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

                {/* Forgot Password */}
                <div className="text-right">
                    <Link
                        href="/forgot-password"
                        className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                    >
                        Forgot password?
                    </Link>
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
                            Signing in...
                        </div>
                    ) : (
                        'Get Started'
                    )}
                </Button>
            </form>


            {/* Google Sign In */}
            {/* <SocialLogin></SocialLogin> */}
        </>
    );
};

export default LoginForm;