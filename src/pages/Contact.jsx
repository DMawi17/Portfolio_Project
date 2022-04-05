import ContactContent from "../components/contact/ContactContent";
import MainTitle from "../components/titles/MainTitle";
import { useData } from "../contexts/data-hooks";
import { v4 } from "uuid";
import Form from "../components/contact/Form";

function Contact() {
    const { contact, buttons, icons } = useData();

    const { contact_title } = contact;
    const { contactBtn } = buttons;

    return (
        <section className="contact section" id="contact">
            <MainTitle {...contact_title} />

            <div className="contact__container container grid">
                {contactBtn.map((content) => (
                    <ContactContent key={v4()} {...content} />
                ))}

                <Form {...icons} />
            </div>
        </section>
    );
}

export default Contact;
