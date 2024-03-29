"use client";
import styles from "@/app/styles/contact.module.css";
import { Mulish } from "next/font/google";
import { useState } from "react";
import Header from "@/app/components/Header";
import Spline from "@splinetool/react-spline";
import Herosection from "./herosection";

const mulish = Mulish({
  weight: ["300", "400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
  display: "swap",
});

document.addEventListener("DOMContentLoaded", function () {
  const button = document.getElementById("processButton");
  button.addEventListener("click", processData);
});

function processData() {
  // Get the textarea value
  const textareaValue = document.getElementById("myTextarea").value;

  // Split data based on new lines
  const linesArray = textareaValue.split("\n");

  // Process each line
  const resultArrays = linesArray.map(function (line) {
    // Split values within each line based on commas
    return line.split(",");
  });

  // Display the result or do something with it
  console.log(resultArrays);

  // If you want to access individual values
  const firstLineFirstValue = resultArrays[0][0];
  console.log("First line, first value:", firstLineFirstValue);
}

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
      let x = await response;
      x = await response.text();
      setQR(x);
    } catch (e) {
      console.log(e);
    }
  };
  if (qr) {
    return (
        <div className={styles.newpage}>
          <Herosection title={user.p_name}/>
          <div className={styles.newpage_row1}>
            <p className={styles.para}>{qr}</p> 
            <div className={styles.newpage_col1}>
              <p className={styles.para_1}>{user.p_name}</p>
              <p className={styles.para_2}>{user.d_name}</p>
              <p className={styles.para_3}>{user.gender}</p>
              <p className={styles.para_4}>{user.date}</p>
              <p className={styles.para_5}>{user.weight}</p>
            </div>
          </div>
          <p className={styles.para_6}>{user.dosage}</p>
          
          <p className={styles.para_7}>{user.place}</p>
          <p className={styles.para_8}>{user.refills}</p>
          
          
        </div>
    );
  } else {
    return (
        <div>
          <Header />
          <h1 className={styles.pres_head}>Prescription Form</h1>
          <div className={styles.sidebyside}>
            <div className={styles.spline_comp}>
              <Spline scene="https://prod.spline.design/pmEyvZDSG9tzX92z/scene.splinecode" />
              {/*<Spline scene="https://my.spline.design/dnaparticles-13aa542aa1a6c2e1c348a22e3d4f06a7/" />*/}
              {/*<Image src={imageUrl} alt="image" height={100} width={500}/>*/}
            </div>
            <div className={styles.preform}>
              <form
                  className={styles.contact_form}
                  id={styles.contact_form_pre}
                  onSubmit={handleSubmit}
              >
                <div className={styles.input_field}>
                  <label htmlFor="p_name" className={styles.label}>
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
                <div className={styles.input_1}>
                  <div className={styles.input_field}>
                    <label
                        htmlFor="age"
                        className={styles.label_2}
                        id={styles.input_2}
                    >
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
                    <label htmlFor="weight" className={styles.label_3}>
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
                </div>
                <div className={styles.input_field}>
                  <label htmlFor="gender" className={styles.label_4}>
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
                <div className={styles.input_1}>
                  <div className={styles.input_field}>
                    <label htmlFor="place" className={styles.label_5}>
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
                    <label htmlFor="date" className={styles.label_6}>
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
                </div>
                <div className={styles.input_field}>
                  <label htmlFor="dosage" className={styles.label_7}>
                  <textarea
                      name="dosage"
                      id="dosage"
                      rows={5}
                      placeholder="Enter Medicine Name, Quantity, Dosage, Notes"
                      className={mulish.className}
                      value={user.dosage}
                      onChange={handleChange}
                      required
                  />
                  </label>
                </div>

                <div className={styles.input_field}>
                  <label htmlFor="refills" className={styles.label_8}>
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
                <div className={styles.input_field}>
                  <label htmlFor="d_name" className={styles.label_9}>
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

                <div>
                  <button
                      type="submit"
                      id="processData()"
                      className={mulish.className}
                  >
                    Send message
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
    );
  }
};

export default Preform;
