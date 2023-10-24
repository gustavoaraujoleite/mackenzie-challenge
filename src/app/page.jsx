import DesktopSubjectContent from "@/components/DesktopSubjectContent";
import IntroSection from "@/components/Intro_section";
import MobileSubjectContent from "@/components/MobileSubjectContent";

export default function Home() {
  return (
    <main className="flex flex-col justify-between">
      <section>
        <IntroSection />
      </section>

      <section className="hidden md:block">
        <DesktopSubjectContent/>
      </section>

      <section className="md:hidden">
        <MobileSubjectContent />
      </section>
    </main>
  );
}
