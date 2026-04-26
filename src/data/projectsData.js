
import restauranteImg from "../assets/restaurante.png";
import tiendaImg from "../assets/tienda.png";
import consultorioImg from "../assets/consultorio.png";
import empresaImg from "../assets/empresa.png";

export const projectsData = {
    project: {
        titulo: "Proyectos",
        descripcion: "Tu sitio web puede verse así o mejor, adaptado a tu negocio.",
        demo: [{
            icono: restauranteImg,
            encabezado: "Restaurante",
            descripcion: "Muestra tu menú y recibe pedidos fácilmente por WhatsApp",
            lista: [
                "Menú digital interactivo",
                "Botón directo a WhatsApp",
                "Galería de platillos"
            ],
            ruta: "/Restaurante",
            active: false,

            color: {
                bg: "linear-gradient(to bottom, #f8802a, #fbbcbc)",
                border: "#fff",
                button: "#ef4444"
            }

        }, {
            icono: tiendaImg,
            encabezado: "Tienda en Línea",
            descripcion: "Muestra tus productos y recibe pedidos por WhatsApp",
            lista: [
                "Catálogo de productos",
                "Carrito de compras",
                "Filtros y búsqueda"
            ],
            ruta: "/Tienda",
            active: false,

            color: {
                bg: "linear-gradient(to bottom, #5898ff, #b3f2fc)",
                border: "#fff",
                button: "#3b82f6"
            }
        }, {
            icono: consultorioImg,
            encabezado: "Consultorio",
            descripcion: "Facilita citas y mejora la atención a tus pacientes",
            lista: [
                "Sistema de citas Online",
                "Información de servicios",
                "Contacto directo"
            ],
            ruta: "/Consultorio",
            active: false,

            color: {
                bg: "linear-gradient(to bottom, #9244db, #ff80bf)",
                border: "#fff",
                button: "#a855f7"
            }
        }, {
            icono: empresaImg,
            encabezado: "Empresa",
            descripcion: "Presenta tus servicios de forma Profesional",
            lista: [
                "Portafolio de servicios",
                "Casos de éxito",
                "Formulario de contacto"
            ],
            ruta: "/Empresa",
            active: false,

            color: {
                bg: "linear-gradient(to bottom, #2ff879, #90f5d3)",
                border: "#fff",
                button: "#16a34a"
            }
        }],
        boton: "Ver ejemplo",
        comentario: "Algunos ejemplos son demostrativos y pueden adaptarse completamente a tu negocio."
    }
};
