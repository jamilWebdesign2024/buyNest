"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, ShoppingBag, User, LogOut, Settings } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
    Sheet,
    SheetContent,
    SheetTrigger,
    SheetHeader,
    SheetTitle,
} from "@/components/ui/sheet";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import ThemeToggle from "./ThemeToggle";

// Mock user state - replace with your actual auth logic
const useAuth = () => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [user, setUser] = useState({ name: "John Doe", email: "john@example.com", avatar: "" });

    const login = () => setIsLoggedIn(true);
    const logout = () => setIsLoggedIn(false);

    return { isLoggedIn, user, login, logout };
};

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const pathname = usePathname();
    const { isLoggedIn, user, login, logout } = useAuth();

    const navLinks = [
        { href: "/", label: "Home" },
        { href: "/products", label: "Products" },
        ...(isLoggedIn ? [{ href: "/dashboard", label: "Dashboard" }] : []),
    
    ];

    const isActive = (path) => pathname === path;

    const handleAuth = () => {
        if (isLoggedIn) {
            logout();
        } else {
            login();
        }
    };

    return (
        <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
            <div className="container flex h-16 items-center justify-between px-4">
                {/* Logo */}
                <Link href="/" className="flex items-center space-x-2">
                    <ShoppingBag className="h-6 w-6 text-primary" />
                    <span className="text-xl font-bold text-foreground">BuyNest</span>
                </Link>

                {/* Desktop Navigation */}
                <nav className="hidden md:flex items-center space-x-6">
                    {navLinks.map((link) => (
                        <Link
                            key={link.href}
                            href={link.href}
                            className={`text-sm font-medium transition-colors hover:text-primary ${isActive(link.href)
                                    ? "text-primary"
                                    : "text-muted-foreground"
                                }`}
                        >
                            {link.label}
                        </Link>
                    ))}
                </nav>

                {/* Desktop Right Section */}
                <div className="hidden md:flex items-center space-x-4">
                    <ThemeToggle />

                    {isLoggedIn ? (
                        <DropdownMenu>
                            <DropdownMenuTrigger asChild>
                                <Button variant="ghost" className="relative h-8 w-8 rounded-full">
                                    <Avatar className="h-8 w-8">
                                        <AvatarImage src={user.avatar} alt={user.name} />
                                        <AvatarFallback>{user.name.charAt(0)}</AvatarFallback>
                                    </Avatar>
                                </Button>
                            </DropdownMenuTrigger>
                            <DropdownMenuContent className="w-56" align="end" forceMount>
                                <div className="flex items-center justify-start gap-2 p-2">
                                    <div className="flex flex-col space-y-1 leading-none">
                                        <p className="font-medium">{user.name}</p>
                                        <p className="w-[200px] truncate text-sm text-muted-foreground">
                                            {user.email}
                                        </p>
                                    </div>
                                </div>
                                <DropdownMenuSeparator />
                                <DropdownMenuItem asChild>
                                    <Link href="/dashboard" className="flex items-center">
                                        <Settings className="mr-2 h-4 w-4" />
                                        Dashboard
                                    </Link>
                                </DropdownMenuItem>
                                <DropdownMenuSeparator />
                                <DropdownMenuItem onClick={logout} className="text-red-600">
                                    <LogOut className="mr-2 h-4 w-4" />
                                    Logout
                                </DropdownMenuItem>
                            </DropdownMenuContent>
                        </DropdownMenu>
                    ) : (
                        <div className="flex items-center space-x-2">
                            <Button variant="ghost" asChild>
                                <Link href="auth/login">Login</Link>
                            </Button>
                            <Button asChild>
                                <Link href="auth/register">Register</Link>
                            </Button>
                        </div>
                    )}
                </div>

                {/* Mobile Menu */}
                <div className="flex items-center space-x-2 md:hidden">
                    <ThemeToggle />
                    <Sheet open={isOpen} onOpenChange={setIsOpen}>
                        <SheetTrigger asChild>
                            <Button variant="ghost" size="sm" className="px-2">
                                <Menu className="h-5 w-5" />
                                <span className="sr-only">Toggle menu</span>
                            </Button>
                        </SheetTrigger>
                        <SheetContent side="right" className="w-[300px] sm:w-[350px]">
                            <SheetHeader>
                                <SheetTitle className="sr-only">Navigation Menu</SheetTitle>
                            </SheetHeader>
                            <div className="flex flex-col space-y-4 mt-4">
                                {/* Mobile Logo */}
                                <Link href="/" className="flex items-center space-x-2 mb-4" onClick={() => setIsOpen(false)}>
                                    <ShoppingBag className="h-6 w-6 text-primary" />
                                    <span className="text-xl font-bold">BuyNest</span>
                                </Link>

                                {/* Mobile Navigation Links */}
                                <nav className="flex flex-col space-y-2">
                                    {navLinks.map((link) => (
                                        <Link
                                            key={link.href}
                                            href={link.href}
                                            onClick={() => setIsOpen(false)}
                                            className={`text-sm font-medium transition-colors hover:text-primary p-2 rounded-md ${isActive(link.href)
                                                    ? "text-primary bg-accent"
                                                    : "text-muted-foreground hover:bg-accent"
                                                }`}
                                        >
                                            {link.label}
                                        </Link>
                                    ))}
                                </nav>

                                {/* Mobile Auth Section */}
                                <div className="border-t pt-4">
                                    {isLoggedIn ? (
                                        <div className="space-y-4">
                                            <div className="flex items-center space-x-3 p-2">
                                                <Avatar className="h-8 w-8">
                                                    <AvatarImage src={user.avatar} alt={user.name} />
                                                    <AvatarFallback>{user.name.charAt(0)}</AvatarFallback>
                                                </Avatar>
                                                <div className="flex flex-col">
                                                    <p className="font-medium text-sm">{user.name}</p>
                                                    <p className="text-xs text-muted-foreground">{user.email}</p>
                                                </div>
                                            </div>
                                            <Button
                                                variant="ghost"
                                                className="w-full justify-start text-red-600 hover:text-red-600 hover:bg-red-50"
                                                onClick={() => {
                                                    logout();
                                                    setIsOpen(false);
                                                }}
                                            >
                                                <LogOut className="mr-2 h-4 w-4" />
                                                Logout
                                            </Button>
                                        </div>
                                    ) : (
                                        <div className="flex flex-col space-y-2">
                                            <Button variant="ghost" className="justify-start" asChild>
                                                <Link href="/login" onClick={() => setIsOpen(false)}>
                                                    <User className="mr-2 h-4 w-4" />
                                                    Login
                                                </Link>
                                            </Button>
                                            <Button className="justify-start" asChild>
                                                <Link href="/register" onClick={() => setIsOpen(false)}>
                                                    Register
                                                </Link>
                                            </Button>
                                        </div>
                                    )}
                                </div>
                            </div>
                        </SheetContent>
                    </Sheet>
                </div>
            </div>
        </header>
    );
}