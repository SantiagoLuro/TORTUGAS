import React from "react";
import { NavLink } from "react-router-dom";
import { asset } from "../lib/asset";
import { BRAND, TAGLINE } from "../config";

export default function Hero() {
  return (
    <section className="hero" id="inicio">
      <video className="hero-video" autoPlay muted loop playsInline poster={asset("hero.jpg")}>
        <source src={asset("hero.mp4")} type="video/mp4" />
      </video>

      <div className="hero-overlay" />

      <div className="container hero-content">
        <h1>{BRAND}</h1>
        <p className="muted">{TAGLINE}</p>
        <NavLink to="/reservar" className="btn">Reservar ahora</NavLink>
      </div>
    </section>
  );
}
