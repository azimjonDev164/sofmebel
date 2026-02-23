"use client";
import Image from "next/image";
import { FeaturedProducts } from "@/components/FeaturedProducts";
import { useTranslations } from "next-intl";
import { motion, Variants } from "framer-motion";

export function Hero() {
  const t = useTranslations("Hero");

  // Animation variants
  const containerVariants = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.2 } },
  };

  const fadeUp: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  return (
    <section
      id="bosh-sahifa"
      className="relative isolate overflow-hidden rounded-2xl bg-greenDeep text-beigeLight shadow-soft"
    >
      <Image
        src="/images/real/hero.jpg"
        alt={t("heroImageAlt")}
        fill
        priority
        className="object-cover"
      />

      <div className="absolute inset-0 bg-gradient-to-r from-[#13291d]/90 via-[#1f3d2b]/70 to-[#1f3d2b]/30" />

      <motion.div
        className="relative z-10 mx-auto grid min-h-[640px] w-full max-w-7xl gap-8 px-5 pb-10 pt-28 sm:px-8 lg:grid-cols-[1fr_auto] lg:items-end lg:px-10"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        <div className="max-w-2xl space-y-5">
          <motion.p
            className="inline-flex rounded-full border border-beigeLight/40 bg-beigeLight/10 px-4 py-1 text-xs uppercase tracking-[0.2em] text-goldAccent"
            variants={fadeUp}
          >
            {t("premiumShowroom")}
          </motion.p>

          <motion.h1
            className="font-display text-4xl leading-tight sm:text-5xl lg:text-6xl"
            variants={fadeUp}
          >
            {t("heroTitle")}
          </motion.h1>

          <motion.p
            className="mt-5 max-w-xl text-sm text-beigeLight/90 sm:text-base"
            variants={fadeUp}
          >
            {t("heroSubtitle")}
          </motion.p>

          <motion.div
            className="mt-8 flex w-full flex-col gap-3 sm:max-w-lg sm:flex-row"
            variants={fadeUp}
          >
            <label className="sr-only" htmlFor="search">
              {t("searchLabel")}
            </label>
            <input
              id="search"
              type="text"
              placeholder={t("searchPlaceholder")}
              className="w-full rounded-2xl border border-beigeLight/40 bg-beigeLight/10 px-5 py-3 text-beigeLight placeholder:text-beigeLight/70 outline-none backdrop-blur-sm transition duration-300 focus:border-goldAccent focus:ring-2 focus:ring-goldAccent/40"
            />
            <button
              type="button"
              className="rounded-2xl bg-goldAccent px-7 py-3 whitespace-nowrap font-semibold text-greenDeep transition duration-300 hover:-translate-y-0.5 hover:bg-[#d3b57b]"
            >
              {t("readMore")}
            </button>
          </motion.div>

          <motion.div
            className="mt-6 grid max-w-xl grid-cols-3 gap-3"
            variants={fadeUp}
          >
            <div className="glass-card rounded-2xl px-3 py-3 text-center">
              <p className="font-display text-xl text-goldAccent">
                {t("productsCount")}
              </p>
              <p className="text-xs text-beigeLight/80">{t("productsLabel")}</p>
            </div>
            <div className="glass-card rounded-2xl px-3 py-3 text-center">
              <p className="font-display text-xl text-goldAccent">
                {t("supportHours")}
              </p>
              <p className="text-xs text-beigeLight/80">{t("supportLabel")}</p>
            </div>
            <div className="glass-card rounded-2xl px-3 py-3 text-center">
              <p className="font-display text-xl text-goldAccent">
                {t("deliveryTime")}
              </p>
              <p className="text-xs text-beigeLight/80">{t("deliveryLabel")}</p>
            </div>
          </motion.div>
        </div>

        <motion.div
          className="justofy-self-center md:justify-self-end lg:translate-y-6"
          variants={fadeUp}
        >
          <FeaturedProducts />
        </motion.div>
      </motion.div>
    </section>
  );
}
