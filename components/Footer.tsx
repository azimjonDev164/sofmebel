"use client";
import { useTranslations } from "next-intl";
import { motion, Variants } from "framer-motion";

export function Footer() {
  const t = useTranslations("footer");

  const links = [
    { key: "home", href: "/#bosh-sahifa" },
    { key: "furniture", href: "/#mebel" },
    { key: "accessories", href: "/#aksessuarlar" },
    { key: "magazine", href: "/online-magazine" },
    { key: "about", href: "/#biz-haqimizda" },
  ];

  const containerVariants: Variants = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.1 } },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 10 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" },
    },
  };

  return (
    <footer className="border-t border-greenDeep/10 bg-[#ece7dc]">
      <div className="mx-auto flex w-full max-w-7xl flex-col gap-5 px-5 py-7 sm:px-8 lg:flex-row lg:items-center lg:justify-between lg:px-10">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-xl font-semibold text-greenDeep">
            <span className="font-display text-goldAccent">Sof</span> Mebel
          </p>
          <p className="mt-1 text-sm text-greenDeep/70">{t("description")}</p>
        </motion.div>

        <motion.nav
          className="flex flex-wrap gap-4 text-sm text-greenDeep/85"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariants}
        >
          {links.map((link) => (
            <motion.a
              key={link.key}
              href={link.href}
              className="transition duration-300 hover:text-goldAccent"
              variants={itemVariants}
              whileHover={{ y: -2, scale: 1.05 }}
              transition={{ duration: 0.2 }}
            >
              {t(`links.${link.key}`)}
            </motion.a>
          ))}
        </motion.nav>
      </div>
    </footer>
  );
}
