import { motion } from "framer-motion";
import {
  ArrowRight,
  ShieldCheck,
  Zap,
  CarFront,
  Wifi,
  Building2,
  Coffee,
  Briefcase,
  MapPin,
  FileText,
} from "lucide-react";

const easePremium: [number, number, number, number] = [0.16, 1, 0.3, 1];

const features = [
  {
    title: "Location Advantage",
    description:
      "Positioned on Racecourse Road in Milnerton, with easy access to Montague Gardens, Century City, the N1, N7, and major public transport routes.",
    icon: MapPin,
  },
  {
    title: "Security",
    description:
      "A professional business park setting with controlled access and an environment designed to support secure day-to-day operations.",
    icon: ShieldCheck,
  },
  {
    title: "Backup Power",
    description:
      "Reliable infrastructure supports operational continuity and gives tenants greater resilience during power disruptions.",
    icon: Zap,
  },
  {
    title: "Parking",
    description:
      "Convenient on-site parking options provide practical accessibility for tenants, staff, and visitors.",
    icon: CarFront,
  },
  {
    title: "Building Quality",
    description:
      "Well-maintained office buildings with a professional exterior presence and efficient layouts suited to modern business use.",
    icon: Building2,
  },
  {
    title: "High-Speed Internet",
    description:
      "Connectivity-ready premises designed to support modern teams, digital workflows, and seamless communication.",
    icon: Wifi,
  },
  {
    title: "Cafeteria & Social Spaces",
    description:
      "Thoughtfully planned communal areas contribute to a more balanced and welcoming work environment.",
    icon: Coffee,
  },
  {
    title: "Boardroom Facilities",
    description:
      "Professional meeting spaces enhance day-to-day collaboration, presentations, and client-facing interactions.",
    icon: Briefcase,
  },
];

const galleryImages = [
  {
    src: "/images/arden-grove/arden-1.jpg",
    alt: "Arden Grove exterior entrance",
  },
  {
    src: "/images/arden-grove/arden-2.jpg",
    alt: "Arden Grove signage",
  },
  {
    src: "/images/arden-grove/arden-3.jpg",
    alt: "Arden Grove courtyard",
  },
  {
    src: "/images/arden-grove/arden-4.jpg",
    alt: "Arden Grove building frontage",
  },
  {
    src: "/images/arden-grove/arden-5.jpg",
    alt: "Arden Grove parking view",
  },
  {
    src: "/images/arden-grove/arden-6.jpg",
    alt: "Arden Grove terrace view",
  },
];

