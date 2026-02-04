import Link from "next/link";
import { ArrowRight, CheckCircle2, TrendingUp, Users } from "lucide-react";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative px-6 pt-16 pb-24 md:pt-32 md:pb-32 lg:px-8 bg-gradient-to-br from-grey-50 to-white">
        <div className="mx-auto max-w-5xl text-center">
          <h1 className="font-heading text-4xl font-bold tracking-tight text-navy-900 sm:text-6xl md:text-7xl">
            Elite Sales & <br className="hidden md:block" />
            <span className="text-blue-accent">AI Technical</span> Recruiting
          </h1>
          <p className="mt-8 text-lg font-medium text-grey-500 md:text-xl max-w-2xl mx-auto leading-relaxed">
            Combining over a decade of sales recruiting expertise with a unique, Ph.D.-led technical vetting process for AI professionals. We don&apos;t just source resumes; we build teams that win.
          </p>
          <div className="mt-10 flex items-center justify-center gap-6">
            <Link
              href="/recruit/sales"
              className="group flex items-center gap-2 rounded-full bg-navy-900 px-8 py-4 text-base font-semibold text-white transition-all hover:bg-blue-accent hover:shadow-lg"
            >
              Hire Leadership
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
            <Link
              href="/about"
              className="text-base font-semibold text-navy-700 transition-colors hover:text-blue-accent"
            >
              Our Philosophy
            </Link>
          </div>
        </div>
      </section>

      {/* Feature Section */}
      <section className="py-24 bg-white">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {/* Feature 1 */}
            <div className="flex flex-col items-start p-6 rounded-2xl bg-grey-50 border border-grey-100 hover:shadow-md transition-shadow">
              <div className="h-12 w-12 rounded-xl bg-blue-accent/10 flex items-center justify-center text-blue-accent mb-6">
                <Users className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-bold text-navy-900 mb-3">Elite Talent Network</h3>
              <p className="text-grey-500 leading-relaxed">
                Access a curated network of top 1% sales and engineering leaders who aren&apos;t on the job boards.
              </p>
            </div>
            {/* Feature 2 */}
            <div className="flex flex-col items-start p-6 rounded-2xl bg-grey-50 border border-grey-100 hover:shadow-md transition-shadow">
              <div className="h-12 w-12 rounded-xl bg-blue-accent/10 flex items-center justify-center text-blue-accent mb-6">
                <TrendingUp className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-bold text-navy-900 mb-3">Zero Onboarding</h3>
              <p className="text-grey-500 leading-relaxed">
                Our candidates are vetted for immediate impact, reducing ramp time and accelerating growth.
              </p>
            </div>
            {/* Feature 3 */}
            <div className="flex flex-col items-start p-6 rounded-2xl bg-grey-50 border border-grey-100 hover:shadow-md transition-shadow">
              <div className="h-12 w-12 rounded-xl bg-blue-accent/10 flex items-center justify-center text-blue-accent mb-6">
                <CheckCircle2 className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-bold text-navy-900 mb-3">Precision Matching</h3>
              <p className="text-grey-500 leading-relaxed">
                We use deep industry insights to match credentials and culture ensuring long-term retention.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Social Proof / Trust Section (Placeholder) */}
      <section className="py-20 bg-navy-900 text-white">
        <div className="mx-auto max-w-7xl px-6 text-center">
          <h2 className="text-3xl font-bold tracking-tight mb-8">Trusted by Industry Leaders</h2>
          <div className="flex flex-wrap justify-center items-center gap-x-12 gap-y-8 opacity-60 grayscale transition-all">
            <div className="text-xl font-bold tracking-tight text-white/80">Charter Communications</div>
            <div className="text-xl font-bold tracking-tight text-white/80">Cox Communications</div>
            <div className="text-xl font-bold tracking-tight text-white/80">Ciber</div>
            <div className="text-xl font-bold tracking-tight text-white/80">Hoxhunt</div>
            <div className="text-xl font-bold tracking-tight text-white/80">Worldwide Express</div>
          </div>
        </div>
      </section>
    </div>
  );
}
