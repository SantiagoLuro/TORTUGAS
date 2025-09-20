import React, { useEffect } from "react";
import { createPortal } from "react-dom";
import { motion, AnimatePresence } from "framer-motion";

export default function MenuModal({ open, onClose, item }) {
  // Bloquea scroll del body y ESC para cerrar
  useEffect(() => {
    if (!open) return;
    const onKey = (e) => e.key === "Escape" && onClose();
    window.addEventListener("keydown", onKey);

    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = prev;
    };
  }, [open, onClose]);

  // SIEMPRE montamos el portal; adentro mostramos/ocultamos con AnimatePresence
  return createPortal(
    <AnimatePresence>
      {open && item && (
        <div className="modal-root" role="dialog" aria-modal="true" aria-label={`Detalle de ${item.n}`}>
          {/* Fondo */}
          <motion.div
            className="backdrop"
            onClick={onClose}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          />

          {/* Panel */}
          <motion.article
            className="sheet-lg"
            initial={{ opacity: 0, scale: 0.98, y: 18 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.98, y: 12 }}
            transition={{ duration: 0.22 }}
            onClick={(e) => e.stopPropagation()}
          >
            <button className="close" onClick={onClose} aria-label="Cerrar">✕</button>

            <div className="sheet-grid">
              {item.img && (
                <div className="sheet-media">
                  <img src={item.img} alt={item.n} loading="lazy" />
                </div>
              )}

              <div className="sheet-info">
                <header className="head">
                  <h2>{item.n}</h2>
                  <span className="price">{item.p}</span>
                </header>

                {item.d && <p className="muted" style={{ marginTop: 6 }}>{item.d}</p>}

                {item.det && (
                  <>
                    <h4 className="sheet-sub">Detalles</h4>
                    <p>{item.det}</p>
                  </>
                )}

                {(item.ing || []).length > 0 && (
                  <>
                    <h4 className="sheet-sub">Ingredientes</h4>
                    <ul className="bullets">
                      {item.ing.map((x, i) => <li key={i}>{x}</li>)}
                    </ul>
                  </>
                )}

                <div className="meta">
                  {item.porcion && <span className="pill">Porción: {item.porcion}</span>}
                  {(item.tags || []).map((t, i) => (
                    <span key={i} className="pill">{t}</span>
                  ))}
                </div>
              </div>
            </div>
          </motion.article>
        </div>
      )}
    </AnimatePresence>,
    document.body
  );
}
