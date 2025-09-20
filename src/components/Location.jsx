import { MAP_EMBED } from "../config";

export default function Location() {
  return (
    <section id="ubicacion" className="section alt">
      <div className="container">
        <h2 className="section-title">Ubicación</h2>
        <div className="map-wrap">
          <iframe
            src={MAP_EMBED}
            width="100%"
            height="400"
            loading="lazy"
            allowFullScreen
            referrerPolicy="no-referrer-when-downgrade"
            title="Mapa"
          />
        </div>
      </div>
    </section>
  );
}
