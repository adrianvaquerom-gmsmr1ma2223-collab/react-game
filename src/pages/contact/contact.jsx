import { useState } from "react";
import "./contact.css";

function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [success, setSuccess] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!form.name || !form.email || !form.message) {
      setSuccess("Todos los campos son obligatorios de rellenar.");
      return;
    }

    setSuccess("¡Mensaje enviado!");

    setForm({
      name: "",
      email: "",
      message: "",
    });
  };

  return (
    <section className="pagina-contacto">

      <h1>Contacto</h1>
      <form onSubmit={handleSubmit} style={{ maxWidth: "400px" }} className="contacto-form">
        <div className="campo-form">
          <label>Nombre</label>
          <input type="text" name="name" value={form.name} onChange={handleChange} required />
        </div>

        <div className="campo-form">
          <label>Correo electrónico</label>
          <input type="email" name="email" value={form.email} onChange={handleChange} required />
        </div>

        <div className="campo-form">
          <label>Mensaje</label>
          <textarea name="message" value={form.message} onChange={handleChange} required />
        </div>

        <button type="submit">Enviar</button>
      </form>

      {success && <p style={{ marginTop: "1rem", color: "green" }}>{success}</p>}
    </section>
  );
}

export default Contact;