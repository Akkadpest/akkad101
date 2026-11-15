import { Manrope } from "next/font/google";
import HomeNew from "@/Components/HomeNew/HomeNew";

const manrope = Manrope({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-manrope",
  display: "swap",
});

export const metadata = {
  title: "Pest Control Dubai | Book Online – Akkad Pest Control",
  description:
    "Book Dubai Municipality approved pest control in minutes. Cockroach, bed bug, ant, termite and rodent treatments from AED 99 with a 6-month warranty.",
  // Keep the new design out of search results until it replaces the homepage
  robots: { index: false, follow: true },
};

export default function HomeNewPage() {
  return (
    <div className={manrope.variable}>
      <HomeNew />
    </div>
  );
}
