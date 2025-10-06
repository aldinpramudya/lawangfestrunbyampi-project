import { useEffect, useState } from "react"

export default function Home() {
    const targetDate = new Date('2025-11-30T00:00:00').getTime();
    const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });

    useEffect(() => {
        const timer = setInterval(() => {
            const now = new Date().getTime();
            const diff = targetDate - now;

            if (diff > 0) {
                setTimeLeft({
                    days: Math.floor(diff / (1000 * 60 * 60 * 24)),
                    hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
                    minutes: Math.floor((diff / 1000 / 60) % 60),
                    seconds: Math.floor((diff / 1000) % 60),
                });
            }
        }, 1000);

        return () => clearInterval(timer);
    });

    return (
        <section id="home">
            <div className="home-container relative min-h-screen bg-cover bg-[url('/images/background.png')]">
                <div className="relative z-10">
                    {/* Info Tanggal */}
                    <div className="px-7 font-cheapsman">
                        <p className="text-xl md:text-[48px] tracking-wide uppercase text-white">ampi fest running 2025 // 30 November 2025</p>
                        <h2 className="text-4xl md:text-[120px] text-white mb-6">EARLY BIRD SUDAH DIBUKA !</h2>
                    </div>
                    {/* Info Tanggal End */}
                    {/* Box */}
                    <div className="bg-black p-6 md:p-10 max-w-4xl tracking-wider">
                        <h1 className="text-4xl uppercase md:text-[120px] font-cheapsman font-bold text-blue-500 leading-tight">
                            run in nature,
                        </h1>
                        <h1 className="text-4xl uppercase md:text-[120px] font-cheapsman font-bold text-white leading-tight">
                            feel the village
                        </h1>

                        {/* Tombol CTA */}
                        <div className="flex flex-wrap gap-4 mt-6">
                            <a href="#pendaftaran">
                                <button className="bg-blue-600 text-white px-6 py-3 font-cheapsman font-semibold hover:bg-blue-700 transition">
                                    DAFTAR SEKARANG
                                </button>
                            </a>
                            <a href="#teknis">
                                <button className="border text-white border-white px-6 py-3 font-cheapsman font-semibold hover:bg-white hover:text-black transition">
                                    PELAJARI LEBIH LANJUT
                                </button>
                            </a>
                        </div>
                    </div>
                    {/* Box End */}
                </div>
                {/* Countdown */}
                <div className="font-cheapsman text-center text-white flex items-center justify-center gap-4 absolute 2xl:inset-0 2xl:gap-6 2xl:transform 2xl:translate-x-120 top-30 left-0 w-full py-3">
                    <div>
                        <p className="text-xl 2xl:text-[110px]">{timeLeft.days}</p>
                        <p className="text-xs 2xl:text-sm uppercase">Hari</p>
                    </div>
                    <div>|</div>
                    <div>
                        <p className="text-xl 2xl:text-[110px]">{timeLeft.hours}</p>
                        <p className="text-xs 2xl:text-sm uppercase">Jam</p>
                    </div>
                    <div>|</div>
                    <div>
                        <p className="text-xl 2xl:text-[110px]">{timeLeft.minutes}</p>
                        <p className="text-xs 2xl:text-sm uppercase">Menit</p>
                    </div>
                    <div>|</div>
                    <div>
                        <p className="text-xl 2xl:text-[110px]">{timeLeft.seconds}</p>
                        <p className="text-xs 2xl:text-sm uppercase">Detik</p>
                    </div>
                </div>
            </div>
        </section>
    )
}