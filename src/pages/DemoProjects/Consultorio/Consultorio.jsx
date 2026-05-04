import {
  Calendar,
  Clock,
  MapPin,
  Phone,
  Mail,
  Award,
  ChevronLeft,
  CheckCircle2,
} from "lucide-react";

import { Link } from "react-router-dom";
import { useState } from "react";

const Consultorio = () => {
  const whatsappNumber = "55123456789";

  const [selectedDate, setSelectedDate] = useState("");
  const [selectedTime, setSelectedTime] = useState("");

  const services = [
    {
      name: "Consulta General",
      duration: "30 min",
      price: "$500",
      icon: "🩺",
      description: "Revisión médica completa y diagnóstico",
    },
    {
      name: "Pediatría",
      duration: "45 min",
      price: "$600",
      icon: "👶",
      description: "Atención especializada para niños",
    },
    {
      name: "Control de Peso",
      duration: "30 min",
      price: "$450",
      icon: "⚖️",
      description: "Evaluación nutricional y plan personalizado",
    },
    {
      name: "Vacunación",
      duration: "15 min",
      price: "$300",
      icon: "💉",
      description: "Aplicación de vacunas certificadas",
    },
    {
      name: "Consulta Online",
      duration: "30 min",
      price: "$400",
      icon: "💻",
      description: "Atención médica por videollamada",
    },
  ];

  const availableTimes = [
    "09:00",
    "10:00",
    "11:00",
    "12:00",
    "16:00",
    "17:00",
    "18:00",
  ];

  const bookAppointment = () => {
    if (selectedDate && selectedTime) {
      const message = `Hola, quiero agendar una cita para el ${selectedDate} a las ${selectedTime}`;
      window.open(
        `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`,
        "_blank",
      );
    } else {
      alert("Selecciona fecha y hora");
    }
  };

  return (
    <div className="bg-light min-vh-100">
      {/* HEADER */}
      <header className="bg-primary text-white py-3 shadow">
        <div className="container d-flex justify-content-between align-items-center">
          <Link to="/" className="text-white text-decoration-none">
            ← Volver
          </Link>

          <h5 className="m-0">🏥 Consultorio Médico</h5>

          <a href={`tel:${whatsappNumber}`} className="btn btn-light">
            📞 Llamar
          </a>
        </div>
      </header>

      {/* HERO */}
      <section className="bg-primary text-white py-5">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-md-6 mb-4">
              <h2 className="fw-bold">Tu Salud es Nuestra Prioridad</h2>
              <p>Atención médica profesional con experiencia</p>

              <ul className="list-unstyled mt-3">
                <li>✔ Médicos certificados</li>
                <li>✔ Atención personalizada</li>
                <li>✔ Consultas online</li>
              </ul>
            </div>

            <div className="col-md-6">
              <div className="card p-4 shadow">
                <h5 className="mb-3 text-center">Agenda tu Cita</h5>

                <input
                  type="date"
                  className="form-control mb-3"
                  value={selectedDate}
                  onChange={(e) => setSelectedDate(e.target.value)}
                />

                <select
                  className="form-select mb-3"
                  value={selectedTime}
                  onChange={(e) => setSelectedTime(e.target.value)}
                >
                  <option value="">Selecciona hora</option>
                  {availableTimes.map((time) => (
                    <option key={time}>{time}</option>
                  ))}
                </select>

                <button
                  onClick={bookAppointment}
                  className="btn btn-success w-100"
                >
                  Confirmar por WhatsApp
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* INFO */}
      <section className="bg-white border-bottom py-3">
        <div className="container">
          <div className="row text-center">
            <div className="col-md-4">📍 Calle Reforma 456</div>

            <div className="col-md-4">🕒 Lun-Vie 9:00-20:00</div>

            <div className="col-md-4">📞 (712) 123-4567</div>
          </div>
        </div>
      </section>

      {/* SERVICIOS */}
      <section className="container py-5">
        <h2 className="text-center mb-4">Nuestros Servicios</h2>

        <div className="row g-4">
          {services.map((service, idx) => (
            <div key={idx} className="col-md-6 col-lg-4">
              <div className="card h-100 shadow-sm">
                <div className="card-body text-center">
                  <div className="fs-1 mb-3">{service.icon}</div>

                  <h5>{service.name}</h5>

                  <p className="text-muted">{service.description}</p>

                  <p className="fw-bold text-primary">{service.price}</p>

                  <a
                    href={`https://wa.me/${whatsappNumber}`}
                    className="btn btn-primary w-100"
                  >
                    Agendar
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
      <section
        className="py-5"
        style={{
          background: "linear-gradient(90deg, #2563eb, #9333ea)",
        }}
      >
        <div className="container bg-white rounded-4 shadow p-4">
          <div className="row align-items-center">
            {/* 👨‍⚕️ Avatar */}
            <div className="col-md-4 text-center mb-4 mb-md-0">
              <div
                className="mx-auto mb-3 d-flex align-items-center justify-content-center"
                style={{
                  width: "180px",
                  height: "180px",
                  borderRadius: "50%",
                  background: "#e0e7ff",
                  fontSize: "80px",
                }}
              >
                👨‍⚕️
              </div>

              <div className="text-warning fs-4">⭐⭐⭐⭐⭐</div>
            </div>

            {/* 📋 Info */}
            <div className="col-md-8">
              <h3 className="fw-bold mb-2">Dr. Juan Pérez García</h3>

              <p className="text-muted mb-3">Médico Cirujano</p>

              <ul className="list-unstyled">
                <li className="mb-2">✅ Cédula Profesional: 1234567</li>
                <li className="mb-2">
                  ✅ Especialidad en Medicina Interna - UNAM
                </li>
                <li className="mb-2">✅ 15 años de experiencia</li>
                <li className="mb-2">✅ Miembro del Colegio de Médicos</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section
        className="text-white text-center py-5"
        style={{
          background: "linear-gradient(90deg, #2563eb, #9333ea)",
        }}
      >
        <div className="container">
          <h2 className="fw-bold mb-3">¿Necesitas una Consulta?</h2>

          <p className="mb-4">Estamos aquí para ayudarte. Contáctanos ahora</p>

          <div className="d-flex justify-content-center gap-3 flex-wrap">
            <a
              href="https://wa.me/55123456789"
              className="btn btn-success px-4"
            >
              📞 WhatsApp
            </a>

            <a href="tel:55123456789" className="btn btn-light px-4">
              📞 Llamar Ahora
            </a>

            <a
              href="mailto:correo@email.com"
              className="btn btn-outline-light px-4"
            >
              ✉️ Email
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

function Footer() {
  return (
    <footer
      className="container-fluid py-5 text-center"
      style={{
        background: "linear-gradient(180deg, #0f172a, #020617)",
      }}
    >
      <div className="container">
        <p
          className="mb-2"
          style={{
            color: "#cbd5f5",
            fontSize: "14px",
          }}
        >
          © 2026{" "}
          <span style={{ color: "#ffffff", fontWeight: "600" }}>
            Consultorio Médico Salud+
          </span>{" "}
          Todos los derechos reservados.
        </p>

        <p
          style={{
            color: "#64748b",
            fontSize: "13px",
          }}
        >
          Demo creado por Desarrollo Web Profesional
        </p>
      </div>
    </footer>
  );
}

export default Consultorio;
