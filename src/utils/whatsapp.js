const PHONE = "7121933662"; // tu número

export function createWhatsAppLink(message) {
  return `https://wa.me/${PHONE}?text=${encodeURIComponent(message)}`;
}