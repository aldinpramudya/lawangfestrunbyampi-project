import SectionHeader from "../components/SectionHeader"
import Footer from "../components/Footer"

export default function Contact() {
    return (
        <section id="contact">
            <div className="min-h-screen bg-white">
                <SectionHeader title="Contact" bgColor="blue3" />
                {/* Container Konten */}
                <div className="px-5 md:px-60 py-10">
                    <h1 className="font-cheapsman text-[50px] leading-15 md:text-[100px] md:leading-25">
                        ada pertanyaan ? <br />
                        hubungi kami
                    </h1>
                    <div className="pt-10 grid grid-cols-1 grid-custom">
                        {/* Whatsapp */}
                        <div>
                            <h4 className="uppercase blue3-font-custom font-cheapsman font-semibold text-[30px] tracking-wide">
                                narahubung / whatsapp :
                            </h4>
                            <a href="https://wa.me/+6285119920913" className="hover:underline" target="_blank">
                                <p className="font-cheapsman text-5xl md:text-[76px] leading-tight">
                                    085119920913
                                    <br />
                                </p>
                            </a>
                            <p className="font-cheapsman text-2xl">
                                Admin
                            </p>
                            {/* Instagram */}
                            <div className="pt-5">
                                <h4 className="uppercase blue3-font-custom font-cheapsman font-semibold text-[30px] tracking-wide">
                                    instagram :
                                </h4>
                                <a href="https://www.instagram.com/ampikabmalang/" className="hover:underline" target="_blank">
                                    <p className="font-cheapsman text-5xl md:text-[76px] leading-tight">
                                        @ampikabmalang
                                    </p>
                                </a>
                            </div>
                        </div>
                        {/* Whatsapp End */}
                        {/* Email */}
                        <div className="pt-5 md:pt-0">
                            <h4 className="uppercase blue3-font-custom font-cheapsman font-semibold text-[30px] tracking-wide">
                                Email :
                            </h4>
                            <a href="mailto:kabmalangampi@gmail.com" rel="noopener noreferrer" className="hover:underline" target="_blank">
                                <p className="font-cheapsman text-4xl md:text-[76px] leading-tight">
                                    kabmalangampi@gmail.com
                                </p>
                            </a>
                        </div>
                        {/* Email End */}
                    </div>
                </div>
                {/* Container Konten End */}
            </div>
            <Footer />
        </section>
    )
}