import { MagneticButton } from "@/components/motion/MagneticButton";
import { Reveal } from "@/components/motion/Reveal";
import { ExperienceCard } from "@/components/sections/ExperienceCard";
import { SectionHeading } from "@/components/sections/SectionHeading";
import { EXPERIENCES } from "@/data/site";

export function UpcomingExperiences() {
  return (
    <section id="experiences" className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6">
        <SectionHeading
          eyebrow="UPCOMING EXPERIENCES"
          title="Nights people plan their year around"
          description="Limited capacity, real countdowns, no resale games. When it's gone, it's gone."
          action={
            <MagneticButton to="/events" variant="ghost">
              View all experiences
            </MagneticButton>
          }
        />
        <div className="mt-14 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {EXPERIENCES.map((item, i) => (
            <Reveal key={item.id} delay={i * 0.08} className="h-full">
              <ExperienceCard item={item} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}