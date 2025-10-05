import { content } from "../../constants";

interface TabContentProps {
    activeTab: string;
}

export default function TabContent({ activeTab }: TabContentProps) {
    return (
        <div className="mt-4 p-4 border border-gray-200 rounded-lg bg-white shadow-sm">
            <h2 className="text-lg font-semibold text-blue-600 mb-2">{activeTab}</h2>
            <p className="text-gray-700 text-sm leading-relaxed">{content[activeTab]}</p>
        </div>
    )
}