export default function ArdenGrove() {
  return (
    <main className="bg-[#f5f7fb] text-[#0b1324]">
      {/* HERO */}
      <section className="relative overflow-hidden bg-[#0b3d66] text-white">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(255,255,255,0.14),transparent_28%)]" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_right,rgba(255,255,255,0.10),transparent_24%)]" />
          <div className="absolute left-[-10%] top-[-15%] h-[520px] w-[520px] rounded-full bg-white/5 blur-3xl" />
          <div className="absolute right-[-8%] bottom-[-20%] h-[460px] w-[460px] rounded-full bg-[#7db7ff]/10 blur-3xl" />
        </div>

        <div className="relative mx-auto grid max-w-7xl grid-cols-1 gap-12 px-6 py-20 sm:px-8 md:py-24 lg:grid-cols-[0.95fr_1.05fr] lg:items-center lg:gap-16 lg:px-12">
          <motion.div
            initial={{ opacity: 0, y: 30, filter: "blur(10px)" }}
            whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.9, ease: easePremium }}
            className="max-w-xl"
          >
            <div className="mb-6 inline-flex items-center rounded-full border border-white/15 bg-white/10 px-4 py-1.5 text-sm font-medium text-white/90 backdrop-blur-xl">
              Premium Office Space in Milnerton
            </div>

            <h1 className="max-w-lg text-5xl font-semibold leading-[0.95] tracking-[-0.04em] sm:text-6xl md:text-7xl">
              Arden Grove
              <span className="block text-white/80">Business Park</span>
            </h1>

            <p className="mt-6 max-w-md text-base leading-7 text-white/78 sm:text-lg">
              Modern office space designed for ambitious businesses seeking a
              secure, accessible, and professional environment in one of Cape
              Town’s most established commercial nodes.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <a
                href="/contact"
                className="inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-semibold text-[#0b3d66] transition duration-300 hover:scale-[1.02]"
              >
                Enquire Now
                <ArrowRight className="h-4 w-4" />
              </a>

              <a
                href="#overview"
                className="inline-flex items-center rounded-full border border-white/20 bg-white/8 px-6 py-3 text-sm font-medium text-white/90 backdrop-blur-xl transition duration-300 hover:bg-white/14"
              >
                Explore Property
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 40, scale: 0.98, filter: "blur(14px)" }}
            whileInView={{ opacity: 1, y: 0, scale: 1, filter: "blur(0px)" }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 1.1, ease: easePremium }}
            className="relative"
          >
            <div className="absolute inset-0 rounded-[36px] bg-white/10 blur-2xl" />
            <div className="relative overflow-hidden rounded-[36px] border border-white/12 bg-white/8 p-3 shadow-[0_35px_120px_rgba(0,0,0,0.28)] backdrop-blur-2xl">
              <div className="overflow-hidden rounded-[28px] bg-[#dfe7f2]">
                <img
                  src="/images/arden-grove/hero-building.png"
                  alt="Arden Grove Business Park"
                  className="h-[420px] w-full object-cover lg:h-[520px]"
                />
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* OVERVIEW */}
      <section
        id="overview"
        className="relative mx-auto max-w-7xl px-6 py-20 sm:px-8 lg:px-12 lg:py-28"
      >
        <div className="grid grid-cols-1 gap-14 lg:grid-cols-[0.9fr_1.1fr] lg:items-start lg:gap-20">
          <motion.div
            initial={{ opacity: 0, y: 30, filter: "blur(10px)" }}
            whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.85, ease: easePremium }}
          >
            <div className="mb-4 text-sm font-semibold uppercase tracking-[0.18em] text-[#0b3d66]/70">
              Overview
            </div>

            <h2 className="max-w-md text-4xl font-semibold leading-tight tracking-[-0.04em] text-[#0b1324] sm:text-5xl">
              A professional address with room to grow.
            </h2>

            <p className="mt-6 max-w-xl text-base leading-8 text-[#415168] sm:text-lg">
              Located on Racecourse Road in Milnerton, Arden Grove Business Park
              offers a polished commercial setting for businesses that value
              accessibility, efficiency, and a strong professional image.
            </p>

            <p className="mt-5 max-w-xl text-base leading-8 text-[#415168] sm:text-lg">
              The park consists of self-contained office units designed to
              support modern operational needs, while maintaining a calm,
              established environment for teams, clients, and visitors.
            </p>

            <div className="mt-10 grid grid-cols-2 gap-4">
              <div className="rounded-[24px] border border-[#dce4ef] bg-white p-5 shadow-[0_14px_40px_rgba(15,23,42,0.05)]">
                <div className="text-3xl font-semibold tracking-[-0.04em] text-[#0b1324]">
                  20
                </div>
                <div className="mt-2 text-sm text-[#5a6a80]">Office units</div>
              </div>

              <div className="rounded-[24px] border border-[#dce4ef] bg-white p-5 shadow-[0_14px_40px_rgba(15,23,42,0.05)]">
                <div className="text-3xl font-semibold tracking-[-0.04em] text-[#0b1324]">
                  Milnerton
                </div>
                <div className="mt-2 text-sm text-[#5a6a80]">
                  Prime business location
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30, filter: "blur(10px)" }}
            whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.95, ease: easePremium, delay: 0.05 }}
            className="grid grid-cols-2 gap-4 sm:gap-5"
          >
            <div className="overflow-hidden rounded-[28px] bg-white p-2 shadow-[0_18px_60px_rgba(15,23,42,0.08)]">
              <img
                src="/images/arden-grove/grid-1.jpg"
                alt="Arden Grove building view"
                className="h-[220px] w-full rounded-[22px] object-cover sm:h-[260px]"
              />
            </div>

            <div className="overflow-hidden rounded-[28px] bg-white p-2 shadow-[0_18px_60px_rgba(15,23,42,0.08)]">
              <img
                src="/images/arden-grove/grid-2.jpg"
                alt="Arden Grove signage"
                className="h-[220px] w-full rounded-[22px] object-cover sm:h-[260px]"
              />
            </div>

            <div className="col-span-2 overflow-hidden rounded-[32px] bg-white p-2 shadow-[0_18px_60px_rgba(15,23,42,0.08)]">
              <img
                src="/images/arden-grove/grid-3.jpg"
                alt="Arden Grove wider property view"
                className="h-[260px] w-full rounded-[24px] object-cover sm:h-[320px]"
              />
            </div>
          </motion.div>
        </div>
      </section>

      {/* FEATURES */}
      <section className="mx-auto max-w-7xl px-6 pb-20 sm:px-8 lg:px-12 lg:pb-28">
        <motion.div
          initial={{ opacity: 0, y: 24, filter: "blur(8px)" }}
          whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.85, ease: easePremium }}
          className="mb-12 max-w-2xl"
        >
          <div className="mb-4 text-sm font-semibold uppercase tracking-[0.18em] text-[#0b3d66]/70">
            Key Features
          </div>
          <h2 className="text-4xl font-semibold leading-tight tracking-[-0.04em] text-[#0b1324] sm:text-5xl">
            Everything a modern office environment should offer.
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 gap-5 md:grid-cols-2 xl:grid-cols-4">
          {features.map((feature, index) => {
            const Icon = feature.icon;

            return (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 28, filter: "blur(10px)" }}
                whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{
                  duration: 0.8,
                  delay: index * 0.04,
                  ease: easePremium,
                }}
                className="group rounded-[28px] border border-[#dde6f1] bg-white p-6 shadow-[0_12px_40px_rgba(15,23,42,0.05)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_22px_60px_rgba(15,23,42,0.10)]"
              >
                <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-[#eaf2fb] text-[#0b3d66]">
                  <Icon className="h-5 w-5" />
                </div>

                <h3 className="text-lg font-semibold tracking-[-0.02em] text-[#0b1324]">
                  {feature.title}
                </h3>

                <p className="mt-3 text-sm leading-7 text-[#5d6b7f]">
                  {feature.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </section>

      {/* GALLERY */}
      <section className="mx-auto max-w-7xl px-6 pb-24 sm:px-8 lg:px-12 lg:pb-28">
        <motion.div
          initial={{ opacity: 0, y: 24, filter: "blur(8px)" }}
          whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.85, ease: easePremium }}
          className="mb-12 flex flex-col gap-5 md:flex-row md:items-end md:justify-between"
        >
          <div className="max-w-2xl">
            <div className="mb-4 text-sm font-semibold uppercase tracking-[0.18em] text-[#0b3d66]/70">
              Gallery
            </div>
            <h2 className="text-4xl font-semibold leading-tight tracking-[-0.04em] text-[#0b1324] sm:text-5xl">
              See the environment behind the address.
            </h2>
          </div>

          <p className="max-w-md text-sm leading-7 text-[#5d6b7f] sm:text-base">
            A visual look at the architecture, surroundings, and office setting
            that make Arden Grove a strong commercial location.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {galleryImages.map((image, index) => (
            <motion.div
              key={image.alt}
              initial={{ opacity: 0, y: 24, filter: "blur(10px)" }}
              whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              viewport={{ once: true, amount: 0.18 }}
              transition={{
                duration: 0.8,
                delay: index * 0.04,
                ease: easePremium,
              }}
              className="group overflow-hidden rounded-[30px] bg-white p-2 shadow-[0_14px_40px_rgba(15,23,42,0.06)]"
            >
              <div className="overflow-hidden rounded-[24px]">
                <img
                  src={image.src}
                  alt={image.alt}
                  className="h-[260px] w-full object-cover transition duration-700 group-hover:scale-[1.04] sm:h-[280px]"
                />
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* VACANCY PDF DOWNLOAD */}
      <section className="mx-auto max-w-7xl px-6 pb-24 sm:px-8 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 24, filter: "blur(8px)" }}
          whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.85, ease: easePremium }}
          className="relative overflow-hidden rounded-[36px] border border-[#dce4ef] bg-white px-8 py-10 shadow-[0_20px_60px_rgba(15,23,42,0.06)] sm:px-10 sm:py-12 lg:px-14"
        >
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(0,32,96,0.05),transparent_22%),radial-gradient(circle_at_bottom_right,rgba(11,61,102,0.06),transparent_24%)]" />

          <div className="relative flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">
            <div className="max-w-2xl">
              <div className="mb-4 text-sm font-semibold uppercase tracking-[0.18em] text-[#0b3d66]/70">
                Current Vacancies
              </div>

              <h2 className="text-4xl font-semibold leading-tight tracking-[-0.04em] text-[#0b1324] sm:text-5xl">
                Download the latest vacancy schedule.
              </h2>

              <p className="mt-5 max-w-xl text-base leading-8 text-[#5d6b7f] sm:text-lg">
                Access the most recent Arden Grove vacancy schedule in PDF
                format for a full overview of currently available office space.
              </p>
            </div>

            <div className="flex flex-col gap-3 sm:flex-row">
              <a
                href="/pdfs/arden-grove-vacancies.pdf"
                download
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-[#0b3d66] px-6 py-3 text-sm font-semibold text-white transition duration-300 hover:scale-[1.02] hover:bg-[#092f4f]"
              >
                <FileText className="h-4 w-4" />
                Download PDF
              </a>

              <a
                href="/contact"
                className="inline-flex items-center justify-center rounded-full border border-[#dce4ef] bg-[#f8fbff] px-6 py-3 text-sm font-medium text-[#0b1324] transition duration-300 hover:bg-white"
              >
                Enquire About Space
              </a>
            </div>
          </div>
        </motion.div>
      </section>

      {/* CTA */}
      <section className="mx-auto max-w-7xl px-6 pb-24 sm:px-8 lg:px-12 lg:pb-32">
        <motion.div
          initial={{ opacity: 0, y: 24, filter: "blur(10px)" }}
          whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.9, ease: easePremium }}
          className="relative overflow-hidden rounded-[36px] bg-[#0b1324] px-8 py-12 text-white sm:px-10 sm:py-14 lg:px-14 lg:py-16"
        >
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(255,255,255,0.10),transparent_24%),radial-gradient(circle_at_bottom_right,rgba(0,87,255,0.18),transparent_22%)]" />

          <div className="relative flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
            <div className="max-w-2xl">
              <div className="mb-4 text-sm font-semibold uppercase tracking-[0.18em] text-white/60">
                Make an Enquiry
              </div>
              <h2 className="text-4xl font-semibold leading-tight tracking-[-0.04em] sm:text-5xl">
                Interested in available space at Arden Grove?
              </h2>
              <p className="mt-5 max-w-xl text-base leading-8 text-white/72">
                Get in touch to discuss current availability, leasing details,
                and how this space could support your business.
              </p>
            </div>

            <a
              href="/contact"
              className="inline-flex items-center gap-2 self-start rounded-full bg-white px-6 py-3 text-sm font-semibold text-[#0b1324] transition duration-300 hover:scale-[1.02]"
            >
              Contact Us
              <ArrowRight className="h-4 w-4" />
            </a>
          </div>
        </motion.div>
      </section>
    </main>
  );
}