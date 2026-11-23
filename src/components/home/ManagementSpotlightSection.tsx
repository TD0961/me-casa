import React from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight, ShieldCheck, Wrench, Users, FileText, CheckCircle2 } from "lucide-react";

export function ManagementSpotlightSection() {
  const highlights = [
    {
      title: "Tenant Coordination & Vetting",
      desc: "Rigorous vetting of qualified occupants and responsive relationship management.",
      icon: Users,
    },
    {
      title: "Rent Administration",
      desc: "Automated collection, escrow disbursement, and prompt financial reconciliations.",
      icon: FileText,
    },
    {
      title: "Artisan Maintenance Coordination",
      desc: "Emergency dispatch and routine care executed by trusted, vetted master craftsmen.",
      icon: Wrench,
    },
    {
      title: "Quarterly Condition Inspections",
      desc: "Detailed photographic condition audits to preserve architectural integrity.",
      icon: ShieldCheck,
    },
  ];

  return (
    <section className="py-24 bg-cream border-b border-sand/40">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Management Proposition */}
          <div className="lg:col-span-6 space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-forest/10 text-forest text-xs font-semibold uppercase tracking-widest">
              <ShieldCheck className="w-3.5 h-3.5 text-clay" />
              <span>Post-Acquisition Stewardship</span>
            </div>

            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-forest font-light leading-tight">
              We&apos;re here <span className="italic font-normal text-clay-dark">beyond the keys.</span>
            </h2>

            <p className="text-charcoal/80 text-base md:text-lg font-light leading-relaxed">
              Finding your property is an important first step. Taking care of it matters just as
              much. Our dedicated property management practice safeguards your investment and
              removes the friction of ongoing ownership.
            </p>

            {/* Feature List */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              {highlights.map((item, idx) => {
                const Icon = item.icon;
                return (
                  <div key={idx} className="p-4 rounded-2xl bg-white border border-sand/60 space-y-2">
                    <div className="w-8 h-8 rounded-lg bg-sand-light flex items-center justify-center text-forest">
                      <Icon className="w-4 h-4 text-clay" />
                    </div>
                    <h4 className="font-serif text-base text-forest font-medium">{item.title}</h4>
                    <p className="text-xs text-charcoal/75 leading-relaxed font-light">{item.desc}</p>
                  </div>
                );
              })}
            </div>

            <div className="pt-4">
              <Link
                href="/property-management"
                className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full bg-forest hover:bg-forest-light text-cream text-xs font-semibold uppercase tracking-wider transition-all shadow-md group"
              >
                <span>Discover Property Management</span>
                <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </Link>
            </div>
          </div>

          {/* Right Column: Architectural Maintenance Photography */}
          <div className="lg:col-span-6 relative">
            <div className="relative aspect-[4/3] sm:aspect-[16/11] rounded-3xl overflow-hidden shadow-2xl border border-sand">
              <Image
                src="https://images.unsplash.com/photo-1600566753376-12c8ab7fb75b?q=80&w=1200&auto=format&fit=crop"
                alt="Immaculate modern kitchen reflecting care and maintenance"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
            </div>

            {/* Management Stats / Reassurance Badge */}
            <div className="absolute -bottom-6 -left-4 sm:left-6 bg-white p-5 rounded-2xl border border-sand/70 shadow-xl max-w-xs space-y-2">
              <div className="flex items-center gap-2 text-forest">
                <CheckCircle2 className="w-5 h-5 text-clay" />
                <span className="font-serif text-base font-semibold">Peace of Mind Guarantee</span>
              </div>
              <p className="text-[11px] text-charcoal/70 leading-relaxed font-light">
                Routine oversight, transparent owner reporting, and fast local response times.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

