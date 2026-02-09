"use client";

import Link from "next/link";
import { Linkedin, Twitter, Mail } from "lucide-react";
import Logo from "./Logo";

export default function Footer() {
    return (
        <footer className="bg-navy-950 text-white">
            <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                    <div className="col-span-1 md:col-span-1">
                        <Link href="/" className="mb-4 block">
                            <Logo textClass="text-white" />
                        </Link>
                        <p className="text-grey-400 text-sm leading-relaxed">
                            Premier recruiting firm specializing in Sales and Data & AI talent acquisition. Connecting world-class companies with exceptional leaders.
                        </p>
                    </div>

                    <div>
                        <h3 className="text-sm font-semibold uppercase tracking-wider text-grey-400">Services</h3>
                        <ul className="mt-4 space-y-2">
                            <li>
                                <Link href="/recruit/sales" className="text-base text-grey-200 hover:text-white transition-colors">
                                    Sales Recruiting
                                </Link>
                            </li>
                            <li>
                                <Link href="/recruit/ai" className="text-base text-grey-200 hover:text-white transition-colors">
                                    Data & AI Recruiting
                                </Link>
                            </li>
                        </ul>
                    </div>

                    <div>
                        <h3 className="text-sm font-semibold uppercase tracking-wider text-grey-400">Company</h3>
                        <ul className="mt-4 space-y-2">
                            <li>
                                <Link href="/about" className="text-base text-grey-200 hover:text-white transition-colors">
                                    About Us
                                </Link>
                            </li>
                            <li>
                                <Link href="/blog" className="text-base text-grey-200 hover:text-white transition-colors">
                                    Insights Blog
                                </Link>
                            </li>
                        </ul>
                    </div>

                    <div>
                        <h3 className="text-sm font-semibold uppercase tracking-wider text-grey-400">Connect</h3>
                        <ul className="mt-4 space-y-2 flex gap-4">
                            <li>
                                <Link href="https://www.linkedin.com/in/cybersecuritysalesrecruiterchris-stinson/" target="_blank" className="text-grey-400 hover:text-white transition-colors">
                                    <span className="sr-only">LinkedIn</span>
                                    <Linkedin className="h-6 w-6" />
                                </Link>
                            </li>
                            <li>
                                <Link href="https://twitter.com" target="_blank" className="text-grey-400 hover:text-white transition-colors">
                                    <span className="sr-only">Twitter</span>
                                    <Twitter className="h-6 w-6" />
                                </Link>
                            </li>
                            <li>
                                <Link href="mailto:chris@thekasgroup.com" className="text-grey-400 hover:text-white transition-colors">
                                    <span className="sr-only">Email</span>
                                    <Mail className="h-6 w-6" />
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="mt-8 border-t border-navy-800 pt-8 flex flex-col md:flex-row justify-between items-center">
                    <p className="text-sm text-grey-500">
                        &copy; {new Date().getFullYear()} The Kas Group. All rights reserved.
                    </p>
                    <div className="flex gap-4 mt-4 md:mt-0">
                        <Link href="#" className="text-xs text-grey-500 hover:text-grey-400">Privacy Policy</Link>
                        <Link href="#" className="text-xs text-grey-500 hover:text-grey-400">Terms of Service</Link>
                    </div>
                </div>
            </div>
        </footer>
    );
}
