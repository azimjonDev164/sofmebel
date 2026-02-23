"use client";

import { useTranslations } from "next-intl";
import { motion, Variants } from "framer-motion";

export function WhyChooseUsSection() {
  const t = useTranslations("whyChooseUs");

  const highlights = [
    { key: "materials" },
    { key: "custom" },
    { key: "warranty" },
  ];

  const stats = [
    { value: "12+", key: "experience" },
    { value: "4.9", key: "rating" },
    { value: "900+", key: "projects" },
  ];

  const containerVariants: Variants = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.2 } },
  };

  const cardVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" },
    },
  };

  return (
    <section className="mx-auto mt-10 w-full max-w-7xl px-5 sm:px-8 lg:mt-14 lg:px-10">
      <motion.div
        className="grid gap-6 rounded-2xl bg-greenDeep p-6 text-beigeLight shadow-soft md:grid-cols-[1.2fr_1fr] md:p-10"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        {/* Highlights */}
        <div>
          <p className="text-xs uppercase tracking-[0.2em] text-goldAccent">
            {t("label")}
          </p>

          <h2 className="mt-2 font-display text-3xl sm:text-4xl">
            {t("title")}
          </h2>

          <div className="mt-6 space-y-4">
            {highlights.map((item) => (
              <motion.div
                key={item.key}
                className="rounded-2xl border border-beigeLight/20 bg-beigeLight/10 p-4"
                variants={cardVariants}
              >
                <h3 className="font-semibold text-goldAccent">
                  {t(`highlights.${item.key}.title`)}
                </h3>
                <p className="mt-1 text-sm text-beigeLight/90">
                  {t(`highlights.${item.key}.description`)}
                </p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Stats */}
        <div className="grid gap-4 self-end">
          {stats.map((stat) => (
            <motion.div
              key={stat.key}
              className="glass-card rounded-2xl p-5 text-center"
              variants={cardVariants}
            >
              <p className="font-display text-4xl text-goldAccent">
                {stat.value}
              </p>
              <p className="mt-2 text-sm text-beigeLight/90">
                {t(`stats.${stat.key}`)}
              </p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
