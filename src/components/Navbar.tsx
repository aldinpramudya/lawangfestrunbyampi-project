import { NavLinks } from "../../constants";
import { useEffect, useState } from "react";
import { RxHamburgerMenu } from "react-icons/rx";
import { IoMdClose } from "react-icons/io";

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 80) {
                setScrolled(true);
            } else {
                setScrolled(false);
            }
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    })

    return (
        <nav className={`w-full flex items-center justify-between py-4 px-6 fixed top-0 left-0 z-50 bg-transparent ${scrolled
                ? "bg-white shadow-md text-black"
                : "bg-transparent text-white"
            }`}>
            {/* Logo */}
            <div className="flex items-center gap-2 md:px-15">
                <img src="/images/logo.png" alt="Logo" className="w-30 h-30 object-contain shrink-0" />
            </div>

            {/* Nav Menu */}
            <div className="hidden md:flex gap-8 list-none px-15">
                {NavLinks.map((link) => (
                    <li key={link.id}>
                        <a href={`#${link.id}`} className={`font-cheapsman text-2xl uppercase transition-colors duration-200 ${scrolled ? "text-black" : "text-white"}`}>
                            {link.name}
                        </a>
                    </li>
                ))}
            </div>

            {/* Button Hamburger */}
            <button className="md:hidden text-gray-800 focus:outline-none" onClick={() => setIsOpen(!isOpen)}>
                {isOpen ? <IoMdClose color={`${scrolled ? "black" : "white"}`} size={30} /> : <RxHamburgerMenu color={`${scrolled ? "black" : "white"}`} size={30} />}
            </button>

            {/* Mobile Menu */}
            {isOpen && (
                <div className="absolute top-full left-0 w-full bg-white/90 backdrop-blur-md shadow-md md:hidden">
                    <ul className="flex flex-col items-center gap-4 py-4 list-none">
                        {NavLinks.map((link) => (
                            <li key={link.id}>
                                <a href={`#${link.id}`} className="text-gray-800 font-cheapsman hover:text-black transition-colors duration-200" onClick={() => setIsOpen(false)}>
                                    {link.name}
                                </a>
                            </li>
                        ))}
                    </ul>
                </div>
            )}

        </nav>
    )
}