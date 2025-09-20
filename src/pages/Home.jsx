import Hero from "../components/Hero";
import MenuTabs from "../components/MenuTabs";
import Reviews from "../components/Reviews";
import CTA from "../components/CTA";
import Gallery from "../components/Gallery";

export default function Home() {
  return (
    <>
      <Hero />
      <section className="section">
        <div className="container">
          <h2 className="section-title"></h2>
          <MenuTabs />
        </div>
      </section>

      <section className="section alt">
        <div className="container">
          <h2 className="section-title"></h2>
          <Gallery />
        </div>
      </section>

      <section className="section">
        <div className="container">
          <h2 className="section-title">Reseñas</h2>
          <Reviews />
        </div>
      </section>

      <CTA />
    </>
  );
}
