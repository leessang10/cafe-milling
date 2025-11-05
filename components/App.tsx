import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { MenuGrid } from "@/components/MenuGrid";
import { HoursNotice } from "@/components/HoursNotice";
import { MapSection } from "@/components/MapSection";
import { Footer } from "@/components/Footer";

// App level layout that composes every section of the landing page.
export const App = () => {
  return (
    <div className="flex min-h-screen flex-col bg-cream text-brown">
      <Header />
      <main>
        <Hero />
        <MenuGrid />
        <HoursNotice />
        <MapSection />
      </main>
      <Footer />
    </div>
  );
};
