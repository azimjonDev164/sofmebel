"use client";

import Image from "next/image";
import { useTranslations } from "next-intl";
import { motion, Variants } from "framer-motion";

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

export function AboutSection() {
  const t = useTranslations("about");

  return (
    <section
      id="biz-haqimizda"
      className="mx-auto mt-10 w-full max-w-7xl px-5 sm:px-8 lg:mt-14 lg:px-10"
    >
      <motion.div
        className="grid gap-6 rounded-2xl bg-[#e9e4d8] p-6 shadow-soft md:grid-cols-[1.2fr_1fr] md:p-10"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={fadeUp}
      >
        <motion.div variants={fadeUp}>
          <p className="text-xs uppercase tracking-[0.2em] text-goldAccent">
            {t("label")}
          </p>

          <h2 className="mt-3 font-display text-3xl text-greenDeep sm:text-4xl">
            {t("title")}
          </h2>

          <p className="mt-4 max-w-2xl text-greenDeep/85">{t("description")}</p>

          <div className="mt-6 flex flex-wrap gap-3 text-sm">
            <span className="rounded-full bg-greenDeep px-4 py-2 text-beigeLight cursor-pointer shadow-md transition-all duration-300 ease-out hover:scale-105 hover:shadow-lg">
              {t("features.quality")}
            </span>

            <span className="rounded-full bg-white px-4 py-2 text-greenDeep cursor-pointer shadow-md transition-all duration-300 ease-out hover:bg-greenDeep hover:text-beigeLight hover:scale-105 hover:shadow-lg">
              {t("features.design")}
            </span>

            <span className="rounded-full bg-white px-4 py-2 text-greenDeep cursor-pointer shadow-md transition-all duration-300 ease-out hover:bg-greenDeep hover:text-beigeLight hover:scale-105 hover:shadow-lg">
              {t("features.delivery")}
            </span>
          </div>
        </motion.div>

        <motion.div
          className="relative min-h-52 overflow-hidden rounded-2xl"
          variants={fadeUp}
        >
          <Image
            src="/images/real/about.jpg"
            alt={t("imageAlt")}
            fill
            className="object-cover transition duration-500 hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#1f3d2b]/55 via-transparent" />
        </motion.div>
      </motion.div>
    </section>
  );
}
