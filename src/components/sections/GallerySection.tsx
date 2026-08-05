import { MagneticButton } from "@/components/motion/MagneticButton";
import { GalleryMasonry } from "@/components/sections/GalleryMasonry";
import { SectionHeading } from "@/components/sections/SectionHeading";

export function GallerySection() {
  return (
    <section className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6">
        <SectionHeading
          eyebrow="THE ARCHIVE"
          title="Proof, not promises"
          description="Every frame shot at a real Tamasha production. No stock. No renders."
          action={
            <MagneticButton to="/gallery" variant="ghost">
              Open full gallery
            </MagneticButton>
          }
        />
        <div className="mt-14">
          <GalleryMasonry compact />
        </div>
      </div>
    </section>
  );
}