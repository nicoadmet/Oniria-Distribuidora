import { IoLogoWhatsapp } from "react-icons/io";


function WhatsappButton() {
  const phone = "5493416753549"
  const message = "Hola! Quiero hacer un pedido"

  const url = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`

  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-5 right-5 bg-emerald-500 hover:bg-green-600 text-white p-4 rounded-full shadow-lg transition z-10"
    >
      <IoLogoWhatsapp />
    </a>
  )
}

export default WhatsappButton