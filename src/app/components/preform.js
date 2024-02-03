'use client'
import styles from "@/app/styles/contact.module.css"
import {Mulish} from "next/font/google";
import {useState} from "react";
import Header from "@/app/components/Header";
import Spline from "@splinetool/react-spline";

const mulish = Mulish({
    weight: ['300','400','500','600','700','800','900'],
    subsets: ['latin'],
    display: 'swap'
})
const Preform = () => {

    const [user, setUser] = useState({
        p_name:"",
        d_name:"",
        gender:"",
        place:"",
        age:"",
        weight:"",
        date:"",
        dosage: ""
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
                headers: {"Content-Type": "application/json"},
                body: JSON.stringify({
                    p_name: user.p_name,
                    d_name: user.d_name,
                    gender: user.gender,
                    place: user.place,
                    age: user.age,
                    weight: user.weight,
                    date: user.date,
                    dosage: user.dosage
                })
            })
            if (response.status === 200) {
                setUser({
                    p_name:"",
                    d_name:"",
                    gender:"",
                    place:"",
                    age:"",
                    weight:"",
                    date:"",
                    dosage: ""
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
        <>
        <Header/>
            {/*<h2 style={{marginTop: '2rem' }}>Presciption Form</h2>*/}
        <div className={styles.preform}>
        <form className={styles.contact_form} id={styles.contact_form_pre} onSubmit={handleSubmit}>
            <div className={styles.input_field}>
                <label htmlFor="p_name" className={styles.label} style={{ display: 'block', marginBottom: '8px' }}>

                    <input type="text" name="p_name" id="p_name"
                           placeholder="Enter Patient name"
                           className={mulish.className}
                           value={user.p_name}
                           onChange={handleChange}
                           required
                    />
                </label>
            </div>
            <div className={styles.input_field}>
                <label htmlFor="d_name" className={styles.label}>

                    <input type="text" name="d_name" id="d_name"
                           placeholder="Enter Doctor Name"
                           className={mulish.className}
                           value={user.d_name}
                           onChange={handleChange}
                           required
                    />
                </label>
            </div>
            <div className={styles.input_field}>
                <label htmlFor="gender" className={styles.label}>

                    <input type="text" name="gender" id="gender"
                           placeholder="Enter Gender"
                           className={mulish.className}
                           value={user.gender}
                           onChange={handleChange}
                           required
                    />
                </label>
            </div>
            <div className={styles.input_field}>
                <label htmlFor="place" className={styles.label}>

                    <input type="text" name="place" id="place"
                           placeholder="Enter Place"
                           className={mulish.className}
                           value={user.place}
                           onChange={handleChange}
                           required
                    />
                </label>
            </div>

            <div className={styles.input_field}>
                <label htmlFor="age" className={styles.label}>

                    <input type="number" name="age" id="age"
                           placeholder="Enter Age"
                           className={mulish.className}
                           value={user.age}
                           onChange={handleChange}
                           required
                    />
                </label>
            </div>

            <div className={styles.input_field}>
                <label htmlFor="weight" className={styles.label}>
                    <input type="number" name="weight" id="weight"
                           placeholder="Enter weight"
                           className={mulish.className}
                           value={user.weight}
                           onChange={handleChange}
                           required
                    />
                </label>
            </div>

            <div className={styles.input_field}>
                <label htmlFor="date" className={styles.label}>

                    <input
                           name="date"
                           id="date"
                           defaultValue={"datetime-local"}
                           placeholder="Enter Date"
                           className={mulish.className}
                           onChange={handleChange}
                           required
                           type="datetime-local"
                           // value={dateTime}
                    />
                </label>
            </div>

            <div className={styles.input_field}>
                <label htmlFor="dosage" className={styles.label}>

                    <textarea name="dosage" id="dosage" rows={5}
                              placeholder="Enter Medicine Name, Quantity, Notes"
                              className={mulish.className}
                              value={user.dosage}
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
            <div className={styles.spline_comp_preform}>
                <Spline scene="https://prod.spline.design/pmEyvZDSG9tzX92z/scene.splinecode" />
                {/*<Spline scene="https://my.spline.design/dnaparticles-13aa542aa1a6c2e1c348a22e3d4f06a7/" />*/}
                {/*<Image src={imageUrl} alt="image" height={100} width={500}/>*/}
            </div>
        </div>
        </>
    );
};

export default Preform;