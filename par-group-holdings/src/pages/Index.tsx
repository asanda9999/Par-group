import { useRef, useState } from "react";
import {
  motion,
  AnimatePresence,
  useScroll,
  useTransform,
  useSpring,
} from "framer-motion";
import { Link } from "react-router-dom";
import {
  ArrowRight,
  ChevronRight,
  Landmark,
  Building2,
  LineChart,
  Menu,
  X,
} from "lucide-react";
import Layout from "@/components/Layout";

import logo from "@/assets/index.png";
import heroImage from "@/assets/hero-index.png";
import overviewImage from "@/assets/hero-group.png";
import structureImage from "@/assets/hero-group.png";

const easePremium: [number, number, number, number] = [0.16, 1, 0.3, 1];

const navLinkClass =
  "group relative text-[11px] font-medium uppercase tracking-[0.24em] text-white/74 transition-all duration-300 hover:text-white";

const fadeUp = {
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
};

const philosophyCards = [
  {
    icon: Landmark,
    title: "Long-term stewardship",
    text: "We take a patient approach to capital, focusing on durability, governance, and value creation that compounds over time.",
  },
  {
    icon: LineChart,
    title: "Disciplined allocation",
    text: "Our decisions are guided by conviction, careful underwriting, and a structured long-horizon view of risk and opportunity.",
  },
  {
    icon: Building2,
    title: "Responsible ownership",
    text: "We back businesses and assets where thoughtful oversight, alignment, and strategic support can unlock sustainable growth.",
  },
];

const mandates = [
  {
    name: "ParEquity",
    description:
      "Private equity investments in established businesses with strong fundamentals and long-term value creation potential.",
    href: "/parequity",
  },
  {
    name: "Anthuri",
    description:
      "Impact and growth capital focused on scalable businesses that combine commercial strength with developmental value.",
    href: "/anthuri-fund",
  },
  {
    name: "ParVest",
    description:
      "Long-term investment in responsibly stewarded income-generating real assets and property opportunities.",
    href: "/parvest",
  },
];

