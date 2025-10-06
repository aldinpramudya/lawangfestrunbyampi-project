import { FaWhatsapp } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { FaInstagram } from "react-icons/fa6";

export default function Footer(){
    return(
        <footer className="w-full bg-black text-white py-4 px-8 flex items-center justify-between font-cheapsman">
            {/* Konten Kiri : Copyright */}
            <p className="text-sm">&copy; {new Date().getFullYear()} ampi fest running 2025</p>

            {/* Konten Kanan */}
            <div className="flex items-center space-x-4">
                {/* Whatsapp */}
                <a href="https://wa.me/+6285119920913" target="_blank" rel="noopener noreferrer">
                    <FaWhatsapp size={25}/>
                </a>
                {/* Email */}
                <a href="mailto:ampikabmalang2@gmail.com" rel="noopener noreferrer" className="hover:underline" target="_blank">
                    <MdEmail size={25}/>
                </a>
                {/* Instagram */}
                <a href="https://www.instagram.com/ampikabmalang/" target="_blank" rel="noopener noreferrer">
                    <FaInstagram size={25}/>
                </a>
            </div>
            
        </footer>
    )
}