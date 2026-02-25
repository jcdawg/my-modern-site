"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X, ChevronDown } from "lucide-react";
import { usePathname } from "next/navigation";
import Logo from "./Logo";

export default function Header() {
    const [isOpen, setIsOpen] = useState(false);
    const pathname = usePathname();

    const toggleMenu = () => setIsOpen(!isOpen);

    const isActive = (path: string) => pathname === path;

    const navLinks = [
        { name: "Home", href: "/" },
        { name: "About", href: "/about" },
        { name: "Brand Facts", href: "/brand-facts" },
        { name: "Blog", href: "/blog" },
    ];

    return (
        <header className="sticky top-0 z-50 w-full border-b border-grey-200 bg-white/80 backdrop-blur-md">
            <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
                {/* Logo */}
                <div className="flex shrink-0 items-center">
                    <Link href="/" className="group">
                        <Logo />
                    </Link>
                </div>

                {/* Desktop Navigation */}
                <nav className="hidden md:flex md:items-center md:gap-8">
                    {navLinks.map((link) => (
                        <Link
                            key={link.name}
                            href={link.href}
                            className={`text-sm font-medium transition-colors hover:text-blue-accent ${isActive(link.href) ? "text-blue-accent" : "text-navy-700"
                                }`}
                        >
                            {link.name}
                        </Link>
                    ))}

                    {/* Recruit Dropdown (Simple hover or click implementation) */}
                    <div className="relative group">
                        <button className="flex items-center gap-1 text-sm font-medium text-navy-700 transition-colors group-hover:text-blue-accent focus:outline-none">
                            Recruiting <ChevronDown className="h-4 w-4" />
                        </button>
                        {/* The pt-2 acts as a hover bridge */}
                        <div className="absolute left-0 top-full hidden w-48 pt-2 group-hover:flex">
                            <div className="flex w-full flex-col rounded-md border border-grey-200 bg-white shadow-lg py-2">
                                <Link href="/recruit/sales" className="block px-4 py-2 text-sm text-gray-700 hover:bg-grey-50 hover:text-blue-accent">
                                    Sales Recruiting
                                </Link>
                                <Link href="/recruit/ai" className="block px-4 py-2 text-sm text-gray-700 hover:bg-grey-50 hover:text-blue-accent">
                                    Data & AI Recruiting
                                </Link>
                            </div>
                        </div>
                    </div>
                </nav>

                {/* CTA Button */}
                <div className="hidden md:flex">
                    <Link
                        href="mailto:chris@thekasgroup.com"
                        className="rounded-full bg-navy-900 px-5 py-2 text-sm font-medium text-white transition-colors hover:bg-blue-accent"
                    >
                        Get in Touch
                    </Link>
                </div>

                {/* Mobile Menu Button */}
                <div className="flex md:hidden">
                    <button
                        onClick={toggleMenu}
                        className="text-navy-900 focus:outline-none"
                        aria-label="Toggle menu"
                    >
                        {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
                    </button>
                </div>
            </div>

            {/* Mobile Menu */}
            {isOpen && (
                <div className="md:hidden border-t border-grey-200 bg-white">
                    <div className="space-y-1 px-4 py-4">
                        {navLinks.map((link) => (
                            <Link
                                key={link.name}
                                href={link.href}
                                onClick={() => setIsOpen(false)}
                                className={`block rounded-md px-3 py-2 text-base font-medium ${isActive(link.href)
                                    ? "bg-grey-50 text-blue-accent"
                                    : "text-navy-700 hover:bg-grey-50 hover:text-blue-accent"
                                    }`}
                            >
                                {link.name}
                            </Link>
                        ))}

                        <div className="space-y-1 pt-2">
                            <div className="px-3 py-2 text-base font-medium text-navy-900">Recruiting</div>
                            <Link
                                href="/recruit/sales"
                                onClick={() => setIsOpen(false)}
                                className="block rounded-md pl-6 px-3 py-2 text-base font-medium text-navy-600 hover:bg-grey-50 hover:text-blue-accent"
                            >
                                Sales Recruiting
                            </Link>
                            <Link
                                href="/recruit/ai"
                                onClick={() => setIsOpen(false)}
                                className="block rounded-md pl-6 px-3 py-2 text-base font-medium text-navy-600 hover:bg-grey-50 hover:text-blue-accent"
                            >
                                Data & AI Recruiting
                            </Link>
                        </div>

                        <div className="mt-4 pt-4 border-t border-grey-100">
                            <Link
                                href="mailto:chris@thekasgroup.com"
                                className="block w-full rounded-md bg-navy-900 px-5 py-3 text-center text-base font-medium text-white hover:bg-blue-accent"
                            >
                                Get in Touch
                            </Link>
                        </div>
                    </div>
                </div>
            )}
        </header>
    );
}
