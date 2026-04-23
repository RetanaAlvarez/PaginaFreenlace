const urlJLE = "https://disenosjle.vercel.app/";
const urlLeny = "https://lenyyanel.vercel.app/";

const imagenJLE="src/assets/jlemadera.png";
const imagenlenyyanel = "src/assets/lenyyanel.png";

export const projectsRealData = {
    header: {
        titulo: "Algunos proyectos reales",
        descripcion: "Estos son ejemplos de sitios que he desarrollado y pueden adaptarse a diferentes tipos de negocio."
    },
    card: [
        {
            imagen:imagenJLE,
            url: urlJLE,
            nombre: "JLE Corte y Grabado Láser",
            descripcioncard: "Transformamos tus ideas en creaciones únicas de madera MDF. Diseños personalizados con tecnología láser para cada ocasión especial.",
            boton: "Ver sitio"
        }, {
            imagen:imagenlenyyanel,
            url: urlLeny,
            nombre: "Leny Yanel",
            descripcioncard: "Esferas de Cristal y Decoraciones Navideñas",
            boton: "Ver sitio"
        }
    ]
};

export const aboutMe = {
    aboutme: {
        titulo: "",
        descripcion: [
            "Soy desarrollador web freelance con experiencia en crear sitios que realmente ayudan a los negocios a crecer.",
            "Mi enfoque es simple: entender las necesidades de tu negocio y crear una solución web que convierta visitantes en clientes, sin complicaciones técnicas."
        ],
        boton: "Ver portafolio completo",
        card: {
            subtitulo: "¿Por qué trabajar conmigo?",
            lista: [{
                encabezado: "Comunicación clara",
                descripcion: "Sin lenguaje técnico, todo explicado de forma simple"
            }, {
                encabezado: "Entrega a tiempo",
                descripcion: "Respeto los plazos acordados y mantengo informado del progreso"
            }, {
                encabezado: "Soporte continuo",
                descripcion: "No desaparezco después de entregar, estoy para ayudarte"
            }, {
                encabezado: "Enfoque en resultados",
                descripcion: "Tu éxito es mi prioridad, no solo entregar código"
            },
            ]
        }
    }
};
