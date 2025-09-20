import React from "react";
import { PHONE } from "../config";

export default function WhatsAppButton() {
  return (
    <a
      href={`https://wa.me/${PHONE}`}
      className="wapp-fab wapp"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Contactar por WhatsApp"
      title="Contactar por WhatsApp"
    >
      📞
    </a>
  );
}
