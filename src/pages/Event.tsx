export default function Event() {
    return (
        <section id="event">
            <div className="min-h-screen bg-white text-black">
                <div className="max-w-8xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
                    {/* Kontent Kiri */}
                    <div className="flex flex-col items-center space-y-6">
                        <img src="/images/logo.png" alt="Logo" className="w-48 md:w-56" />
                        <h2 className="font-cheapsman blue1-font-custom text-2xl md:text-3xl font-bold tracking-wide uppercase">
                            run in nature, feel the village
                        </h2>
                        <p className="indent-9 text-gray-700 px-2 md:text-xl text-justify leading-relaxed max-w-md">
                            Ampi Fest Running 2025 merupakan event lari yang berada dibawah naungan organisasi Angkatan Muda Pembaharu Indonesia Kab. Malang. 
                            Event ini bertujuan mewadahi para pemuda dan masyarakat umum terkait pentingnya olahraga serta membangun rasa kebersamaan dan euphoria semangat olahraga! 
                            Ampi Fest Running hadir untuk pertama kalinya di Petik Madu, kecamatan Lawang, Kabupaten Malang dengan nuansa keindahan alam. 
                            Kami tunggu kehadiran kalian para runners! See you!
                        </p>
                    </div>
                    {/* Konten Kiri End */}

                    {/* Konten Kanan */}
                    <div className="grid grid-cols-2 gap-2 md:pt-35 px-20 pb-4">
                        <img src="/images/running-photos.png" alt="Running Photos" className="w-[250px]" />
                        <img src="/images/running-photos.png" alt="Running Photos" className="w-[250px]" />
                        <img src="/images/running-photos.png" alt="Running Photos" className="w-[250px]" />
                        <img src="/images/running-photos.png" alt="Running Photos" className="w-[250px]" />
                    </div>
                    {/* Konten Kanan End */}
                </div>
            </div>
        </section>
    )
}