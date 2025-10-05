import { colors } from '../../constants';

interface SectionHeaderProps {
    title: string;
    bgColor?: keyof typeof colors;
}

export default function SectionHeader({ title, bgColor = "blue1" }: SectionHeaderProps) {
    return (
        <section className='w-full py-8 flex-itemx-center justify-center' style={{ backgroundColor: colors[bgColor] }}>
            <h1 className="absolute text-[6vw] md:text-[4vw] font-bold text-black/20 uppercase tracking-widest text-center">
                lawang fest run by ampi
            </h1>
            {/* Box Hitam */}
            <div className="relative bg-black text-white px-8 py-3">
                <div className="relative bg-black text-white px-8 py-3">
                    <h2 className="text-lg md:text-xl font-bold tracking-widest uppercase">
                        {title}
                    </h2>
                </div>
            </div>
        </section>
    )
}