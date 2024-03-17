import ContactsForm from "@/components/contactsPage/ContactsForm";
import ContactsHero from "@/components/contactsPage/ContactsHero";
import ContactsLinks from "@/components/contactsPage/ContactsLinks";

const Contact = () => {
    return (<>
        <ContactsHero />
        <ContactsLinks/>
        <ContactsForm />
    </>);
}

export default Contact;