"use client";
import Image from "next/image";
import { useTranslations } from "next-intl";
import { motion, Variants } from "framer-motion";

export function ShowroomSection() {
  const t = useTranslations("showroom");

  const images = [
    { key: "main", src: "/images/real/showroom-main.jpg" },
    { key: "dining", src: "/images/real/showroom-side-1.jpg" },
    { key: "living", src: "/images/real/showroom-side-2.jpg" },
  ];

  const containerVariants: Variants = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.2 } },
  };

  const imageVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  return (
    <section
      id="aksessuarlar"
      className="mx-auto mt-10 w-full max-w-7xl px-5 sm:px-8 lg:mt-14 lg:px-10"
    >
      <motion.div
        className="mb-6 max-w-2xl"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={containerVariants}
      >
        <motion.p
          className="text-xs uppercase tracking-[0.2em] text-goldAccent"
          variants={imageVariants}
        >
          {t("label")}
        </motion.p>

        <motion.h2
          className="mt-2 font-display text-3xl text-greenDeep sm:text-4xl"
          variants={imageVariants}
        >
          {t("title")}
        </motion.h2>
      </motion.div>

      <motion.div
        className="grid gap-5 md:grid-cols-3"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={containerVariants}
      >
        {/* Main Image */}
        <motion.div
          className="relative min-h-80 overflow-hidden rounded-2xl md:col-span-2"
          variants={imageVariants}
          whileHover={{ scale: 1.03 }}
          transition={{ duration: 0.5 }}
        >
          <Image
            src={images[0].src}
            alt={t(`images.${images[0].key}`)}
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#1f3d2b]/70 via-transparent" />
          <p className="absolute bottom-4 left-4 rounded-full bg-beigeLight/85 px-4 py-1 text-sm text-greenDeep">
            {t("featured")}
          </p>
        </motion.div>

        {/* Side Images */}
        <div className="grid gap-5">
          {images.slice(1).map((image) => (
            <motion.div
              key={image.key}
              className="relative min-h-36 overflow-hidden rounded-2xl"
              variants={imageVariants}
              whileHover={{ scale: 1.03 }}
              transition={{ duration: 0.5 }}
            >
              <Image
                src={image.src}
                alt={t(`images.${image.key}`)}
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#1f3d2b]/55 via-transparent" />
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
