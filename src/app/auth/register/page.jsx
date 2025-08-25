'use client';

import React, { useState } from 'react';
// import { Button } from '@/components/ui/button';
// import { Card, CardContent } from '@/components/ui/card';
// import { Input } from '@/components/ui/input';
// import { Separator } from '@/components/ui/separator';
import { Eye, EyeOff, User, Mail, Lock, LogIn } from 'lucide-react';
import Link from 'next/link';
// import SocialLogin from '../socialLogin/SocialLogin';

import { Card, CardContent } from '@/components/ui/card';
import RegisterForm from './component/registerForm';

const RegisterPage = () => {





    return (
        <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-cyan-50 dark:from-background dark:via-background dark:to-muted/20 flex items-center justify-center p-4">
            <Card className="w-full max-w-md bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/95 shadow-2xl border-0">
                <CardContent className="p-8 space-y-6">
                    {/* Icon */}
                    <div className="flex justify-center">
                        <div className="p-4 rounded-2xl bg-muted/50">
                            <LogIn className="h-8 w-8 text-foreground" />
                        </div>
                    </div>

                    {/* Header */}
                    <div className="text-center space-y-2">
                        <h1 className="text-2xl font-bold text-foreground">Create your account</h1>
                        <p className="text-muted-foreground">
                            Join Buynest to discover quality refurbished Books
                        </p>
                    </div>

                    {/* Form */}

                    <RegisterForm></RegisterForm>




                    {/* Login Link */}
                    <div className="text-center pt-2">
                        <p className="text-sm text-muted-foreground">
                            Already have an account?{' '}
                            <Link
                                href="/auth/login"
                                className="text-foreground hover:underline font-medium"
                            >
                                Sign in
                            </Link>
                        </p>
                    </div>
                </CardContent>
            </Card>
        </div>
    );
};

export default RegisterPage;