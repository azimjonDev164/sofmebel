"use client";

import Image from "next/image";
import { useTranslations } from "next-intl";

export function FeaturedProducts() {
  const t = useTranslations("featuredProducts");

  const products = [
    { key: "sofa", price: "$250", image: "/images/real/product-sofa.jpg" },
    { key: "chair", price: "$100", image: "/images/real/product-chair.jpg" },
    {
      key: "armchair",
      price: "$170",
      image: "/images/real/product-armchair.jpg",
    },
  ];

  return (
    <aside className="glass-card soft-ring w-full md:max-w-sm rounded-2xl p-6 text-beigeLight lg:max-w-xs">
      <p className="mb-4 text-xs uppercase tracking-[0.22em] text-goldAccent">
        {t("title")}
      </p>

      <ul className="space-y-4">
        {products.map((product) => (
          <li
            key={product.key}
            className="flex items-center justify-between gap-3 rounded-2xl border border-white/20 bg-white/10 px-3 py-3 transition duration-300 hover:bg-white/20"
          >
            <div className="flex items-center gap-3">
              <div className="relative h-12 w-12 overflow-hidden rounded-xl border border-white/25">
                <Image
                  src={product.image}
                  alt={t(`products.${product.key}`)}
                  fill
                  className="object-cover"
                />
              </div>
              <span>{t(`products.${product.key}`)}</span>
            </div>

            <span className="font-semibold text-goldAccent">
              {product.price}
            </span>
          </li>
        ))}
      </ul>

      <button
        type="button"
        className="mt-6 w-full rounded-2xl bg-goldAccent px-4 py-3 font-semibold text-greenDeep transition duration-300 hover:scale-[1.01] hover:bg-[#d3b57b]"
      >
        {t("moreButton")}
      </button>
    </aside>
  );
}
