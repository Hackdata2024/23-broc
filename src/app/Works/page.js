import ContactCard from "@/app/components/ContactCard";
import styles from "@/app/styles/contact.module.css"
import ContactForm from "@/app/components/ContactForm";
import Nav from "@/app/components/Nav";
import Header from "@/app/components/Header";
import Herosection from "@/app/components/herosection";

const Contact = () => {
    return (
        <>
            <Header/>
            <Herosection title={"How it works"} content={"Working code"}/>
        </>
    );
};

export default Contact;