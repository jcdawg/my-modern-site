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
                <path
                    d="M16 4.5L25.96 10.25V21.75L16 27.5L6.04 21.75V10.25L16 4.5Z"
                    stroke="currentColor"
                    strokeWidth="1.8"
                    strokeLinejoin="round"
                />
                <path
                    d="M16 4.5L16 27.5"
                    stroke="currentColor"
                    strokeWidth="1.2"
                    strokeOpacity="0.5"
                />
                <path
                    d="M25.96 10.25L6.04 21.75"
                    stroke="currentColor"
                    strokeWidth="1.2"
                    strokeOpacity="0.5"
                />
                <path
                    d="M25.96 21.75L6.04 10.25"
                    stroke="currentColor"
                    strokeWidth="1.2"
                    strokeOpacity="0.5"
                />
                <path
                    d="M16 16L25.96 10.25M16 16L25.96 21.75M16 16L16 27.5M16 16L6.04 21.75M16 16L6.04 10.25M16 16L16 4.5"
                    stroke="currentColor"
                    strokeWidth="1.8"
                    strokeLinecap="round"
                />
            </svg>
            <span className={`font-heading text-lg font-bold tracking-tight ${textClass}`}>
                The <span className="text-blue-accent">Kas</span> Group
            </span>
        </div>
    );
}
