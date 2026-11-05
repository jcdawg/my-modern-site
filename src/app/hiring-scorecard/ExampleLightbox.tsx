"use client";

import Image from "next/image";
import { useEffect, useId, useRef, useState } from "react";

export default function ExampleLightbox() {
    const [open, setOpen] = useState(false);
    const closeRef = useRef<HTMLButtonElement>(null);
    const labelId = useId();

    useEffect(() => {
        if (!open) return;
        const prev = document.activeElement as HTMLElement | null;
        closeRef.current?.focus();
        const onKey = (e: KeyboardEvent) => {
            if (e.key === "Escape") setOpen(false);
            if (e.key === "Tab" && closeRef.current) {
                e.preventDefault();
                closeRef.current.focus();
            }
        };
        document.addEventListener("keydown", onKey);
        return () => {
            document.removeEventListener("keydown", onKey);
            prev?.focus();
        };
    }, [open]);

    return (
        <>
            <button
                type="button"
                onClick={() => setOpen(true)}
                onKeyDown={(e) => {
                    if (e.key === "Enter" || e.key === " ") {
                        e.preventDefault();
                        setOpen(true);
                    }
                }}
                className="block w-full text-left rounded-2xl overflow-hidden border border-grey-200 shadow-sm hover:shadow-md focus:outline-none focus:ring-2 focus:ring-blue-accent"
                aria-haspopup="dialog"
            >
                <Image
                    src="/images/hiring-scorecard-example-teaser.png"
                    alt="Example hiring scorecard teaser for an Operations Manager role, Built with The Kas Group"
                    width={600}
                    height={353}
                    className="w-full h-auto"
                    priority
                />
                <span className="block px-3 py-2 text-xs font-semibold text-blue-accent bg-white">
                    Example scorecard · click to expand
                </span>
            </button>

            {open && (
                <div
                    role="dialog"
                    aria-modal="true"
                    aria-labelledby={labelId}
                    className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60"
                    onClick={() => setOpen(false)}
                >
                    <div
                        className="relative max-w-3xl w-full max-h-[90vh] overflow-auto rounded-2xl bg-white shadow-2xl"
                        onClick={(e) => e.stopPropagation()}
                    >
                        <div className="sticky top-0 flex items-center justify-between gap-3 px-4 py-3 bg-white border-b border-grey-100">
                            <p id={labelId} className="text-sm font-bold text-navy-900">
                                Example scorecard
                            </p>
                            <button
                                ref={closeRef}
                                type="button"
                                onClick={() => setOpen(false)}
                                className="px-3 py-1.5 rounded-full border border-grey-300 text-sm font-semibold"
                            >
                                Close
                            </button>
                        </div>
                        <Image
                            src="/images/hiring-scorecard-example.png"
                            alt="Full example hiring scorecard for an Operations Manager role with mission, outcomes, competencies and Built with The Kas Group footer"
                            width={1200}
                            height={1859}
                            className="w-full h-auto"
                        />
                    </div>
                </div>
            )}
        </>
    );
}
