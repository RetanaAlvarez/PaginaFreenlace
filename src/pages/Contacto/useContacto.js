import { useState } from "react";
import { createWhatsAppLink } from "../../utils/whatsapp";

export const createWhatsAppMessage = (form) => {
  return `Hola, quiero cotizar una página web:

 Nombre: ${form.name}
 Proyecto: ${form.message}`;
};

export function useContacto() {

  const [form, setForm] = useState({
    name: "",
    message: ""
  });

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!form.name || !form.message) {
      alert("Completa todos los campos");
      return;
    }

    // 👉 usamos la función separada
    const message = createWhatsAppMessage(form);

    const url = createWhatsAppLink(message);
    window.open(url, "_blank");
  };

  const handleWhatsApp = () => {
    const url = createWhatsAppLink(
      "Hola, quiero información sobre una página web."
    );
    window.open(url, "_blank");
  };

  return {
    form,
    handleChange,
    handleSubmit,
    handleWhatsApp
  };
}