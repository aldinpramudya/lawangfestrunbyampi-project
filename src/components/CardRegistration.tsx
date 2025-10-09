import { colors } from '../../constants';

interface CardRegistrationProps {
    name: string;
    googleForm: string;
    price: string;
    enabled: boolean;
}

export default function CardRegistration({
    name,
    googleForm,
    price,
    enabled
}: CardRegistrationProps) {
    return (
        <div className={`relative rounded-2xl shadow-lg mt-4 md:p-2 w-[250px] h-[280px] md:w-[440px] md:h-[500px] flex flex-col items-center text-center transition-all duration-300 mb-4 
                ${!enabled ? "bg-gray-300 opacity-70 pointer-events-none" : "bg-white hover:scale-[1.03]"}`}>
            {/* Overlay jika disabled */}
            {!enabled&& (
                <div className="absolute inset-0 bg-black/40 rounded-2xl flex items-center justify-center">
                    <span className="text-white font-cheapsman text-3xl md:text-5xl uppercase tracking-wider">
                        Coming Soon
                    </span>
                </div>
            )}
            {/* Logo */}
            <img src="/images/logo.png" alt="Logo" className="w-20 md:w-50" />

            {/* Title */}
            <h2 className="font-cheapsman text-4xl md:text-7xl uppercase tracking-wide mb-2">
                {name}
            </h2>

            {/* Price */}
            <div className="flex items-start justify-center mb-2">
                <span className="text-lg md:text-xl font-cheapsman font-bold mr-1 md:mr-2" style={{ color: colors.blue3 }}>
                    Rp
                </span>
                <span className="text-4xl md:text-6xl font-cheapsman">{price}</span>
                <span className="text-lg md:text-sm  font-cheapsman">/pax</span>
            </div>

            {/* Button */}
            {enabled ? (
                <a href={googleForm} target="_blank">
                    <button
                        className="mt-4 bg-blue-600 font-cheapsman text-white md:text-xl font-semibold tracking-wider uppercase px-6 py-3 rounded-md hover:bg-blue-700 transition-all duration-300"
                    >
                        Daftar Sekarang
                    </button>
                </a>
            ) : (
                <button
                    disabled
                    className="mt-4 bg-gray-400 text-gray-100 cursor-not-allowed font-cheapsman md:text-xl font-semibold tracking-wider uppercase px-6 py-3 rounded-md transition-all duration-300"
                >
                    Coming Soon
                </button>
            )}
        </div>
    )
}