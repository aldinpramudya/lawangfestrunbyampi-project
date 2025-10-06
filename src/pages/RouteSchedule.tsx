import SectionHeader from "../components/SectionHeader";
import { useState } from "react";
import { routePictures } from "../../constants";

export default function RouteSchedule() {
    type ImageType = "Rute" | "Venue";
    const [selectedImage, setSelectedImage] = useState<ImageType>("Rute")

    return (
        <section id="rute">
            <div className="min-h-screen bg-white">
                <SectionHeader title="Rute dan Jadwal" bgColor="blue4" />
                <div className="max-w-8xl mx-auto grid grid-cols-1 grid-custom items-start px-8 py-12 md:px-40 md:py-20">
                    {/* Konten Kiri */}
                    <div className="space-y-3">
                        {/* Hari & Tanggal */}
                        <div>
                            <h4 className="uppercase blue3-font-custom font-cheapsman font-semibold text-[30px] tracking-wide mb-2">
                                Hari dan Tanggal :
                            </h4>
                            <p className="font-cheapsman text-6xl md:text-[76px] leading-tight">
                                MINGGU,
                                <br />
                                30 NOVEMBER 2025
                            </p>
                        </div>

                        {/* Flag Off */}
                        <div>
                            <h4
                                className="uppercase blue3-font-custom font-cheapsman font-semibold text-[30px] tracking-wide mb-2">
                                START :
                            </h4>
                            <p className="font-cheapsman text-6xl md:text-[76px] leading-tight">
                                05.00 - Finished
                            </p>
                        </div>

                        {/* Tempat */}
                        <div>
                            <h4
                                className="uppercase blue3-font-custom font-cheapsman font-semibold text-[30px]  tracking-wide mb-2">
                                Tempat :
                            </h4>
                            <p className="font-cheapsman text-6xl md:text-[76px] leading-tight">
                                PETIK MADU
                                <br />
                                JL. Dr. Wahidin No. 8, Lawang
                            </p>
                        </div>
                    </div>
                    {/* Konten Kiri End */}
                    {/* Konten Kanan */}
                    <div>
                        {/* Tombol Pilihan */}
                        <div className="flex justify-center gap-4 mt-4">
                            {(Object.keys(routePictures) as ImageType[]).map((route) => (
                                <button
                                    key={route}
                                    onClick={() => setSelectedImage(route)}
                                    className={`font-cheapsman px-4 py-2 rounded-lg font-semibold transition-all duration-300 ${selectedImage === route
                                        ? "bg-blue-600 text-white shadow-lg"
                                        : "bg-gray-200 hover:bg-gray-300"
                                        }`}
                                >
                                    {route}
                                </button>
                            ))}
                        </div>
                        {/* Gambar Rute */}
                        <div className="overflow-hidden mt-6 flex justify-center">
                            <img
                                key={selectedImage} 
                                src={routePictures[selectedImage]}
                                alt={`Rute Lari ${selectedImage}`}
                                className="w-[600px] rounded-xl object-cover hover:shadow-[0_0_25px_#3b82f6] transition-all duration-500"
                            />
                        </div>
                        {/* Konten Kanan End */}
                    </div>
                </div>
            </div>
        </section>
    )
}