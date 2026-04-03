import { ArrowRight, Sprout } from "lucide-react";
import { motion, useScroll, useTransform, useReducedMotion } from "framer-motion";
import { Link } from "react-router-dom";

interface AnthuriHeroProps {
  title: string;
  subtitle: string;
  ctaText: string;
  ctaHref?: string;
  image: string;
}

const easePremium = [0.16, 1, 0.3, 1] as const;

const AnthuriHero = ({
  title,
  subtitle,
  ctaText,
  ctaHref = "#about",
  image,
}: AnthuriHeroProps) => {
  const shouldReduceMotion = useReducedMotion();

  const scrollToAbout = () => {
    document
      .getElementById(ctaHref.replace("#", ""))
      ?.scrollIntoView({ behavior: "smooth" });
  };

  const { scrollY } = useScroll();

  // Enhanced parallax for Anthuri - more dynamic movement
  const imageY = useTransform(scrollY, [0, 800], [0, shouldReduceMotion ? 0 : 120]);
  const imageScale = useTransform(scrollY, [0, 800], [1.05, 1.12]);
  const textY = useTransform(scrollY, [0, 800], [0, shouldReduceMotion ? 0 : -35]);
  const overlayOpacity = useTransform(scrollY, [0, 400], [0.3, 0.7]);

  const container = {
    hidden: {},
    show: {
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.1,
      },
    },
  };

  const item = {
    hidden: {
      opacity: 0,
      y: 25,
      filter: "blur(12px)",
    },
    show: {
      opacity: 1,
      y: 0,
      filter: "blur(0px)",
      transition: { duration: 1.2, ease: easePremium },
    },
  };

  return (
    <section className="relative min-h-screen overflow-hidden bg-gradient-to-br from-emerald-900 via-teal-800 to-green-900">
      {/* Background with enhanced effects */}
      <motion.div
        style={{ y: imageY, scale: imageScale }}
        className="absolute inset-0"
      >
        <img
          src={image}
          alt={title}
          className="h-full w-full object-cover"
        />
        <motion.div 
          style={{ opacity: overlayOpacity }}
          className="absolute inset-0 bg-gradient-to-br from-emerald-900/90 via-teal-800/80 to-green-900/90" 
        />
        
        {/* Organic pattern overlay */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,rgba(16,185,129,0.3),transparent_40%),radial-gradient(ellipse_at_bottom_right,rgba(5,150,105,0.4),transparent_35%)]" />
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width=\"60\" height=\"60\" viewBox=\"0 0 60 60\" xmlns=\"http://www.w3.org/2000/svg\"%3E%3Cg fill=\"none\" fill-rule=\"evenodd\"%3E%3Cg fill=\"%2310b981\" fill-opacity=\"0.05\"%3E%3Cpath d=\"M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z\"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')]" />
      </motion.div>

      {/* Floating elements */}
      <motion.div
        animate={{ 
          y: [0, -20, 0],
          rotate: [0, 5, 0]
        }}
        transition={{ 
          duration: 8, 
          repeat: Infinity, 
          ease: "easeInOut" 
        }}
        className="absolute top-20 left-10 text-emerald-300/20"
      >
        <Sprout className="h-24 w-24" />
      </motion.div>

      <motion.div
        animate={{ 
          y: [0, 20, 0],
          rotate: [0, -5, 0]
        }}
        transition={{ 
          duration: 10, 
          repeat: Infinity, 
          ease: "easeInOut",
          delay: 2
        }}
        className="absolute bottom-20 right-10 text-teal-300/20"
      >
        <Sprout className="h-32 w-32" />
      </motion.div>

      {/* Content */}
      <div className="relative z-10 flex min-h-screen items-center">
        <div className="mx-auto max-w-7xl px-6 py-20 sm:px-8 lg:px-12">
          <motion.div
            variants={container}
            initial="hidden"
            animate="show"
            style={{ y: textY }}
            className="max-w-5xl"
          >
            {/* Organic badge */}
            <motion.div variants={item} className="mb-8">
              <div className="inline-flex items-center rounded-full border border-emerald-300/30 bg-emerald-500/10 px-4 py-2 backdrop-blur-sm">
                <Sprout className="mr-2 h-4 w-4 text-emerald-300" />
                <span className="text-xs font-medium uppercase tracking-widest text-emerald-200">
                  Impact & Growth Capital
                </span>
              </div>
            </motion.div>

            {/* Title with organic styling */}
            <motion.h1
              variants={item}
              className="mb-6 text-4xl font-light leading-tight tracking-tight text-white sm:text-5xl md:text-6xl lg:text-7xl"
            >
              {title}
            </motion.h1>

            {/* Subtitle */}
            <motion.p
              variants={item}
              className="mb-10 max-w-3xl text-lg leading-relaxed text-emerald-100 sm:text-xl md:text-2xl"
            >
              {subtitle}
            </motion.p>

            {/* CTA with organic design */}
            <motion.div variants={item} className="flex flex-col gap-4 sm:flex-row">
              <motion.button
                onClick={scrollToAbout}
                className="group inline-flex items-center justify-center rounded-full bg-gradient-to-r from-emerald-500 to-teal-600 px-8 py-4 font-medium text-white shadow-lg shadow-emerald-500/25 transition-all duration-300 hover:shadow-xl hover:shadow-emerald-500/40 hover:-translate-y-1"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                {ctaText}
                <ArrowRight className="ml-2 h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
              </motion.button>

              <Link
                to="/contact"
                className="inline-flex items-center justify-center rounded-full border border-emerald-300/40 bg-emerald-500/10 px-8 py-4 font-medium text-emerald-100 backdrop-blur-sm transition-all duration-300 hover:bg-emerald-500/20 hover:border-emerald-300/60"
              >
                Get in Touch
              </Link>
            </motion.div>

            {/* Stats or indicators */}
            <motion.div
              variants={item}
              className="mt-16 grid grid-cols-3 gap-8 sm:gap-12"
            >
              <div className="text-center">
                <div className="text-3xl font-light text-white sm:text-4xl">4</div>
                <div className="mt-2 text-sm text-emerald-200">Key Sectors</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-light text-white sm:text-4xl">2X</div>
                <div className="mt-2 text-sm text-emerald-200">Impact Focus</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-light text-white sm:text-4xl">∞</div>
                <div className="mt-2 text-sm text-emerald-200">Growth Potential</div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <div className="h-12 w-0.5 bg-gradient-to-b from-emerald-300 to-transparent" />
      </motion.div>
    </section>
  );
};

export default AnthuriHero;
