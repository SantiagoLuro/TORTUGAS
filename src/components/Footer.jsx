import { BRAND, IG_URL, ADDRESS, PHONE } from "../config";

export default function Footer() {
  const year = new Date().getFullYear();
  const wa = `https://wa.me/${PHONE}`;
  return (
    <footer className="footer">
      <div className="container foot-row">
        <div>© {year} {BRAND} · Restó</div>
        <div className="foot-right">
          <span className="muted">{ADDRESS}</span>
          <a className="foot-link" href={wa} target="_blank" rel="noreferrer">WhatsApp</a>
          {IG_URL && (
            <a className="foot-link" href={IG_URL} target="_blank" rel="noreferrer">Instagram</a>
          )}
        </div>
      </div>
    </footer>
  );
}
