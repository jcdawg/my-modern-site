import Image from "next/image";
import Link from "next/link";
import { ArrowRight, AlertTriangle, XCircle, GraduationCap, Zap, Award, Target, Briefcase, ChevronRight, Users } from "lucide-react";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative px-6 pt-24 pb-20 md:pt-32 md:pb-32 lg:px-8 bg-gradient-to-br from-grey-50 to-white overflow-hidden">
        <div className="absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 bg-blue-accent/5 rounded-full blur-3xl" />
        <div className="mx-auto max-w-5xl text-center relative z-10">
          <h1 className="font-heading text-5xl font-extrabold tracking-tight text-navy-900 sm:text-7xl mb-8 leading-[1.1]">
            Elite Sales & AI Talent. <br className="hidden md:block" />
            <span className="text-blue-accent">Vetted by Experts.</span>
          </h1>
          <p className="mt-8 text-xl font-medium text-grey-500 md:text-2xl max-w-3xl mx-auto leading-relaxed">
            We don&apos;t just send resumes. We place top 1% sales leaders and AI/ML engineers who are ready to perform on day one — because every candidate passes our Ph.D.-led technical review.
          </p>
          <div className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-6">
            <Link
              href="mailto:chris@thekasgroup.com"
              className="group flex items-center gap-2 rounded-full bg-navy-900 px-10 py-5 text-lg font-bold text-white transition-all hover:bg-blue-accent hover:shadow-xl hover:-translate-y-1"
            >
              Schedule a consultation
              <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
            </Link>
            <Link
              href="/methodology"
              className="text-lg font-bold text-navy-700 transition-colors hover:text-blue-accent flex items-center gap-2"
            >
              See our methodology
              <ChevronRight className="h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* The Problem Section */}
      <section className="py-24 bg-white border-y border-grey-100">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-blue-accent font-bold uppercase tracking-wider text-sm mb-4">The Problem</h2>
            <p className="text-3xl md:text-4xl font-bold text-navy-900">
              Most recruiting firms screen by keyword. <br className="hidden md:block" />
              We screen by <span className="italic">capability.</span>
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-8 rounded-3xl bg-grey-50 border border-grey-100 flex flex-col items-center text-center">
              <div className="h-14 w-14 rounded-2xl bg-red-50 flex items-center justify-center text-red-500 mb-6">
                <AlertTriangle className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-bold text-navy-900 mb-4">77% of technical hires fail within 18 months</h3>
              <p className="text-grey-500 leading-relaxed">Lack of deep technical vetting leads to expensive turnover and stalls your product roadmap.</p>
            </div>

            <div className="p-8 rounded-3xl bg-grey-50 border border-grey-100 flex flex-col items-center text-center">
              <div className="h-14 w-14 rounded-2xl bg-red-50 flex items-center justify-center text-red-500 mb-6">
                <XCircle className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-bold text-navy-900 mb-4">Traditional recruiters can&apos;t evaluate AI/ML</h3>
              <p className="text-grey-500 leading-relaxed">Generalist recruiters lack the depth to differentiate between a buzzword hunter and an AI architect.</p>
            </div>

            <div className="p-8 rounded-3xl bg-grey-50 border border-grey-100 flex flex-col items-center text-center">
              <div className="h-14 w-14 rounded-2xl bg-red-50 flex items-center justify-center text-red-500 mb-6">
                <Users className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-bold text-navy-900 mb-4">Weeks wasted on the wrong candidates</h3>
              <p className="text-grey-500 leading-relaxed">Your leadership spends dozens of hours interviewing people who simply can&apos;t deliver at a high level.</p>
            </div>
          </div>
        </div>
      </section>

      {/* The Difference Section */}
      <section className="py-24 bg-navy-900 text-white overflow-hidden relative">
        <div className="absolute top-0 left-0 w-full h-full opacity-5 bg-[radial-gradient(circle_at_30%_30%,#2563eb_0%,transparent_50%)]" />
        <div className="mx-auto max-w-7xl px-6 lg:px-8 relative z-10">
          <div className="text-center mb-20">
            <h2 className="text-blue-accent font-bold uppercase tracking-wider text-sm mb-4">The Difference</h2>
            <p className="text-3xl md:text-5xl font-bold">The Kas Group Difference</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div className="space-y-6">
              <div className="h-16 w-16 rounded-2xl bg-blue-accent flex items-center justify-center text-white shadow-lg shadow-blue-accent/20">
                <GraduationCap className="h-9 w-9" />
              </div>
              <h3 className="text-2xl font-bold tracking-tight">Ph.D.-Led Technical Vetting</h3>
              <p className="text-grey-400 text-lg leading-relaxed">
                Our technical advisor (PhD Statistics, ex-Microsoft Lead Data Scientist) personally assesses every AI/ML candidate.
              </p>
            </div>

            <div className="space-y-6">
              <div className="h-16 w-16 rounded-2xl bg-blue-accent flex items-center justify-center text-white shadow-lg shadow-blue-accent/20">
                <Zap className="h-9 w-9" />
              </div>
              <h3 className="text-2xl font-bold tracking-tight">Zero Onboarding</h3>
              <p className="text-grey-400 text-lg leading-relaxed">
                Candidates are pre-vetted for immediate productivity, not &quot;potential.&quot; They hit the ground running on day one.
              </p>
            </div>

            <div className="space-y-6">
              <div className="h-16 w-16 rounded-2xl bg-blue-accent flex items-center justify-center text-white shadow-lg shadow-blue-accent/20">
                <Award className="h-9 w-9" />
              </div>
              <h3 className="text-2xl font-bold tracking-tight">Dual Expertise</h3>
              <p className="text-grey-400 text-lg leading-relaxed">
                A proven track record in Sales recruiting since 2014, coupled with highly specialized AI technical recruiting.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Who We Serve Section */}
      <section className="py-24 bg-grey-50">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-blue-accent font-bold uppercase tracking-wider text-sm mb-4">Who We Serve</h2>
            <p className="text-3xl md:text-4xl font-bold text-navy-900">Built for High-Growth Tech Teams</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "B2B SaaS Companies",
                desc: "Strategic placement of VP of Sales and recurring revenue leadership.",
                icon: Target
              },
              {
                title: "AI/ML Startups",
                desc: "Expertly building foundation technical teams with elite engineering talent.",
                icon: Brain
              },
              {
                title: "Growth-Stage Companies",
                desc: "Scalable recruiting support through our fractional model.",
                icon: Briefcase
              }
            ].map((item, i) => (
              <div key={i} className="bg-white p-10 rounded-3xl border border-grey-200 shadow-sm hover:shadow-xl transition-all hover:-translate-y-2 group">
                <div className="h-14 w-14 rounded-2xl bg-blue-accent/10 flex items-center justify-center text-blue-accent mb-8 group-hover:bg-blue-accent group-hover:text-white transition-colors">
                  <item.icon className="h-7 w-7" />
                </div>
                <h3 className="text-2xl font-bold text-navy-900 mb-4">{item.title}</h3>
                <p className="text-grey-500 text-lg leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Social Proof Section (Trust logos preserved) */}
      <section className="py-20 bg-white overflow-hidden border-t border-grey-100">
        <div className="mx-auto max-w-7xl px-6 text-center">
          <h2 className="text-sm font-bold tracking-widest mb-12 text-grey-400 uppercase">Trusted by Industry Leaders</h2>
          <div className="flex flex-wrap justify-center items-center gap-x-16 gap-y-12 opacity-50 grayscale hover:grayscale-0 hover:opacity-100 transition-all duration-700">
            <Image src="/logos/charter.png" alt="Charter" width={160} height={40} className="h-8 w-auto object-contain mix-blend-screen grayscale contrast-200 invert" />
            <Image src="/logos/cisco.png" alt="Cisco" width={120} height={40} className="h-10 w-auto object-contain mix-blend-screen grayscale contrast-200 invert" />
            <Image src="/logos/fortifydata.png" alt="FortifyData" width={180} height={40} className="h-8 w-auto object-contain mix-blend-screen grayscale contrast-200 invert" />
            <Image src="/logos/hoxhunt.png" alt="Hoxhunt" width={160} height={40} className="h-8 w-auto object-contain mix-blend-screen grayscale contrast-200 invert" />
            <Image src="/logos/ciber.png" alt="Ciber" width={140} height={40} className="h-10 w-auto object-contain mix-blend-screen grayscale contrast-200 invert" />
            <Image src="/logos/worldwide_express.png" alt="Worldwide Express" width={160} height={40} className="h-8 w-auto object-contain mix-blend-screen grayscale contrast-200 invert" />
            <div className="text-2xl font-extrabold tracking-tight text-navy-900 border-l-4 border-blue-accent pl-4">Cox</div>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-24 bg-white relative overflow-hidden">
        <div className="mx-auto max-w-5xl px-6 relative z-10">
          <div className="bg-navy-900 rounded-[3rem] p-12 md:p-20 text-center text-white shadow-2xl relative overflow-hidden">
            <div className="absolute top-0 right-0 -mr-16 -mt-16 w-64 h-64 bg-blue-accent/20 rounded-full blur-3xl" />
            <h2 className="text-4xl md:text-5xl font-bold mb-8 relative z-10 underline decoration-blue-accent decoration-4 underline-offset-8">Ready to hire? Let&apos;s talk.</h2>
            <Link
              href="mailto:chris@thekasgroup.com"
              className="inline-flex items-center gap-3 px-12 py-6 bg-blue-accent text-white font-black text-xl rounded-full hover:bg-blue-hover hover:scale-105 transition-all shadow-xl shadow-blue-accent/20 relative z-10"
            >
              Schedule a consultation
              <ArrowRight className="h-6 w-6" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

function Brain(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M12 5a3 3 0 1 0-5.997.125 4 4 0 0 0-2.526 5.77 4 4 0 0 0 .52 8.125A9 9 0 1 0 12 5Z" />
      <path d="M12 13c-1 0-2-1-2-2 0-1 1-2 2-2s2 1 2 2c0 1-1 2-2 2Z" />
      <path d="M12 18h.01" />
      <path d="M12 21h.01" />
    </svg>
  );
}

