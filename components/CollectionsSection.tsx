"use client";

import Image from "next/image";
import { useTranslations } from "next-intl";
import { motion, Variants } from "framer-motion";

export function CollectionsSection() {
  const t = useTranslations("collections");

  const collections = [
    { key: "living", image: "/images/real/collection-living.jpg" },
    { key: "bedroom", image: "/images/real/collection-bedroom.jpg" },
    { key: "dining", image: "/images/real/collection-dining.jpg" },
  ];

  // Motion variants
  const containerVariants: Variants = {
    hidden: {},
    visible: {
      transition: { staggerChildren: 0.2 },
    },
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
    <section
      id="mebel"
      className="mx-auto mt-10 w-full max-w-7xl px-5 sm:px-8 lg:mt-14 lg:px-10"
    >
      <div className="relative overflow-hidden rounded-2xl border border-greenDeep/10 bg-[#f0ece3]/75 p-5 shadow-soft sm:p-6 lg:p-8">
        <Image
          src="/images/real/showroom-main.jpg"
          alt=""
          fill
          aria-hidden
          className="object-cover opacity-20"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-[#f6f2e8]/90 via-[#f3efe5]/82 to-[#ece7dc]/88" />
        <div className="pointer-events-none absolute -right-16 -top-16 h-44 w-44 rounded-full bg-goldAccent/20 blur-3xl" />

        <div className="relative z-10">
          <div className="mb-6 flex items-end justify-between gap-4">
            <div>
              <p className="text-xs uppercase tracking-[0.2em] text-goldAccent">
                {t("label")}
              </p>
              <h2 className="mt-2 font-display text-3xl text-greenDeep sm:text-4xl">
                {t("title")}
              </h2>
            </div>

            <a
              href="#"
              className="hidden rounded-2xl border border-greenDeep/20 bg-white/70 px-4 py-2 text-sm text-greenDeep transition duration-300 hover:-translate-y-0.5 hover:bg-white md:inline-flex"
            >
              {t("viewAll")}
            </a>
          </div>

          <motion.div
            className="grid gap-5 md:grid-cols-2 xl:grid-cols-3"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
          >
            {collections.map((collection, index) => (
              <motion.article
                key={collection.key}
                className="group relative overflow-hidden rounded-2xl border border-greenDeep/10 bg-white/75 p-4 shadow-soft transition-transform duration-300 hover:-translate-y-1"
                variants={cardVariants}
              >
                <div className="h-56 overflow-hidden rounded-2xl border border-greenDeep/10 bg-[#dcd6c7]">
                  <Image
                    src={collection.image}
                    alt={t(`items.${collection.key}.title`)}
                    width={720}
                    height={460}
                    unoptimized
                    className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                  />
                </div>

                <div className="pointer-events-none absolute left-7 top-7 rounded-full bg-beigeLight/85 px-3 py-1 text-xs font-medium text-greenDeep">
                  0{index + 1}
                </div>

                <div className="mt-4">
                  <h3 className="font-display text-2xl text-greenDeep">
                    {t(`items.${collection.key}.title`)}
                  </h3>

                  <p className="mt-2 text-sm text-greenDeep/80">
                    {t(`items.${collection.key}.description`)}
                  </p>
                </div>
              </motion.article>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
