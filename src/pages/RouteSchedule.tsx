import SectionHeader from "../components/SectionHeader";

export default function RouteSchedule() {
    return (
        <section id="rute">
            <div className="min-h-screen bg-white">
                <SectionHeader title="Rute dan Jadwal" bgColor="blue4" />
                <div className="max-w-8xl mx-auto grid grid-cols-1 md:grid-cols-2 items-start px-8 py-12 md:px-40 md:py-20">
                    {/* Konten Kiri */}
                    <div className="space-y-3">
                        {/* Hari & Tanggal */}
                        <div>
                            <h4 className="uppercase blue3-font-custom font-cheapsman font-semibold text-[30px] tracking-wide mb-2">
                                Hari dan Tanggal :
                            </h4>
                            <p className="font-cheapsman text-6xl md:text-[76px] leading-tight">
                                SENIN,
                                <br />
                                21 OKTOBER 2025
                            </p>
                        </div>

                        {/* Flag Off */}
                        <div>
                            <h4
                                className="uppercase blue3-font-custom font-cheapsman font-semibold text-[30px] tracking-wide mb-2">
                                Flag Off :
                            </h4>
                            <p className="font-cheapsman text-6xl md:text-[76px] leading-tight">
                                05.30
                            </p>
                        </div>

                        {/* Tempat */}
                        <div>
                            <h4
                                className="uppercase blue3-font-custom font-cheapsman font-semibold text-[30px]  tracking-wide mb-2">
                                Tempat :
                            </h4>
                            <p className="font-cheapsman text-6xl md:text-[76px] leading-tight">
                                BALAI KOTA
                                <br />
                                LALALAND
                            </p>
                        </div>
                    </div>
                    {/* Konten Kiri End */}
                    {/* Konten Kanan */}
                    <div>
                        <h4 className="uppercase blue3-font-custom font-cheapsman font-semibold text-[30px] tracking-wide pt-3">
                            Rute Lari :
                        </h4>
                        <div className="overflow-hidden">
                            <img
                                src="/images/route.jpg"
                                alt="Rute Lari"
                                className="w-[600px] object-cover"
                            />
                        </div>
                    </div>
                    {/* Konten Kanan End */}
                </div>
            </div>
        </section>
    )
}