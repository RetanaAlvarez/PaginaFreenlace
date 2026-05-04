const PHONE = "7121933662";
const DEMO = "5512345678";

export function createWhatsAppLink(message) {
  return `https://wa.me/${PHONE}?text=${encodeURIComponent(message)}`;
}

export function createWhatsAppLinkDemo(message) {
  return `https://wa.me/${DEMO}?text=${encodeURIComponent(message)}`;
}

export function createWhatsAppRestaurante(message) {
  return `https://wa.me/${DEMO}?text=${encodeURIComponent(message)}`;
}
