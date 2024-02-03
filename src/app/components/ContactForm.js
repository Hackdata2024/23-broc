"use client"
import styles from "@/app/styles/contact.module.css"
import {Mulish} from "next/font/google";
import {useState} from "react";

const mulish = Mulish({
    weight: ['300','400','500','600','700','800','900'],
    subsets: ['latin'],
    display: 'swap'
})
const ContactForm = () => {

    const [user, setUser] = useState({
         username:"",
         email:"",
         phone:"",
         message:""
    })

    function handleChange(e) {
        const name = e.target.name;
        const value = e.target.value;

        setUser((prevUser)=>({...prevUser, [name]: value}));
    }
    const handleSubmit = async () => {
        try {
            const response = await fetch('/api/contact', {
                method: 'POST',
                headers: {"Content_Type": "application/json"},
                body: JSON.stringify({
                    username: user.username,
                    email: user.email,
                    phone: user.phone,
                    message: user.message
                })
            })
            if (response.status === 200) {
                setUser({
                    username: "",
                    email: "",
                    phone: "",
                    message: ""
                })
                setStatus('success');
            } else {
                setStatus('error');
            }

        }catch (e) {
            console.log(e)
        }

    }

    return (
        <form className={styles.contact_form} onSubmit={handleSubmit}>
            <div className={styles.input_field}>
                <label htmlFor="username" className={styles.label}>
                    Enter your name:
                    <input type="text" name="username" id="username"
                           placeholder="Enter your name"
                           className={mulish.className}
                           value={user.username}
                           onChange={handleChange}
                    />
                </label>
            </div>
            <div className={styles.input_field}>
                <label htmlFor="email" className={styles.label}>
                    Enter your email:
                    <input type="text" name="email" id="email"
                           placeholder="Enter your email"
                           className={mulish.className}
                           value={user.email}
                           onChange={handleChange}
                    />
                </label>
            </div>
            <div className={styles.input_field}>
                <label htmlFor="phone" className={styles.label}>
                    Enter your number:
                    <input type="text" name="phone" id="phone"
                           placeholder="Enter your number"
                           className={mulish.className}
                           value={user.phone}
                           onChange={handleChange}
                    />
                </label>
            </div>
            <div className={styles.input_field}>
                <label htmlFor="message" className={styles.label}>
                    Message:
                    <textarea name="message" id="message" rows={5}
                           placeholder="Enter your message"
                           className={mulish.className}
                              value={user.message}
                              onChange={handleChange}
                              required
                    />
                </label>
            </div>
            <div>
                <button type="submit" className={mulish.className}>
                    Send message
                </button>
            </div>
        </form>
    );
};

export default ContactForm;