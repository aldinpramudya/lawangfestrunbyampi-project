export default function Home() {
    return (
        <section id="home">
            <div className="home-container relative min-h-screen bg-cover bg-[url('/images/background.png')]">
                <div className="relative z-10">
                    {/* Info Tanggal */}
                    <div className="px-7 font-cheapsman">
                        <p className="text-xl md:text-[48px] tracking-wide uppercase text-white">PENDAFTARAN DIBUKA :</p>
                        <h2 className="text-4xl md:text-[120px] text-white mb-6">5 OKTOBER 2025</h2>
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
                            <button className="bg-blue-600 text-white px-6 py-3 font-cheapsman font-semibold hover:bg-blue-700 transition">
                                DAFTAR SEKARANG
                            </button>
                            <button className="border text-white border-white px-6 py-3 font-cheapsman font-semibold hover:bg-white hover:text-black transition">
                                PELAJARI LEBIH LANJUT
                            </button>
                        </div>
                    </div>
                    {/* Box End */}
                </div>
            </div>
        </section>
    )
}