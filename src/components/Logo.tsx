export default function Logo({ className = "", textClass = "text-navy-900" }: { className?: string; textClass?: string }) {
    return (
        <div className={`flex items-center gap-2 ${className}`}>
            <svg
                width="32"
                height="32"
                viewBox="0 0 32 32"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="text-blue-accent"
            >
                <rect width="32" height="32" rx="8" fill="currentColor" fillOpacity="0.1" />
                <path
                    d="M8 10L16 14L24 10"
                    stroke="currentColor"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                />
                <path
                    d="M16 14V22"
                    stroke="currentColor"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                />
                <path
                    d="M11 19.5L16 22L21 19.5"
                    stroke="currentColor"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                />
            </svg>
            <span className={`font-heading text-lg font-bold tracking-tight ${textClass}`}>
                The <span className="text-blue-accent">Kas</span> Group
            </span>
        </div>
    );
}
