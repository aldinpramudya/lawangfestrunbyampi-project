import SectionHeader from "../components/SectionHeader"
import { rules } from "../../constants"
// import Tabs from "../components/Tabs";
// import TabContent from "../components/TabContent";
// import { tabs } from "../../constants";
// import { useState } from "react";

export default function TechnicalInstruction() {
    // const [activeTab, setActiveTab] = useState(tabs[0]);

    return (
        <section id="teknis">
            <div className="min-h-screen bg-white">
                <SectionHeader title="Petunjuk Teknis" bgColor="blue5" />
                {/* Navigasi Tab */}
                <div className="px-4 md:py-10 md:px-60">
                    <h1 className="font-cheapsman blue3-font-custom text-3xl">
                        peraturan dan syarat umum :
                    </h1>
                    <table className="border-collapse border border-gray-300 rounded-lg mt-4 mb-3 md:mb-0">
                        <thead>
                            <tr className="bg-blue-600 text-white text-left">
                                <th className="py-3 px-4 w-[80px] text-center font-semibold">No</th>
                                <th className="py-3 px-4 font-semibold">Peraturan</th>
                            </tr>
                        </thead>
                        <tbody>
                            {rules.map((item) => (
                                <tr
                                    key={item.no}
                                    className="border-b border-gray-200 hover:bg-blue-50 transition"
                                >
                                    <td className="py-3 px-4 text-center font-bold">{item.no}</td>
                                    <td className="py-3 px-4 text-gray-800">{item.rule}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </section>
    )
}