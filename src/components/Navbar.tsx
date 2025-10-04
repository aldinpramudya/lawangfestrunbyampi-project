import { NavLinks } from "../../constants";

export default function Navbar() {

    return (
        <nav className="w-full flex items-center justify-between py-4 px-6 fixed top-0 left-0 z-50 bg-transparent">
            {/* Logo */}
            <div className="flex items-center gap-2 px-15">
                <img src="/images/logo.png" alt="Logo" className="w-30 h-30 object-contain" />
            </div>

            {/* Nav Menu */}
            <div className="md:flex gap-8 list-none px-15">
                {NavLinks.map((link) => (
                    <li key={link.id}>
                        <a href={`#${link.id}`} className="text-white uppercase hover:text-black transition-colors duration-200">
                            {link.name}
                        </a>
                    </li>
                ))}
            </div>
        </nav>
    )
}