import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { HIRING_TOOLS, type HiringToolId } from "@/lib/hiring-tools";

export default function ToolCallout({ tool }: { tool: HiringToolId }) {
    const item = HIRING_TOOLS[tool];
    return (
        <aside className="rounded-2xl border border-grey-200 bg-grey-50 p-8 shadow-sm">
            <h2 className="text-xl font-bold text-navy-900">{item.title}</h2>
            <p className="mt-3 text-sm leading-relaxed text-grey-500">{item.description}</p>
            <Link
                href={item.href}
                className="mt-6 inline-flex items-center justify-center gap-2 rounded-full bg-navy-900 px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-blue-accent"
            >
                {item.cta}
                <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </Link>
        </aside>
    );
}
