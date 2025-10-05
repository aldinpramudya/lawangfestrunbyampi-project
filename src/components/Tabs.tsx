import { tabs } from "../../constants";

interface TabsProps {
    activeTab: string;
    onTabChange: (tab: string) => void;
}

export default function Tabs({
    activeTab,
    onTabChange
}: TabsProps) {
    return (
        <div className="flex w-full border border-blue-500 rounded-full overflow-hidden">
            {tabs.map((tab) => (
                <button
                    key={tab}
                    onClick={() => onTabChange(tab)}
                    className={`flex-1 py-2 text-[28px] font-cheapsman font-semibold border-r tracking-wider border-blue-500 last:border-r-0 transition-colors
            ${activeTab === tab
                            ? "bg-blue-500 text-white"
                            : "bg-white text-blue-500 hover:bg-blue-100"
                        }`}
                >
                    {tab}
                </button>
            ))}
        </div>
    );
}