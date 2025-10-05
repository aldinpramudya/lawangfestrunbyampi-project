import SectionHeader from "../components/SectionHeader"
import Tabs from "../components/Tabs";
import TabContent from "../components/TabContent";
import { tabs } from "../../constants";
import { useState } from "react";

export default function TechnicalInstruction() {
    const [activeTab, setActiveTab] = useState(tabs[0]);

    return (
        <section id="teknis">
            <div className="min-h-screen bg-white">
                <SectionHeader title="Petunjuk Teknis" bgColor="blue5" />
                {/* Navigasi Tab */}
                <div className="py-10 px-60">
                    <Tabs activeTab={activeTab} onTabChange={setActiveTab} />
                    {/* Konten Tab */}
                    <TabContent activeTab={activeTab} />
                </div>
            </div>
        </section>
    )
}