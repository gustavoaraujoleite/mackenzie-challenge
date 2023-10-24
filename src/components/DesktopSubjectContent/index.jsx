import BasisA from "./BasisA";
import BasisB from "./BasisB";

export default function DesktopSubjectContent() {
  return (
    <div className="flex flex-row px-20">
      <section className="basis-1/2 mr-8">
        <BasisA />
      </section>
      <section className="basis-1/2">
        <BasisB />
      </section>
    </div>
  );
}
