import concert from "@/assets/event-concert.jpg";
import corporate from "@/assets/event-corporate.jpg";
import dandiya from "@/assets/event-dandiya.jpg";
import food from "@/assets/event-food.jpg";
import holi from "@/assets/event-holi.jpg";
import kids from "@/assets/event-kids.jpg";
import wedding from "@/assets/event-wedding.jpg";
import hero from "@/assets/hero-festival.jpg";

export const IMAGES: Record<string, string> = {
  hero,
  holi,
  dandiya,
  concert,
  wedding,
  corporate,
  food,
  kids,
};

export const img = (key: string) => IMAGES[key] ?? hero;