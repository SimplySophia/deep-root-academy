import { FaWhatsapp } from "react-icons/fa";

export default function WhatsAppButton() {
  return (
    <a
    href="https://wa.me/2348134489773?text=Hello%20I%27m%20interested%20in%20your%20program!" 
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-lg transition-transform transform hover:scale-110 animate-bounce"
    >
      <FaWhatsapp className="text-3xl" />
    </a>
  );
}
