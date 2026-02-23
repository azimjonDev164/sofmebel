// app/[locale]/layout.tsx
import { NextIntlClientProvider } from "next-intl";
import { notFound } from "next/navigation";

export function generateStaticParams() {
  return [{ locale: "en" }, { locale: "uz" }, { locale: "ru" }];
}

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: { locale: string };
}) {
  let messages;
  try {
    messages = (await import(`../../messages/${params.locale}.json`)).default;
  } catch {
    notFound();
  }

  return (
    <div lang={params.locale} className="font-sans antialiased min-h-screen">
      <NextIntlClientProvider locale={params.locale} messages={messages}>
        {children}
      </NextIntlClientProvider>
    </div>
  );
}
