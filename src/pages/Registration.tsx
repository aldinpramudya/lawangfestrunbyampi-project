import SectionHeader from "../components/SectionHeader";
import CardRegistration from "../components/CardRegistration";
import { linkRegistration } from "../../constants";

export default function Registration() {
    return (
        <section id="pendaftaran">
            <SectionHeader title="Pendaftaran" bgColor="blue3" />
            <div className="min-h-screen bg-cover bg-[url('/images/background-registration.png')] flex flex-wrap justify-evenly items-center">
                {linkRegistration.map((link) => (
                    <CardRegistration key={link.id} name={link.name} googleForm={link.googleForm} price={link.price} />
                ))}
            </div>
        </section>
    )

}
