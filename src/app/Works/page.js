import ContactCard from "@/app/components/ContactCard";
import styles from "@/app/styles/contact.module.css"
import ContactForm from "@/app/components/ContactForm";
import Nav from "@/app/components/Nav";
import Header from "@/app/components/Header";

const Contact = () => {
    return (
        <>
            <Header/>
            <div className={styles.container}>
            <h1>Contact Us</h1>
            <ContactCard/>
                <section className={styles.contact_section}>
                    <h2>We&apos;d love to hear <span>from you</span></h2>
                    <ContactForm/>
                </section>
            </div>
            <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3505.4319231836616!2d77.57278807573249!3d28.526734488876773!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ceb4eaaaaaaab%3A0x321412756718874c!2sShiv%20Nadar%20University!5e0!3m2!1sen!2sin!4v1686034524643!5m2!1sen!2sin"
                width={1000} height={500} style={{border:10}} allowFullScreen="" loading="lazy"
                referrerPolicy="no-referrer-when-downgrade" className={styles.mapping}>
            </iframe>
        </>
    );
};

export default Contact;