export default function Index() {
  const [mandatesOpen, setMandatesOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const heroRef = useRef<HTMLDivElement | null>(null);
  const mandatesSectionRef = useRef<HTMLDivElement | null>(null);

  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });

  const heroContentY = useTransform(scrollYProgress, [0, 1], [0, -36]);
  const heroContentOpacity = useTransform(scrollYProgress, [0, 0.65], [1, 0.92]);
  const heroImageScale = useTransform(scrollYProgress, [0, 1], [1, 1.04]);
  const heroImageY = useTransform(scrollYProgress, [0, 1], [0, 18]);
  const heroGlassY = useTransform(scrollYProgress, [0, 1], [0, -10]);

  const { scrollYProgress: mandatesProgress } = useScroll({
    target: mandatesSectionRef,
    offset: ["start start", "end end"],
  });

  const smoothMandatesProgress = useSpring(mandatesProgress, {
    stiffness: 90,
    damping: 24,
    mass: 0.45,
  });

  const mandatesHeadingOpacity = useTransform(
    smoothMandatesProgress,
    [0, 0.12],
    [1, 0.78]
  );

  const mandatesHeadingY = useTransform(
    smoothMandatesProgress,
    [0, 0.18],
    [0, -14]
  );

  const introScale = useTransform(smoothMandatesProgress, [0, 0.22], [1, 1.025]);
  const introY = useTransform(smoothMandatesProgress, [0, 0.22], [0, -16]);
  const introOpacity = useTransform(
    smoothMandatesProgress,
    [0, 0.22, 0.34],
    [1, 1, 0]
  );
  const introRadius = useTransform(smoothMandatesProgress, [0, 0.22], [30, 24]);

  const cardsContainerY = useTransform(
    smoothMandatesProgress,
    [0.18, 0.4],
    [56, 0]
  );

  const cardsContainerOpacity = useTransform(
    smoothMandatesProgress,
    [0.18, 0.32],
    [0, 1]
  );

  const card1Y = useTransform(smoothMandatesProgress, [0.22, 0.42], [38, 0]);
  const card2Y = useTransform(smoothMandatesProgress, [0.26, 0.46], [38, 0]);
  const card3Y = useTransform(smoothMandatesProgress, [0.3, 0.5], [38, 0]);

  const card1Opacity = useTransform(
    smoothMandatesProgress,
    [0.22, 0.36],
    [0, 1]
  );
  const card2Opacity = useTransform(
    smoothMandatesProgress,
    [0.26, 0.4],
    [0, 1]
  );
  const card3Opacity = useTransform(
    smoothMandatesProgress,
    [0.3, 0.44],
    [0, 1]
  );

  return (
    <Layout showHeader={false}>
      <main className="bg-white text-[#0b1324]">
        <section
          ref={heroRef}
          className="relative min-h-screen overflow-hidden bg-[#071120] text-white"
        >
          <motion.div
            style={{ scale: heroImageScale, y: heroImageY }}
            className="absolute inset-0"
          >
            <img
              src={heroImage}
              alt="ParEquity Group hero"
              className="h-full w-full object-cover"
            />
          </motion.div>

          <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(4,11,24,0.94)_0%,rgba(4,11,24,0.86)_28%,rgba(4,11,24,0.52)_58%,rgba(4,11,24,0.80)_100%)]" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_12%_18%,rgba(94,129,201,0.18),transparent_22%),radial-gradient(circle_at_82%_16%,rgba(255,255,255,0.06),transparent_16%),radial-gradient(circle_at_bottom_left,rgba(0,32,96,0.16),transparent_32%)]" />
          <div className="absolute inset-x-0 top-0 h-40 bg-[linear-gradient(180deg,rgba(4,11,24,0.56)_0%,rgba(4,11,24,0)_100%)]" />
          <div className="absolute inset-x-0 bottom-0 h-32 bg-[linear-gradient(180deg,rgba(4,11,24,0)_0%,rgba(4,11,24,0.32)_100%)]" />

          <div className="relative z-50">
            <div className="mx-auto max-w-7xl">
              <div className="flex items-center justify-start py-6 md:py-7 md:-ml-4 lg:-ml-6">
                <Link
                  to="/"
                  className="flex items-center transition-opacity duration-300 hover:opacity-90"
                >
                  <img
                    src={logo}
                    alt="ParEquity Group"
                    className="h-32 w-auto md:h-40"
                  />
                </Link>

                <nav className="hidden items-center gap-10 md:flex lg:gap-12 ml-auto">
                  <Link to="/" className={navLinkClass}>
                    <span className="relative">
                      Home
                      <span className="absolute -bottom-2 left-0 h-px w-0 bg-white transition-all duration-300 group-hover:w-full" />
                    </span>
                  </Link>

                  <Link to="/group-details" className={navLinkClass}>
                    <span className="relative">
                      About
                      <span className="absolute -bottom-2 left-0 h-px w-0 bg-white transition-all duration-300 group-hover:w-full" />
                    </span>
                  </Link>

                  <div
                    className="relative"
                    onMouseEnter={() => setMandatesOpen(true)}
                    onMouseLeave={() => setMandatesOpen(false)}
                  >
                    <button
                      type="button"
                      className={`${navLinkClass} inline-flex items-center gap-2`}
                      aria-expanded={mandatesOpen}
                    >
                      <span className="relative">
                        Mandates
                        <span className="absolute -bottom-2 left-0 h-px w-0 bg-white transition-all duration-300 group-hover:w-full" />
                      </span>

                      <motion.span
                        animate={{ rotate: mandatesOpen ? 180 : 0 }}
                        transition={{ duration: 0.28, ease: easePremium }}
                        className="text-[9px] text-white/54"
                      >
                        ▾
                      </motion.span>
                    </button>

                    <AnimatePresence>
                      {mandatesOpen && (
                        <motion.div
                          initial={{
                            opacity: 0,
                            y: 10,
                            scale: 0.985,
                            filter: "blur(8px)",
                          }}
                          animate={{
                            opacity: 1,
                            y: 0,
                            scale: 1,
                            filter: "blur(0px)",
                          }}
                          exit={{
                            opacity: 0,
                            y: 8,
                            scale: 0.985,
                            filter: "blur(6px)",
                          }}
                          transition={{ duration: 0.28, ease: easePremium }}
                          className="absolute left-1/2 top-full z-50 mt-4 w-[340px] -translate-x-1/2"
                        >
                          <div className="overflow-hidden rounded-[24px] border border-white/10 bg-white/[0.96] p-3 text-[#0b1324] shadow-[0_24px_80px_rgba(0,0,0,0.22)] backdrop-blur-2xl">
                            <Link
                              to="/parequity"
                              className="block rounded-[18px] px-4 py-3 transition-all duration-300 hover:bg-[#f5f8fc]"
                            >
                              <div className="text-[11px] font-semibold uppercase tracking-[0.24em] text-[#0f172a]">
                                ParEquity
                              </div>
                              <div className="mt-1.5 text-sm leading-6 text-[#64748b]">
                                Private equity investment platform.
                              </div>
                            </Link>

                            <Link
                              to="/anthuri-fund"
                              className="block rounded-[18px] px-4 py-3 transition-all duration-300 hover:bg-[#f5f8fc]"
                            >
                              <div className="text-[11px] font-semibold uppercase tracking-[0.24em] text-[#0f172a]">
                                Anthuri
                              </div>
                              <div className="mt-1.5 text-sm leading-6 text-[#64748b]">
                                Impact and growth capital platform.
                              </div>
                            </Link>

                            <Link
                              to="/parvest"
                              className="block rounded-[18px] px-4 py-3 transition-all duration-300 hover:bg-[#f5f8fc]"
                            >
                              <div className="text-[11px] font-semibold uppercase tracking-[0.24em] text-[#0f172a]">
                                ParVest
                              </div>
                              <div className="mt-1.5 text-sm leading-6 text-[#64748b]">
                                Real assets and property stewardship.
                              </div>
                            </Link>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>

                  <Link to="/contact" className={navLinkClass}>
                    <span className="relative">
                      Contact
                      <span className="absolute -bottom-2 left-0 h-px w-0 bg-white transition-all duration-300 group-hover:w-full" />
                    </span>
                  </Link>
                </nav>

                <button
                  type="button"
                  onClick={() => setMobileMenuOpen(true)}
                  className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/14 bg-white/8 text-white backdrop-blur-md transition-all duration-300 hover:bg-white/12 md:hidden"
                  aria-label="Open menu"
                >
                  <Menu className="h-5 w-5" />
                </button>
              </div>
            </div>
          </div>

          <AnimatePresence>
            {mobileMenuOpen && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="fixed inset-0 z-[80] bg-[#071120]/96 backdrop-blur-xl md:hidden"
              >
                <div className="flex items-center justify-between px-6 py-6">
                  <img src={logo} alt="ParEquity Group" className="h-32 w-auto" />
                  <button
                    type="button"
                    onClick={() => setMobileMenuOpen(false)}
                    className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/14 bg-white/8 text-white"
                    aria-label="Close menu"
                  >
                    <X className="h-5 w-5" />
                  </button>
                </div>

                <motion.div
                  initial={{ opacity: 0, y: 20, filter: "blur(8px)" }}
                  animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                  exit={{ opacity: 0, y: 10, filter: "blur(6px)" }}
                  transition={{ duration: 0.35, ease: easePremium }}
                  className="px-6 pt-10"
                >
                  <div className="space-y-5">
                    <Link
                      to="/"
                      onClick={() => setMobileMenuOpen(false)}
                      className="block text-[0.95rem] font-medium uppercase tracking-[0.22em] text-white/84"
                    >
                      Home
                    </Link>
                    <Link
                      to="/group-details"
                      onClick={() => setMobileMenuOpen(false)}
                      className="block text-[0.95rem] font-medium uppercase tracking-[0.22em] text-white/84"
                    >
                      About
                    </Link>
                    <Link
                      to="/parequity"
                      onClick={() => setMobileMenuOpen(false)}
                      className="block text-[0.95rem] font-medium uppercase tracking-[0.22em] text-white/84"
                    >
                      ParEquity
                    </Link>
                    <Link
                      to="/anthuri-fund"
                      onClick={() => setMobileMenuOpen(false)}
                      className="block text-[0.95rem] font-medium uppercase tracking-[0.22em] text-white/84"
                    >
                      Anthuri
                    </Link>
                    <Link
                      to="/parvest"
                      onClick={() => setMobileMenuOpen(false)}
                      className="block text-[0.95rem] font-medium uppercase tracking-[0.22em] text-white/84"
                    >
                      ParVest
                    </Link>
                    <Link
                      to="/contact"
                      onClick={() => setMobileMenuOpen(false)}
                      className="block text-[0.95rem] font-medium uppercase tracking-[0.22em] text-white/84"
                    >
                      Contact
                    </Link>
                  </div>
                </motion.div>
              </motion.div>
            )}
          </AnimatePresence>

          <div className="relative z-10 mx-auto flex min-h-[calc(100vh-88px)] max-w-7xl items-center px-6 pb-16 pt-8 sm:px-8 md:pb-20 md:pt-10 lg:px-12">
            <motion.div
              style={{ y: heroContentY, opacity: heroContentOpacity }}
              className="grid w-full grid-cols-1 gap-12 lg:grid-cols-[1fr_0.68fr] lg:items-end lg:gap-16"
            >
              <div className="max-w-5xl">
                <motion.p
                  initial="hidden"
                  animate="show"
                  variants={fadeUp}
                  custom={0}
                  className="mb-6 text-[11px] font-light tracking-[0.32em] text-white/58 sm:text-xs"
                >
                  ParEquity Group
                </motion.p>

                <motion.h1
                  initial="hidden"
                  animate="show"
                  variants={fadeUp}
                  custom={0.08}
                  className="max-w-4xl text-[2.7rem] font-light leading-[1.02] tracking-[-0.055em] text-white sm:text-[3.4rem] md:text-[4.5rem] lg:text-[5.15rem] xl:text-[5.65rem]"
                >
                  A family investment group built for enduring value.
                </motion.h1>

                <motion.p
                  initial="hidden"
                  animate="show"
                  variants={fadeUp}
                  custom={0.16}
                  className="mt-7 max-w-2xl text-[1rem] leading-8 text-white/74 sm:text-[1.05rem] md:text-[1.08rem]"
                >
                  ParEquity Group is a privately held investment platform focused
                  on private equity, impact growth capital, and real assets —
                  guided by long-horizon thinking, responsible ownership, and
                  disciplined capital allocation.
                </motion.p>

                <motion.div
                  initial="hidden"
                  animate="show"
                  variants={fadeUp}
                  custom={0.24}
                  className="mt-10 flex flex-col gap-4 sm:flex-row"
                >
                  <a
                    href="#overview"
                    className="inline-flex items-center justify-center rounded-full bg-white px-7 py-3.5 text-sm font-medium text-[#071120] transition-all duration-300 hover:-translate-y-0.5 hover:bg-white/92"
                  >
                    Explore the Group
                  </a>

                  <a
                    href="#mandates"
                    className="inline-flex items-center justify-center rounded-full border border-white/16 bg-white/8 px-7 py-3.5 text-sm font-medium text-white backdrop-blur-md transition-all duration-300 hover:-translate-y-0.5 hover:border-white/28 hover:bg-white/12"
                  >
                    View Our Mandates
                  </a>
                </motion.div>
              </div>

              <motion.div
                style={{ y: heroGlassY }}
                initial="hidden"
                animate="show"
                variants={fadeUp}
                custom={0.3}
                className="hidden lg:block"
              >
                <div className="overflow-hidden rounded-[30px] border border-white/10 bg-white/[0.08] p-7 shadow-[0_30px_100px_rgba(0,0,0,0.26)] backdrop-blur-2xl">
                  <p className="text-[10px] font-semibold uppercase tracking-[0.32em] text-white/46">
                    Group Snapshot
                  </p>

                  <div className="mt-8 space-y-8">
                    <div>
                      <p className="text-[2.25rem] font-light tracking-[-0.05em] text-white">
                        Long term
                      </p>
                      <p className="mt-2 max-w-[16rem] text-sm leading-6 text-white/64">
                        Guided by patience, alignment, and a multi-generational
                        perspective.
                      </p>
                    </div>

                    <div className="h-px bg-white/10" />

                    <div>
                      <p className="text-[2.25rem] font-light tracking-[-0.05em] text-white">
                        3 mandates
                      </p>
                      <p className="mt-2 max-w-[16rem] text-sm leading-6 text-white/64">
                        Private equity, impact growth capital, and real assets
                        under one disciplined philosophy.
                      </p>
                    </div>

                    <div className="h-px bg-white/10" />

                    <Link
                      to="/group-details"
                      className="group inline-flex items-center gap-2 text-sm font-medium text-white/86 transition-all duration-300 hover:text-white"
                    >
                      Discover the Group
                      <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                    </Link>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </section>

       
<section className="relative overflow-hidden bg-[#f4f7fb]">
  <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(0,32,96,0.06),transparent_22%),radial-gradient(circle_at_90%_20%,rgba(120,149,208,0.10),transparent_20%),linear-gradient(180deg,rgba(255,255,255,0.35),transparent_35%)]" />

  <div className="relative mx-auto max-w-7xl px-6 py-24 sm:px-8 md:py-32 lg:px-12">
    <div className="grid grid-cols-1 gap-16 lg:grid-cols-[1.18fr_0.82fr] lg:gap-20">
      <div className="lg:pt-16">
        <motion.p
          initial={{ opacity: 0, y: 20, filter: "blur(8px)" }}
          whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          viewport={{ once: true, amount: 0.45 }}
          transition={{ duration: 0.8, ease: easePremium }}
          className="text-[11px] font-semibold uppercase tracking-[0.34em] text-[#002060]/64 sm:text-xs"
        >
          About the Group
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 24, filter: "blur(8px)" }}
          whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          viewport={{ once: true, amount: 0.45 }}
          transition={{ duration: 0.9, delay: 0.06, ease: easePremium }}
          className="mt-5 max-w-4xl text-[2.9rem] font-light leading-[0.94] tracking-[-0.07em] text-[#0b1324] sm:text-[3.7rem] md:text-[4.7rem] lg:text-[5.4rem]"
        >
          Built on legacy,
          <br className="hidden sm:block" />
          guided by long-term vision.
        </motion.h2>

        <motion.div
          initial={{ opacity: 0, y: 24, filter: "blur(8px)" }}
          whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.95, delay: 0.12, ease: easePremium }}
          className="max-w-[34rem]"
        >
          <div className="mb-8 h-px w-16 bg-[#002060]/14" />

          <p className="text-[1.05rem] leading-8 text-[#4f5d73] sm:text-[1.12rem]">
            ParEquity Group is a proudly South African investment platform founded
            on resilience, stewardship, and entrepreneurial excellence.
          </p>

          <p className="mt-6 text-[1rem] leading-8 text-[#66748a] sm:text-[1.04rem]">
            Through its focused mandates, the group invests in businesses and
            assets that reflect disciplined growth, responsible ownership, and
            enduring value creation.
          </p>

          <div className="mt-10">
            <Link
              to="/group-details"
              className="group inline-flex items-center gap-2 text-sm font-medium text-[#002060] transition-all duration-300 hover:gap-3"
            >
              Read More
              <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
          </div>
        </motion.div>
      </div>

      <div>
        <motion.div
          initial={{ opacity: 0, y: 24, filter: "blur(8px)" }}
          whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 1, delay: 0.18, ease: easePremium }}
          className="overflow-hidden rounded-[34px] border border-[#0b1324]/8 bg-white/80 p-6 shadow-[0_20px_60px_rgba(15,23,42,0.06)] backdrop-blur-xl sm:p-7"
        >
          <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-[#002060]/55">
            Mission & Values
          </p>

          <p className="mt-4 max-w-[24rem] text-[1.02rem] font-light leading-7 text-[#0b1324]">
            To invest in people, businesses, and opportunities that drive
            sustainable growth and social impact in South Africa and across the
            African continent.
          </p>

          <div className="mt-6 space-y-3 border-t border-[#0b1324]/8 pt-5">
            {[
              "Integrity — We lead with honesty and uphold the highest standards of governance.",
              "Empowerment — We create opportunities for others to grow, lead, and succeed.",
              "Excellence — We pursue excellence in every investment, project, and partnership.",
              "Legacy — We build for generations, not just for profits.",
              "Innovation — We embrace change and future-focused thinking.",
            ].map((item) => {
              const [title, text] = item.split(" — ");
              return (
                <div key={title} className="space-y-1">
                  <span className="text-[0.84rem] font-medium text-[#0b1324]">
                    {title}
                  </span>
                  <p className="text-[0.9rem] leading-6 text-[#66748a]">
                    {text}
                  </p>
                </div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </div>
  </div>
</section>
        <section id="philosophy" className="relative overflow-hidden bg-[#f4f7fb]">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(0,32,96,0.06),transparent_22%),radial-gradient(circle_at_90%_20%,rgba(120,149,208,0.10),transparent_20%),linear-gradient(180deg,rgba(255,255,255,0.35),transparent_35%)]" />

          <div className="relative mx-auto max-w-7xl px-6 py-24 sm:px-8 md:py-32 lg:px-12">
            <div className="grid grid-cols-1 gap-16 lg:grid-cols-[0.82fr_1.18fr] lg:gap-20">
              <div>
                <motion.p
                  initial="hidden"
                  whileInView="show"
                  viewport={{ once: true, amount: 0.5 }}
                  variants={fadeUp}
                  custom={0}
                  className="text-[11px] font-semibold uppercase tracking-[0.34em] text-[#002060]/66 sm:text-xs"
                >
                  Our Philosophy
                </motion.p>

                <motion.h2
                  initial="hidden"
                  whileInView="show"
                  viewport={{ once: true, amount: 0.45 }}
                  variants={fadeUp}
                  custom={0.08}
                  className="mt-5 max-w-md text-[2.5rem] font-light leading-[0.98] tracking-[-0.055em] text-[#0b1324] sm:text-[3rem] md:text-[3.7rem] lg:text-[4.2rem]"
                >
                  Built for generations, not quarters.
                </motion.h2>

                <motion.p
                  initial="hidden"
                  whileInView="show"
                  viewport={{ once: true, amount: 0.45 }}
                  variants={fadeUp}
                  custom={0.14}
                  className="mt-8 max-w-md text-[1rem] leading-8 text-[#475569] sm:text-[1.04rem]"
                >
                  Our philosophy reflects a multi-generational approach to
                  investment. We focus on resilience over hype, substance over
                  noise, and stewardship over short-termism.
                </motion.p>
              </div>

              <div>
                <div className="overflow-hidden rounded-[34px] border border-white/70 bg-white/60 shadow-[0_30px_100px_rgba(15,23,42,0.08)] backdrop-blur-2xl">
                  {philosophyCards.map((item, index) => {
                    const Icon = item.icon;

                    return (
                      <motion.div
                        key={item.title}
                        initial="hidden"
                        whileInView="show"
                        viewport={{ once: true, amount: 0.35 }}
                        variants={fadeUp}
                        custom={0.16 + index * 0.08}
                        className="group relative px-7 py-8 sm:px-10 sm:py-10"
                      >
                        {index !== 0 && (
                          <div className="absolute left-7 right-7 top-0 h-px bg-gradient-to-r from-transparent via-[#002060]/12 to-transparent sm:left-10 sm:right-10" />
                        )}

                        <div className="grid grid-cols-1 gap-6 md:grid-cols-[120px_1fr] md:items-start">
                          <div className="flex items-center gap-4 md:block">
                            <span className="text-[10px] font-semibold uppercase tracking-[0.32em] text-[#002060]/52">
                              0{index + 1}
                            </span>
                            <div className="hidden h-px flex-1 bg-[#002060]/10 md:hidden" />
                          </div>

                          <div>
                            <h3 className="text-[1.45rem] font-medium leading-tight tracking-[-0.04em] text-[#0b1324] sm:text-[1.8rem]">
                              {item.title}
                            </h3>

                            <p className="mt-4 max-w-2xl text-[0.98rem] leading-8 text-[#475569]">
                              {item.text}
                            </p>
                          </div>
                        </div>
                      </motion.div>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </section>

        <section
          id="mandates"
          ref={mandatesSectionRef}
          className="relative h-[160vh] bg-[#071120] text-white md:h-[180vh]"
        >
          <div className="sticky top-0 h-screen overflow-hidden">
            <div className="absolute inset-0 bg-[linear-gradient(180deg,#071120_0%,#08142a_100%)]" />
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_10%,rgba(109,143,216,0.14),transparent_20%),radial-gradient(circle_at_80%_24%,rgba(255,255,255,0.06),transparent_18%),linear-gradient(180deg,rgba(255,255,255,0.02),transparent_30%)]" />

            <div className="relative mx-auto flex h-full max-w-7xl items-center px-6 sm:px-8 lg:px-12">
              <div className="w-full">
                <motion.div
                  style={{
                    opacity: mandatesHeadingOpacity,
                    y: mandatesHeadingY,
                  }}
                  className="mb-8 md:mb-10"
                >
                  <p className="text-[11px] font-light tracking-[0.34em] text-white/56 sm:text-xs">
                    Our Mandates
                  </p>
                </motion.div>

                <div className="relative h-[360px] sm:h-[390px] md:h-[410px] lg:h-[430px]">
                  <motion.div
                    style={{
                      scale: introScale,
                      y: introY,
                      opacity: introOpacity,
                      borderRadius: introRadius,
                    }}
                    className="absolute inset-0 overflow-hidden border border-white/10 bg-white/[0.06] shadow-[0_30px_100px_rgba(0,0,0,0.20)] backdrop-blur-xl"
                  >
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(120,149,208,0.16),transparent_28%),linear-gradient(180deg,rgba(255,255,255,0.08)_0%,rgba(255,255,255,0.02)_100%)]" />

                    <div className="relative flex h-full flex-col justify-between p-6 sm:p-8 md:p-10">
                      <div>
                        <p className="text-[11px] font-light tracking-[0.32em] text-white/48">
                          ParEquity Group
                        </p>

                        <h3 className="mt-5 max-w-4xl text-[2rem] font-light leading-[0.98] tracking-[-0.055em] text-white sm:text-[2.35rem] md:text-[2.8rem] lg:text-[3rem]">
                          A long-term investment platform structured across
                          three distinct mandates.
                        </h3>

                        <p className="mt-5 max-w-2xl text-[0.96rem] leading-7 text-white/68 sm:text-[1rem] sm:leading-8">
                          Scroll to move through the group structure and
                          discover the focused platforms through which
                          ParEquity Group deploys capital.
                        </p>
                      </div>

                      <div className="mt-8 grid grid-cols-3 gap-3 border-t border-white/10 pt-6 sm:gap-4">
                        <div>
                          <p className="text-[10px] font-light tracking-[0.24em] text-white/42">
                            Structure
                          </p>
                          <p className="mt-2 text-lg font-light tracking-[-0.04em] text-white sm:text-xl md:text-2xl">
                            1 Group
                          </p>
                        </div>

                        <div>
                          <p className="text-[10px] font-light tracking-[0.24em] text-white/42">
                            Platforms
                          </p>
                          <p className="mt-2 text-lg font-light tracking-[-0.04em] text-white sm:text-xl md:text-2xl">
                            3 Mandates
                          </p>
                        </div>

                        <div>
                          <p className="text-[10px] font-light tracking-[0.24em] text-white/42">
                            Focus
                          </p>
                          <p className="mt-2 text-lg font-light tracking-[-0.04em] text-white sm:text-xl md:text-2xl">
                            Long Term
                          </p>
                        </div>
                      </div>
                    </div>
                  </motion.div>

                  <motion.div
                    style={{
                      y: cardsContainerY,
                      opacity: cardsContainerOpacity,
                    }}
                    className="absolute inset-0"
                  >
                    <div className="grid h-full grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
                      <motion.div
                        style={{ y: card1Y, opacity: card1Opacity }}
                        className="group relative overflow-hidden rounded-[26px] border border-white/10 bg-white/[0.06] p-6 backdrop-blur-xl transition-all duration-500 hover:-translate-y-1 hover:border-white/18 hover:bg-white/[0.08] hover:shadow-[0_24px_70px_rgba(0,0,0,0.20)] sm:p-7"
                      >
                        <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(255,255,255,0.08)_0%,rgba(255,255,255,0.02)_100%)]" />
                        <div className="relative flex h-full flex-col">
                          <p className="text-[10px] font-semibold uppercase tracking-[0.28em] text-white/54">
                            Platform
                          </p>
                          <h3 className="mt-4 text-[1.55rem] font-medium leading-none tracking-[-0.05em] text-white md:text-[1.75rem]">
                            ParEquity
                          </h3>
                          <p className="mt-5 flex-1 text-[0.95rem] leading-7 text-white/70">
                            Private equity investments in established businesses
                            with strong fundamentals and long-term value
                            creation potential.
                          </p>
                          <Link
                            to="/parequity"
                            className="mt-8 inline-flex items-center gap-2 text-sm font-medium text-white transition-transform duration-300 group-hover:translate-x-1"
                          >
                            Explore platform <ArrowRight className="h-4 w-4" />
                          </Link>
                        </div>
                      </motion.div>

                      <motion.div
                        style={{ y: card2Y, opacity: card2Opacity }}
                        className="group relative overflow-hidden rounded-[26px] border border-white/10 bg-white/[0.06] p-6 backdrop-blur-xl transition-all duration-500 hover:-translate-y-1 hover:border-white/18 hover:bg-white/[0.08] hover:shadow-[0_24px_70px_rgba(0,0,0,0.20)] sm:p-7"
                      >
                        <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(255,255,255,0.08)_0%,rgba(255,255,255,0.02)_100%)]" />
                        <div className="relative flex h-full flex-col">
                          <p className="text-[10px] font-semibold uppercase tracking-[0.28em] text-white/54">
                            Platform
                          </p>
                          <h3 className="mt-4 text-[1.55rem] font-medium leading-none tracking-[-0.05em] text-white md:text-[1.75rem]">
                            Anthuri
                          </h3>
                          <p className="mt-5 flex-1 text-[0.95rem] leading-7 text-white/70">
                            Impact and growth capital focused on scalable
                            businesses that combine commercial strength with
                            developmental value.
                          </p>
                          <Link
                            to="/anthuri-fund"
                            className="mt-8 inline-flex items-center gap-2 text-sm font-medium text-white transition-transform duration-300 group-hover:translate-x-1"
                          >
                            Explore platform <ArrowRight className="h-4 w-4" />
                          </Link>
                        </div>
                      </motion.div>

                      <motion.div
                        style={{ y: card3Y, opacity: card3Opacity }}
                        className="group relative overflow-hidden rounded-[26px] border border-white/10 bg-white/[0.06] p-6 backdrop-blur-xl transition-all duration-500 hover:-translate-y-1 hover:border-white/18 hover:bg-white/[0.08] hover:shadow-[0_24px_70px_rgba(0,0,0,0.20)] sm:p-7 md:col-span-2 lg:col-span-1"
                      >
                        <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(255,255,255,0.08)_0%,rgba(255,255,255,0.02)_100%)]" />
                        <div className="relative flex h-full flex-col">
                          <p className="text-[10px] font-semibold uppercase tracking-[0.28em] text-white/54">
                            Platform
                          </p>
                          <h3 className="mt-4 text-[1.55rem] font-medium leading-none tracking-[-0.05em] text-white md:text-[1.75rem]">
                            ParVest
                          </h3>
                          <p className="mt-5 flex-1 text-[0.95rem] leading-7 text-white/70">
                            Long-term investment in responsibly stewarded
                            income-generating real assets and property
                            opportunities.
                          </p>
                          <Link
                            to="/parvest"
                            className="mt-8 inline-flex items-center gap-2 text-sm font-medium text-white transition-transform duration-300 group-hover:translate-x-1"
                          >
                            Explore platform <ArrowRight className="h-4 w-4" />
                          </Link>
                        </div>
                      </motion.div>
                    </div>
                  </motion.div>
                </div>
              </div>
            </div>
          </div>
        </section>

        
      </main>
    </Layout>
  );
}