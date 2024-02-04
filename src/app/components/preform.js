"use client";
import styles from "@/app/styles/contact.module.css";
import { Mulish } from "next/font/google";
import { useState } from "react";
import Header from "@/app/components/Header";

const mulish = Mulish({
  weight: ["300", "400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
  display: "swap",
});
const Preform = () => {
  const [qr, setQR] = useState();
  const [user, setUser] = useState({
    p_name: "",
    d_name: "",
    gender: "",
    place: "",
    age: "",
    weight: "",
    date: "",
    dosage: "",
    refills: "",
  });

  function handleChange(e) {
    const name = e.target.name;
    const value = e.target.value;

    setUser((prevUser) => ({ ...prevUser, [name]: value }));
  }
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // setUser({
      //     p_name:"",
      //     d_name:"",
      //     gender:"",
      //     place:"",
      //     age:"",
      //     weight:"",
      //     date:"",
      //     dosage: "",
      //     refills: ""
      // })
      const response = await fetch("/api/formsubmit", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          p_name: user.p_name,
          d_name: user.d_name,
          gender: user.gender,
          place: user.place,
          age: user.age,
          weight: user.weight,
          date: user.date,
          dosage: user.dosage,
          refills: user.refills,
        }),
      });
      const text = await response;
      const x = await text.text();
      setQR(x);
    } catch (e) {
      console.log(e);
    }
  };

  if (qr) {
    return (
      <div>
        <p>{user.p_name}</p>
        <p>{user.d_name}</p>
        <p>{user.gender}</p>
        <p>{user.place}</p>
        <p>{user.age}</p>
        <p>{user.weight}</p>
        <p>{user.date}</p>
        <p>{user.dosage}</p>
        <p>{user.dosage}</p>
        <p>{qr}</p>
      </div>
    );
  } else {
    return (
      <div>
        <Header />
        {/*<section className={styles.glasscontainer}></section>*/}
        <div className={styles.preform}>
          <form
            className={styles.contact_form}
            id={styles.contact_form_pre}
            onSubmit={handleSubmit}
          >
            <div className={styles.input_field}>
              <label
                htmlFor="p_name"
                className={styles.label}
                style={{ display: "block", marginBottom: "8px" }}
              >
                Name
                <input
                  type="text"
                  name="p_name"
                  id="p_name"
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
                <input
                  type="text"
                  name="d_name"
                  id="d_name"
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
                <input
                  type="text"
                  name="gender"
                  id="gender"
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
                <input
                  type="text"
                  name="place"
                  id="place"
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
                <input
                  type="number"
                  name="age"
                  id="age"
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
                <input
                  type="number"
                  name="weight"
                  id="weight"
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
                <textarea
                  name="dosage"
                  id="dosage"
                  rows={5}
                  placeholder="Enter Medicine Name, Quantity, Notes"
                  className={mulish.className}
                  value={user.dosage}
                  onChange={handleChange}
                  required
                />
              </label>
            </div>

            <div className={styles.input_field}>
              <label htmlFor="refills" className={styles.label}>
                <input
                  type="number"
                  name="refills"
                  id="refills"
                  placeholder="Enter number of refills"
                  className={mulish.className}
                  value={user.refills}
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
        </div>
      </div>
    );
  }
};

export default Preform;
