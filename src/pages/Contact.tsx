import SectionHeader from "../components/SectionHeader"

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
                    <div className="pt-10">
                        {/* Whatsapp */}
                        <div>
                            <h4 className="uppercase blue3-font-custom font-cheapsman font-semibold text-[30px] tracking-wide">
                                narahubung / whatsapp :
                            </h4>
                            <a href="https://wa.me/+6281953773800" className="hover:underline" target="_blank">
                                <p className="font-cheapsman text-5xl md:text-[76px] leading-tight">
                                    081953773800
                                    <br />
                                </p>
                            </a>
                            <p className="font-cheapsman text-2xl">
                                an. Vincent
                            </p>
                        </div>
                        {/* Whatsapp End */}
                        {/* Email */}
                        <div className="pt-5">
                            <h4 className="uppercase blue3-font-custom font-cheapsman font-semibold text-[30px] tracking-wide">
                                Email :
                            </h4>
                            <a href="mailto" className="hover:underline" target="_blank">
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
        </section>
    )
}