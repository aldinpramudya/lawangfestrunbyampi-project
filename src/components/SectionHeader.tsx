import { colors } from '../../constants';

interface SectionHeaderProps {
    title: string;
    bgColor?: keyof typeof colors;
}

export default function SectionHeader({ title, bgColor = "blue1" }: SectionHeaderProps) {
    return (
        <section className='font-cheapsman w-full py-5 md:py-10 flex items-center relative' style={{ backgroundColor: colors[bgColor] }}>
            <h1 className="absolute text-[9vw] md:text-[5vw] font-bold text-black/20 uppercase tracking-widest text-center pb-1 md:pb-3">
                ampi running fest 2025
            </h1>
            {/* Box Hitam */}
            <div className="relative bg-black text-white px-4 py-1 md:px-8 md:py-3">
                <h2 className="text-lg md:text-xl font-bold tracking-widest uppercase">
                    {title}
                </h2>
            </div>
        </section>
    )
}