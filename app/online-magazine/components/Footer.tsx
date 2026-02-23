const links = [
  { label: "Bosh sahifa", href: "/#bosh-sahifa" },
  { label: "Mebel", href: "/#mebel" },
  { label: "Aksessuarlar", href: "/#aksessuarlar" },
  { label: "Online Magazine", href: "/online-magazine" },
  { label: "Biz haqimizda", href: "/#biz-haqimizda" },
];

export function Footer() {
  return (
    <footer className="border-t border-greenDeep/10 bg-[#ece7dc]">
      <div className="mx-auto flex w-full max-w-7xl flex-col gap-5 px-5 py-7 sm:px-8 lg:flex-row lg:items-center lg:justify-between lg:px-10">
        <div>
          <p className="text-xl font-semibold text-greenDeep">
            <span className="font-display text-goldAccent">Sof</span> Mebel
          </p>
          <p className="mt-1 text-sm text-greenDeep/70">
            Premium interyer uchun zamonaviy mebel yechimlari.
          </p>
        </div>

        <nav className="flex flex-wrap gap-4 text-sm text-greenDeep/85">
          {links.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="transition duration-300 hover:text-goldAccent"
            >
              {link.label}
            </a>
          ))}
        </nav>
      </div>
    </footer>
  );
}
