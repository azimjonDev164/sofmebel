import { Navbar } from '@/components/Navbar';
import { Hero } from '@/components/Hero';
import { AboutSection } from '@/components/AboutSection';
import { CollectionsSection } from '@/components/CollectionsSection';
import { WhyChooseUsSection } from '@/components/WhyChooseUsSection';
import { ShowroomSection } from '@/components/ShowroomSection';
import { CTASection } from '@/components/CTASection';
import { Footer } from '@/components/Footer';

export default function HomePage() {
  return (
    <>
      <main className="relative overflow-hidden pb-10">
        <div className="pointer-events-none absolute left-0 top-44 h-72 w-72 rounded-full bg-goldAccent/15 blur-3xl" />
        <div className="pointer-events-none absolute right-0 top-[35rem] h-96 w-96 rounded-full bg-greenDeep/10 blur-3xl" />
        <div className="relative mx-auto w-full max-w-[1600px] px-3 pt-3 sm:px-5 sm:pt-5">
          <Navbar />
          <Hero />
        </div>
        <AboutSection />
        <CollectionsSection />
        <WhyChooseUsSection />
        <ShowroomSection />
        <CTASection />
      </main>
      <Footer />
    </>
  );
}
