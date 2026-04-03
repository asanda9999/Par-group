import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ChevronRight } from "lucide-react";
import Layout from "@/components/Layout";

import heroImage from "@/assets/hero-group.png";

const easePremium: [number, number, number, number] = [0.16, 1, 0.3, 1];

export default function About() {
  return (
    <Layout showHeader={false}>
      <main className="bg-[#f5f5f7] text-[#0b1324]">
        {/* Hero Banner */}
        <section className="relative h-[430px] overflow-hidden sm:h-[500px] lg:h-[560px]">
          <img
            src={heroImage}
            alt="About ParEquity Group"
            className="h-full w-full object-cover"
          />

          <div className="absolute inset-0 bg-black/35" />
          <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(0,0,0,0.15)_0%,rgba(0,0,0,0.38)_100%)]" />

          <Link
            to="/"
            className="absolute left-6 top-8 z-20 inline-flex items-center gap-2 text-sm font-medium text-white/90 transition hover:text-white sm:left-8 lg:left-12"
          >
            <ChevronRight className="h-4 w-4 rotate-180" />
            Back Home
          </Link>

          <div className="absolute inset-0 z-10 flex items-center justify-center px-6 text-center">
            <motion.div
              initial={{ opacity: 0, y: 24, filter: "blur(10px)" }}
              animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              transition={{ duration: 0.9, ease: easePremium }}
            >
          
              <h1 className="text-[2.3rem] font-light tracking-[-0.05em] text-white sm:text-[3.2rem] md:text-[4rem] lg:text-[4.6rem]">
                ABOUT US
              </h1>
            </motion.div>
          </div>
        </section>

        {/* Overlap Card */}
        <section className="relative z-20 -mt-16 pb-24 sm:-mt-20 md:-mt-24 lg:-mt-28">
          <div className="mx-auto max-w-6xl px-6 sm:px-8 lg:px-12">
            <motion.div
              initial={{ opacity: 0, y: 30, filter: "blur(12px)" }}
              whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.95, ease: easePremium }}
              className="rounded-[10px] bg-white px-8 py-12 shadow-[0_30px_80px_rgba(15,23,42,0.10)] sm:px-12 sm:py-14 md:px-16 md:py-16 lg:px-20"
            >
              <div className="mx-auto max-w-4xl">
                <p className="text-[1.35rem] leading-[1.65] tracking-[-0.02em] text-[#1e293b] sm:text-[1.6rem] md:text-[1.9rem]">
                  The ParEquity Group is a proudly South African investment group
                  built on integrity, resilience, and long-term stewardship.
                  Founded by Patrick Parring, the group reflects a legacy of
                  entrepreneurial excellence, disciplined growth, and a deep
                  commitment to doing business the right way.
                </p>

                <div className="mt-10 grid gap-8 md:grid-cols-[0.95fr_1.05fr]">
                  <div />
                  <div className="space-y-6 text-[1rem] leading-8 text-[#475569] sm:text-[1.04rem]">
                    <p>
                      More than an investment platform, ParEquity represents a
                      family-led holding group with interests across private
                      equity, impact and growth capital, and property
                      investment.
                    </p>

                    <p>
                      Our philosophy is grounded in responsible capital
                      allocation, strong governance, and a long-term perspective
                      that prioritises enduring value over short-term gain.
                    </p>

                    <p className="italic text-[#334155]">
                      Traditional values. Innovative ideas.
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </section>


        {/* Founder Story */}
        <section className="relative overflow-hidden bg-[#f4f7fb]">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(0,32,96,0.06),transparent_22%),radial-gradient(circle_at_90%_20%,rgba(120,149,208,0.10),transparent_20%),linear-gradient(180deg,rgba(255,255,255,0.35),transparent_35%)]" />

          <div className="relative mx-auto max-w-7xl px-6 py-24 sm:px-8 md:py-32 lg:px-12">
            <div className="grid grid-cols-1 gap-16 lg:grid-cols-[0.88fr_1.12fr] lg:items-center lg:gap-20">
              <div>
                <motion.p
                  initial="hidden"
                  whileInView="show"
                  viewport={{ once: true, amount: 0.45 }}
                  variants={{
                    hidden: { opacity: 0, y: 28, filter: "blur(10px)" },
                    show: (delay = 0) => ({
                      opacity: 1,
                      y: 0,
                      filter: "blur(0px)",
                      transition: {
                        delay,
                        duration: 0.9,
                        ease: easePremium,
                      },
                    }),
                  }}
                  custom={0}
                  className="text-[11px] font-semibold uppercase tracking-[0.34em] text-[#002060]/66 sm:text-xs"
                >
                  Founder Story
                </motion.p>

                <motion.h2
                  initial="hidden"
                  whileInView="show"
                  viewport={{ once: true, amount: 0.45 }}
                  variants={{
                    hidden: { opacity: 0, y: 28, filter: "blur(10px)" },
                    show: (delay = 0) => ({
                      opacity: 1,
                      y: 0,
                      filter: "blur(0px)",
                      transition: {
                        delay,
                        duration: 0.9,
                        ease: easePremium,
                      },
                    }),
                  }}
                  custom={0.08}
                  className="mt-5 max-w-lg text-[2.5rem] font-light leading-[0.98] tracking-[-0.055em] text-[#0b1324] sm:text-[3rem] md:text-[3.7rem] lg:text-[4.1rem]"
                >
                  Built from experience, resilience, and entrepreneurial vision.
                </motion.h2>

                <motion.div
                  initial="hidden"
                  whileInView="show"
                  viewport={{ once: true, amount: 0.35 }}
                  variants={{
                    hidden: { opacity: 0, y: 28, filter: "blur(10px)" },
                    show: (delay = 0) => ({
                      opacity: 1,
                      y: 0,
                      filter: "blur(0px)",
                      transition: {
                        delay,
                        duration: 0.9,
                        ease: easePremium,
                      },
                    }),
                  }}
                  custom={0.14}
                  className="mt-8 max-w-2xl space-y-6 text-[1rem] leading-8 text-[#475569] sm:text-[1.04rem]"
                >
                  <p>
                    With over four decades of business experience, Patrick
                    Parring has led investments and built businesses across the
                    infrastructure, property development, and technology
                    sectors.
                  </p>

                  <p>
                    His journey began in the engineering and manufacturing
                    sector and ultimately culminated in his acquisition of
                    Nedsteel in 1994 — the same year as South Africa's first
                    democratic elections — a company in which he had worked for
                    more than seventeen years.
                  </p>

                  <p>
                    Since then, Patrick has founded and led a portfolio of
                    companies, steadily expanding ParEquity's reach and impact
                    across South Africa and the broader African continent.
                  </p>
                </motion.div>
              </div>

              <motion.div
                initial={{ opacity: 0, y: 40, filter: "blur(12px)" }}
                whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 1, ease: easePremium }}
                className="relative overflow-hidden rounded-[36px] bg-white shadow-[0_30px_100px_rgba(15,23,42,0.10)]"
              >
                <img
                  src={heroImage}
                  alt="Founder story"
                  className="h-[430px] w-full object-cover sm:h-[520px] lg:h-[620px]"
                />
                <div className="absolute inset-0 bg-[linear-gradient(180deg,transparent_42%,rgba(7,17,32,0.22)_100%)]" />
              </motion.div>
            </div>
          </div>
        </section>

        {/* ParVest + ParEquity */}
        <section className="bg-white">
          <div className="mx-auto max-w-7xl px-6 py-24 sm:px-8 md:py-32 lg:px-12">
            <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
              <motion.div
                initial={{ opacity: 0, y: 28, filter: "blur(8px)" }}
                whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                viewport={{ once: true, amount: 0.25 }}
                transition={{ duration: 0.85, ease: easePremium }}
                className="flex flex-col rounded-[30px] border border-[#e2e8f0] bg-[#f8fafc] p-8 shadow-[0_20px_60px_rgba(15,23,42,0.05)] sm:p-10"
              >
                <p className="text-[11px] font-semibold uppercase tracking-[0.34em] text-[#002060]/60">
                  ParVest
                </p>
                <h3 className="mt-5 text-[2rem] font-light leading-[1] tracking-[-0.05em] text-[#0b1324] sm:text-[2.4rem]">
                  Long-term property stewardship.
                </h3>
                <div className="mt-6 flex-grow space-y-5 text-[1rem] leading-8 text-[#475569]">
                  <p>
                    ParVest (Pty) Ltd historically served as the investment and
                    asset holding vehicle within the group and has since evolved
                    into the property investment arm of the business.
                  </p>
                  <p>
                    It has gone on to acquire what is now regarded as the crown
                    jewel of the group's portfolio. The wider portfolio includes
                    both industrial and commercial properties situated in
                    Century City, Montague Gardens, and Airport Industria.
                  </p>
                </div>

                <Link
                  to="/arden"
                  className="group mt-8 inline-flex items-center gap-2 text-sm font-medium text-[#002060] transition-all duration-300 hover:gap-3"
                >
                  Explore ParVest
                  <ChevronRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                </Link>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 28, filter: "blur(8px)" }}
                whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                viewport={{ once: true, amount: 0.25 }}
                transition={{ duration: 0.85, delay: 0.08, ease: easePremium }}
                className="flex flex-col rounded-[30px] border border-[#dbe6f5] bg-[linear-gradient(180deg,#ffffff_0%,#f4f8fd_100%)] p-8 shadow-[0_20px_60px_rgba(15,23,42,0.05)] sm:p-10"
              >
                <p className="text-[11px] font-semibold uppercase tracking-[0.34em] text-[#002060]/60">
                  ParEquity
                </p>
                <h3 className="mt-5 text-[2rem] font-light leading-[1] tracking-[-0.05em] text-[#0b1324] sm:text-[2.4rem]">
                  Leadership, governance, and strategic direction.
                </h3>
                <div className="mt-6 flex-grow space-y-5 text-[1rem] leading-8 text-[#475569]">
                  <p>
                    ParEquity (Pty) Ltd is the investment group's core platform,
                    with interests spanning transport infrastructure,
                    technology, and toll roads.
                  </p>
                  <p>
                    It provides leadership, governance, and executive direction
                    across subsidiary entities, ensuring consistent alignment
                    with the founder's legacy and the group's broader mission of
                    social impact and commercial success.
                  </p>
                  <p>
                    With an entrepreneurial spirit and an agile structure,
                    ParEquity continues to drive innovation, expansion, and
                    inclusive growth across South Africa and beyond.
                  </p>
                </div>

                <Link
                  to="/parequity"
                  className="group mt-8 inline-flex items-center gap-2 text-sm font-medium text-[#002060] transition-all duration-300 hover:gap-3"
                >
                  Explore ParEquity
                  <ChevronRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                </Link>
              </motion.div>
            </div>
          </div>
        </section>
      </main>
    </Layout>
  );
}