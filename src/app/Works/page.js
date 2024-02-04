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
            <Herosection title={"How it works"} content={"Our healthcare system securely manages prescriptions via decentralized networks. Each prescription, recorded as a blockchain transaction with a unique digital signature, ensures authenticity and prevents tampering. Patients access their prescriptions through a user-friendly Next.js, Tailwind, and Spline interface, connected to Express.js and MongoDB. Solidity smart contracts govern interactions, enforcing permissions and rules. Infura's infrastructure facilitates Ethereum blockchain communication, ensuring reliability and scalability. This system enhances security, eliminates fraud, and prioritizes patient safety with transparency and accountability."}/>
        </>
    );
};

export default Contact;