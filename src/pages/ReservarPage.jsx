import React, { useMemo, useState } from "react";
import { PHONE } from "../config";

export default function ReservarPage() {
  const [name, setName] = useState("");
  const [people, setPeople] = useState(2);
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [note, setNote] = useState("");
  const minDate = useMemo(() => new Date().toISOString().split("T")[0], []);

  const sendWhatsApp = (e) => {
    e.preventDefault();
    if (!name || !people || !date || !time) return alert("Completá nombre, personas, fecha y hora 🙂");
    const msg =
      `Hola, soy ${name}. Quiero reservar para ${people} ${Number(people)===1?"persona":"personas"} ` +
      `el ${date} a las ${time}.` + (note ? `\nNota: ${note}` : "");
    window.open(`https://wa.me/${PHONE}?text=${encodeURIComponent(msg)}`, "_blank");
  };

  return (
    <section className="section">
      <div className="container" style={{maxWidth: 720}}>
        <h2 className="section-title">Reservar</h2>
        <form className="form" onSubmit={sendWhatsApp}>
          <input className="input" placeholder="Nombre" value={name} onChange={e=>setName(e.target.value)} />
          <input className="input" type="number" min={1} placeholder="Personas" value={people} onChange={e=>setPeople(e.target.value)} />
          <input className="input" type="date" value={date} min={minDate} onChange={e=>setDate(e.target.value)} />
          <input className="input" type="time" value={time} onChange={e=>setTime(e.target.value)} />
          <textarea className="textarea" rows={3} placeholder="Notas (opcional)" value={note} onChange={e=>setNote(e.target.value)} />
          <button className="btn lg" type="submit">Reservar por WhatsApp</button>
        </form>
      </div>
    </section>
  );
}
